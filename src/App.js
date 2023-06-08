import { Link } from 'react-router-dom';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '100px', height: '100vh', fontSize: '5rem', color: 'black' }}>
      <div style={{ background: 'green' }}>
        <Link style={{ textDecoration: 'none', color: 'black' }} to="/desafio-1"> Desafio 1 </Link>
      </div>
      <div style={{ background: 'red', textDecoration: 'none' }}>
        <Link style={{ textDecoration: 'none', color: 'black' }} to="/desafio-2"> Desafio 2 </Link>
      </div>
      <div style={{ background: 'red' }}>
        <Link style={{ textDecoration: 'none', color: 'black' }} to="/desafio-3"> Desafio 3 </Link>
      </div>
    </div>
  );
}

export default App;
