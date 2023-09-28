const User = require("../model/user");
const jwt = require('jsonwebtoken');

async function getAllUser(req, res) {
    const users = await User.findAll();
    res.json(users)
}
async function getUserByEmail(req, res) {
    const user = await User.findOne({where: {Email:req.params.Email}});
    res.json(user)
}

async function addUser(req, res) {
    if (!req.body.email || !req.body.password || !req.body.firstname || !req.body.lastname || !req.body.phoneNumber) {
      res.status(400).json({ mess: "Champs obligatoires : Email, Mot de passe, Prenom, Nom et Role." });
      return;
    }
  
    const createdUser = await User.create({
      Email: req.body.email,
      Password: req.body.password,
      Firstname: req.body.firstname,
      Lastname: req.body.lastname,
      Address: req.body.Address,
      PhoneNumber: req.body.phoneNumber
    });
  
    setTimeout(async () => {
        const createdCommande = await Commande.create({
          UserId: createdUser.id,
          Status: 0
        });
      }, 5000);
  
    res.json(createdUser);
}
  
async function updateUser(req, res){
    if (!req.user || !req.body.Email || !req.body.Password || !req.body.Name || !req.body.Surname || !req.body.Admin) {
        res.status(400).json({ mess: "Champs obligatoires : Email, Mot de passe, Prenom, Nom et Role." })
        return
    }
    const user = await User.update({
        Email: req.body.Email,
        Password: req.body.Password,
        Name: req.body.Name,
        Surname: req.body.Surname,
        Address: req.body.Address,
        Admin: req.body.Admin
    });
    res.json(user)
}

async function deleteUser(res, req){
    if (req.user & req.body.Admin){
        const user = await User.findOne({where: {Id: req.user.dataValues.Id}})
        user.destroy()
        res.json({mess: "Utilisateur supprimé."})
    }
    res.status(401).json({mess: "Veuillez vous connecter."})
}

async function connectUser(req, res) {
    if (!req.body.Email || !req.body.Password) {
        res.status(400).json({ mess: "Champs obligatoires : Email et Password." })
        return
    }
    const user = await User.findOne({ where: { Email: req.body.Email } });
    if (!user || user.Password != req.body.Password) {
        res.status(403).json({ mess: "Utilisateur ou mot de passe incorrect." })
        return
    }
    var token = jwt.sign({ ...user }, 'ma clé');
    res.json({ token })
}

module.exports = { getAllUser, addUser, connectUser, updateUser, deleteUser, getUserByEmail }