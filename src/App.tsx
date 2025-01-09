import Header from './components/Header'; // Importa o header

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        {/* Aqui ficará o resto do conteúdo */}
        <p>Welcome to the Todo App!</p>
      </main>
    </div>
  );
}

export default App;
