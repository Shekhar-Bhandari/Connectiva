import prisma from "../prisma/client.js";

// Create a post
export const createPost = async (req, res) => {
  const { title, description } = req.body;
  const userId = req.user.id;

  try {
    const post = await prisma.post.create({
      data: {
        title,
        description,
        userId,
      },
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: "Failed to create post" });
  }
};

// Update a post
export const updatePost = async (req, res) => {
  const userId = req.user.id;
  const postId = parseInt(req.params.postId);
  const { title, description } = req.body;

  try {
    const post = await prisma.post.findUnique({ where: { id: postId } });

    if (!post || post.userId !== userId) {
      return res.status(403).json({ error: "Unauthorized or post not found" });
    }

    const updated = await prisma.post.update({
      where: { id: postId },
      data: { title, description },
    });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update post" });
  }
};

// Delete a post
export const deletePost = async (req, res) => {
  const userId = req.user.id;
  const postId = parseInt(req.params.postId);

  try {
    const post = await prisma.post.findUnique({ where: { id: postId } });

    if (!post || post.userId !== userId) {
      return res.status(403).json({ error: "Unauthorized or post not found" });
    }

    await prisma.like.deleteMany({ where: { postId } });
    await prisma.comment.deleteMany({ where: { postId } });
    await prisma.post.delete({ where: { id: postId } });

    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete post" });
  }
};

// Get all posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        user: true,
        likes: true,
        comments: {
          include: { user: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};

// Like a post
export const likePost = async (req, res) => {
  const userId = req.user.id;
  const postId = parseInt(req.params.postId);

  try {
    await prisma.like.create({
      data: { userId, postId },
    });
    res.json({ message: "Post liked" });
  } catch (error) {
    res.status(400).json({ error: "Already liked or invalid" });
  }
};

// Unlike a post
export const unlikePost = async (req, res) => {
  const userId = req.user.id;
  const postId = parseInt(req.params.postId);

  try {
    await prisma.like.delete({
      where: {
        userId_postId: { userId, postId },
      },
    });
    res.json({ message: "Post unliked" });
  } catch (error) {
    res.status(400).json({ error: "Not liked or invalid post" });
  }
};

// Comment on a post
export const commentOnPost = async (req, res) => {
  const userId = req.user.id;
  const postId = parseInt(req.params.postId);
  const { content } = req.body;

  try {
    const comment = await prisma.comment.create({
      data: { content, userId, postId },
    });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: "Failed to add comment" });
  }
};

// Share a post
export const sharePost = async (req, res) => {
  const postId = parseInt(req.params.postId);

  try {
    const updated = await prisma.post.update({
      where: { id: postId },
      data: { shares: { increment: 1 } },
    });
    res.json({ message: "Post shared", shares: updated.shares });
  } catch (error) {
    res.status(500).json({ error: "Failed to share post" });
  }
};
