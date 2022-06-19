import * as React from "react";
import { createTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Drawer } from "@mui/material";

const theme = createTheme();
const styles = {
  navBar: { top: AppBar.height },
  toolbarDiv: { ...theme.mixins.toolbar },
};

const pages = [
  { href: "/", texto: "Inicio" },
  { href: "/eventos", texto: "Eventos" },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const listDrawer = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {pages.map((page) => (
          <ListItem key={page.texto} disablePadding>
            <ListItemButton href={page.href}>
              <ListItemText primary={page.texto} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="desktop">
          <Toolbar disableGutters>
            <AdbIcon
              sx={{ display: { mobile: "none", laptop: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { mobile: "none", laptop: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              OnlyFest
            </Typography>

            <Box
              sx={{ flexGrow: 1, display: { mobile: "flex", laptop: "none" } }}
            >
              {["left"].map((anchor) => (
                <IconButton
                  key={anchor}
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={toggleDrawer(anchor, state.left ? false : true)}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              ))}
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { mobile: "block", laptop: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.texto} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      noWrap
                      component="a"
                      sx={{
                        textDecoration: "none",
                        color: "primary.main",
                      }}
                      href={page.href}
                    >
                      {page.texto.toUpperCase()}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon
              sx={{ display: { mobile: "flex", laptop: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { mobile: "flex", laptop: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              OnlyFest
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { mobile: "none", laptop: "flex" },
                justifyContent: { mobile: "none", laptop: "flex-end" },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.texto}
                  sx={{ my: 2, color: "white", display: "block" }}
                  href={page.href}
                >
                  {page.texto}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0, marginLeft: { mobile: "unset", laptop: "1em" } }}
                >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              <Box sx={{ minHeight: theme.mixins.toolbar }} />
              {listDrawer(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
export default ResponsiveAppBar;
