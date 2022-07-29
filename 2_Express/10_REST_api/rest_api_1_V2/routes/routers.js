import express from 'express';
const router = express.Router();
import {indexController, homeController, singleController, newController, putController,  patchController, delController } from '../controllers/homeController.js';

router.get('/', indexController);
router.get('/persons/', homeController);
router.get('/persons/:pid', singleController);
router.post('/persons/', newController);
router.put('/persons/:pid', putController);
router.patch('/persons/:pid', patchController);
router.delete('/persons/:pid', delController);

export default router;