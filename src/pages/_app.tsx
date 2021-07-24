import React from 'react';
import '../../styles/globals.css';
import { AppProps } from 'next/app';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => {
    return (
        <>
            <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
                <motion.div
                    key={router.route}
                    initial="pageInitial"
                    animate="pageAnimate"
                    variants={{
                        pageInitial: {
                            opacity: 0,
                        },
                        pageAnimate: {
                            opacity: 1,
                        },
                    }}
                >
                    <Component {...pageProps} />
                </motion.div>
            </AnimatePresence>
        </>
    );
};
export default App;
