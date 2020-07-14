import React from 'react'
import axios from "axios";
import styled from 'styled-components'

const AppContainer = styled.div`
  border: 1px solid black;
  margin: 0 auto;
  border-radius: 20px;
  width: 500px;
  height: 500px;
  display: block;
  text-align: center;
  background-color: #000030;
  color: white;
`



class App extends React.Component {
  
  render() {
    return (
      <div>
        <AppContainer>
          <h3>Escute sua música preferida quando e onde quiser!</h3>
          <button>Adicionar a playlist</button>
        </AppContainer>
        
      </div>
    )

  }
}

export default App

