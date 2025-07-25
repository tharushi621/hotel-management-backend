import GalleryItem from "../models/gallery.js";

export function createGalleryItem(req,res)
{
    const user= req.user
    if(user==null){
        res.status(403).json({
            message:"Please login to create the gallery item"
        })
        return
    }
    if(user.type != "admin"){
        res.status(403).json({
            message:"You are not authorized to cfreate gallery items"
        })
        return
    }
    
    const galleryItem = req.body.item
    const newGalleryItem = new GalleryItem(galleryItem)
    newGalleryItem.save().then(
        ()=>{
            res.json({
                message:"Gallery item created successfully."
            })
        }
    ).catch(
        ()=>{
            res.status(500).json({
                message:"Gallery Item creation failed."
            })
        }
    )
}

export function getGalleryItems(req,res)
{
    GalleryItem.find().then(
        (galleryItemList)=>{
            res.json({
            list:galleryItemList
        })   
        }
    )
}