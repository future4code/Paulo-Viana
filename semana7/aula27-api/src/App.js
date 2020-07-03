import React from 'react'
import './App.css'
import axios from "axios";

class App extends React.Component {
  
  state = {
    atividade: {}
  }
  
  componentDidMount = () => {
    this.gerarAtividade()
  }
  
  gerarAtividade = () => {
    axios.get("http://www.boredapi.com/api/activity/").then(resolve => {
      this.setState({atividade: resolve.data})
    }).catch(reject => {
      console.log(reject.message)
    })
  }
  
  
  render() {
    return (
      <div className="App">
        <button onClick={this.gerarAtividade}>Qual atividade fazer?</button>
        <p> <strong>Nome da atividade:</strong> {this.state.atividade.activity} </p>
        <p><strong>Tipo da atividade:</strong> {this.state.atividade.type} </p>
        <p><strong>Número de participantes:</strong> {this.state.atividade.participants} </p>
        <p><strong>Preço:</strong> {this.state.atividade.price} </p>
      </div>
    )

  }
}

export default App