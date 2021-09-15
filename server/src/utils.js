export const hashtagsHandler = (hashtags) =>
  hashtags.split(",").map((tag) => {
    let word = tag.trim().replaceAll(" ", "_");
    return word.charAt(0) != "#" ? `#${word}` : word;
  });
