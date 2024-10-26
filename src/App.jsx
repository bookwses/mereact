import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnimatedCursor from 'react-animated-cursor'

import Navdar from './components/Navdar/Navdar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='5, 255, 31'
      outerAlpha={0.2}
      innerScale={1.5}
      outerStyle={{
        border: '3px solid #61fff7'
      }}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
      <Navdar />
      <Hero />
      <Skills/>
    </>
  )
}

export default App
