import React, {useState} from 'react';
import MainPageLayout from "../components/MainPageLayout.component";
import {apiGet} from "../misc/config";
import ShowGrid from "../components/show/ShowGrid";
import ActorGrid from "../components/actor/ActorGrid";

const Home = () => {
    const [input, setInput] = useState("");
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
            <input
                type="text"
                placeholder="Enter Text"
                onChange={onInputChange}
                onKeyDown={onKeyDown}
                value={input}
            />
            <div>
                <label htmlFor="shows-search">
                    shows
                    <input
                        id="shows-search"
                        type="radio"
                        value="shows"
                        checked={isShowSearch}
                        onChange={onRadioChange}
                    />
                </label>
                <label htmlFor="actors-search">
                    Actors
                    <input
                        id="actors-search"
                        type="radio"
                        value="people"
                        checked={!isShowSearch}
                        onChange={onRadioChange}
                    />
                </label>
            </div>
            <button type="button" onClick={onSearch} >
                Search
            </button>
            {renderResults()}
        </MainPageLayout>
    );
};

export default Home;