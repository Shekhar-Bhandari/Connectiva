import express from "express";
import {
  createPost,
  createPostWithMedia,
  getAllPosts,
  updatePost,
  deletePost,
  likePost,
  unlikePost,
  commentOnPost,
  sharePost,
} from "../controllers/post.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import upload from "../middleware/multer.js";

const router = express.Router();

// Regular post creation
router.post("/", authMiddleware, createPost);

//  image/video upload
router.post(
  "/upload",
  authMiddleware,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "video", maxCount: 1 },
  ]),
  createPostWithMedia
);

router.get("/", getAllPosts);
router.put("/:postId", authMiddleware, updatePost);
router.delete("/:postId", authMiddleware, deletePost);
router.post("/:postId/like", authMiddleware, likePost);
router.post("/:postId/unlike", authMiddleware, unlikePost);
router.post("/:postId/comment", authMiddleware, commentOnPost);
router.post("/:postId/share", authMiddleware, sharePost);

export default router;
