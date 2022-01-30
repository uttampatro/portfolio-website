import React from 'react';
import linkedInLogo from '../../components/Images/linkedIN.png';
import githubLogo from '../../components/Images/github.png';
import twitterLogo from '../../components/Images/twitter.svg';
import myPic from '../../components/Images/myPic.jpg';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const styles = makeStyles({
    home: {
        display: 'block',
        padding: '40px',
        color: 'lightgray',
        ['@media (min-width:1025px)']: {
            // width: '100%',
            // height: '100%',
        },
        ['@media (min-width: 780px) and (max-width: 1024px)']: {
            // width: '100%',
            // height: '100%',
        },
    },
    homeDescription: {
        display: 'flex',
        justifyContent: 'center',
    },
    body1: {
        padding: '30px',
        maxWidth: 400,
        alignContent: 'center',
    },
    body2: {
        padding: '10px',
        maxWidth: 400,
        alignContent: 'center',
    },
    image: {
        borderRadius: '70%',
        border: '1px solid lightgray',
        width: '11%',
        height: '20%',
        margin: '20px',
    },
    connect: {
        paddingBottom: '8px',
    },
    social: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '15px',
    },
    homePages: {
        display: 'flex',
        justifyContent: 'space-evenly',
        paddingTop: '25px',
    },
    pages: {
        cursor: 'pointer',
    },
});

function Home() {
    const classes = styles();

    const sendEmail = (e: any) => {
        e.preventDefault();
        window.location.href = `mailto:uttampatro890@gmail.com`;
    };

    return (
        <div className={classes.home}>
            <Typography variant="h3">Hello, I'm Uttam Patro</Typography>

            <div className={classes.homeDescription}>
                <Typography className={classes.body1} variant="body1">
                    I have been actively self-teaching programming since last
                    six months and I have learned and played around with big
                    projects on GitHub and taught myself to build a full stack
                    application on ReactJs, NodeJS (Typescript) and have worked
                    with MongoDB and PostgreSQL for data store. And built
                    multiple projects on this tech stack & I am very much
                    resilient to learn and adapt new technologies.
                </Typography>
            </div>

            <div className={classes.homeDescription}>
                <Typography className={classes.body2} variant="body2">
                    I primarily use node.js for backend who's always eager to
                    work with new tech stacks so when it comes to picking up a
                    new framework or language.
                </Typography>
            </div>

            <div>
                <img className={classes.image} src={myPic} alt="" />
            </div>

            <div className={classes.connect}>
                <Typography variant="h6">Let's Connect</Typography>
            </div>

            <div className={classes.social}>
                <div className="socialLogo">
                    <Link
                        href="https://www.linkedin.com/in/uttam-patro-28802717a/"
                        target="_blank"
                    >
                        <img
                            style={{
                                width: '18px',
                                height: '18px',
                                borderRadius: '2px',
                            }}
                            src={linkedInLogo}
                        />
                    </Link>
                </div>
                <div className="socialLogo">
                    <Link href="https://twitter.com/0xUttam" target="_blank">
                        <img
                            style={{
                                width: '21px',
                                height: '20px',
                                marginBottom: '5px',
                                paddingLeft: '5px',
                                paddingRight: '5px',
                            }}
                            src={twitterLogo}
                        />
                    </Link>
                </div>

                <div className="socialLogo">
                    <Link href="https://github.com/uttampatro" target="_blank">
                        <img
                            style={{ width: '18px', height: '20px' }}
                            src={githubLogo}
                        />
                    </Link>
                </div>
            </div>
            <hr />
            <div className={classes.homePages}>
                <Link
                    className={classes.pages}
                    color="white"
                    href="/"
                    underline="hover"
                >
                    HOME
                </Link>
                <Link
                    className={classes.pages}
                    color="white"
                    href="/projects"
                    underline="hover"
                >
                    PROJECTS
                </Link>
                <Link
                    className={classes.pages}
                    onClick={sendEmail}
                    color="white"
                    underline="hover"
                >
                    CONTACT
                </Link>
            </div>
        </div>
    );
}

export default Home;
