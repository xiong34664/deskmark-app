import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,Switch
} from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
import Buttons from './antd/Button'
import Dropdowns from './antd/Dropdown'
import Breadcrumbs from './antd/Breadcrumb'
const { Header, Sider, Content } = Layout;
class App extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Router>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/button">
                <Icon type="user" />
                <span>button</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/dropdown">
                <Icon type="video-camera" />
                <span>dropdown</span>
              </Link>
              
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/breadcrumb">
                <Icon type="upload" />
                <span>nav 3</span>
              </Link>
              
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <Route exact  path="/button"  component={Buttons} />
            <Route exact  path="/dropdown"  component={Dropdowns} />
            <Route exact  path="/breadcrumb"  component={Breadcrumbs} />
          </Content>
        </Layout>
      </Layout>
      </Router>
    );
  }
}

export default App
