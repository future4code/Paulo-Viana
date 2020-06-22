import React from 'react';
import './App.css';
import { Etapa1 } from './components/Etapa1';
import { Etapa2 } from './components/Etapa2';
import { Etapa3 } from './components/Etapa3';
import { Etapa4 } from './components/Etapa4';




class App extends React.Component {
  
  state = {
    etapa: 1,
  }

  irParaProximaEtapa = () => {
      this.setState({etapa: this.state.etapa +1})
  }

  render() {
    const renderizaEtapa = () => {
      switch (this.state.etapa) {
        case 1: 
          return <Etapa1 />;
          break;
        case 2: 
          return <Etapa2 />;
          break;
        case 3: 
          return <Etapa3 />;
          break;
        case 4:
          return <Etapa4 />;
          break;
        default:
          return <p>Seja bem vindo!</p>
      }
    }

  
    
          return (
      <div>
        
        
        <div className="button">
          {renderizaEtapa()}
          <button onClick={this.irParaProximaEtapa}>Próxima etapa</button>
        </div>
      
      </div>
          
          

          
      
      )
  }
}
  
export default App;