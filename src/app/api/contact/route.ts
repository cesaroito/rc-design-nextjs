import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    if (!name || !email || !projectType) {
      return NextResponse.json(
        { message: "Campos obrigatórios faltando" },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: "E-mail inválido" }, { status: 400 });
    }

    const fromEmail = "RC Design <dev@rcdesign.com.br>";
    const toEmail = "dev@rcdesign.com.br";

    // Email interno para a RC Design
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `[RC Design] Novo contato: ${projectTypeLabels[projectType] ?? projectType} — ${name}`,
      html: `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;background:#f8fafb;margin:0;padding:0;">
  <div style="max-width:600px;margin:0 auto;padding:32px 16px;">
    <div style="background:#012C40;border-radius:12px;padding:24px;margin-bottom:24px;">
      <h1 style="color:#fff;font-size:20px;margin:0 0 4px;">Novo contato recebido</h1>
      <p style="color:rgba(255,255,255,0.6);font-size:14px;margin:0;">RC Design · Site institucional</p>
    </div>
    <div style="background:#fff;border:1px solid rgba(0,112,140,0.12);border-radius:12px;padding:24px;margin-bottom:16px;">
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:10px 0;color:rgba(1,44,64,0.5);width:140px;">Nome</td><td style="padding:10px 0;color:#012C40;font-weight:600;">${name}</td></tr>
        <tr style="border-top:1px solid rgba(0,112,140,0.08);"><td style="padding:10px 0;color:rgba(1,44,64,0.5);">E-mail</td><td style="padding:10px 0;"><a href="mailto:${email}" style="color:#00708C;">${email}</a></td></tr>
        ${company ? `<tr style="border-top:1px solid rgba(0,112,140,0.08);"><td style="padding:10px 0;color:rgba(1,44,64,0.5);">Empresa</td><td style="padding:10px 0;color:#012C40;">${company}</td></tr>` : ""}
        <tr style="border-top:1px solid rgba(0,112,140,0.08);"><td style="padding:10px 0;color:rgba(1,44,64,0.5);">Tipo</td><td style="padding:10px 0;color:#012C40;">${projectTypeLabels[projectType] ?? projectType}</td></tr>
        ${budget ? `<tr style="border-top:1px solid rgba(0,112,140,0.08);"><td style="padding:10px 0;color:rgba(1,44,64,0.5);">Investimento</td><td style="padding:10px 0;color:#012C40;">${budgetLabels[budget] ?? budget}</td></tr>` : ""}
        ${message ? `<tr style="border-top:1px solid rgba(0,112,140,0.08);"><td style="padding:10px 0;color:rgba(1,44,64,0.5);">Mensagem</td><td style="padding:10px 0;color:#012C40;white-space:pre-wrap;">${message}</td></tr>` : ""}
      </table>
    </div>
    <div style="text-align:center;padding:16px;">
      <a href="mailto:${email}" style="display:inline-block;background:#00708C;color:#fff;text-decoration:none;padding:12px 24px;border-radius:10px;font-size:14px;font-weight:600;">Responder agora</a>
    </div>
    <p style="text-align:center;font-size:12px;color:rgba(1,44,64,0.4);margin-top:16px;">RC Design · rcdesign.com.br</p>
  </div>
</body>
</html>`,
    });

    // Email de confirmação para o cliente
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "Recebemos seu contato — RC Design",
      html: `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;background:#f8fafb;margin:0;padding:0;">
  <div style="max-width:600px;margin:0 auto;padding:32px 16px;">
    <div style="background:#012C40;border-radius:12px;padding:24px;margin-bottom:24px;text-align:center;">
      <h1 style="color:#fff;font-size:20px;margin:0 0 4px;">Mensagem recebida!</h1>
      <p style="color:rgba(255,255,255,0.6);font-size:14px;margin:0;">RC Design</p>
    </div>
    <div style="background:#fff;border:1px solid rgba(0,112,140,0.12);border-radius:12px;padding:24px;margin-bottom:16px;">
      <p style="color:#012C40;font-size:15px;margin:0 0 12px;">Olá, ${name.split(" ")[0]}!</p>
      <p style="color:rgba(1,44,64,0.7);font-size:14px;line-height:1.7;margin:0 0 12px;">Recebemos seu contato sobre <strong style="color:#012C40;">${projectTypeLabels[projectType] ?? projectType}</strong> e retornaremos em até 4 horas nos dias úteis.</p>
    </div>
    <div style="text-align:center;padding:16px;">
      <a href="https://rcdesign.com.br" style="display:inline-block;background:#00708C;color:#fff;text-decoration:none;padding:12px 24px;border-radius:10px;font-size:14px;font-weight:600;">Visitar o site</a>
    </div>
    <p style="text-align:center;font-size:12px;color:rgba(1,44,64,0.4);margin-top:16px;">RC Design · rcdesign.com.br</p>
  </div>
</body>
</html>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error("[contact] Error:", errorMessage);
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
