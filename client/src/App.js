import React from 'react';
import ItemForm from './components/Form'
import Items from './components/Websites'


function App() {

  return (
    <div className="App" style={{ minHeight: '900px' }}>
      <div className="container">
        <div className="filter" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2 className="todos-title">My Favourite Websites</h2><a className="nav-link" href="https://github.com/hiep294/app95-my-favourite-website">Github</a>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <Items />
          </div>
          <div className="col">
            <ItemForm />
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
