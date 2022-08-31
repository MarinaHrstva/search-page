
import { useState } from "react";
import { useEffect } from "react";
import { get } from "./api/api";

const Search = () => {

    const [allResults, setAllResults] = useState();


    useEffect(() => {
        get()
            .then(res => (
                setResults(res.data)
            ))
    }, [])

    return (
        <div className="search-view">
            <div className="search-bar">
                <input type="text" />
            </div>
            <div className="results-container">

            </div>
        </div>
    );
}

export default Search;