

var homeController = (request, response) => {
    response.render('home');//display all persons in home.ejs.
};

var showLoginController = (request, response) => {
    response.render('login');
};

var doLoginController = (request, response) => {
    //receive user, and password (info)
    //send user and password to function of database module
    //receive login result from function of database module
    //if result is true alert with welcome message else alert with error message
    //if result is true than redirect to epanel (another router) -> users routers
    // user router manage users (add, update, delete, search, display all)
    response.send('Welcome to doLogin');
};

export { homeController, showLoginController, doLoginController };