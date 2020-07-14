import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
`

class App extends React.Component {
  
  state = {
    pokeList: [],
    pokeName: '',
  }

  componentDidMount = () => {
    this.pegaPokemons()
  }

  pegaPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151").then(response => {
      this.setState({pokeList: response.data.results})
    }).catch(err => {
      console.log(err.message)
    })
    }

    onChangePokeName = (event) => {
      this.setState({pokeName: event.target.value})
    }
  
  
  render() {
    console.log(this.state.pokeName)
    return (
      <Container>
        <select onChange={this.onChangePokeName}>
          <option value={''}></option>
          
          {this.state.pokeList.map(pokemon => {
            return <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
          })}
        </select>
      </Container>
    )
  }
  
}

export default App;
