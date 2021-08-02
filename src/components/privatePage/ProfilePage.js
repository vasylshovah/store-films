import React from "react";
import {withRouter} from "react-router-dom"
import Button from '@material-ui/core/Button';
import {
    AppBar,
    Box,
    Card, CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    IconButton,
    Paper,
    Toolbar,
    Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu"
import {makeStyles} from "@material-ui/core";
import {Layers, PlayCircleFilled} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    },
    mainPost: {
        position: "relative",
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },
    overlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundOverlay: "rgba(0,0,0, .3)"
    },
    mainPostContent: {
        position: "relative",
        padding: theme.spacing(6),
        marginTop: theme.spacing(8)
    },
    cardMedia: {
        paddingTop: "56.25",
        display: "list-item"
    },
    cardContent: {
        flexGrow: 1
    },
    cardGrid: {
        marginTop: theme.spacing(4)
    }
}))

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const ProfilePage = () => {
    const classes = useStyles()
    return (
        <>
            {/*<AppBar position="fixed">*/}
            {/*    <Container fixed>*/}
            {/*        <Toolbar>*/}
            {/*            <IconButton*/}
            {/*                edge="start"*/}
            {/*                color="inherit"*/}
            {/*                aria-label="menu"*/}
            {/*                className={classes.menuButton}*/}
            {/*            >*/}
            {/*                <MenuIcon />*/}
            {/*            </IconButton>*/}
            {/*            <Typography variant="h6" className={classes.title}>My app</Typography>*/}
            {/*            <Box mr={3}>*/}
            {/*                <Button color="inherit" variant="outlined">First</Button>*/}
            {/*            </Box>*/}
            {/*            <Button color="secondary" variant="contained">Second</Button>*/}
            {/*        </Toolbar>*/}
            {/*    </Container>*/}
            {/*</AppBar>*/}

            <main>
                <Paper
                    className={classes.mainPost}
                    style={{backgroundImage: `url(https://source.unsplash.com/random)`}}
                >
                    <div className={classes.overlay} />
                    <Container fixed>
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainPostContent}>
                                    <Typography
                                        component="h1"
                                        variant="h3"
                                        color="inherit"
                                        gutterBottom
                                    >
                                        Best Movie page
                                    </Typography>
                                    <Typography
                                        component="h1"
                                        color="inherit"
                                        gutterBottom
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur
                                        debitis delectus dolores dolorum, esse ex in iusto magni molestias neque nobis
                                    </Typography>
                                    <Button variant="contained" color="secondary">
                                        Learn more
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
                <div className={classes.mainContent}>
                    <Container maxWidth="md">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Web Developer Blog</Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Autem consequuntur debitis delectus
                            dolores dolorum, esse ex in iusto magni molestias neque nobis
                        </Typography>
                        <div className={classes.mainButtons}>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">Start now</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">Learn more</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h5" gutterBottom>
                                            Blog post
                                        </Typography>
                                        <Typography color="textSecondary">
                                            Blog post. About Web developer blog page!
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                        <Layers />
                                        <PlayCircleFilled />
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </>
    )
}

export default withRouter(ProfilePage)




// Appbar - панель навігації
// Box - створює новий дом елемент, як дів
