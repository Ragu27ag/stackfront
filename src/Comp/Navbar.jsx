import { BorderLeft } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';





const Navbar = () => {
    return (
        <>

            <Box
                sx={{
                    width: 224,
                    borderRight: '2px solid black',
                    bgcolor: 'background.paper',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],

                    },
                }}
                height={'100vh'}

            >
                <Box sx={{ width: 224, maxWidth: 360, bgcolor: 'background.paper',marginTop:10}}>
                    <nav aria-label="main mailbox folders">
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Questions" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <DraftsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Company" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>
                </Box>

            </Box>
        </>
    )

}


export default Navbar;