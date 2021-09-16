import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 80 },
  description: { type: String, required: true, trim: true },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, required: true, default: 0 },
    rating: { type: Number, required: true, default: 0 },
  },
});

/**
 * Using Mongoose Middleware could be one option.
 * This function will execute before "save"
 * But "findOneAndUpdate" doesn't have access to this
 *
 * videoSchema.pre("save", async function () {
 *   this.hashtags = hashtagsFormatter(this.hashtags[0]);
 * });
 */

videoSchema.static("formatHashtags", function (hashtags) {
  return hashtags.split(",").map((tag) => {
    let word = tag.trim().replaceAll(" ", "_");
    return word.charAt(0) != "#" ? `#${word}` : word;
  });
});

const Video = mongoose.model("Video", videoSchema);
export default Video;
