import React from 'react';
import { useState } from 'react';

const SearchBox = () => {
    const [search, setSearch] = useState({});

    const changeSearch = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setSearch(values => ({...values, [name]: value}));
        console.log(search);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);
    }

    return (
        <div className='search-container'>
            <div>
                Find your new home...
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="location" 
                        placeholder="Enter postcode or location"
                        value={search.location || ""} 
                        onChange={changeSearch}
                    />
                    <input list="prices" name="price" placeholder="Min. Price" onChange={changeSearch}/>
                    <datalist id="prices" >
                        <option value="£0-£24999"/>
                        <option value="£25000-£49999"/>
                        <option value="£50000-£74999"/>
                        <option value="£75000-£99999"/>
                        <option value="£100000+"/>
                    </datalist>
                    <input list="bedrooms" name="bedrooms" placeholder="Min. Bedrooms" onChange={changeSearch}/>
                    <datalist id="bedrooms">
                        <option value="Studio"/>
                        <option value="1"/>
                        <option value="2"/>
                        <option value="3+"/>
                    </datalist>
                    <input type="submit" value="Search"/>
                </form>
            </div>
        </div>
    )
}

export default SearchBox