import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse,
} from "mdb-react-ui-kit";



export default function Header() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <>
  
    <MDBNavbar expand="lg" light bgColor='light' style={{position:'sticky',top:'0',zIndex:'1'}}>
   
      <MDBContainer fluid>
        <MDBNavbarBrand href="#" style={{fontWeight:'bolder',fontFamily:'cursive',color:'darkcyan',fontSize:'1.2rem'}}>LUXURY HOTEL</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 ">
            <MDBNavbarItem >
              <MDBNavbarLink aria-current="page" href="#"  >
                HOME
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#action2">DISCOVER</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#action1">FACILITIES</MDBNavbarLink>
            </MDBNavbarItem> <MDBNavbarItem>
              <MDBNavbarLink href="#action3">CONTACT</MDBNavbarLink>
            </MDBNavbarItem>
           
           
          </MDBNavbarNav>

          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Type query"
              aria-label="Search"
              
            />
            <MDBBtn onClick={(e)=>{
              e.preventDefault();
            }} color="primary">Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  
   
    </>
  );
}
