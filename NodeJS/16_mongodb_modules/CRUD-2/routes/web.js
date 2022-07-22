import express from 'express';
const router = express.Router();

import {homeController, showLoginController, doLoginController} from '../controllers/homeController.js';

router.get('/', homeController);
router.get('/showLogin', showLoginController);
router.get('/getLogin', doLoginController)
export default router;
