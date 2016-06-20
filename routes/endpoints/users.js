var keystone = require('keystone'),
    User = keystone.list('User');

module.exports = {
  getAllUsers : function(req,res){
    _getAllUsers().then(function(result){
      return res.json({
        users:result
      })
    })
  },

  getUserById : function(req,res){
    User.model.findOne({_id:req.params.id}).exec(function (err, user) {
         if(!err){
           return res.json({
             user:user
           })
         }
     })
  }
}

//Remember promises???
function _getAllUsers(){
  return new Promise(function(resolve, reject) {
    User.model.find().exec(function (err, users) {
         if(!err){
           resolve(users);
         }
     })
  });
}
