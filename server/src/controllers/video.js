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

export const trendings = (req, res) => {
  return res.json({ user, videos }); // res.send("Today's trend on Home Page");
};
export const watch = (req, res) => {
  const { id } = req.params;
  return res.json(videos.filter((_, index, array) => array[index].id == id));
};
export const getEdit = (req, res) => {
  console.log(`EDIT VIDEO`, req);
  return res.send("Edit Video");
};
export const postEdit = (req, res) => {
  const { id, title } = req.body;
  let editing = videos.filter((_, index, array) => array[index].id == id);
  const index = videos.findIndex((v) => v.id == id);
  editing[0].title = title;
  videos.splice(index, 1, ...editing);
  return res.send({ status: true });
};
export const deleteVideo = (req, res) => {
  return res.send(`Delete Video #${req.params.id}`);
};
export const uploadVideo = (req, res) => res.send("Upload Video");
export const search = (req, res) => res.send("Search Video");
