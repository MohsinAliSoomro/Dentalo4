import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import { APP_NAME } from '../config';
import { signout, isAuth } from '../actions/auth';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
// import '.././node_modules/nprogress/nprogress.css';
import Search from './blog/Search';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);

  };

  return (
    
    <Nav className="navbar navbar-expand-lg" style={{height: '90px', lineHeight:'90px'}} >
      <Navbar className="navbar navbar-expand-lg" expand="md">
        <Link href="/">
          <NavLink className="navbar-brand" style={{fontSize:'40px'}}><img src="/static/images/logo/logo.png" style={{cursor:'pointer'}}  /></NavLink>
        </Link>
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="navbar navbar-expand-lg"
          style={{marginLeft:'40%'}} navbar>
            <React.Fragment>
              <NavItem >
                <Link href="/">
                  <NavLink>Início</NavLink>
                </Link>
              </NavItem>
            </React.Fragment>

            <React.Fragment>
              <NavItem style={{marginLeft:'5%'}}>
                <Link href="/about">
                  <NavLink>Sobre</NavLink>
                </Link>
              </NavItem>
            </React.Fragment>

            <React.Fragment>
              <NavItem style={{marginLeft:'5%'}}>
                <Link href="/classifieds">
                  <NavLink>Classificados</NavLink>
                </Link>
              </NavItem>
            </React.Fragment>

            <React.Fragment>
              <NavItem style={{marginLeft:'5%'}}>
                <Link href="/blogs">
                  <NavLink>Blog</NavLink>
                </Link>
              </NavItem>
            </React.Fragment>

            <React.Fragment>
              <NavItem style={{marginLeft:'5%'}}>
                <Link href="/services ">
                  <NavLink>Soluções </NavLink>
                </Link>
              </NavItem>
            </React.Fragment>

            <React.Fragment>
              <NavItem>
                <Link href="/contact">
                  <NavLink style={{marginLeft:'5%'}}>Contato 
                </NavLink>
                </Link>
              </NavItem>
              
            </React.Fragment>
            </Nav>
          </Collapse>
            <div style={{ marginLeft:'340px', height:'90px', lineHeight:'90px'}}>
              <Search />
            </div>
      </Navbar>
    </Nav>
  );
};

export default Header;
