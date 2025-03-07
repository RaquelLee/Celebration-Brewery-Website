import React from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography, Container } from '@material-ui/core';
import Logo from "../../assets/Celebration_Logo.png";
import BeerCan1 from "../../assets/beer-can1.jpg";
import BeerCan2 from "../../assets/beer-can2.jpg";
import BeerCan3 from "../../assets/beer-can3.jpg";
import BeerCan4 from "../../assets/beer-can4.jpg";
import Image from 'react-bootstrap/Image';
import Footer from '../../components/Footer/';
import Copyright from '../../components/Copyright/';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

import MailchimpForm from '../Mailchimp/';
// import MailchimpSubscribe from '../MailchimpSubscribe';

function pxToRem(value) {
    return `${value / 16}rem`;
}

const breakpoints = createBreakpoints({});

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            textAlign: "center",
        },
    },
    titleStyle: {
        backgroundColor: "black",
        color: "#c89019",
        textAlign: "center",
        marginTop: "50px",
        marginBottom: "10px",
        paddingTop: "3%",
        fontFamily: "Barlow",
        fontWeight: 400,
        fontSize: pxToRem(52),
        [breakpoints.up("md")]: {
            fontSize: pxToRem(64)
        }
    },
    image: {
        height: "25%",
        width: "25%",
        paddingTop: "4%",
    },
    beerImage: {
        height: "100%",
        width: "100%",
        padding: "2%",
        marginBottom: "2%"
    },
    button: {
        fontFamily: "Barlow",
        fontSize: "18px",
        color: "white",
        backgroundColor: "#c89019",
        marginBottom: "40px",
        "&:hover": {
            backgroundColor: "#f4eee3",
            color: "black"
        },
    },
    beerTitle: {
        fontSize: pxToRem(42),
        [breakpoints.up("md")]: {
            fontSize: pxToRem(64)
        },
        color: "#c89019",
        textAlign: "center",
        padding: "3%",
        fontFamily: "Barlow",
    },
}));

function HomePageAbout() {
    const styles = useStyles();
    return (
        <Grid fluid="true" style={{ backgroundColor: "#f4eee3" }}>
            <Container style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                <Image className={styles.image} src={Logo} alt="Celebration Brewing Logo" fluid="true" />
            </Container>
            <Container style={{ backgroundColor: "black", marginTop: "5%", display: "fluid" }}>
                <Typography fade="true" className={styles.titleStyle} component="h3" variant="h3">
                    CELEBRATION'S FAVORITE BREWERY
                </Typography>
                <Typography className="fade-in-text" component="p" variant="inherit">
                    Since 2021, Celebration Brewing Company has been committed to producing authentic and unique beers that push the boundaries of regular brewing styles and categories. We’re proud to serve our customers with only the best, continually crafting each taste until it’s exactly right.
                <br />
                    <br />
                Celebration Brewing is a family-owned brewery, taproom, and kitchen located in beautiful Celebration, Florida. We focus on using only the best ingredients and delivering the utmost quality to our customers.
                <br />
                    <br />
                Everyday, we’re driven by our core values: delivering quality flavors, honoring our customers and celebrating the culture of beer. Experience it for yourself by joining us for a brewery tour, a special event or just to try what’s on tap.
                </Typography>
                <Grid container direction="row" spacing={1} style={{ width: "100%", alignItems: "center", marginTop: "40px" }} justify="center">
                    <Button className={styles.button} variant="outlined" href="/visit"> Visit Us </Button>
                </Grid>
            </Container>
            <Container style={{ marginTop: "3%", textAlign: "center", padding: "2%" }}>
                <Typography style={{ marginTop: "1%", marginBottom: "1%", fontFamily: "Barlow" }} component="h4" variant="h4">
                    BREAKING GROUND <span style={{ color: "#c89019" }}> | </span> SUMMER 2021
                    </Typography>
                <div style={{ justify: "center", justifyContent: "center", alignItems: "center", display: "flex" }}>
                    <hr style={{ width: "50%", height: "3px", color: "#c89019", opacity: 0.7 }} />
                </div>
                <Typography style={{ marginTop: "1%", fontFamily: "Barlow" }} component="h4" variant="h4">
                    OPENING <span style={{ color: "#c89019" }}> | </span> WINTER 2022
                    </Typography>
            </Container>
            <Container style={{ backgroundColor: "black", marginTop: "5%", display: "fluid" }}>
                <Typography className={styles.beerTitle} component="h3" variant="h3">
                    FEATURED BEERS
            </Typography>
                <Container >
                    <Grid container direction="row" style={{ alignItems: "center", justifyContent: "center", display: "flex", justify: "center" }}>
                        <div className="content_img">
                            <Image className={styles.beerImage} src={BeerCan1} alt="Picture of a can of beer" fluid />
                            <div>Octopuss Ale</div>
                        </div>
                        <div className="content_img">
                            <Image className={styles.beerImage} src={BeerCan2} alt="Picture of a can of beer" fluid />
                            <div>Growers</div>
                        </div>
                        <div className="content_img">
                            <Image className={styles.beerImage} src={BeerCan3} alt="Picture of a can of beer" fluid />
                            <div>Mango Cart</div>
                        </div>
                        <div className="content_img">
                            <Image className={styles.beerImage} src={BeerCan4} alt="Picture of a can of beer" fluid />
                            <div>Tahoma</div>
                        </div>
                    </Grid>
                </Container>
            </Container>
            <MailchimpForm />
            {/* <MailchimpSubscribe /> */}
            <Footer />
            <Copyright />
        </Grid>
    )
};

export default HomePageAbout;