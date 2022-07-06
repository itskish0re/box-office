import React, {useState} from 'react';
import MainPageLayout from "../../components/MainPageLayout.component";
import {apiGet} from "../../misc/config";
import ShowGrid from "../../components/show/ShowGrid";
import ActorGrid from "../../components/actor/ActorGrid";
import { useLastQuery } from "../../misc/custom-hooks";
import {
    SearchInput,
    RadioInputsWrapper,
    SearchButtonWrapper
} from "./Home.styled";
import {CustomRadio} from "../../styles/Styled";

const Home = () => {
    const [input, setInput] = useLastQuery();
    const [results, setResults] = useState(null);
    const [searchOption, setSearchOption] = useState("shows");
    const isShowSearch = searchOption === 'shows';
    const onSearch = () => {
        apiGet(`/search/${searchOption}?q=${input}`).then(result => {
            setResults(result);
        })
    }
    const onInputChange = (e) => {
        setInput(e.target.value);
    };

    const onKeyDown = e => {
        if(e.keyCode === 13){
            onSearch();
        }
    };

    const onRadioChange = e => {
        setSearchOption(e.target.value);
    };

    const renderResults = () => {
        if (results && results.length === 0){
            return <div>No results</div>;
        }
        if (results && results.length > 0){
            return results[0].show ? (
                <ShowGrid data={results} />
            ): (
                <ActorGrid data={results} />
            )
        }
        return null;
    }

    return (
        <MainPageLayout>
            <SearchInput
                type="text"
                placeholder="Enter Text"
                onChange={onInputChange}
                onKeyDown={onKeyDown}
                value={input}
            />

            <RadioInputsWrapper>
               <div>
                   <CustomRadio
                       label="Shows"
                       id="shows-search"
                       value="shows"
                       checked={isShowSearch}
                       onChange={onRadioChange}
                   />
               </div>
               <div>
                   <CustomRadio
                       label="Actor"
                       id="actors-search"
                       value="people"
                       checked={!isShowSearch}
                       onChange={onRadioChange}
                   />
               </div>
            </RadioInputsWrapper>

            <SearchButtonWrapper>
                <button type="button" onClick={onSearch} >
                    Search
                </button>
            </SearchButtonWrapper>
            {renderResults()}
        </MainPageLayout>
    );
};

export default Home;