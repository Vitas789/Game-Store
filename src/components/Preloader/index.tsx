import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Wrapper = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    background-color: black;
    align-items: center;
    justify-content: center;
    z-index: 900;

    &.preloaderWrapper-exit {
        opacity: 1;
        transform: translateY(0%);
    }
    &.preloaderWrapper-exit-active {
        transform: translateY(-100%);
        transition: transform 1.2s 0.8s cubic-bezier(0.425, 0.005, 0, 1);
    }
    &.preloaderWrapper-exit-done {
        transform: translateY(-100%);
    }
`;

const Preloader = () => {
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoad(false), 1050);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <CSSTransition
            timeout={2000}
            classNames="preloaderWrapper"
            in={load}
            unmountOnExit
        >
            <Wrapper />
        </CSSTransition>
    );
};

export default Preloader;
