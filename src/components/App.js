import React, { Component } from 'react';
import '../css/App.css';
import Item from './Item';
import items from '../items.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: items
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">朋也项目集合</h1>
        </header>
        <div className="app-body">
          <div className="row">
          {
            this.state.items.map(v => [
              <div className="col-md-3">
                <Item
                  name={v.name}
                  online_url={v.online_url}
                  source_url={v.source_url}
                  desc={v.desc}
                />
              </div>
            ])
          }
          </div>
          <a href="https://github.com/tomoya92/yiiu.co/issues" target="_blank" rel="noopener noreferrer">
            <div className="issue">有问题?</div>
          </a>
        </div>
      </div>
    );
  }
}

export default App;
