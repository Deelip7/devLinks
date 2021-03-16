import HomePage from './screens/HomePage';
import Aside from './components/Aside';

function App() {
  return (
    <div className='App'>
      <main className='flex flex-row'>
        <Aside />
        <HomePage />
      </main>
    </div>
  );
}

export default App;
