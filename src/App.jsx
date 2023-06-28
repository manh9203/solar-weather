import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {

  return (
    <>
    <h1>{props.name}</h1>
    <SolarEventList />
      
    </>
  )
}

export default App
