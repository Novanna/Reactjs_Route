import * as React from 'react';
import LayoutStyles from './LayoutStyle'
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
//import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainList } from './SidebarList';
import { IconButton } from '@material-ui/core';

const Sidebar = ({ open, toggleDrawer }) => {
    const classes = LayoutStyles();
    return(
        <>
        <Drawer
            variant='permanent'
            classes={{
                paper: clsx(classes.drawerPaper,
                    !open && classes.drawerPaperClose
                    )
            }}
            open={open}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>{mainList}</List>
        </Drawer>
        </>
    );
};
export default Sidebar;