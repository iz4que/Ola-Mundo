const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
const port = 3000
mongoose.connect('mongodb+srv://ia765350:izaque1237@cluster0.yume6ad.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp')

const Filme = mongoose.model('Filme', {
    title: String,
    description: String,
    image_url: String,
    trailer_url: String,
})

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/', async (req, res) => {
    const filme = new Filme({
        title: "Star Wars - Guerra dos Clones",
        description: "The galaxy is divided. Attacking quickly after the Battle of Geonosis, Count Dooku 's droid army took control of key hyperspace routes, separating the Republic from the majority of its clone army. With few troops available, Jedi generals are unable to establish themselves in the Outer Rim as more and more planets choose to join Dooku's Separatists. While the Jedi are busy with war , there is no one to keep the peace. Chaos and crime spread, and the innocent become victims in a lawless galaxy. The son of crime lord Jabba the Hutt has been kidnapped by a rival band of pirates. Desperate to save his son, Jabba issues a cry for help. A request the Jedi are wary of answering",
        image_url: "https://upload.wikimedia.org/wikipedia/pt/thumb/7/72/Star_wars_the_clone_wars.jpg/250px-Star_wars_the_clone_wars.jpg",
        trailer_url: "https://www.youtube.com/watch?v=6pRqU87HBuI"
    })

    await filme.save().then(() => console.log('Meow'))
    res.send(filme)
})

app.listen(port, () => {
    console.log('App runing')
})


/*app.post('/agua', async (req, res) => {
    const filme = new Filme({
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url
    })*/

