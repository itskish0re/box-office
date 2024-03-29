import styled from "styled-components";

export const MainDataWrapper = styled.div`
    display: flex;
    margin: 40px 0;

    img {
        min-width: 250px;
        width: 300px;
        max-height: 450px;
        border: 1px solid white;
        border-radius: 40px;
    }

    .text-side {
        margin-left: 20px;

        .summary {
            color: #5f5f5f;
            line-height: 1.5;
        }
    }

    @media only screen and (max-width: 768px) {
        flex-wrap: wrap;
        img {
            margin: auto;
        }
        .text-side {
            margin-left: 0;
            margin-top: 20px;
        }
    }
`;

export const Headline = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    h1 {
        margin: 0 20px 0 0;
        font-family: "Roboto Slab", serif;
        font-weight: 400;
        border-right: 1px solid white;
        padding-right: 25px;
    }

    div {
        display: flex;
        align-items: center;
        span {
            margin-left: 10px;
        }
    }
`;

export const TagList = styled.div`
    display: inline-flex;
    flex-wrap: wrap;

    span {
        margin: 6px 6px 0 6px;
        color: blue;
        background-color: #d0c9ff;
        padding: 3px 13px;
        border-radius: 20px;
        font-family: "Roboto Slab", sans-serif;
        font-size: 14px;
    }
`;
