export const trendings = (req, res) => res.send("Today's trend on Home Page");
export const watch = (req, res) => {
  return res.send(`Watch Video #${req.params.id}`);
};
export const editVideo = (req, res) => res.send("Edit Video");
export const deleteVideo = (req, res) => {
  return res.send(`Delete Video #${req.params.id}`);
};
export const uploadVideo = (req, res) => res.send("Upload Video");
export const search = (req, res) => res.send("Search Video");
