import { useState } from 'react'
import SolarEventList from "./components/SolarEventList";
import './App.css'
import PropTypes from "prop-types";
function App(props) {

  return (
    <>
    <h1>{props.name}</h1>
    <SolarEventList />
      
    </>
  )
}

export default App
