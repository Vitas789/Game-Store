import styled from 'styled-components';

const GamesListRating = styled.div<{ rating: string }>`
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    overflow: hidden;

    :hover {
        span {
            transform: translateY(0%);
        }
    }

    span {
        width: 100%;
        display: flex;
        justify-content: center;
        color: white;

        position: absolute;
        bottom: 0;

        padding-top: 5px;
        padding-bottom: 10px;

        transform: translateY(150%);
        transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);

        background-color: ${({ rating }) =>
            rating === 'N/A'
                ? 'gray'
                : +rating > 80
                ? 'green'
                : +rating > 60
                ? '#b37a12'
                : 'red'};
    }
`;

export default GamesListRating;
