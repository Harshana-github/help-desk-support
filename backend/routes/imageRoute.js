import express from 'express'
import multer from 'multer'
import path from 'path'
const router = express.Router()

import Image from '../models/imageModel.js'



const storage = multer.diskStorage({
    destination: function(req,file, cb) {
        cb(null, 'frontend/public/images')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png']
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}
let upload = multer({ storage, fileFilter })
router.route('/add').post(upload.single('photo'), (req, res) => {
    const price = req.body.price
    const ticketId = req.body.ticketId
    const photo = req.file.filename

    const newImageData = {
        price,
        photo,
        ticketId : ticketId
    }

    const newUser = new Image(newImageData)

    newUser.save()
        .then(() => res.json('Image Added'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/rec').get((req,res) => {
    Image.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err))
})




export default router