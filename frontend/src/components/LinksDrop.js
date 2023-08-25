import { useState } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinksDrop = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                variant="text"
                color="inherit"
                sx={{fontWeight: 'bold',}}
            >
                MENU
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem><NavLinks to='/'>Inicio</NavLinks></MenuItem>
                <MenuItem><NavLinks to='/servicios'>Servicios</NavLinks></MenuItem>
                <MenuItem><NavLinks to='/contacto'>Contacto</NavLinks></MenuItem>
                <MenuItem><NavLinks to='/faq'>F.A.Q</NavLinks></MenuItem>
                <MenuItem><NavLinks to='/misrep'>Mis Pedidos</NavLinks></MenuItem>
            </Menu>
        </div>
    );
}

const NavLinks = styled(Link)`
    text-decoration: none;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    color: black;
`