import * as React from 'react';
import Link from '@material-ui/core/Link';
import LayoutStyles from './LayoutStyle'
import Typography from '@material-ui/core/Typography';

function Copyright() {
    return(
        <Typography 
            variant="body2"
            color="textSecondary"
            align="center"
        >
            {'Copyright ©'}
            <Link color="inherit" href="https://github.com/Novanna">
                Novannarhz
            </Link>
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const Footer = () => {
    const classes = LayoutStyles();
    return (
        <>
        <footer className={classes.footer}>
            <Typography
                variant="subtitle1"
                align="center"
                color="textSecondary"
                component="p"
            >
                Prodemy Gen 7
            </Typography>
            <Copyright />
        </footer>
        </>
    );
}
export default Footer;