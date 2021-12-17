import React, { useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header'; //Done
import SideBar from './Sidebar'; //Done
import Footer from './Footer'; //Done
import FormInput from '../Components/FormInput';
//import CardData from '../Components/CardData';
import Home from '../Components/Home';
import LayoutStyles from "./LayoutStyle"; //Done
import { Route } from 'react-router-dom';

const Base = ({ match }) => {
    const classes = LayoutStyles();
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    }
    return(
        <div className={classes.root}>
            <CssBaseline />
                <Header toggleDrawer={toggleDrawer} open={open} />
                <SideBar toggleDrawer={toggleDrawer} open={open} />
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                        <Route path={`${match.url}/home`} component={Home} />
                        <Route path={`${match.url}/forminput`} component={FormInput} />
                    <Footer />
                </main>
        </div>
    )
}
export default Base;