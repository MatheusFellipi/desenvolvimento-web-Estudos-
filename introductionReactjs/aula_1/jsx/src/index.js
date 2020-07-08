import React from "react"
import ReactDOM from "react-dom"
import "./style.css"

function sum(a,b){
  return a + b
}

function primeiraJXS() {
  return (
    <div>
      Matheus - Introdução ao ReactJS 
    </div>
  )
}

const App = () => {

  return (
    <div className="App">
     {primeiraJXS()}
  <h1>Soma:{sum(10,20)}</h1>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
