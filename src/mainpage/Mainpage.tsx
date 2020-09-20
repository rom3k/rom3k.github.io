import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Col, Row, Image, ProgressBar } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
const { useEffect, useState, useRef } = React;

import './Mainpage.scss';
import Avatar from '../assets/avatar.jpg';
import Chevron from '../assets/chevron_down.svg';
import Js from '../assets/js.svg';
import html5 from '../assets/html5.svg';
import css3 from '../assets/css3.svg';
import angular from '../assets/angular.svg';
import react from '../assets/react.svg'; // :thinking:

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
                        <h3 className="rowDescription__title">O mnie</h3>
                        <p className="rowDescription__paragraph text-justify">
                            Mam 23 lata. Pochodzę ze Szczecina, aktualnie
                            mieszkam w Poznaniu. W wolnym czasie uwielbiam grać
                            w gry od Paradox Interactive oraz opiekować się
                            roślinami. Kiedyś dużo grałem w siatkówkę, aktulanie
                            lubię śledzić wyniki w różnych ligach.
                        </p>
                        <p className="rowDescription__paragraph text-justify">
                            W technikum poznałem Angulara - od tego frameworka
                            zaczęła się moja przygoda z techologiami webowymi.
                            Programuję głównie w JavaScript (TypeScript). Staram
                            się rozwijać równolegle w stronę frontu i backu.
                        </p>
                    </Col>
                    <Col
                        md={{ span: 4, offset: 2 }}
                        className="rowDescription__column"
                    >
                        <h3 className="rowDescription__title">Umiejętności</h3>
                        <Skill
                            src={html5}
                            title="HTML5"
                            alt="HTML5 Logo"
                            percentage={75}
                        />
                        <Skill
                            src={Js}
                            title="JavaScript"
                            alt="JavaScript logo"
                            percentage={65}
                        />
                        <Skill
                            src={css3}
                            title="CSS3"
                            alt="CSS3 logo"
                            percentage={70}
                        />
                        <Skill
                            src={angular}
                            title="Angular"
                            alt="Angular logo"
                            percentage={50}
                        />
                        <Skill
                            src={react}
                            title="React"
                            alt="React logo"
                            percentage={50}
                        />
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
            <Row className="min-vh-100" ref={contactPageRef}></Row>
        </Container>
    );
}
