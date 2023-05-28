import Express  from "express";
import { upload } from "../controller/uploads.js";
import {addjobs,getjobsbyid,getjobs,updatejobs,deletejobs} from '../controller/jobcontroller.js'
const jobrouter=Express.Router();
//http://localhost:3000/addnews
jobrouter.post('/addjobs',authenticate,upload.single('image'),addjobs)
jobrouter.get("/getjobs/:id",authenticate,getjobsbyid)
jobrouter.get('/getjobs',authenticate,getjobs)
jobrouter.put('/updatejobs:id',authenticate,upload.single('image'),updatejobs)
jobrouter.delete('/deletejobs:id',authenticate,deletejobs)
export default jobrouter;