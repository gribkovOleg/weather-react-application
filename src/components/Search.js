import React, { useContext } from 'react';
import { GetDataWeather } from './functions/GetDataWeather';
import { DataContext } from './ContainerWeather';

export default function SearchWeather() {

    const { valueLocality, valueCoutry, setData, setInputValue, setValueCountry } = useContext(DataContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        GetDataWeather(valueLocality, valueCoutry, setData);
        setInputValue('');
        setValueCountry('');
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    placeholder="Enter your location..."
                    onChange={(e) => setInputValue(e.target.value)}
                    value={valueLocality}
                />
                <input
                    type="text"
                    placeholder="Enter your country..."
                    onChange={(e) => setValueCountry(e.target.value)}
                    value={valueCoutry}
                />
                <button>Search</button>
            </form>
        </div>
    )
}

