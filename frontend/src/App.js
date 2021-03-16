import Aside from './components/Aside';
import MetaScraper from './components/MetaScraper';
import HomePage from './screens/HomePage';

function App() {
  return (
    <div className='App'>
      <main className='flex flex-row'>
        <HomePage />
        <Aside />
        <MetaScraper />
      </main>
    </div>
  );
}

export default App;
