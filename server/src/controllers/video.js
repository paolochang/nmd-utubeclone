import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ createdAt: "desc" });
    return res.json({ videos });
  } catch (error) {
    return res.json({ error });
  }
};

export const watch = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await Video.findById(id);
    if (!video) {
      throw new Error("Video cannot be found.");
    }
    return res.json({ video });
  } catch (error) {
    return res.status(404).json({ errorMessage: error });
  }
};

// This getEdit is not being used
export const getEdit = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await Video.findById(id);
    if (!video) {
      throw new Error("Video cannot be found.");
    }
    return res.json({ video });
  } catch (error) {
    return res.status(404).json({ errorMessage: error });
  }
};

export const postEdit = async (req, res) => {
  try {
    const { id, title, description, hashtags } = req.body;
    const video = await Video.exists({ _id: id });
    if (!video) {
      throw new Error("Video does not exist");
    }
    await Video.findByIdAndUpdate(id, {
      title,
      description,
      hashtags: Video.formatHashtags(hashtags),
    });
    return res.send({ status: true });
  } catch (error) {
    return res.status(404).send({ error });
  }
};

export const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;
    await Video.findByIdAndDelete(id);
    return res.json({ success: true });
  } catch (error) {
    return res.json({ success: false, error });
  }
};

export const getUpload = (req, res) => res.send("GET Upload Video");

export const postUpload = async (req, res) => {
  try {
    const { title, description, hashtags } = req.body;
    await Video.create({
      title,
      description,
      hashtags: Video.formatHashtags(hashtags),
    });
    return res.json({});
  } catch (error) {
    return res.status(400).json({ errorMessage: error._message });
  }
};

export const search = async (req, res) => {
  const { keyword } = req.query;
  let videos = [];
  if (keyword) {
    try {
      videos = await Video.find({
        title: { $regex: new RegExp(keyword, "i") },
      }).sort({ createdAt: "desc" });
      return res.json({ videos });
    } catch (error) {
      return res.status(400).json({ success: false, error });
    }
  }
};
