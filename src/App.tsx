import { useState } from 'react';
import './App.css';
import { Button } from '@/components/ui/button';
import Layout from './layout';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <div className="App">
        <header className="App-header">
          <h1>Figma Context MCP Practice</h1>
          <p>Welcome to your React + Vite + TypeScript + Biome.js project!</p>
          <div className="card">
            <Button
              variant="outline"
              onClick={() => setCount((count) => count + 1)}
            >
              Count is {count}
            </Button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </header>
      </div>
    </Layout>
  );
}

export default App;
