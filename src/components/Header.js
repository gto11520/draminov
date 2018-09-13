import React from 'react';
import { NavLink, Link } from 'react-router-dom';

// const Header = () => {
//   const width = window.innerWidth;
//   console.log("Width: ", width);
  
// }

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isMobileView: false,
      showMenu: false
    }
  }

  componentWillMount() {
    // window.addEventListener('scroll', () => {
    //   console.log(window.innerWidth)
    // })
    console.log("window innerWidth: ", window.innerWidth)
    if(window.innerWidth < 567) {
      this.setState(() => ({isMobileView : true}))
    }
  }

  toogleMenu = () => {
    this.setState(() => ({showMenu : !this.state.showMenu}))
  }

  closeMenu = () => {
    this.setState(() => ({showMenu : false}))
  }

  render() {
    return (
      <div className="header">
        <div className="d-flex flex-row justify-content-end translate-bar">
          <small>Espanol +325854256</small>
        </div>
        <div className="d-flex flex-row justify-content-between align-items-center navbar">
          <div className="logo">
            <NavLink to='/'><img src="./images/logo.jpg" /></NavLink>
          </div>
          {
            !this.state.isMobileView ? (
              <div>
                <NavLink to='/' activeClassName='selected'>Home</NavLink>
                <NavLink to='/clinic' activeClassName='selected'>The Clinic</NavLink>
                <NavLink to='/doctors' activeClassName='selected'>The Doctors</NavLink>
                <NavLink to='/blogs' activeClassName='selected'>Blogs</NavLink>
                <NavLink to='/contact' activeClassName='selected'>Contact Us</NavLink>
              </div>
            ) : (
              <div>
                <i className="fas fa-bars" onClick={this.toogleMenu}></i>
                {
                  this.state.showMenu && (
                      <div className="mobileMenu">
                        <div className="close-button"><i className="fas fa-times" onClick={this.toogleMenu}></i></div>
                        <div onClick={this.closeMenu}><NavLink to='/' activeClassName='selected'>Home</NavLink></div>
                        <div onClick={this.closeMenu}><NavLink to='/clinic' activeClassName='selected'>The Clinic</NavLink></div>
                        <div onClick={this.closeMenu}><NavLink to='/doctors' activeClassName='selected'>The Doctors</NavLink></div>
                        <div onClick={this.closeMenu}><NavLink to='/blogs' activeClassName='selected'>Blogs</NavLink></div>
                        <div onClick={this.closeMenu}><NavLink to='/contact' activeClassName='selected'>Contact Us</NavLink></div>
                      </div>
                    )
                }
              </div>
            )
          }
        </div>
      </div>
    );
  }
}
export default Header;