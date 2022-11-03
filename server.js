const express = require('express')
const app = express()
const PORT = 8000

const speakEasy = {
    'Houston': {
        'businessName': 'Sugar Room',
        'address': '5120 Washington Ave., Houston, TX 77007',
        'priceRange':'idk yet'
},
    'Dallas': {
        'businessName': 'Magnum',
        'address': '215 E. Dallas Rd., Grapevine, TX 76051',
        'priceRange':'$$$'
},
    'Austin': {
        'businessName': 'Midnight Cowboy',
        'address': '313 E. 6th St., Austin, TX 78701',
        'priceRange':'$$$'
},
    }


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:cityName',(request,response)=>{
    const citysName = request.params.cityName
    if(speakEasy[citysName]){
        response.json(speakEasy[citysName])
    }else{
        console.log('Select a metropolitan city')
    }
    //response.json(speakEasy)
})

app.listen(process.env.PORT || PORT,() => {
    console.log(`The server is running on port ${PORT}!`)
})