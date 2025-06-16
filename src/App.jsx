 import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  const [names, setNames] = useState(['Alice', 'Bob', 'Charlie'])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(0)}>
          Reset Count {count} to (0)
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <input type='text' placeholder='Add a name' onKeyDown={(e) => {
          if (e.key === 'Enter' && e.target.value.trim()) {
            setNames([...names, e.target.value.trim()])
            e.target.value = ''
          }
        }
        } />
        <button onClick={() => setNames([])}>
          Clear Names
        </button>
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
