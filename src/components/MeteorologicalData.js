import React, { useContext } from 'react'
import { DataContext } from './ContainerWeather'

export default function MeteorologicalData() {
    const { data } = useContext(DataContext)
    const {
            visibility,
            feelslike,
            wind_dir: windDir,
            pressure,
            humidity,
            precip,
            wind_speed: windSpeed,
            } = data.current

    return (
        <section className="block__meteo-data">
            <div>
                <p>feelslike {feelslike}°</p>
                <p>wind {windDir} {windSpeed} m/s</p>
                <p>visibility {visibility} km</p>
            </div>
            <div className="meteo-info">
                <p>pressure {pressure} Pa</p>
                <p>humidity {humidity}%</p>
                <p>precipitate {precip} mm</p>
            </div>
        </section>
    )
}