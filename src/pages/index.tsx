import React from 'react';
import GamesList from '../components/GamesList';
import { store } from '../store/games';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Layout from '../components/Layout';

const Index: React.FC = ({games}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Layout>
            <GamesList {...games}/>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const games = store;

    return {
        props: {
            games,
        },
        revalidate: 1
    };
};

export default Index;
