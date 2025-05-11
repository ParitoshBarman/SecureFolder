const express = require("express")
const {createBlogPost, getAllBlogPosts, getBlogPostById, updateBlogPost, deleteBlogPost } = require("../controller/blogPostController")
const authMiddleWare = require("../middleware/authMiddleware")
const roleMiddleWare = require("../middleware/roleMiddleware")

const router = express.Router()

router.post("/", authMiddleWare, createBlogPost)
router.get("/", getAllBlogPosts)
router.get("/:id", getBlogPostById)
router.patch("/:id", authMiddleWare, roleMiddleWare(["author", "admin"]), updateBlogPost)
router.delete("/:id", authMiddleWare, roleMiddleWare(["author", "admin"]), deleteBlogPost)


module.exports = router;