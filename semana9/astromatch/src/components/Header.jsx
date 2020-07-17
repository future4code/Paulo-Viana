import React from 'react';
import styled from 'styled-components'


const HeaderAll = styled.div`
width: 400px;
height: 50px;
display: flex;
align-items: center;
justify-content: space-around;
margin-top: 15px;
`




class Header extends React.Component {
  
  state = {
    currentPage: ''
  }

  


  
  render() {
    
    return (
      <HeaderAll>
        <h1>astromatch</h1>
        <div>
            <button>Clica</button>
        </div>
      </HeaderAll>
    );
  }
}

export default Header;
