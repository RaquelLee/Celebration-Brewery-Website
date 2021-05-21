import React from 'react';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Logo from "../assets/Celebration_Logo.png";
import BeerPhoto from "../assets/beer-flight.jpg";
// import BeerGlass from "../assets/beer-glass";
// import beerImage from "../../assets/brewery.jpg";
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
// import { ImageList } from '@material-ui/core';
// import ImageListItem from '@material-ui/core/ImageListItem';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            textAlign: "center",
        },
    },
    titleStyle: {
        // backgroundColor: "white",
        color: "#c89019",
        textAlign: "center",
        postition: "absolute",
        // marginTop: "80px",
        bottom: "80px",
        right: "50px",
    },
    para: {
        textAlign: "center",
        marginTop: "30px",
        paddingRight: "100px",
        paddingLeft: "100px",
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        height: "100%",
        width: "100%",
        // position: "relative",
        // paddingTop: "50px",
    },
    beerImage: {
        height: "350px",

    }
}));

function AboutUs() {
    const styles = useStyles();
    return (
        <div>
            <Grid>
                {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                            srcSet={`${item.img}?w=164&fit=crop&auto=format 1x,
                            ${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy" />
                        </ImageListItem>
                    ))}
                </ImageList> */}
            <div className="justify-content-md-center" style={{position:"relative"}}>
            <h3 className={styles.titleStyle} component="h3" variant="h3">
                About Celebration Brewing
            </h3>
                <div className={styles.image}>
                    {/* <Image src={Logo} alt="Celebration Brewing Logo" fluid /> */}
                    <Image src={BeerPhoto} alt="Celebration Brewing Logo" fluid />
                </div>
            </div>
            
            <Typography className={styles.para} component="p" variant="inherit">
                Since 2021, Celebration Brewing Company has been committed to producing authentic and unique beers that push the boundaries of regular brewing styles and categories. We’re proud to serve our customers with only the best, continually crafting each taste until it’s exactly right.
            <br />
                <br />
            Celebration Brewing is a family-owned brewery, taproom, and kitchen located in beautiful Celebration, Florida. We focus on using only the best ingredients and delivering the utmost quality to our customers.
            <br />
                <br />
            Everyday, we’re driven by our core values: delivering quality flavors, honoring our customers and celebrating the culture of beer. Experience it for yourself by joining us for a brewery tour, a special event or just to try what’s on tap.
            </Typography>
            <Grid container direction="row" spacing={1} style={{ width: "100%", alignItems: "center", marginTop: "40px"}} justify="center">
                <Button variant="outlined" href="#"> Visit Us </Button>
            </Grid>
            <Footer />
            <Copyright />
            </Grid>
        </div>
    )
};

// const itemData= [
//     {
//         img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//         title: "beer glass"
//     }
// ]

export default AboutUs

