import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
// import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import MuiNextLink from "../MuiNextLink";
import Fab from "@mui/material/Fab";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import BackToTop from "../BackToTop";

import Navbar from "./Navbar";
import SideDrawer from "./SideDrawer";
import HideOnScroll from "../HideOnScroll";
import { Typography } from "@mui/material";

// const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const navLinks = [
  { title: `home`, path: `/` },
  { title: `about`, path: `#about` },
  { title: `skills`, path: `#skills` },
  { title: `experience`, path: `#experience` },
  { title: `contact`, path: `/contact` },
];

const Header = () => {
  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" sx={{background: 'transparent', boxShadow: "none"}}>
          <Toolbar>
            <Container
              maxWidth="lg"
              sx={{ display: `flex`, justifyContent: `space-between` }}
            >
              <IconButton edge="start" aria-label="home">
                <MuiNextLink activeClassName="active" href="/" underline="none">
                  {/* <Home
                    sx={{
                      color: (theme) => theme.palette.common.white,
                    }}
                    fontSize="large"
                  /> */}
                  <Typography variant="h4" color={(theme) => theme.palette.common.white}>Kevin Bui</Typography>
                </MuiNextLink>
              </IconButton>
              <Navbar navLinks={navLinks} />
              <SideDrawer navLinks={navLinks} />
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div id="back-to-top-anchor"/>
      <BackToTop>
        <Fab color="secondary" size="large" aria-label="back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};

export default Header;
