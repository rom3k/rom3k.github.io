import React from 'react';
import ReactDOM from 'react-dom';
import { Spinner, Navbar } from 'react-bootstrap';
import loadable from '@loadable/component';
import { CSSTransition } from 'react-transition-group';
const { useEffect, useState } = React;

import './App.scss';

const MainPage = loadable(
    () =>
        import(
            /* webpackChunkName: "MainPageComponent" */ './mainpage/Mainpage'
        )
);

export default function App() {
    const [loading, setLoading] = useState(false);
    const [inProp, setInProp] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                setInProp(true);
            } else {
                setInProp(false);
            }
        });
    }, []);

    if (loading) {
        return (
            <div
                style={{
                    display: 'flex',
                    width: '100vw',
                    height: '100vh',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Spinner animation="border" variant="secondary">
                    <span className="sr-only">Ładowanie...</span>
                </Spinner>
            </div>
        );
    }
    return (
        <>
            <Navbar sticky="top">
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
            </Navbar>
            <MainPage />
        </>
    );
}
