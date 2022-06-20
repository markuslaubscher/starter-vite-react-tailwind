import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
        <div class="flex flex-wrap text-center">
          <div class="p-4 sm:w-1/4 w-full">
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
          </div>
          <div class="p-4 sm:w-1/4 w-full">
            <a
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite
            </a>
          </div>
          <div class="p-4 sm:w-1/4 w-full">
            <a
              href="https://tailwindcss.com/docs/installation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
