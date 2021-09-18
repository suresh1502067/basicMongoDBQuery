const express = require('express');
const userController = require('./controller');

const createController= require('../oneToOne/controller/customerController');

const createTutorialController= require('../oneToMany/controller/tutorial');

const router = express.Router();



router.post('/insertUser',userController.insertBulkUser);
router.get('/deleteUser',userController.deleteUser);
router.post('/updateOne',userController.updateOne);
router.post('/updateMany',userController.updateMany);

// -------------- ONE TO ONE ---------------------//

router.post('/createCustomer',createController.createCustomer);
router.get('/showAllCustomerId',createController.showCardDetailWithCustomer);

// ----------------- ONE TO MANY--------------------//

router.post('/createTutorial',createTutorialController.createTutorial);
router.post('/createCommends',createTutorialController.createComments);
router.get('/getTutorialDetail',createTutorialController.getTutorialDetail);

// ------------------ MANY TO MANY -----------------//
router.post('/testQuery',createTutorialController.testQuery)


module.exports= router 