import React from "react"
import ReactDOM from "react-dom"
import "./style.css"


const element = ''; // menor parte da construçao do reactsd
const element2 = <h1>Ola </h1>

function App() {
  return(
  <div>
    {element}
    {element2}
  </div>)
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
