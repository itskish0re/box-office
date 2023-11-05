import React from "react";
import { DetailsWrapper } from "./Detalis.styled";

const Details = ({ status, premiered, network }) => {
    return (
        <DetailsWrapper>
            <p>
                Status: <span>{status}</span>
            </p>
            <p>
                Premired <span>{premiered}</span>{" "}
                {network ? `on <span>${network.name}<span>` : null}
            </p>
        </DetailsWrapper>
    );
};

export default Details;
