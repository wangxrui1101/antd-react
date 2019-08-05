import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';

/*import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;*/

class App extends React.Component {
   state = {
    loading: false,
    iconLoading: false,
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };
  render() {
   return( 
  <div>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <br />
        <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
          Click me!
        </Button>
        <Button
          type="primary"
          icon="poweroff"
          loading={this.state.iconLoading}
          onClick={this.enterIconLoading}
        >
          Click me!
        </Button>
        <br />
        <Button shape="circle" loading />
        <Button type="primary" shape="circle" loading />
      </div>
  ); 
}
}

export default App;
