import Link from "next/link";

const links = {
  servicos: [
    { href: "/servicos", label: "Projetos personalizados" },
    { href: "/servicos", label: "Análise de dados" },
    { href: "/servicos", label: "Painéis para clientes" },
    { href: "/servicos", label: "Games corporativos" },
    { href: "/servicos", label: "IA para o negócio" },
  ],
  produtos: [
    { href: "/produtos", label: "CuidoDeVocê" },
    { href: "/produtos", label: "ArcadePulse" },
  ],
  empresa: [
    { href: "/sobre", label: "Sobre a RC Design" },
    { href: "/projetos", label: "Cases e portfólio" },
    { href: "/blog", label: "Blog" },
    { href: "/contato", label: "Contato" },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#012C40] text-white">
      {/* Corpo principal */}
      <div className="container-rc py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Coluna brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-[#00708C] to-[#012C40] border border-white/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-xs font-(family-name:--font-plus-jakarta)">
                  RC
                </span>
              </div>
              <span className="font-semibold text-white font-(family-name:--font-plus-jakarta)">
                RC Design
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6 font-(family-name:--font-dm-sans)">
              Tecnologia que escala com o seu negócio. Projetos personalizados,
              IA aplicada e produtos prontos para usar.
            </p>
            <p className="text-xs text-white/40 font-(family-name:--font-dm-sans)">
              São Paulo, Brasil
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4 font-(family-name:--font-dm-sans)">
              Serviços
            </h3>
            <ul className="flex flex-col gap-2.5">
              {links.servicos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors font-(family-name:--font-dm-sans)"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4 font-(family-name:--font-dm-sans)">
              Produtos
            </h3>
            <ul className="flex flex-col gap-2.5">
              {links.produtos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors font-(family-name:--font-dm-sans)"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4 font-(family-name:--font-dm-sans)">
              Empresa
            </h3>
            <ul className="flex flex-col gap-2.5">
              {links.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors font-(family-name:--font-dm-sans)"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="border-t border-white/10">
        <div className="container-rc py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 font-(family-name:--font-dm-sans)">
            © {year} RC Design. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacidade"
              className="text-xs text-white/40 hover:text-white/70 transition-colors font-(family-name:--font-dm-sans)"
            >
              Privacidade
            </Link>
            <Link
              href="/termos"
              className="text-xs text-white/40 hover:text-white/70 transition-colors font-(family-name:--font-dm-sans)"
            >
              Termos de uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
