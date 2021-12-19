import React, { useState } from "react";
// import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header'; 
import SideBar from './Sidebar'; 
import Footer from './Footer'; 
import FormInput from '../Components/FormInput';
import Home from '../Components/Home';
import LayoutStyles from "./LayoutStyle"; 
import { Route } from 'react-router-dom';

const Base = ({ match }) => {
    //match ini untuk apa ya maksudnya?
    const classes = LayoutStyles();
    //classes ini direct ke cssnya
    //next pelajarin dan coba bikin style dari material ui

    const [open, setOpen] = useState(true);
    //state boolean untuk navBarnya

    const toggleDrawer = () => {
        setOpen(!open);
    }
    return(
        <div className={classes.root}>
            {/* <CssBaseline /> */}
            {/* CssBaseline sebenernya buat apa? kok di comment gak ngaruh apa2? */}
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