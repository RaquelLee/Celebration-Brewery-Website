import React from "react";
import "./style.css";
//Cannot find module: '@material-ui/core/grid'. Make sure this package is installed.
//npm ERR! Could not install from "@material-ui/core/grid" as it does not contain a package.json file.

import { Grid } from '@material-ui/core';
// import Container from 'react-bootstrap/Container';

import Image from 'react-bootstrap/Image';
import { Container } from '@material-ui/core';
import Row from 'react-bootstrap/Row';
import { makeStyles } from "@material-ui/core/styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Icon } from '@iconify/react';
//, InlineIcon removed after Icon- waning no unused vars
// import untappdIcon from '@iconify-icons/simple-icons/untappd';
// import ResponsiveImgMaterialUi from "responsive-img-material-ui";
import Logo from "../../assets/Celebration_Logo2.png";

const useStyles = makeStyles({
    icons: {
        marginRight: "25px",
        marginLeft: "25px",
        color: "black",
        '&:hover': {
            color: "#c89019",
        }
    },
    beerIcon: {
        fontSize: "30px",
        marginRight: "25px",
        marginLeft: "25px",
        color: "black",
        '&:hover': {
            color: "#c89019",
        }
    },
    bodyColor: {
        backgroundColor: "#f4f0e9",
    },
    image: {
        height: "800px",
        // width: "1000px",
        width: "100%",
        paddingTop: "100px",
    }
})

function Jumbotron() {
    const styles = useStyles();
    return (
        <Grid>
        <div className={styles.bodyColor}>
            <Container fluid>
                <Row className="justify-content-md-center">
                    <div className={styles.image}>
                        <Image src={Logo} alt="Celebration Brewing Logo" fluid />
                    </div>
                </Row>

                <Grid container="true" justify="center">
                <a href="https://untappd.com/CelebrationBrewing" rel="noopener noreferrer" target="_blank" className={styles.beerIcon}><Icon /></a>

                    <a href="https://www.instagram.com/celebrationbrewing/" rel="noopener noreferrer" target="_blank" className={styles.icons}><InstagramIcon fontSize="large" /></a>
                    <a href="https://www.facebook.com/CelebrationBrewing" rel="noopener noreferrer" target="_blank" className={styles.icons}><FacebookIcon fontSize="large" /></a>
                    <a href="https://twitter.com/CelebrationBrew" rel="noopener noreferrer" target="_blank" className={styles.icons}><TwitterIcon fontSize="large" /></a>
                </Grid>
            </Container>


            {/* <div className="justify-content-md-center">
        <a href="https://untappd.com/CelebrationBrewing" rel="noopener noreferrer" target="_blank" className={styles.beerIcon}><Icon /></a>
        <a href="https://www.instagram.com/celebrationbrewing/" rel="noopener noreferrer" target="_blank" className={styles.icons}><InstagramIcon fontSize="large"/></a>
        <a href="https://www.facebook.com/CelebrationBrewing" rel="noopener noreferrer" target="_blank" className={styles.icons}><FacebookIcon fontSize="large"/></a>
        <a href="https://twitter.com/CelebrationBrew" rel="noopener noreferrer" target="_blank" className={styles.icons}><TwitterIcon fontSize="large"/></a>
    </div> */}
        </div>
        </Grid>

    );
}

export default Jumbotron;