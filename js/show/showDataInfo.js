const url = 'data/personalInfo/lifesheet.json'

fetch(url)
    .then( respuesta => respuesta.json())
    .then( data => showdata(data))
    .catch(error=>console.log(error))

const showdata = (data) => {
    console.log(data)
    document.querySelector('title').innerHTML = "Ing. " + data[0]['personalData']['name']
    document.querySelector('h3').innerHTML = data[0]['personalData']['name']
    document.querySelector('h6').innerHTML = data[0]['profession']
    document.querySelectorAll('a.btn.btn-lg.btn-general.btn-white.smooth-scroll')[0].innerHTML = "Ver Trabajos"
}