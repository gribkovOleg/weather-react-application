export const GetDataWeather = (valueLocality, valueCoutry, changeData) => {
    fetch(`http://api.weatherstack.com/current?access_key=8c7a67463e076a13bd14170381fb599a&query=
    ${valueLocality},${valueCoutry}`)
        .then((response) => response.json())
        .then((json) => {
            json.success === false ? alert('invalid data entered!') : changeData(json)
        })
}
