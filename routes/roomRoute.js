import express from 'express'
import { createRoom, deleteRooms, findRoomById, getRooms, getRoomsbyCategory, updateRoom } from '../controllers/roomController.js'

const roomRouter = express.Router()

roomRouter.post("/",createRoom)
roomRouter.delete("/:roomId",deleteRooms)
roomRouter.get("/",getRooms)
roomRouter.get("/by-category/:category",getRoomsbyCategory)
roomRouter.get("/:roomId",findRoomById)
roomRouter.put("/:roomId",updateRoom)


export default roomRouter;