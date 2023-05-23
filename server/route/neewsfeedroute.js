import Express  from "express";
import { addnews, deletenews, getnews } from "../controller/newsfeedcontroller.js";
import { upload } from "../controller/uploads.js";
const router=Express.Router();
//http://localhost:3000/addnews
router.post('/addnews',upload.single('image'),addnews)
router.get('/getnews',getnews)
router.delete(`/deletenews/:id`,deletenews)
export default router;