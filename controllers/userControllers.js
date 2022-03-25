let usuarios = [
    {
        id: 1,
        nombre: 'Juan',
        edad:23,
    },
    {
        id: 2,
        nombre: 'Cristian',
        edad:27,
    },
    {
        id: 3,
        nombre: 'Sergio',
        edad:30,
    },
]

let userControllers = {

    getUsers: function (req, res){
        res.render('index', { 
            title: 'Usuarios',
            usuarios: usuarios
          });
    }
    

}


  module.exports = userControllers;