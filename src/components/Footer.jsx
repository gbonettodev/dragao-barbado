import React from "react";

function Footer() {
  return (
    <footer className="border-t border-[#3A2920] bg-gradient-to-br from-[#0D0D0D] to-[#211611] text-[#CCCCCC]">

      <div className="mx-auto grid w-[92%] max-w-7xl grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

        {/* MARCA */}

        <div className="flex items-start gap-4">
          <div
            className="
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              border-2
              border-[#D6B892]
              text-lg
              font-black
              text-[#D6B892]
            "
          >
            DB
          </div>

          <div>
            <h3 className="mb-2 text-lg font-extrabold tracking-[0.15em] text-[#F5F2ED]">
              DRAGÃO BARBADO
            </h3>

            <p className="text-sm leading-relaxed text-[#999999]">
              Estilo, tradição e personalidade.
            </p>
          </div>
        </div>

        {/* NAVEGAÇÃO */}

        <div className="flex flex-col gap-2">
          <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-[#D6B892]">
            Navegação
          </h4>

          <a
            href="/"
            className="text-sm text-[#999] transition-colors hover:text-[#D6B892]"
          >
            Início
          </a>

          <a
            href="/sobre"
            className="text-sm text-[#999] transition-colors hover:text-[#D6B892]"
          >
            Sobre
          </a>

          <a
            href="/produtos"
            className="text-sm text-[#999] transition-colors hover:text-[#D6B892]"
          >
            Produtos
          </a>

          <a
            href="/faq"
            className="text-sm text-[#999] transition-colors hover:text-[#D6B892]"
          >
            FAQ
          </a>

          <a
            href="/contato"
            onClick={(event) => {
              if (window.location.pathname === "/") {
                event.preventDefault();
                const target = document.getElementById("contato");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }
            }}
            className="text-sm text-[#999] transition-colors hover:text-[#D6B892]"
          >
            Contato
          </a>
        </div>

        {/* HORÁRIO */}

        <div className="flex flex-col gap-2">
          <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-[#D6B892]">
            Atendimento
          </h4>

          <p className="text-sm text-[#999]">
            Segunda a sexta
          </p>

          <p className="text-sm text-[#F5F2ED]">
            09:00 às 20:00
          </p>

          <p className="mt-2 text-sm text-[#999]">
            Sábado
          </p>

          <p className="text-sm text-[#F5F2ED]">
            09:00 às 18:00
          </p>
        </div>

        {/* CONTATO */}

        <div className="flex flex-col gap-2">
          <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-[#D6B892]">
            Contato
          </h4>

          <a
            href="tel:+5511999999999"
            className="text-sm text-[#999] transition-colors hover:text-[#D6B892]"
          >
            (11) 99999-9999
          </a>

          <a
            href="mailto:contato@dragaobarbado.com"
            className="text-sm text-[#999] transition-colors hover:text-[#D6B892]"
          >
            contato@dragaobarbado.com
          </a>

          <p className="text-sm text-[#999]">
            Sua cidade - SP
          </p>
        </div>
      </div>

      {/* PARTE INFERIOR */}

      <div className="mx-auto flex w-[92%] max-w-7xl flex-col justify-between gap-3 border-t border-white/10 py-5 text-xs text-[#777] sm:flex-row">
        <p>
          © {new Date().getFullYear()} Dragão Barbado. Todos os direitos reservados.
        </p>

        <p>
          Feito com estilo.
        </p>
      </div>
    </footer>
  );
}

export default Footer;