import React from 'react';
import Title from "./title/Title.component";
import Navs from "./navs/Navs.components";

const MainPageLayout = ({children}) => {
    return (
        <div>
            <Title
                title="Box Office"
                subtitle="Are you looking for a movie or an actor?"
            />
            <Navs/>
            {children}
        </div>
    );
};

export default MainPageLayout;