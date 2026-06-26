export default function HomePage() {
  return (
    <>
      {/* ============================================ */}
      {/* SEÇÃO 1: HERO (DESTAQUE) */}
      {/* ============================================ */}
      <section className="hero-gradient pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 text-center">
          {/* Badge */}
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm mb-6">
            🚀 Produto do Ecossistema Vigorre™
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            Recrutamento com{" "}
            <span className="text-primary">Inteligência</span>
          </h1>

          {/* Subtítulo */}
          <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">
            Conectamos talentos e empresas com dados, IA e análise comportamental.
          </p>

          {/* Botão Buscar */}
          <div className="mt-8">
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition font-medium text-lg">
              Buscar Vagas
            </button>
          </div>

          {/* Números */}
          <div className="mt-12 flex justify-center gap-8 flex-wrap">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">20.000+</div>
              <div className="text-sm text-text-secondary">Vagas Ativas</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">4.8 ⭐</div>
              <div className="text-sm text-text-secondary">Avaliação Média</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">85%</div>
              <div className="text-sm text-text-secondary">Match Médio</div>
            </div>
          </div>

          {/* Botões secundários */}
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <button className="border border-border px-6 py-2 rounded-lg hover:bg-primary/10 transition">
              Para Empresas
            </button>
            <button className="border border-border px-6 py-2 rounded-lg hover:bg-primary/10 transition">
              Para Candidatos
            </button>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SEÇÃO 2: DIFERENCIAIS */}
      {/* ============================================ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-bold">
            Por que o <span className="text-primary">Vigorre Hire™</span>?
          </h2>
          <p className="text-center text-text-secondary mt-3">
            Tudo o que você precisa para contratar com inteligência.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-2xl">🧬</div>
              <h3 className="mt-4 text-lg font-semibold">DNA Profissional</h3>
              <p className="mt-2 text-sm text-text-secondary">Análise DISC, Big Five, Inteligência Emocional.</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-2xl">🎯</div>
              <h3 className="mt-4 text-lg font-semibold">Match Inteligente</h3>
              <p className="mt-2 text-sm text-text-secondary">Compatibilidade com Career Match™ Score.</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-2xl">🤖</div>
              <h3 className="mt-4 text-lg font-semibold">IA Recrutadora</h3>
              <p className="mt-2 text-sm text-text-secondary">Triagem e ranking automático de currículos.</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-2xl">🧭</div>
              <h3 className="mt-4 text-lg font-semibold">Career GPS™</h3>
              <p className="mt-2 text-sm text-text-secondary">Recomendações para acelerar sua carreira.</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-2xl">📊</div>
              <h3 className="mt-4 text-lg font-semibold">BI Executivo</h3>
              <p className="mt-2 text-sm text-text-secondary">Dashboards com KPIs, funil e ROI.</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-2xl">🏢</div>
              <h3 className="mt-4 text-lg font-semibold">Consulting Full Cycle</h3>
              <p className="mt-2 text-sm text-text-secondary">Gestão completa com consultores especializados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SEÇÃO 3: ECOSSISTEMA VIGORRE */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-bold">
            🌐 O Ecossistema <span className="text-primary">Vigorre™</span>
          </h2>
          <p className="text-center text-text-secondary mt-3">
            4 produtos integrados para transformar carreiras e negócios.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 border border-border rounded-xl">
              <div className="text-4xl">🧬</div>
              <h3 className="mt-3 font-semibold">Vigorre One™</h3>
              <p className="text-sm text-text-secondary">Inteligência Comportamental</p>
            </div>

            <div className="text-center p-6 border-2 border-primary rounded-xl bg-primary/5">
              <div className="text-4xl">🚀</div>
              <h3 className="mt-3 font-semibold text-primary">Vigorre Hire™</h3>
              <p className="text-sm text-text-secondary">Recrutamento Inteligente</p>
              <span className="inline-block mt-2 bg-primary text-white text-xs px-3 py-1 rounded-full">Atual</span>
            </div>

            <div className="text-center p-6 border border-border rounded-xl">
              <div className="text-4xl">🎨</div>
              <h3 className="mt-3 font-semibold">Vigorre Designer™</h3>
              <p className="text-sm text-text-secondary">Criação Digital</p>
            </div>

            <div className="text-center p-6 border border-border rounded-xl">
              <div className="text-4xl">🎓</div>
              <h3 className="mt-3 font-semibold">Instituto Vigorre™</h3>
              <p className="text-sm text-text-secondary">Desenvolvimento Humano</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SEÇÃO 4: RODAPÉ */}
      {/* ============================================ */}
      <footer className="bg-text-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg">Vigorre Hire™</h4>
              <p className="text-sm text-gray-400 mt-2">Recrutamento Inteligente</p>
            </div>
            <div>
              <h5 className="font-semibold">Produtos</h5>
              <ul className="mt-2 space-y-1 text-sm text-gray-400">
                <li>Vigorre One™</li>
                <li>Vigorre Hire™</li>
                <li>Vigorre Designer™</li>
                <li>Instituto Vigorre™</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold">Para Empresas</h5>
              <ul className="mt-2 space-y-1 text-sm text-gray-400">
                <li>Publicar Vagas</li>
                <li>ATS Inteligente</li>
                <li>Consulting</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold">Contato</h5>
              <ul className="mt-2 space-y-1 text-sm text-gray-400">
                <li>📧 contato@vigorre.com</li>
                <li>📱 (11) 99999-9999</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2026 Vigorre™. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </>
  );
}
