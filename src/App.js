import Score from './components/Score';
import Board from './components/Board';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <main>
        <h1>Memory Card Game</h1>
        <Score />
        <Board />
      </main>
      <Footer />
    </div>
  );
}

export default App;
