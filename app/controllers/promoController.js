// je veux que promo controller soit un objet dans lequel il y a une fonction qui s'appelle promoList et qui envoie la page promos, ceux qui ont de l'avance faite la route aussi
// On va déclarer toute nos fonction main dans un objet

const promoController = {
    promoList: (req, res) => { res.render('promos') }
}

module.exports = promoController