const user = {
  username: "Paolo",
  loggedIn: true,
};

export const trendings = (req, res) => {
  const videos = [
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
  return res.json({ user, videos }); // res.send("Today's trend on Home Page");
};
export const watch = (req, res) => {
  return res.send(`Watch Video #${req.params.id}`);
};
export const editVideo = (req, res) => res.send("Edit Video");
export const deleteVideo = (req, res) => {
  return res.send(`Delete Video #${req.params.id}`);
};
export const uploadVideo = (req, res) => res.send("Upload Video");
export const search = (req, res) => res.send("Search Video");