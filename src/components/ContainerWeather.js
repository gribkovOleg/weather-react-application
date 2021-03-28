import React, { useState } from 'react'
import '../styles/style.css'
import SearchWeather from './Search'
import DataWeather from './DataWeather'

export const DataContext = React.createContext()

export default function ContainerWeather() {
    
    const [valueLocality, setInputValue] = useState('')
    const [valueCoutry, setValueCountry] = useState('')
    const [data, setData] = useState(null)

    return (
        <DataContext.Provider value={
                    {
                        valueLocality: valueLocality,
                        setInputValue: setInputValue,
                        data: data,
                        setData: setData,
                        valueCoutry: valueCoutry,
                        setValueCountry: setValueCountry
                    }
                }>
            <div className="container">
                < SearchWeather />
                < DataWeather />
            </div>
        </DataContext.Provider>
    )
}