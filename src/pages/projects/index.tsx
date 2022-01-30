import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const styles = makeStyles({
    projects: {
        display: 'block',
        padding: '20px',
    },
    headerContainer: {
        paddingBottom: '20px',
        color: 'white',
    },
    body: {
        color: 'lightgray',
        padding: '20px',
    },
    bodyContainer: {
        maxWidth: 500,
        marginBottom: '20px',
        margin: 'auto',
        padding: '15px',
        border: '2px solid lightgray',
        paddingBottom: '0.5rem',
    },
    link: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '20px',
        paddingTop: '25px',
    },
    linkPrimary: {
        textDecoration: 'none',
        color: 'white',
        padding: '0.5rem 1rem',
        marginRight: '0.5rem',
        backgroundColor: 'lightgray',
        border: '1px solid lightgray',
        borderRadius: '1rem 2rem',
        '&:hover': {
            backgroundColor: 'gray',
        },
    },
    linkSecondary: {
        textDecoration: 'none',
        color: 'white',
        padding: '0.5rem 1rem',
        marginRight: '0.5rem',
        border: '1px solid lightgray',
        borderRadius: '1rem 2rem',
        '&:hover': {
            backgroundColor: 'gray',
        },
    },
    homePages: {
        display: 'flex',
        justifyContent: 'space-evenly',
        paddingTop: '10px',
        margin: '20px',
    },
    pages: {
        cursor: 'pointer',
    },
});

function Projects() {
    const classes = styles();

    const sendEmail = (e: any) => {
        e.preventDefault();
        window.location.href = `mailto:uttampatro890@gmail.com`;
    };

    return (
        <div className={classes.projects}>
            <div className={classes.headerContainer}>
                <Typography variant="h4" className="headerContainer-heading">
                    Explore my <span style={{ color: 'gray' }}>Projects</span>{' '}
                    and try them out!
                </Typography>
            </div>
            <div className={classes.body}>
                <div className={classes.bodyContainer}>
                    <Typography variant="h3">Udemy Clone</Typography>
                    <Typography variant="caption">Present</Typography>
                    <Typography>
                        This is a clone of udemy website. For live use this
                        credential{' '}
                        <strong>
                            email: uttam@gmail.com, password: 12345678
                        </strong>
                    </Typography>
                    <div className={classes.link}>
                        <Link
                            className={classes.linkPrimary}
                            underline="none"
                            color="black"
                            href="https://serene-engelbart-6b90e8.netlify.app/"
                            target="_blank"
                        >
                            Live Project
                        </Link>
                        <Link
                            className={classes.linkSecondary}
                            underline="none"
                            color="white"
                            href="https://github.com/uttampatro/udemy-client"
                            target="_blank"
                        >
                            See Client Code
                        </Link>
                        <Link
                            className={classes.linkSecondary}
                            underline="none"
                            color="white"
                            href="https://github.com/uttampatro/udemy-server"
                            target="_blank"
                        >
                            See Service Code
                        </Link>
                    </div>
                </div>
                <div className={classes.bodyContainer}>
                    <Typography variant="h3">Quiz about Sports</Typography>
                    <Typography variant="caption">Dec, 2021</Typography>
                    <Typography>
                        This is a CLI Based quiz app build with{' '}
                        <strong>NodeJS</strong> on the topic of Sports
                    </Typography>
                    <div className={classes.link}>
                        <Link
                            className={classes.linkPrimary}
                            underline="none"
                            color="black"
                            href="https://replit.com/@UttamPatro/end-game?embed=true#index.js"
                            target="_blank"
                        >
                            Live Project
                        </Link>
                        <Link
                            className={classes.linkSecondary}
                            underline="none"
                            color="white"
                            href="https://github.com/uttampatro/quiz-game"
                            target="_blank"
                        >
                            See Code
                        </Link>
                    </div>
                </div>
                <div className={classes.bodyContainer}>
                    <Typography variant="h3">CRUD Operation</Typography>
                    <Typography variant="caption">Oct, 2021</Typography>
                    <Typography>
                        This project is based on <strong>CRUD</strong> operation
                        and also we share User Data to anyone through mail.
                    </Typography>
                    <div className={classes.link}>
                        <Link
                            className={classes.linkPrimary}
                            underline="none"
                            color="black"
                            href="https://vigorous-spence-26d3cf.netlify.app/"
                            target="_blank"
                        >
                            Live Project
                        </Link>
                        <Link
                            className={classes.linkSecondary}
                            underline="none"
                            color="white"
                            href="https://github.com/uttampatro/assignment-02"
                            target="_blank"
                        >
                            See Client Code
                        </Link>
                        <Link
                            className={classes.linkSecondary}
                            underline="none"
                            color="white"
                            href="https://github.com/uttampatro/assignment-02-service"
                            target="_blank"
                        >
                            See Service Code
                        </Link>
                    </div>
                </div>
                <div className={classes.bodyContainer}>
                    <Typography variant="h3">Movie Uploader</Typography>
                    <Typography variant="caption">Sep, 2021</Typography>
                    <Typography>
                        In this project we can add movie and we can also watch
                        movie in this website.
                    </Typography>
                    <div className={classes.link}>
                        <Link
                            className={classes.linkPrimary}
                            underline="none"
                            color="black"
                            href="https://confident-yonath-533d7a.netlify.app/"
                            target="_blank"
                        >
                            Live Project
                        </Link>
                        <Link
                            className={classes.linkSecondary}
                            underline="none"
                            color="white"
                            href="https://github.com/uttampatro/assignment-01"
                            target="_blank"
                        >
                            See Client Code
                        </Link>
                        <Link
                            className={classes.linkSecondary}
                            underline="none"
                            color="white"
                            href="https://github.com/uttampatro/assignment-01-service"
                            target="_blank"
                        >
                            See Service Code
                        </Link>
                    </div>
                </div>
                <div className={classes.bodyContainer}>
                    <Typography variant="h3">Twitter Clone</Typography>
                    <Typography variant="caption">Jul, 2021</Typography>
                    <Typography>
                        This is a clone of Twitter website. For live use this
                        credential{' '}
                        <strong>
                            email: uttam@gmail.com, password: 12345678
                        </strong>
                    </Typography>
                    <div className={classes.link}>
                        <Link
                            className={classes.linkPrimary}
                            underline="none"
                            color="black"
                            href="https://hungry-shaw-1bd676.netlify.app"
                            target="_blank"
                        >
                            Live Project
                        </Link>
                        <Link
                            className={classes.linkSecondary}
                            underline="none"
                            color="white"
                            href="https://github.com/uttampatro/twitter-client"
                            target="_blank"
                        >
                            See Client Code
                        </Link>
                        <Link
                            className={classes.linkSecondary}
                            underline="none"
                            color="white"
                            href="https://github.com/uttampatro/twitter-server"
                            target="_blank"
                        >
                            See Service Code
                        </Link>
                    </div>
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

export default Projects;
