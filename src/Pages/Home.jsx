import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Card from "../components/Card";
import Title from "../components/Title";
import Section from "../components/Section";

function Home() {
  return (
    <div className="min-h-screen bg-dragon-white text-dragon-black">

      <NavBar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative isolate min-h-[calc(100vh-76px)] overflow-hidden bg-gradient-to-br from-dragon-black via-[#1b120d] to-dragon-brownDark">

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 bg-gradient-to-r from-dragon-black via-dragon-black/80 to-dragon-brownDark/40" />

        <div className="absolute inset-0 bg-gradient-to-t from-dragon-black via-transparent to-dragon-black/30" />

        {/* Imagem da caverna integrada ao hero */}

        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] md:block lg:w-[55%]">

          <div className="absolute inset-y-0 left-0 z-10 w-1/2 bg-gradient-to-r from-dragon-black via-dragon-black/80 to-transparent" />

          <div className="absolute inset-y-[8%] right-[3%] w-[88%] overflow-hidden border border-dragon-beige/30 bg-dragon-brownDark/50 shadow-[-20px_20px_70px_rgba(0,0,0,0.45)] [clip-path:polygon(16%_0,100%_0,100%_100%,0_100%,10%_72%)]">

            <img
              src="/caverna-barbearia.png"
              alt="Interior da Caverna Barbearia"
              className="h-full w-full object-cover object-center opacity-80"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d]/10 via-[#2a1a14]/10 to-[#0d0d0d]/70" />

            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dragon-black/80 to-transparent" />

          </div>

          <div className="absolute right-[8%] top-[14%] h-[72%] w-[76%] border border-dragon-beige/25 opacity-70 [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%,11%_72%)]" />

        </div>

        {/* Conteúdo */}

        <div className="relative z-20 mx-auto flex min-h-[calc(100vh-76px)] w-[92%] max-w-7xl items-center">

          <div className="max-w-2xl py-20 lg:py-28">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-dragon-beige" />

              <span className="text-xs font-bold uppercase tracking-[0.35em] text-dragon-beige">
                Barbearia • Estilo • Tradição
              </span>
            </div>

            <h1 className="text-6xl font-black uppercase leading-[0.88] tracking-tight text-dragon-white sm:text-7xl md:text-8xl lg:text-9xl">

              Dragão

              <span className="mt-3 block text-dragon-beige">
                Barbado
              </span>

            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-stone-300 sm:text-lg">
              Muito mais que uma barbearia.
              Um lugar para cuidar do seu estilo, da sua barba
              e sair com a confiança renovada.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Button
                href="/notfound"
                variant="primary"
              >
                Agendar horário
              </Button>

              <Button
                href="/sobre"
                variant="light"
              >
                Conheça a Dragão
              </Button>

            </div>

            {/* Pequenos destaques */}

            <div className="mt-14 grid max-w-lg grid-cols-3 border-t border-white/10 pt-6">

              <div>
                <strong className="block text-2xl font-black text-dragon-white">
                  +500
                </strong>

                <span className="text-xs uppercase tracking-wider text-stone-400">
                  Clientes
                </span>
              </div>

              <div className="border-l border-white/10 pl-5">
                <strong className="block text-2xl font-black text-dragon-white">
                  5+
                </strong>

                <span className="text-xs uppercase tracking-wider text-stone-400">
                  Anos
                </span>
              </div>

              <div className="border-l border-white/10 pl-5">
                <strong className="block text-2xl font-black text-dragon-white">
                  4.9
                </strong>

                <span className="text-xs uppercase tracking-wider text-stone-400">
                  Avaliação
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Indicador inferior */}

        <div className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 text-center sm:flex">

          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400">
            Explore
          </span>

          <div className="h-10 w-px bg-gradient-to-b from-dragon-beige to-transparent" />

        </div>

      </section>


      {/* =====================================================
          INTRODUÇÃO
      ===================================================== */}

      <Section>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          <div>

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-dragon-brownLight">
              Nossa essência
            </span>

            <h2 className="mt-4 text-4xl font-black leading-tight text-dragon-brownDark sm:text-5xl">
              Seu estilo merece
              <span className="block text-dragon-brown">
                um lugar à altura.
              </span>
            </h2>

            <div className="mt-6 h-1 w-16 bg-gradient-to-r from-dragon-brown to-dragon-beige" />

            <p className="mt-7 leading-relaxed text-stone-600">
              Na Dragão Barbado, acreditamos que uma boa experiência
              começa muito antes do corte terminar. Cada detalhe foi
              pensado para que você possa relaxar, conversar e sair
              daqui se sentindo ainda melhor.
            </p>

            <p className="mt-4 leading-relaxed text-stone-600">
              Trabalhamos com cortes clássicos, estilos modernos,
              barba e cuidados masculinos, sempre buscando respeitar
              a personalidade de cada cliente.
            </p>

            <div className="mt-8">
              <Button
                href="/sobre"
                variant="secondary"
              >
                Nossa história
              </Button>
            </div>

          </div>


          {/* Card visual */}

          <div className="relative">

            <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full border border-dragon-beige/40 bg-dragon-beige/5" />

            <div className="relative overflow-hidden rounded-[24px] border border-dragon-beige/20 bg-gradient-to-br from-[#2b1d17] via-[#120d0b] to-[#090909] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.18)]">

              <div className="relative flex h-[450px] w-full items-end overflow-hidden rounded-[18px] bg-[#1d120f] p-8">

                <img
                  src="/barbeiro-cabelo.png"
                  alt="Cliente sendo atendido na barbearia"
                  className="absolute inset-0 h-full w-full object-cover object-right"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/95 via-[#0d0d0d]/60 to-[#0d0d0d]/10" />

                <div className="absolute inset-0 bg-gradient-to-br from-[#432f25]/35 via-transparent to-[#0d0d0d]/35" />

                <div className="absolute inset-0 z-[1] opacity-60">
                  <div className="absolute left-6 top-8 h-20 w-20 rounded-full border border-dragon-beige/20" />
                  <div className="absolute right-10 top-10 h-32 w-32 rounded-full border border-white/10" />
                  <div className="absolute bottom-12 left-1/3 h-40 w-40 rounded-full border border-dragon-beige/15" />
                  <div className="absolute right-12 bottom-8 h-16 w-16 rounded-full bg-dragon-beige/10 blur-2xl" />
                </div>

                <div className="relative z-10 text-left">

                  <span className="inline-flex rounded-full border border-dragon-beige/25 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-dragon-beige">
                    Dragão Barbado
                  </span>

                  <h3 className="mt-4 text-3xl font-black uppercase leading-tight text-white">
                    Estilo &
                    <span className="mt-2 block text-dragon-beige">
                      tradição
                    </span>
                  </h3>

                  <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-stone-300">
                    <span className="h-px w-8 bg-dragon-beige" />
                    Cortes • Barba • Ambiente
                  </div>

                </div>

              </div>

            </div>

            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-tl-[18px] border-b-2 border-l-2 border-dragon-brownLight" />

          </div>

        </div>

      </Section>


      {/* =====================================================
          SERVIÇOS
      ===================================================== */}

      <Section dark>

        <Title
          light
          subtitle="Escolha o cuidado que combina com você."
        >
          Nossos Serviços
        </Title>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <Card
            title="Corte Masculino"
            description="Corte personalizado, acabamento impecável e estilo pensado para você."
            price="R$ 45,00"
          >
            <div className="mb-5 h-px bg-dragon-beige/20" />

            <ul className="mb-5 space-y-2 text-sm text-stone-400">
              <li>✓ Corte personalizado</li>
              <li>✓ Acabamento</li>
              <li>✓ Finalização</li>
            </ul>
          </Card>


          <Card
            title="Barba"
            description="Modelagem completa para deixar sua barba alinhada e com personalidade."
            price="R$ 35,00"
          >
            <div className="mb-5 h-px bg-dragon-beige/20" />

            <ul className="mb-5 space-y-2 text-sm text-stone-400">
              <li>✓ Modelagem</li>
              <li>✓ Acabamento</li>
              <li>✓ Toalha quente</li>
            </ul>
          </Card>


          <Card
            title="Corte + Barba"
            description="A experiência completa para renovar seu visual da cabeça aos detalhes."
            price="R$ 70,00"
          >
            <div className="mb-5 h-px bg-dragon-beige/20" />

            <ul className="mb-5 space-y-2 text-sm text-stone-400">
              <li>✓ Corte completo</li>
              <li>✓ Barba completa</li>
              <li>✓ Finalização premium</li>
            </ul>
          </Card>

        </div>

        <div className="mt-12 text-center">

          <Button
            href="/produtos"
            variant="light"
          >
            Ver todos os serviços
          </Button>

        </div>

      </Section>


      {/* =====================================================
          EXPERIÊNCIA
      ===================================================== */}

      <section className="bg-dragon-brownDark">

        <div className="mx-auto grid w-full max-w-7xl lg:grid-cols-2">

          <div className="flex min-h-[500px] items-center px-[4%] py-16 lg:px-12">

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-dragon-beige">
                Por que a Dragão?
              </span>

              <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
                Não é apenas
                <span className="block text-dragon-beige">
                  um corte.
                </span>
              </h2>

              <p className="mt-6 max-w-lg leading-relaxed text-stone-300">
                É o momento em que você para, relaxa e deixa nossos
                profissionais cuidarem do seu visual.
              </p>

              <div className="mt-8">
                <Button href="/notfound">
                  Agendar agora
                </Button>
              </div>

            </div>

          </div>


          <div className="grid grid-cols-2">

            <div className="flex min-h-[250px] flex-col justify-center border border-white/10 bg-black/20 p-8">

              

              <h3 className="mt-5 text-xl font-bold text-white">
                Precisão
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-stone-400">
                Cada detalhe do seu corte recebe nossa atenção.
              </p>

            </div>


            <div className="flex min-h-[250px] flex-col justify-center border border-white/10 bg-black/30 p-8">

           

              <h3 className="mt-5 text-xl font-bold text-white">
                Qualidade
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-stone-400">
                Produtos e técnicas pensados para entregar o melhor.
              </p>

            </div>


            <div className="flex min-h-[250px] flex-col justify-center border border-white/10 bg-black/30 p-8">

          

              <h3 className="mt-5 text-xl font-bold text-white">
                Experiência
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-stone-400">
                Um ambiente feito para você se sentir em casa.
              </p>

            </div>


            <div className="flex min-h-[250px] flex-col justify-center border border-white/10 bg-black/20 p-8">

            

              <h3 className="mt-5 text-xl font-bold text-white">
                Personalidade
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-stone-400">
                Seu visual deve representar quem você é.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DEPOIMENTOS
      ===================================================== */}

      <Section>

        <Title
          subtitle="Quem passa pela Dragão Barbado sabe a diferença."
        >
          O que nossos clientes dizem
        </Title>


        <div className="grid gap-6 md:grid-cols-3">

          <div className="border border-stone-200 bg-white p-7 shadow-sm">

            <div className="text-lg tracking-widest text-dragon-brownLight">
              ★★★★★
            </div>

            <p className="mt-5 leading-relaxed text-stone-600">
              "Ambiente muito bom e o atendimento é excelente.
              O corte ficou exatamente como eu queria."
            </p>

            <div className="mt-6 border-t border-stone-200 pt-5">

              <strong className="text-sm font-bold text-dragon-brownDark">
                Lucas Almeida
              </strong>

              <span className="mt-1 block text-xs text-stone-400">
                Cliente
              </span>

            </div>

          </div>


          <div className="border border-stone-200 bg-white p-7 shadow-sm">

            <div className="text-lg tracking-widest text-dragon-brownLight">
              ★★★★★
            </div>

            <p className="mt-5 leading-relaxed text-stone-600">
              "Já testei várias barbearias e finalmente encontrei
              uma que entende exatamente o estilo que gosto."
            </p>

            <div className="mt-6 border-t border-stone-200 pt-5">

              <strong className="text-sm font-bold text-dragon-brownDark">
                Rafael Santos
              </strong>

              <span className="mt-1 block text-xs text-stone-400">
                Cliente
              </span>

            </div>

          </div>


          <div className="border border-stone-200 bg-white p-7 shadow-sm">

            <div className="text-lg tracking-widest text-dragon-brownLight">
              ★★★★★
            </div>

            <p className="mt-5 leading-relaxed text-stone-600">
              "O corte e a barba ficaram muito bons. O ambiente
              também é diferenciado. Com certeza vou voltar."
            </p>

            <div className="mt-6 border-t border-stone-200 pt-5">

              <strong className="text-sm font-bold text-dragon-brownDark">
                Gabriel Costa
              </strong>

              <span className="mt-1 block text-xs text-stone-400">
                Cliente
              </span>

            </div>

          </div>

        </div>

      </Section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-dragon-black">

        <div className="absolute inset-0 bg-gradient-to-r from-dragon-black via-dragon-brownDark to-dragon-black opacity-80" />

        <div className="relative mx-auto flex w-[92%] max-w-5xl flex-col items-center py-24 text-center">

          <span className="text-xs font-bold uppercase tracking-[0.35em] text-dragon-beige">
            Seu próximo visual começa aqui
          </span>

          <h2 className="mt-5 text-4xl font-black uppercase leading-tight text-white sm:text-5xl md:text-6xl">
            Pronto para ficar
            <span className="block text-dragon-beige">
              barbado?
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-stone-400">
            Escolha seu serviço, marque seu horário e venha
            conhecer a experiência Dragão Barbado.
          </p>

          <div className="mt-9">

            <Button href="/notfound">
              Agendar meu horário
            </Button>

          </div>

        </div>

      </section>


      <Footer />

    </div>
  );
}

export default Home;
