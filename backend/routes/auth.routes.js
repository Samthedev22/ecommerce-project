import express from "express";
import { signin, signout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/signup", signup);
router.get("/signin", signin);
router.get("/signout", signout);

// router.get("/createaccount", async(req, res) => {
//     res.send("create account called")
// })
 
export default router;

