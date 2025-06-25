import express from 'express'
import { createFeedback, getAllFeedback, getFeedbackByRoom } from '../controllers/feedbackController.js'

const feedbackRouter = express.Router()

feedbackRouter.post("/",createFeedback)
feedbackRouter.get("/",getAllFeedback)
feedbackRouter.get("/:roomId",getFeedbackByRoom)

export default feedbackRouter;