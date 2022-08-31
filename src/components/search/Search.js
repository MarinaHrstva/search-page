
import { useState } from "react";
import { useEffect } from "react";
import { get } from "../../api/api";
import CamperCard from "../camper-card/CamperCard";

const Search = () => {

    const [allResults, setAllResults] = useState({});
    const [filtered, setFiltered] = useState([]);



    useEffect(() => {
        get()
            .then(res => (
                setAllResults(res)
            ))
    }, [])


    function onChangeHandler(e) {
        const searchedValue = e.target.value.toLowerCase();
        setFiltered(allResults.data.filter(x => x.attributes.name.toLowerCase().includes(searchedValue)))
    }

    console.log(filtered);

    return (
        <div className="search-view">
            <div className="search-bar">
                <input type="text" onChange={onChangeHandler} />
            </div>
            <div className="results-container">
                {filtered.map(x => <CamperCard camper={x} key={x.id} included={allResults.included}/>)}
            </div>
        </div>
    );
}

export default Search;