import styled from "styled-components";

export const FlexGrid = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const SearchCard = styled.div`
    width: 300px;
    height: 100%;
    margin: 0 15px 40px;

    .img-wrapper {
        width: 100%;
        border-radius: 40px;
        height: 420px;
        overflow: hidden;
        box-shadow: 0px 0 8px 0px rgba(219, 219, 219, 0.5);
        img {
            object-fit: cover;
            height: 100%;
            width: 100%;
        }
    }

    h1 {
        margin: 10px 0;
        font-size: 21px;
    }

    p {
        margin: 0;
    }
`;

export const Star = styled.div`
    display: inline-block;
    width: 18px;
    height: 18px;
    background-color: ${(props) => (props.active ? "#ffc806" : "#ddd")};
    clip-path: polygon(
        50% 0%,
        61% 35%,
        98% 35%,
        68% 57%,
        79% 91%,
        50% 70%,
        21% 91%,
        32% 57%,
        2% 35%,
        39% 35%
    );
`;

export const ShowPageWrapper = styled.div`
    padding: 0 20px;

    @media only screen and (min-width: 516px) {
        padding: 0 40px;
    }

    @media only screen and (min-width: 768px) {
        padding: 0 60px;
    }

    @media only screen and (min-width: 992px) {
        padding: 0 80px;
    }
`;

export const InfoBlock = styled.div`
    margin-bottom: 40px;
    h2 {
        margin: 0 0 30px 0;
        font-size: 22px;
        font-family: "Roboto Slab", serif;
        font-weight: 400;
    }
`;

const RadioWrapper = styled.label`
    display: block;
    position: relative;
    padding-left: 25px;
    cursor: pointer;
    font-size: 13px;
    user-select: none;
    font-weight: 700;
    line-height: 1.65;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    span {
        position: absolute;
        top: 0;
        left: 0;
        height: 16px;
        width: 16px;
        background-color: #ffffff;
        border: 2px solid ${({ theme }) => theme.mainColors.blue};
        border-radius: 50%;
    }

    input:checked ~ span {
        background-color: #ffffff;
        border: 2px solid ${({ theme }) => theme.mainColors.blue};
    }

    span:after {
        content: "";
        position: absolute;
        display: none;
    }

    input:checked ~ span:after {
        display: block;
    }

    span:after {
        top: 4px;
        left: 4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${({ theme }) => theme.mainColors.blue};
    }
`;

export const CustomRadio = ({ label, ...restProps }) => {
    return (
        <RadioWrapper htmlFor={restProps.id}>
            {label}
            <input {...restProps} type="radio" />
            <span />
        </RadioWrapper>
    );
};
