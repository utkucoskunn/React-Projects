import {AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography} from "@mui/material";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import {useState} from "react";


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({theme}) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled(Box)(({theme}) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));

const UserBox = styled(Box)(({theme}) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));

const Navbar = () => {

    const [open,setOpen]=useState(false);

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{display: {xs: "none", sm: "block"}}}>Social With</Typography>
                <Diversity3Icon sx={{display: {xs: "block", sm: "none"}}}/>
                <Search><InputBase placeholder="search..."/></Search>
                <Icons>
                    <Badge badgeContent={2} color="error">
                        <MarkEmailUnreadIcon/>
                    </Badge>
                    <Badge badgeContent={1} color="error">
                        <NotificationsActiveIcon/>
                    </Badge>
                </Icons>
                <UserBox onClick={(e) => setOpen(true)}>
                    <Avatar
                        sx={{width: 30, height: 30}}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/256px-Elon_Musk_Royal_Society_%28crop2%29.jpg"/>
                    <Typography variant="span">Elon Musk</Typography>

                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e=>setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar;