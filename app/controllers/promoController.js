// je veux que promo controller soit un objet dans lequel il y a une fonction qui s'appelle promoList et qui envoie la page promos, ceux qui ont de l'avance faite la route aussi

// On va déclarer toute nos fonction main dans un objet
const promos = require('../../data/promos.json')
const promoController = {
    promoList: (req, res) => { res.render('promos', { promos })}
}

module.exports = promoController