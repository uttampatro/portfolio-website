import React from 'react';
import linkedInLogo from '../../components/Images/linkedIN.png';
import githubLogo from '../../components/Images/github.png';
import twitterLogo from '../../components/Images/twitter.svg';
import BG from '../../components/Images/bImage.jpeg';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Button } from '@mui/material';

const styles = makeStyles({
    home: {
        padding: '30px',
        color: 'gray',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        overflow: 'auto',
        backgroundImage: `url(${BG})`,
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    homePages: {
        display: 'flex',
        fontWeight: 'bold',
        justifyContent: 'space-evenly',
        paddingBottom: '25px',
    },
    pages: {
        cursor: 'pointer',
    },
    homeDescription: {
        padding: '180px 0',
    },
    h3: {
        maxWidth: 500,
        alignContent: 'center',
        color: 'black',
    },
    body1: {
        padding: '30px',
        maxWidth: 400,
        alignContent: 'center',
    },
    connect: {
        paddingBottom: '8px',
    },
    social: {
        display: 'flex',
        justifyContent: 'center',
    },
});

function Home() {
    const classes = styles();

    const sendEmail = (e: any) => {
        e.preventDefault();
        window.location.href = `mailto:uttampatro890@gmail.com?subject=I came from your site`;
    };

    return (
        <div className={classes.home}>
            <div className={classes.homePages}>
                <Link
                    className={classes.pages}
                    color="gray"
                    href="/"
                    underline="hover"
                >
                    HOME
                </Link>
                <Link
                    className={classes.pages}
                    color="gray"
                    href="/projects"
                    underline="hover"
                >
                    PROJECTS
                </Link>
                <Link
                    className={classes.pages}
                    onClick={sendEmail}
                    color="gray"
                    underline="hover"
                >
                    CONTACT
                </Link>
            </div>
            <hr />

            <div className={classes.homeDescription}>
                <Typography className={classes.h3} variant="h3">
                    Hello, I'm Uttam Patro
                </Typography>

                <Typography className={classes.body1} variant="body1">
                    I am a full stack developer, primarily works on javascript
                    tech stack - node.js, react.js and have been actively
                    shipping multiple projects in Node/React/MongoDB stack.
                </Typography>
                <Link
                    style={{ textDecoration: 'none' }}
                    href="resume.pdf"
                    download="Uttam resume.pdf"
                >
                    <Button
                        style={{
                            maxWidth: 500,
                            margin: '0 160px',
                            display: 'block',
                            position: 'relative',
                            justifyContent: 'center',
                            borderRadius: '2rem 2rem',
                            border: '1px solid lightgray',
                            backgroundColor: 'lightgray',
                            color: 'black',
                        }}
                        variant="contained"
                    >
                        Get Resume
                    </Button>
                </Link>
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
                                paddingTop: '1px',
                                width: '17px',
                                height: '17px',
                                borderRadius: '2px',
                            }}
                            src={linkedInLogo}
                        />
                    </Link>
                </div>
                <div className="socialLogo">
                    <Link href="https://twitter.com/uttxmpatro" target="_blank">
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
                            style={{ width: '18px', height: '18px' }}
                            src={githubLogo}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
