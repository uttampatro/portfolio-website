import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import BG from '../../components/Images/bImage.jpeg';
import Link from '@mui/material/Link';

const styles = makeStyles({
    projects: {
        display: 'block',
        padding: '30px',
        overflow: 'auto',
        backgroundImage: `url(${BG})`,
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    headerContainer: {
        paddingBottom: '20px',
    },
    body: {
        color: 'gray',
    },
    homePages: {
        display: 'flex',
        fontWeight: 'bold',
        justifyContent: 'space-evenly',
        marginBottom: '25px',
    },
    pages: {
        cursor: 'pointer',
    },
    bodyContainer: {
        maxWidth: 500,
        marginBottom: '20px',
        color: 'gray',
        margin: 'auto',
        padding: '15px',
        border: '2px solid lightgray',
        paddingBottom: '0.5rem',
    },
    link: {
        display: 'flex',
        color: 'gray',
        justifyContent: 'space-around',
        padding: '20px',
        paddingTop: '25px',
    },
    linkPrimary: {
        textDecoration: 'none',
        padding: '0.5rem 1rem',
        marginRight: '0.5rem',
        backgroundColor: 'gray',
        border: '1px solid lightgray',
        borderRadius: '1rem 2rem',
        '&:hover': {
            backgroundColor: 'white',
        },
    },
    linkSecondary: {
        textDecoration: 'none',
        padding: '0.5rem 1rem',
        marginRight: '0.5rem',
        border: '1px solid lightgray',
        borderRadius: '1rem 2rem',
        '&:hover': {
            backgroundColor: 'gray',
        },
    },
});

function Projects() {
    const classes = styles();

    const sendEmail = (e: any) => {
        e.preventDefault();
        window.location.href = `mailto:uttampatro890@gmail.com?subject=I came from your site`;
    };

    return (
        <div className={classes.projects}>
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
            <div className={classes.headerContainer}>
                <Typography
                    style={{ paddingTop: '30px' }}
                    variant="h4"
                    className="headerContainer-heading"
                >
                    Explore my <span style={{ color: 'gray' }}>Projects</span>{' '}
                    and try them out!
                </Typography>
            </div>
            <div className={classes.body}>
                <div className={classes.bodyContainer}>
                    <Typography style={{ color: 'black' }} variant="h3">
                        Article Management System
                    </Typography>
                    <Typography variant="caption">Jun, 2022</Typography>
                    <Typography>
                        Built a article management application where article can
                        be created by authenticated users, used MERN stack, used
                        AWS S3 to store media, and deployed using heroku/netlify
                    </Typography>
                    <div className={classes.link}>
                        <Link
                            className={classes.linkPrimary}
                            underline="none"
                            color="black"
                            href="https://article-content.netlify.app/"
                            target="_blank"
                        >
                            Live Project
                        </Link>
                        <Link
                            className={classes.linkSecondary}
                            underline="none"
                            color="black"
                            href="https://github.com/uttampatro/user-generated-content"
                            target="_blank"
                        >
                            See Client Code
                        </Link>
                        <Link
                            className={classes.linkSecondary}
                            underline="none"
                            color="black"
                            href="https://github.com/uttampatro/user-generated-content-service"
                            target="_blank"
                        >
                            See Service Code
                        </Link>
                    </div>
                </div>
                <div className={classes.bodyContainer}>
                    <Typography style={{ color: 'black' }} variant="h3">
                        Student Management System
                    </Typography>
                    <Typography variant="caption">Mar, 2022</Typography>
                    <Typography>
                        Built a student management system where students can be
                        registered and other details can be entered, Used React
                        and Node/Express, used MongoDB for db, deployed on
                        heroku/netlify
                    </Typography>
                    <div className={classes.link}>
                        <Link
                            className={classes.linkPrimary}
                            underline="none"
                            color="black"
                            href="https://student-management-systems.netlify.app/"
                            target="_blank"
                        >
                            Live Project
                        </Link>
                        <Link
                            className={classes.linkSecondary}
                            underline="none"
                            color="black"
                            href="https://github.com/uttampatro/studentManagementSystem"
                            target="_blank"
                        >
                            See Client Code
                        </Link>
                        <Link
                            className={classes.linkSecondary}
                            underline="none"
                            color="black"
                            href="https://github.com/uttampatro/studentManagementSystem-servicee"
                            target="_blank"
                        >
                            See Service Code
                        </Link>
                    </div>
                </div>
                <div className={classes.bodyContainer}>
                    <Typography style={{ color: 'black' }} variant="h3">
                        Movie Uploader
                    </Typography>
                    <Typography variant="caption">Dec, 2021</Typography>
                    <Typography>
                        Built a video/image upload application MERN stack with
                        typescript, used AWS S3 to store media, and deployed
                        using heroku/netlify
                    </Typography>
                    <div className={classes.link}>
                        <Link
                            className={classes.linkPrimary}
                            underline="none"
                            color="black"
                            href="https://movie-uploader.netlify.app"
                            target="_blank"
                        >
                            Live Project
                        </Link>
                        <Link
                            className={classes.linkSecondary}
                            underline="none"
                            color="black"
                            href="https://github.com/uttampatro/assignment-01"
                            target="_blank"
                        >
                            See Client Code
                        </Link>
                        <Link
                            className={classes.linkSecondary}
                            underline="none"
                            color="black"
                            href="https://github.com/uttampatro/assignment-01-service"
                            target="_blank"
                        >
                            See Service Code
                        </Link>
                    </div>
                </div>
                <div className={classes.bodyContainer}>
                    <Typography style={{ color: 'black' }} variant="h3">
                        Udemy Clone
                    </Typography>
                    <Typography variant="caption">Present</Typography>
                    <Typography>
                        Built a course management application where courses can
                        be created by authenticated users. For using the app use
                        credentials{' '}
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
                            color="black"
                            href="https://github.com/uttampatro/udemy-client"
                            target="_blank"
                        >
                            See Client Code
                        </Link>
                        <Link
                            className={classes.linkSecondary}
                            underline="none"
                            color="black"
                            href="https://github.com/uttampatro/udemy-server"
                            target="_blank"
                        >
                            See Service Code
                        </Link>
                    </div>
                </div>
                <div className={classes.bodyContainer}>
                    <Typography style={{ color: 'black' }} variant="h3">
                        Twitter Clone
                    </Typography>
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
                            color="black"
                            href="https://github.com/uttampatro/twitter-client"
                            target="_blank"
                        >
                            See Client Code
                        </Link>
                        <Link
                            className={classes.linkSecondary}
                            underline="none"
                            color="black"
                            href="https://github.com/uttampatro/twitter-server"
                            target="_blank"
                        >
                            See Service Code
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
