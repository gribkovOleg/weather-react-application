import React, { useContext } from 'react'
import MeteorologicalData from './MeteorologicalData'
import LocationData from './LocationData'
import { DataContext } from './ContainerWeather'

export default function DataWeather () {
    const {data} = useContext(DataContext)
    
    if (!data) return null
    
    return (
        <div>
            < LocationData />
            <MeteorologicalData />
        </div>
    )
}