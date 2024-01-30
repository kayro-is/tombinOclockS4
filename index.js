// Pour utiliser les variables d'envirronnement
require('dotenv').config()
console.log(process.env)




// Déclaration des modules
const express = require('express')

// Initialisation
const app = express()
const PORT = process.env.PORT || 3000;



// Lancement de l'application 
app.listen(PORT, () => {
    console.log(`Application lancée sur le port ${PORT}`)
})