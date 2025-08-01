import prisma from '../lib/prisma.js';


export const createProfile = async (req, res) => {
  const { fullName, bio, number, address } = req.body;
  const userId = req.body.id;  

  try {
    const profile = await prisma.profile.create({
      data: {
        fullName,
        bio,
        number,
        address,
        userId,  
      },
    });
    res.status(201).json({ message: 'Profile created', profile });
  } catch (err) {
    res.status(500).json({ message: 'Profile creation failed', error: err.message });
  }
};
export const getProfile = async (req, res) => {
  const userId = req.body.id; 

  try {
    const profile = await prisma.profile.findUnique({ where: { userId } });
    if (!profile) return res.status(404).json({ message: 'Profile not found' });
    res.json({ profile });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching profile', error: err.message });
  }
};
