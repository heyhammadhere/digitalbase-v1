import axios from "./axios";

export const fetchChannelData = async (payload) => {
  const response = await axios.post("/youtube/channelData", payload);
  return response;
};

export const fetchChannelVideos = async (payload) => {
  const response = await axios.post("/youtube/videoData", payload);
  return response;
};
