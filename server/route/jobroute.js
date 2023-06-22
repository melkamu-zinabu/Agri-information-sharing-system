import Express  from "express";
import { upload } from "../controller/uploads.js";
import { authenticate } from "../middleware/authenticate.js";
import { addJob } from "../controller/jobcontroller.js";
import { getjobsbyuserid } from "../controller/jobcontroller.js";
import { getjobs } from "../controller/jobcontroller.js";
import { updatejobs } from "../controller/jobcontroller.js";
import { deletejobs } from "../controller/jobcontroller.js";
const jobrouter=Express.Router();
//http://localhost:3000/addnews
jobrouter.post('/addjobs',addJob)
jobrouter.get("/getjobsbyuserid",getjobsbyuserid)
jobrouter.get('/getjobs',authenticate,getjobs)
jobrouter.put('/updatejobs/:id',authenticate,upload.single('image'),updatejobs)
jobrouter.delete('/deletejobs/:id',authenticate,deletejobs)
export default jobrouter;