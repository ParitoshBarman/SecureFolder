const express = require("express")
const {createBlogPost, getAllBlogPosts, getBlogPostById, updateBlogPost, deleteBlogPost } = require("../controller/blogPostController")
const authMiddleWare = require("../middleware/authMiddleware")
const roleMiddleWare = require("../middleware/roleMiddleware")

const router = express.Router()

router.post("/", createBlogPost)
router.get("/", getAllBlogPosts)
router.get("/:id", getBlogPostById)
router.patch("/:id", updateBlogPost)
router.delete("/:id", deleteBlogPost)


module.exports = router;