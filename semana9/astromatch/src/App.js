import React from 'react';
import styled from 'styled-components'
import Header from './components/Header';


const AppAll = styled.div`
width: 400px;
height: 600px;
background-color: #edf2f5;
border: 1px solid #afbec7;
border-radius: 10px;
margin: 0 auto;
margin-top: 100px;
`




class App extends React.Component {
  
  state = {
    currentPage: ''
  }

  


  
  render() {
    
    return (
      <AppAll>
        <Header />
      </AppAll>
    );
  }
}

export default App;
