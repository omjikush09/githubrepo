import React, { Fragment, useContext, useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav, NavItem,NavLink,NavbarText
} from "reactstrap"
import { Link } from "react-router-dom";
import { UserContext } from "../context/usercontext";



const Header =()=>{
    const context =useContext(UserContext);
    const [isOpen,setIsOpen]=useState(false);

    const toggle =()=>setIsOpen(!isOpen);

    return(
        <Navbar color="info"  light expand="md">
            <NavbarBrand><Link to="/" className="text-white">GriciaTech Gitfire App</Link></NavbarBrand>
            <NavbarText className="text-white">{
                context.user?.email ? context.user.email : ""
            }</NavbarText>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen } navbar>
            <Nav className="ms-auto"  navbar>
                {
                    context.user ? (
                        <NavItem>
                    <NavLink onClick={()=>{
                        context.setUser(null)
                    }} className="text-white" >Logout</NavLink>
                </NavItem>
                    ) :(
                        <Fragment>
                            <NavItem>
                <NavLink tag={Link} to="/signup" className="text-white" >Signup</NavLink>

                </NavItem>
                <NavItem>
                <NavLink tag={Link} to="/signin" className="text-white" >Signin</NavLink>

                </NavItem>
                        </Fragment>
                    )
                }
                
                
            </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;