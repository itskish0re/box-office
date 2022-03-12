import React from "react";
import ShowCard from "./ShowCard";
import {FlexGrid} from "../../styles/Styled";
import IMAGE_NOT_FOUND from "../../assets/images/not-found.png"
import {useShows} from "../../misc/custom-hooks";

const ShowGrid = ({data}) =>{
    const [starredShow, dispachStarred] = useShows();

    return (
        <FlexGrid>
            {data.map(({show}) => {
                const isStarred = starredShow.includes(show.id);

                const onStarClick = () => {
                    if (isStarred){
                        dispachStarred({type: 'REMOVE', showID: show.id});
                    } else {
                        dispachStarred({type: 'ADD', showID: show.id});
                    }
                }
                return (
                    <ShowCard
                        key={show.id}
                        id={show.id}
                        name={show.name}
                        image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
                        onStarClick={onStarClick}
                        isStarred={isStarred}
                    />
                );
            })}
        </FlexGrid>
    );
}

export default ShowGrid;