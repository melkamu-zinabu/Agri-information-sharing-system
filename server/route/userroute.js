
import { Express } from "express"
import { logout } from "../controller/usercontroller";
const router=Express.Router();
router.post('/api/logout', authenticate,logout)