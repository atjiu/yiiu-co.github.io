import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      desc: this.props.desc,
      online_url: this.props.online_url,
      source_url: this.props.source_url,
    }
  }
  render() { 
    return (
      <div className="item">
        <div className="name">
          {
            this.state.online_url
            ? <a href={this.state.online_url} target="_blank">
                {this.state.name}
              </a>
            : this.state.name
          }
        </div>
        {
          this.state.source_url
          ? <div className="source_url">
              开源地址：
              <a href={this.state.source_url} target="_blank">
                {this.state.source_url}
              </a>
            </div>
          : null
        }
        <div className="desc">简介：{this.state.desc}</div>
      </div>
    );
  }
}
 
export default Item;