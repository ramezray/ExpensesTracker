import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { MenuItem } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";

const options = ["Login", "Logout"];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Menu">
            <IconButton
              aria-label="More"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: 200
                }
              }}
            >
              {options.map(option => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleClose}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </IconButton>
          <Typography variant="h6">Expenses Tracker</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// import React, { Component } from "react";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   Container
// } from "reactstrap";

// class AppNavBar extends Component {
//   state = {
//     isOpen: false
//   };
//   toggle = () => {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   };
//   render() {
//     return (
//       <div>
//         <Navbar color="success" dark expand="sm" className="mb-5">
//           <Container>
//             <NavbarBrand href="/">Expenses Tracker</NavbarBrand>
//             <NavbarToggler onClick={this.toggle} />
//             <Collapse isOpen={this.state.isOpen} navbar>
//               <Nav className="ml-auto" navbar>
//                 <NavItem>
//                   <NavLink href="www.ggogle.com">Not Sure Yet</NavLink>
//                 </NavItem>
//               </Nav>
//             </Collapse>
//           </Container>
//         </Navbar>
//       </div>
//     );
//   }
// }

// export default AppNavBar;
