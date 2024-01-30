// Déclaration des modules
const express = require('express')

// Premet l'utilisation des routes
const router = express.Router()
const mainController = require('./controllers/mainController')
const promoController = require('./controllers/promoController')

// Notre route home, celle par défault à l'arrivée dans le site
router.get('/',
    mainController.homePage
);

router.get('/promos',
    promoController.promoList
)



// Permet de récupérer le router dans l'application
module.exports = router