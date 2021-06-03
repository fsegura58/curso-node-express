const express = require('express')

const controller = require('../controllers/upload')

const router = express.Router()

const path = 'upload'

/**
 * Ruta: /upload POST
 */
 router.post(
    `/${path}`,
    controller.upload,
    controller.uploadFile
)

module.exports = router