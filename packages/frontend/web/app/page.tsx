export default function HomePage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      background: '#F8FAFC',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    }}>
      {/* Logo */}
      <div style={{ 
        background: '#6366F1', 
        color: 'white', 
        padding: '8px 20px', 
        borderRadius: '50px',
        fontSize: '14px',
        marginBottom: '30px'
      }}>
        🚀 Vigorre Hire™
      </div>

      {/* Título */}
      <h1 style={{ 
        fontSize: '48px', 
        fontWeight: 'bold', 
        textAlign: 'center',
        maxWidth: '700px',
        margin: '0 auto'
      }}>
        Recrutamento com{' '}
        <span style={{ color: '#6366F1' }}>Inteligência</span>
      </h1>

      {/* Subtítulo */}
      <p style={{ 
        fontSize: '20px', 
        color: '#64748B', 
        textAlign: 'center',
        maxWidth: '600px',
        marginTop: '16px'
      }}>
        Conectamos talentos e empresas com dados, IA e análise comportamental.
      </p>

      {/* Botão */}
      <button style={{ 
        background: '#6366F1', 
        color: 'white', 
        border: 'none',
        padding: '16px 40px', 
        borderRadius: '12px',
        fontSize: '18px',
        fontWeight: '600',
        cursor: 'pointer',
        marginTop: '32px'
      }}>
        Buscar Vagas
      </button>

      {/* Números */}
      <div style={{ 
        display: 'flex', 
        gap: '60px', 
        marginTop: '48px',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#6366F1' }}>20.000+</div>
          <div style={{ fontSize: '14px', color: '#64748B' }}>Vagas Ativas</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#6366F1' }}>4.8 ⭐</div>
          <div style={{ fontSize: '14px', color: '#64748B' }}>Avaliação Média</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#6366F1' }}>85%</div>
          <div style={{ fontSize: '14px', color: '#64748B' }}>Match Médio</div>
        </div>
      </div>

      {/* Rodapé */}
      <div style={{ 
        marginTop: '60px',
        paddingTop: '30px',
        borderTop: '1px solid #E2E8F0',
        width: '100%',
        maxWidth: '600px',
        textAlign: 'center',
        fontSize: '14px',
        color: '#94A3B8'
      }}>
        © 2026 Vigorre™. Todos os direitos reservados.
      </div>
    </div>
  );
}
