// Pour utiliser les variables d'envirronnement
require('dotenv').config()




// Déclaration des modules
const express = require('express')
const router = require('./app/router')



// Initialisation
const app = express()
const PORT = process.env.PORT || 3000;

// Setup de l'application
app.set('view engine', 'ejs')
app.set('views', './app/views')

// Pour rendre disponible les fichiers static
app.use(express.static('./public'))

app.use(router)



// Lancement de l'application 
app.listen(PORT, () => {
    console.log(`Application lancée sur le port ${PORT}`)
})