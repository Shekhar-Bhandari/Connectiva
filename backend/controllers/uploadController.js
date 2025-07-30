import prisma from "../lib/prisma.js";
import path from "path";

export const createPostWithMedia = async (req, res) => {
  const { title, description } = req.body;
  const userId = req.user.id;

  const imageFile = req.files?.image?.[0];
  const videoFile = req.files?.video?.[0];

  try {
    const post = await prisma.post.create({
      data: {
        title,
        description,
        imagePath: imageFile ? `/uploads/${imageFile.filename}` : null,
        videoPath: videoFile ? `/uploads/${videoFile.filename}` : null,
        userId,
      },
    });

    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create post" });
  }
};
