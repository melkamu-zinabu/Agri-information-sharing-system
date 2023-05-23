import Express  from "express";
import { addcrops, getcrops } from "../controller/marketdatacontroller.js";

const mdrouter=Express.Router();
//http://localhost:3000/addnews
mdrouter.post('/addcrop',addcrops)
mdrouter.get("/crop-data/:cropName",getcrops)
export default mdrouter;