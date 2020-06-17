import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className={'app-container'}>
          <Post
            nomeUsuario={'Walter White'}
            fotoUsuario={'https://i.pinimg.com/originals/47/da/56/47da56e41f6a2984d102877c580b315d.jpg'}
            fotoPost={'https://i.pinimg.com/originals/47/da/56/47da56e41f6a2984d102877c580b315d.jpg'}
          />
        </div>
        <div className={'app-container'}>
          <Post
            nomeUsuario={'Jesse Pinkman'}
            fotoUsuario={'https://img.r7.com/images/2014/01/14/9ayx92ohg_7heqwsjcga_file.jpg'}
            fotoPost={'https://img.r7.com/images/2014/01/14/9ayx92ohg_7heqwsjcga_file.jpg'}
          />
        </div>
        <div className={'app-container'}>
          <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTN4SCv5ujBJpao0h0UDuYF2iUMcY2B90iIT7VmXxFyaUiVclsJ&usqp=CAU'}
            fotoPost={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTN4SCv5ujBJpao0h0UDuYF2iUMcY2B90iIT7VmXxFyaUiVclsJ&usqp=CAU'}
          />
        </div>
      </div>
    );
  }
}

export default App;
