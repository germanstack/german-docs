import React, { Component } from 'react'
import { withPrefix } from "gatsby"
import { Nav, NavBrand, NavUL, NavImage, NavItem } from '../bs-modules/NavBar'


export default class Header extends Component {
    render() {
        return (
            <Nav navClass="navbar navbar-expand-lg fixed navbar-dark bg-default b-shadow">
                <NavBrand url={withPrefix("/img/logo.png")} link="/" />
                <div className="options pull-right">
                    <NavUL>
                        <NavItem link="/" title={this.props.author} className="nav-link sm-hidden" />
                        <NavImage link="/" src={withPrefix(this.props.authorImage)} />
                    </NavUL>
                </div>
            </Nav>
        )
    }
}
