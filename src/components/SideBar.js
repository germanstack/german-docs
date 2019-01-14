import React, { Component } from 'react'
import { SideBar, SideBarButton, NavItem, DropDownItem, NavItemDD } from "../bs-modules/NavBar"

export default class AppSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      icon: "fa-expand",
    }
    this.handleCollapse = this.handleCollapse.bind(this);
  }

  handleCollapse(e) {
    const collapse = this.state.collapse;
    if (collapse) {
      this.setState({ 
        collapse: false,
        icon : "fa-expand"
      })
      console.log(collapse);

    } else {
      this.setState({ 
        collapse: true,
        icon : "fa-expand-arrows-alt"
       })
      console.log(this.state);
    }
  }


  renderItems({ node, onClick }, match) {
    const appendArr = []
     node.edges.forEach(item => {
      if (item.node.frontmatter.topic === match) {
        appendArr.push({
          slug : item.node.fields.slug,
          title : item.node.frontmatter.title
        })   
      }})
    return appendArr.map((item, index) =>  (
        <DropDownItem key={index} title={item.title} link={item.slug} onClick={onClick} />
    ));
  }

  render() {
    const showing = this.state.collapse
    return (
      <div>
        <SideBar showing={showing}>
          <aside className="sidebar-wrapper">
            <ul className="sidebar">
              <h4 className="ger">GERMANSTACK DOCS</h4>
              <NavItem title="Overview" link="/" className="sidebar-item navbar-item no-decoration" />
              <NavItemDD title="Node.js" dropdown="sidebar-item navbar-item dropdown justify-content-center" menuStyle="menu">
                {this.renderItems(this.props, "Node.js")}
              </NavItemDD>
              <NavItemDD title="Express" dropdown="sidebar-item navbar-item dropdown justify-content-center" menuStyle="menu">
                {this.renderItems(this.props, "Express")}
              </NavItemDD>
              <NavItemDD title="MongoDB" dropdown="sidebar-item navbar-item dropdown justify-content-center" menuStyle="menu">
                {this.renderItems(this.props, "MongoDB")}
              </NavItemDD>
              <NavItemDD title="React.js" dropdown="sidebar-item navbar-item dropdown justify-content-center" menuStyle="menu">
                {this.renderItems(this.props, "React.js")}
              </NavItemDD>
              <NavItemDD title="GraphQL" dropdown="sidebar-item navbar-item dropdown justify-content-center" menuStyle="menu">
                {this.renderItems(this.props, "GraphQL")}
              </NavItemDD>
              <NavItemDD title="Apollo" dropdown="sidebar-item navbar-item dropdown justify-content-center" menuStyle="menu">
                {this.renderItems(this.props, "Apollo")}
              </NavItemDD>
              <NavItemDD title="How To(s)" dropdown="sidebar-item navbar-item dropdown justify-content-center" menuStyle="menu">
                {this.renderItems(this.props, "How To(s)")}
              </NavItemDD>
            </ul>
          </aside>
        </SideBar>
        <SideBarButton onClick={this.handleCollapse} className="navbar-toggler pull-right toggle-side" icon={this.state.icon} />
      </div>
    )
  }
}

