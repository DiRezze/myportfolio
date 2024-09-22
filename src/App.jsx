import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectCard from './components/projectCard'
import ProjectList from './components/projectList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Portfólio</h1>
      <ProjectList />
    </>
  )
}

export default App
