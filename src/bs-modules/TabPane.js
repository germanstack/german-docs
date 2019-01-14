import React, { Component } from 'react'
import { Link } from "react-router-dom";

class TabPaneLink extends Component {

    constructor(props){
        super(props);

        this.state = {
            show : false,
            active: false
        }
    }

    componentDidMount = () => {
      let hash = window.location.href.split('#');

      console.log(hash[1]);
      let toMap = hash[1];

      document.querySelector(`#${toMap}`).classList('show active')
    }
    

  render() {
    return (
      <Link to={this.props.link}>
        {this.props.title}
      </Link>
    )
  }
}




export {TabPaneLink}