import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 40px;
    background-color: gray;
    height: 100vh;

    button {
        cursor: pointer;
        height: 20px;
    }

    & > div {
        & > div {
            position: relative;
            width: 300px;
            height: 400px;
        }
    }
`;

interface GamesList {
    name: string;
    price: string;
    image: string;
    rating: string;
    genre: string[];
}

const GamesList: React.FC<GamesList> = ({
    name,
    price,
    image,
    rating,
    genre,
}) => {
    return (
        <Wrapper>
            <div>
                <Link href="/">
                    <button>back</button>
                </Link>
                <p>{name}</p>
                <span>{rating}</span>
                {genre.map((item, i) => (
                    <p key={i}>{item}</p>
                ))}
                <div>
                    <Image src={image} alt={name} layout="fill" />
                </div>
                <span>{price}</span>
            </div>
        </Wrapper>
    );
};

export default GamesList;
