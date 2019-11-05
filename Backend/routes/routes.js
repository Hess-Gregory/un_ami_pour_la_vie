const express = require('express');
const expressJWT = require('express-jwt');
const config = require('../config/index');
const userRoutes = require('../routes/user.routes');
const authRoutes = require('../routes/auth.routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger/swagger');

// Tous les itinéraires sont définis ici.
const router = express.Router();

//router.get('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));
router.use('/api-paths',swaggerUi.serve,swaggerUi.setup(swaggerDocument));
router.use('/auth', authRoutes);



//valider toutes les API avec le token jwt. (a commenter en cas de probléme de token)
router.use(expressJWT({secret:config.jwtSecret}));



// Si jwt est valide, stocker les données de l'utilisateur dans une session locale.
 router.use((req, res, next) => {   
     const authorization = req.header('Authorization');
     if ((authorization === undefined)) {
         next();
     } else {
         res.locals.session = JSON.parse(Buffer.from((authorization.split(' ')[1]).split('.')[1], 'base64').toString()); 
                if (res.locals.session.role ===6){UserRole = "Super-Admin", AuthRole = "SUP"};
                if (res.locals.session.role ===5){UserRole  = "Admin", AuthRole = "ADM" };
                if (res.locals.session.role ===4){UserRole  = "Modérateur", AuthRole = "MOD"};
                if (res.locals.session.role ===3){UserRole  = "Rédacteur", AuthRole = "RED"};
                if (res.locals.session.role ===2){UserRole  = "Membre", AuthRole = "MEM"};
                if (res.locals.session.role ===1){UserRole  = "Visiteur", AuthRole = "VIS"};                                        
        console.log('"',res.locals.session.username,'" est connecté avec son token valid sous le role de ', UserRole);
         next();
     }
});

// Charger des itinéraires utilisateur
router.use('/users', userRoutes);

module.exports = router;