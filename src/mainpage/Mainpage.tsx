import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Col, Row, Image, ProgressBar } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
const { useState, useRef } = React;
import { useTranslation } from 'react-i18next';

import './Mainpage.scss';
import Avatar from '../assets/avatar.jpg';
import Chevron from '../assets/chevron_down.svg';
import Js from '../assets/js.svg';
import html5 from '../assets/html5.svg';
import css3 from '../assets/css3.svg';
import angular from '../assets/angular.svg';
import react from '../assets/react.svg'; // :thinking:
import nodejs from '../assets/nodejs.svg';
import mail from '../assets/email.svg';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import telegram from '../assets/telegram.svg';
import cv from '../assets/CV.pdf';

// TODO(rom3k): Use this for future scroll events
const sizes = {
    width: window.innerWidth || document.body.clientWidth,
    height: window.innerHeight || document.body.clientHeight,
};

const scrollTo = (ref: any) => {
    window.scrollTo(0, ref.current.offsetTop);
};

const Skill = ({ percentage, src, title, alt }) => {
    return (
        <div className="skill">
            <img src={src} alt={alt} title={title} className="skill__image" />
            <ProgressBar now={percentage} className="skill__progressBar" />
        </div>
    );
};

export default function MainPage() {
    // State for displaying transitions with little delay
    const [inProp, setInProp] = useState({
        fullName: false,
    });
    const skillsPageRef = useRef(null);
    const contactPageRef = useRef(null);
    const { t, i18n } = useTranslation();

    return (
        <Container fluid>
            <Row className="min-vh-100 justify-content-center">
                <Col
                    md="auto"
                    className="d-flex align-items-center flex-column justify-content-around"
                >
                    <div className="d-flex flex-column align-items-center">
                        <CSSTransition
                            in={true}
                            appear={true}
                            timeout={1000}
                            classNames="avatar"
                            className="avatar"
                        >
                            <Image src={Avatar} roundedCircle />
                        </CSSTransition>
                        <CSSTransition
                            in={true}
                            appear={true}
                            classNames="fullName"
                            timeout={2000}
                            onEntered={() =>
                                setInProp((state) => ({
                                    ...state,
                                    fullName: true,
                                }))
                            }
                        >
                            <div>
                                <h1 className="text-center">
                                    Michał Romaszkin
                                </h1>
                                <p className="text-center h5">
                                    JavaScript developer
                                </p>
                            </div>
                        </CSSTransition>
                    </div>
                    <CSSTransition
                        in={inProp.fullName}
                        timeout={500}
                        classNames="loadMore"
                        className="loadMore"
                    >
                        <div>
                            <img
                                className="loadMore__chevron"
                                src={Chevron}
                                onClick={() => scrollTo(skillsPageRef)}
                            />
                        </div>
                    </CSSTransition>
                </Col>
            </Row>
            <Row
                className="min-vh-100 rowDescription d-flex flex-column justify-content-around"
                id="description"
                ref={skillsPageRef}
            >
                <div className="d-flex justify-content-center rowDescription__column-container">
                    <Col md={4} className="rowDescription__column">
                        <h3 className="rowDescription__title">
                            {t('about_me')}
                        </h3>
                        <p className="rowDescription__paragraph text-justify">
                            {t('paragraph1')}
                        </p>
                        <p className="rowDescription__paragraph text-justify">
                            {t('paragraph2')}
                        </p>
                        <div>
                            <a className="h5" href={cv} target="_blank">
                                Moje CV
                            </a>
                        </div>
                    </Col>
                    <Col
                        md={{ span: 4, offset: 2 }}
                        className="rowDescription__column"
                    >
                        <h3 className="rowDescription__title">{t('skills')}</h3>
                        <div className="skill">
                            <img
                                src={html5}
                                alt="HTML5 Logo"
                                title="HTML5"
                                className="skill__image"
                            />
                            <img
                                src={css3}
                                alt="CSS3 Logo"
                                title="CSS3"
                                className="skill__image"
                            />
                            <img
                                src={Js}
                                alt="JavaScript logo"
                                title="JavaScript"
                                className="skill__image"
                            />
                            <ProgressBar
                                now={70}
                                className="skill__progressBar"
                            />
                        </div>
                        <Skill
                            src={angular}
                            title="Angular"
                            alt="Angular logo"
                            percentage={60}
                        />
                        <Skill
                            src={react}
                            title="React"
                            alt="React logo"
                            percentage={50}
                        />
                        <Skill
                            src={nodejs}
                            title="Node.js"
                            alt="Nodejs logo"
                            percentage={50}
                        />
                        <div className="otherSkills">
                            <h5>{t('other_skills')}</h5>
                            {[
                                'TypeScript',
                                'Sass',
                                'Express',
                                'Sequelize',
                                'SQL',
                                'Bash',
                                'npm',
                                'git',
                                'Phabricator',
                            ].map((el) => (
                                <span className="otherSkills__skill">{el}</span>
                            ))}
                        </div>
                    </Col>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <img
                        className="loadMore__chevron"
                        src={Chevron}
                        onClick={() => {
                            scrollTo(contactPageRef);
                        }}
                    />
                </div>
            </Row>
            <Row className="rowContact" ref={contactPageRef}>
                <Col
                    md={{ span: 'auto', offset: 1 }}
                    style={{ marginTop: '6rem' }}
                >
                    <h3 className="rowContact__title">{t('get_in_touch')}</h3>
                    <div className="contact">
                        <img
                            src={mail}
                            alt="email image"
                            className="contact__image"
                        />
                        <span className="h5">
                            Email:{' '}
                            <a href="mailto:romaszkin13@o2.pl">
                                romaszkin13@o2.pl
                            </a>
                        </span>
                    </div>
                    <div className="contact">
                        <img
                            src={github}
                            alt="github logo"
                            className="contact__image"
                        />
                        <span className="h5">
                            Github:{' '}
                            <a href="https://github.com/rom3k/">rom3k</a>
                        </span>
                    </div>
                    <div className="contact">
                        <img
                            src={linkedin}
                            alt="linkedin logo"
                            className="contact__image"
                        />
                        <span className="h5">
                            Linkedin:{' '}
                            <a href="https://www.linkedin.com/in/michał-romaszkin-74a009190/">
                                {t('my_profile')}
                            </a>
                        </span>
                    </div>
                    <div className="contact">
                        <img
                            src={telegram}
                            alt="telegram logo"
                            className="contact__image"
                        />
                        <span className="h5">
                            Telegram:{' '}
                            <a href="https://t.me/romaszkin">romaszkin</a>
                        </span>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
