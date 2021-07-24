import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from 'next';
import { store } from '../../store/games';
import Game from '../../components/Game';
import Layout from '../../components/Layout';

const Index = ({ game }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Layout>
            <Game {...game} />
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
    console.log(store);
    const item = store.items.filter((item) => item.slug === params.slug);

    return {
        props: {
            game: item[0],
        },
        revalidate: 1,
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = store.items.map((item: any) => ({
        params: { slug: item.slug },
    }));
    return {
        paths,
        fallback: false,
    };
};

export default Index;
