import React, { useState } from 'react';
import 'mind-ar/dist/mindar-image.prod.js';
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';
import './Ar.css';
import MindARViewer from './mindar-viewer';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Paper from "@mui/material/Paper";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";


const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#D1AFFF',
            dark: '#776EB8',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#9C9BA2',
            dark: '#BCB8D6',
            contrastText: '#000',
        },
    },
});

const useStyles = makeStyles({
    love: {
        textAlign: 'center',
        color: theme.palette.primary,
        height: 60,
        lineHeight: '60px',
        background: theme.palette.primary
    },
});

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});

function Ar() {
    const [started, setStarted] = useState(false);
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(false);
    const navigate = useNavigate();

    const handleClose = () => {
        setAnchorEl(null);
        sessionStorage.clear();
        navigate(0);

    };

    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <CssBaseline />
                {/* <Paper elevation={3} className={classes.love}>
                    Hola
                </Paper> */}
                {started && (
                    <div className="container">
                        <MindARViewer />
                        <video></video>
                    </div>
                )}
                <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                    <Toolbar>
                        {!started && <StyledFab color="default" aria-label="open drawer" onClick={() => { setStarted(true) }}><FavoriteIcon />
                        </StyledFab>}
                        {started && <StyledFab color="secondary" aria-label="open drawer" onClick={() => { setStarted(false) }}><FavoriteIcon />
                        </StyledFab>}
                        <Box sx={{ flexGrow: 1 }} />
                        <IconButton color="default" aria-label="open drawer" onClick={handleClose}>
                            <LogoutIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        </ThemeProvider>
    );
}

export default Ar;
