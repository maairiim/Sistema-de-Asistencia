module.exports = {
    index : function (req, res) {
        res.render('index',{
            isAuthenticated: req.isAuthenticated(),
            user: req.user
        });
        
    }
}