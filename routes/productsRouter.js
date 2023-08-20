import * as controller from "../controllers/productsController.js"
import express from 'express'

export const router = express.Router();

router.get('/', controller.getProducts)
router.get('/users/:id',controller.getProductsByID)
// router.post('/',controller.newProduct)