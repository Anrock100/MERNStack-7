import express from 'express';
const router = express.Router();
import { homeController, newController, saveController, pageNotFound } from '../controllers/homeController.js';

router.get('/', homeController);
router.get('/new', newController);
router.get('/save', saveController);
router.get('/edit', homeController);
router.get('/update', homeController);
router.get('/delete', homeController);
router.get('/remove', homeController);
router.get('/*', pageNotFound);

export default router;