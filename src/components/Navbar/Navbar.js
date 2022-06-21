import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { BiMenu, BiX } from "react-icons/bi";
import { Button } from "../../Globalstyles";
import { useHistory } from "react-router-dom";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MenuIcon,
  Menu,
  MenuItem,
  MenuLink,
  MenuItemBtn,
  MenuLinkBtn,
} from "./Navbar.styles";
import AuthService from "../../services/auth.service";
const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const history = useHistory();

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      // setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      // setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);
  const showButton = () => {
    if (window.innerWidth <= 1000) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  const handleLogout = () => {
    AuthService.logout().then((response) => {
      console.log(response.data);
    });
  };
  window.addEventListener("resize", showButton);

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              {currentUser ? `${currentUser.Fullname}` : "Catering Irfandy"}
            </NavLogo>
            <MenuIcon onClick={handleClick}>
              {click ? <BiX /> : <BiMenu />}
            </MenuIcon>

            <Menu onClick={handleClick} click={click}>
              <MenuItem>
                <MenuLink onClick={closeMenu} to="/">
                  Home
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink onClick={closeMenu} to="/about">
                  About
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink onClick={closeMenu} to="/order-now">
                  Menu
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink onClick={closeMenu} to="/your-cart">
                  Your Cart
                </MenuLink>
              </MenuItem>
              <MenuItemBtn>
                {currentUser ? (
                  <div />
                ) : (
                  <MenuLinkBtn to="/login">
                    <Button primary>Sign In / Sign Up</Button>
                  </MenuLinkBtn>
                )}
                {/* {button ? (
                  <MenuLinkBtn to="/login">
                    <Button primary>Sign Up</Button>
                  </MenuLinkBtn>
                ) : (
                  <MenuLinkBtn to="/order-now">
                    <Button primary bigFont onClick={closeMenu}>
                      Sign Up
                    </Button>
                  </MenuLinkBtn>
                )} */}
              </MenuItemBtn>
              <MenuItemBtn>
                {currentUser ? (
                  <MenuLinkBtn to="/">
                    <Button onClick={handleLogout} primary>
                      Sign Out
                    </Button>
                  </MenuLinkBtn>
                ) : (
                  <div />
                )}
              </MenuItemBtn>
            </Menu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </div>
  );
};

export default Navbar;
