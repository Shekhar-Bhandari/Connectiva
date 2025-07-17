
import prisma from '../lib/prisma.js'; 

export const createOrUpdateUserProfile = async (req, res) => {
  const {
    interestedField,
    keySkills,
    course,
    college,
    resumeUrl,
    portfolioLink,
    socialLinks,
  } = req.body;

  const userId = req.userId; 

  try {
    const existingProfile = await prisma.userProfile.findUnique({
      where: { userId: parseInt(userId) },
    });

    let profile;

    if (existingProfile) {
      profile = await prisma.userProfile.update({
        where: { userId: parseInt(userId) },
        data: {
          interestedField,
          keySkills,
          course,
          college,
          resumeUrl,
          portfolioLink,
          socialLinks,
        },
      });
    } else {
      profile = await prisma.userProfile.create({
        data: {
          interestedField,
          keySkills,
          course,
          college,
          resumeUrl,
          portfolioLink,
          socialLinks,
          user: { connect: { id: parseInt(userId) } },
        },
      });
    }

    res.status(200).json({ message: 'UserProfile upserted', profile });
  } catch (err) {
    res.status(500).json({ message: 'UserProfile upsert failed', error: err.message });
  }
};
