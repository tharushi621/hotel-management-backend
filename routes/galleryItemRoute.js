import express from 'express'
import {createGalleryItem, getGalleryItems,} from '../controllers/galleryItemController.js'

const galleyItemRouter = express.Router()

galleyItemRouter.post("/",createGalleryItem)
galleyItemRouter.get("/",getGalleryItems)

export default galleyItemRouter;