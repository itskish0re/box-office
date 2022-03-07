import React, {useState} from 'react';
import MainPageLayout from "../components/MainPageLayout.component";

const Home = () => {
    const [input, setInput] = useState("");
    const onInputChange = (e) => {
        setInput(e.target.value);
    };
    const onSearch = () => {
        fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
            .then(r => r.json())
            .then(result => {
                console.log(result);
            });
    }

    return (
        <MainPageLayout>
            <input
                type="text"
                placeholder="Enter Text"
                onChange={onInputChange}
                value={input}
            />
            <div>
                <label htmlFor="shows-search">
                    shows
                    <input
                        id="shows-search"
                        type="radio"
                        value="shows"
                        checked={}
                        onChange={}
                    />
                </label>
                <label htmlFor="actors-search">
                    Actors
                    <input
                        id="actors-search"
                        type="radio"
                        value="people"
                        checked={}
                        onChange={}
                    />
                </label>
            </div>
            <button 
                type="button"
                onClick={onSearch}
            >
                Search
            </button>
        </MainPageLayout>
    );
};

export default Home;