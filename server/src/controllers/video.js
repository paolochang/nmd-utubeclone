import Video from "../models/Video";

const user = {
  username: "Paolo",
  loggedIn: true,
};

let videos = [
  {
    id: 1,
    title: "Welcome",
    rating: 4,
    comments: 2,
    createdAt: "1 day ago",
    views: 59,
  },
  {
    id: 2,
    title: "Funny Video",
    rating: 5,
    comments: 17,
    createdAt: "6 hours ago",
    views: 109,
  },
  {
    id: 3,
    title: "Kpop today",
    rating: 4,
    comments: 23,
    createdAt: "8 hours ago",
    views: 267,
  },
  {
    id: 4,
    title: "Breaking News",
    rating: 2,
    comments: 4,
    createdAt: "2 minutes ago",
    views: 39,
  },
];

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    return res.json({ user, videos });
  } catch (error) {
    return res.json({ error });
  }
};

export const watch = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await Video.findById(id);
    return res.json({ success: true, video });
  } catch (error) {
    return res.json({ success: false, errorMessage: error });
  }
};
// This getEdit is not being used
export const getEdit = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await Video.findById(id);
    return res.json({ success: true, video });
  } catch (error) {
    return res.json({ success: false, errorMessage: error });
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
    return res.send({ status: false, error });
  }
};
export const deleteVideo = (req, res) => {
  return res.send(`Delete Video #${req.params.id}`);
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
    return res.json({ success: true });
  } catch (error) {
    return res.json({ success: false, errorMessage: error._message });
  }
};
// export const search = (req, res) => res.send("Search Video");
