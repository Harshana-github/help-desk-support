import express from 'express'
import { getTicket, addTicket, getTicketById } from '../controllers/ticketControllers.js'

const router = express.Router()

router.get('/get-ticket', getTicket)
router.post('/add-ticket', addTicket)
router.put('/get-ticket/:id', getTicketById)

export default router 