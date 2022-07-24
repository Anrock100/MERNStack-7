import express from 'express';
const router = express.Router();
import { homeController, newController, saveController, pageNotFound } from '../controllers/homeController.js';

router.get('/', homeController); //Display all
router.get('/new', newController); //entry form
router.get('/save', saveController); //save new record
router.get('/edit', homeController); //edit form
router.get('/update', homeController); //save update
router.get('/delete', homeController); //delete form
router.get('/remove', homeController); //save delete
router.get('/*', pageNotFound); //page not found

export default router;