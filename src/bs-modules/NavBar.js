import React, { Component } from 'react'
import { Link } from "gatsby";

class Nav extends Component {
    render() {
        return (
            <nav className={this.props.navClass}>
                {this.props.children}
            </nav>
        )
    }
}

class NavBrand extends Component {
    render() {
        return (
            <a className="navbar-brand" href={this.props.link}>
                <img
                    src={this.props.url}
                    width={this.props.width}
                    height={this.props.height}
                    className="d-inline-block align-top"
                    alt={this.props.alt} />
                {this.props.title}
            </a>
        )
    }
}

class NavButton extends Component {
    render() {
        return (
            <button className="navbar-toggler" type="button" style={{outline : 0}} onClick={this.props.onClick}>
                <span className="navbar-toggler-icon"></span>
            </button>
        )
    }
}


class Collapse extends Component {
    render() {
        const collapse = this.props.showing;
        if (collapse) {
            return (

                <div className="collapse navbar-collapse justify-content-right" id="navbarSupportedContent">
                    {this.props.children}
                </div>
            )
        }
        return (

            <div className="navbar-collapse justify-content-right" id="navbarSupportedContent">
                {this.props.children}
            </div>
        )



    }
}

class SideBarButton extends Component {
    render() {
        return (
            <button className={this.props.className} type="button" onClick={this.props.onClick}>
                <span><i className={`fas ${this.props.icon}`}></i></span>
            </button>
        )
    }
}

class SideBar extends Component {
    render() {
        const collapse = this.props.showing;
        if (collapse) {
            return (

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    {this.props.children}
                </div>
            )
        }
        return (

            <div className="navbar-collapse" id="navbarSupportedContent">
                {this.props.children}
            </div>
        )



    }
}

class NavUL extends Component {
    render() {
        return (

            <ul className="navbar-nav">
                {this.props.children}
            </ul>

        )
    }
}

class NavItem extends Component {
    render() {
        return (
            <li className="navbar-item" >
                <Link to={this.props.link} className={this.props.className}>
                    <span className="fnt-1">
                        <i className={this.props.icon}></i>
                    </span>
                    {this.props.title}
                </Link>
                {this.props.children}
            </li>
        )
    }
}



class NavItemDD extends Component {

    constructor() {
        super();

        this.state = {
            showMenu: false
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);

    }

    showMenu(e) {
        e.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        })
    }

    closeMenu(e) {
        console.log(this.dropdownMenu)

        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        })
    }


    render() {
        return (
            <li className={this.props.dropdown} onClick={this.showMenu}>
                {this.props.title}
                {
                    this.state.showMenu
                        ? (
                            <div
                                className={this.props.menuStyle}
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >

                                <ul>
                                    {this.props.children}
                                </ul>
                            </div>
                        )
                        : (
                            null
                        )
                }
            </li>
        )
    }
}


const NavImage = (props) => (
    <li>
        <Link to={props.link}>
            <img src={props.src} alt="author" className="nav-img" />
        </Link>
    </li>
)

const DropDownItem = (props) => {
    return (
        <li>
            <Link to={props.link} onClick={props.onClick}>{props.title}</Link>
        </li>
    )
}


export { NavButton, Nav, Collapse, NavBrand, NavItem, NavUL, DropDownItem, NavItemDD, SideBar, NavImage, SideBarButton }