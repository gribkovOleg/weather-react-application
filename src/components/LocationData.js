import React, { useContext } from 'react'
import { DataContext } from './ContainerWeather'

export default function LocationData() {
    const {data} = useContext(DataContext)
    const {
            temperature,
            weather_icons: icons,
            observation_time: observationTime,
            weather_descriptions: weatherDescription
            } = data.current

    const { country, name } = data.location

    return (
        <section className="block__tempeatare-data">
            <p className="location">{name}, {country}</p>
            <p className="temperature">
                    <img src={icons[0]} />
                    <span>{temperature}°</span>
            </p>
            <p className="description-weather">{weatherDescription[0]}</p>
            <p>observation time in {observationTime}</p>
        </section>
    )
}