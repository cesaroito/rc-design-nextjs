import { type NextRequest, NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({
  region: process.env.SES_REGION ?? "us-east-1",
  credentials: {
    accessKeyId: process.env.SES_ACCESS_KEY_ID!,
    secretAccessKey: process.env.SES_SECRET_ACCESS_KEY!,
  },
});

const projectTypeLabels: Record<string, string> = {
  "projeto-personalizado": "Projeto personalizado",
  "analise-dados": "Análise de dados",
  "painel-cliente": "Painel para clientes",
  "game-corporativo": "Game corporativo",
  "ia-negocios": "IA para o negócio",
  "produto-pronto": "Produto pronto (SaaS)",
  outro: "Outro",
};

const budgetLabels: Record<string, string> = {
  "ate-10k": "Até R$ 10.000",
  "10k-30k": "R$ 10.000 – R$ 30.000",
  "30k-100k": "R$ 30.000 – R$ 100.000",
  "acima-100k": "Acima de R$ 100.000",
  "nao-definido": "Ainda não definido",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, projectType, budget, message } = body;

    // Validação básica
    if (!name || !email || !projectType) {
      return NextResponse.json(
        { message: "Campos obrigatórios faltando" },
        { status: 400 },
      );
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: "E-mail inválido" }, { status: 400 });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL!;
    const fromEmail = process.env.CONTACT_FROM_EMAIL!;

    // Email para a RC Design
    const internalEmail = new SendEmailCommand({
      Source: fromEmail,
      Destination: { ToAddresses: [toEmail] },
      Message: {
        Subject: {
          Data: `[RC Design] Novo contato: ${projectTypeLabels[projectType] ?? projectType} — ${name}`,
          Charset: "UTF-8",
        },
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="font-family: 'DM Sans', Arial, sans-serif; background: #f8fafb; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 0 auto; padding: 32px 16px;">
    <div style="background: #012C40; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
      <h1 style="color: #fff; font-size: 20px; margin: 0 0 4px;">Novo contato recebido</h1>
      <p style="color: rgba(255,255,255,0.6); font-size: 14px; margin: 0;">RC Design · Site institucional</p>
    </div>
    <div style="background: #fff; border: 1px solid rgba(0,112,140,0.12); border-radius: 12px; padding: 24px; margin-bottom: 16px;">
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr><td style="padding: 10px 0; color: rgba(1,44,64,0.5); width: 140px; vertical-align: top;">Nome</td><td style="padding: 10px 0; color: #012C40; font-weight: 600;">${name}</td></tr>
        <tr style="border-top: 1px solid rgba(0,112,140,0.08);"><td style="padding: 10px 0; color: rgba(1,44,64,0.5); vertical-align: top;">E-mail</td><td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #00708C;">${email}</a></td></tr>
        ${company ? `<tr style="border-top: 1px solid rgba(0,112,140,0.08);"><td style="padding: 10px 0; color: rgba(1,44,64,0.5); vertical-align: top;">Empresa</td><td style="padding: 10px 0; color: #012C40;">${company}</td></tr>` : ""}
        <tr style="border-top: 1px solid rgba(0,112,140,0.08);"><td style="padding: 10px 0; color: rgba(1,44,64,0.5); vertical-align: top;">Tipo de projeto</td><td style="padding: 10px 0; color: #012C40;">${projectTypeLabels[projectType] ?? projectType}</td></tr>
        ${budget ? `<tr style="border-top: 1px solid rgba(0,112,140,0.08);"><td style="padding: 10px 0; color: rgba(1,44,64,0.5); vertical-align: top;">Orçamento</td><td style="padding: 10px 0; color: #012C40;">${budgetLabels[budget] ?? budget}</td></tr>` : ""}
        ${message ? `<tr style="border-top: 1px solid rgba(0,112,140,0.08);"><td style="padding: 10px 0; color: rgba(1,44,64,0.5); vertical-align: top;">Mensagem</td><td style="padding: 10px 0; color: #012C40; white-space: pre-wrap;">${message}</td></tr>` : ""}
      </table>
    </div>
  </div>
</body>
</html>
            `,
          },
        },
      },
    });

    // Enviar email interno
    await ses.send(internalEmail);

    // Opcional: Enviar email de confirmação para o usuário
    // const userEmail = new SendEmailCommand({ ... })
    // await ses.send(userEmail)

    return NextResponse.json(
      { message: "Mensagem enviada com sucesso" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor. Tente novamente." },
      { status: 500 },
    );
  }
}
