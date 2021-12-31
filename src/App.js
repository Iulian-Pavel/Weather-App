import React from 'react';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';

class App extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Main />
      </>
    )
  }
}

export default App;
