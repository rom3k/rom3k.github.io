import React from 'react';
import ReactDOM from 'react-dom';
import { Spinner, Navbar } from 'react-bootstrap';
import loadable from '@loadable/component';
import { CSSTransition } from 'react-transition-group';
import { useTranslation } from 'react-i18next';
const { useEffect, useState, useLayoutEffect, Suspense } = React;

import './App.scss';

const MainPage = loadable(
    () =>
        import(
            /* webpackChunkName: "MainPageComponent" */ '../mainpage/Mainpage'
        )
);

const SpinnerComponent = () => {
    return (
        <Spinner animation="border" variant="secondary">
            <span className="sr-only">Ładowanie...</span>
        </Spinner>
    );
};

export default function App() {
    // TODO(rom3k): Put all into one state
    const [inProp, setInProp] = useState(false);
    const [clickedClass, setClickedClass] = useState(false);
    const [t, i18n] = useTranslation();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                setInProp(true);
            } else {
                setInProp(false);
            }
        });
    }, []);
    // TODO(rom3k): Create proper router
    return (
        <>
            <Navbar
                sticky="top"
                className="justify-content-between"
                style={{
                    backgroundColor: inProp ? '#eee' : '',
                }}
            >
                <Navbar.Brand>
                    <CSSTransition
                        in={inProp}
                        classNames="transition-brand"
                        className="transition-brand"
                        timeout={500}
                    >
                        <span>Michał Romaszkin</span>
                    </CSSTransition>
                </Navbar.Brand>

                <div className="switch d-flex">
                    <span className="switch__lang">PL</span>
                    <div className="switch__container">
                        <div
                            className={
                                'switch__clickable' +
                                (clickedClass ? ' clicked' : '')
                            }
                            onClick={() => {
                                setClickedClass((state) => {
                                    if (state) {
                                        i18n.changeLanguage('pl');
                                    } else {
                                        i18n.changeLanguage('en');
                                    }
                                    return !state;
                                });
                            }}
                        />
                    </div>
                    <span className="switch__lang">EN</span>
                </div>
            </Navbar>
            <Suspense fallback={<SpinnerComponent />}>
                <MainPage />
            </Suspense>
            <Navbar sticky="bottom">
                <span style={{ marginRight: '1rem' }}>
                    Created with {'<3'} by myself
                </span>
                <a href="https://github.com/rom3k/rom3k.github.io">Source</a>
            </Navbar>
        </>
    );
}
