import Aside from './components/Aside';
import MetaScraper from './components/MetaScraper';

function App() {
  return (
    <div className='App'>
      <main className='flex flex-row'>
        <Aside />
        <MetaScraper />
      </main>
    </div>
  );
}

export default App;
