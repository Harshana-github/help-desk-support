import express from 'express'
import { getTechPeoples, getTechPeopleById } from '../controllers/techPeopleControllers.js'

const router = express.Router()

router.get('/get-tech', getTechPeoples)
router.get('/get-tech/:id', getTechPeopleById)


export default router 