import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

import GamesListPicture from './GamesListPicture';
import GamesListRating from './GamesListRating';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 40px;
`;

interface GamesList {
    items: {
        name: string;
        price: string;
        image: string;
        slug: string;
        rating: string;
    }[];
}

const GamesList: React.FC<GamesList> = ({ items }) => {
    return (
        <Wrapper>
            {items.map(({ name, price, image, slug, rating }, i) => (
                <Link href={`/games/${slug}`} key={i} scroll={false}>
                    <div>
                        <p>{name}</p>
                        <GamesListPicture>
                            <Image src={image} alt={name} layout="fill" />
                            <GamesListRating rating={rating}>
                                <span className="rating">{rating}</span>
                            </GamesListRating>
                        </GamesListPicture>
                        <span>{price}</span>
                    </div>
                </Link>
            ))}
        </Wrapper>
    );
};

export default GamesList;
