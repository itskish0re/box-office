import React from "react";
import ShowCard from "./ShowCard";
import {FlexGrid} from "../../styles/Styled";
import IMAGE_NOT_FOUND from "../../assets/images/not-found.png"

const ShowGrid = ({data}) =>{
    return (
        <FlexGrid>
            {data.map(({show}) => (
                <ShowCard>
                    key={show.id}
                    id={show.id}
                    name={show.name}
                    image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
                </ShowCard>
            ))}
        </FlexGrid>
    );
}

export default ShowGrid;