import React from "react";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import YoutubeIframe from "./YoutubeIframe";

const IframeRenderer = ({ endpoint }) => {
  const [user] = useContext(AuthContext);
  const [videoData, setVideoData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const video = await axios.post(
        `http://localhost:5500/youtube/${endpoint}`,
        {
          tokens: user.token,
        }
      );

      setVideoData(video.data);
      console.log(video.data);
    };
    if (endpoint) {
      fetchData();
    }
  }, []);

  console.log("helllllll", videoData);
  return (
    <div>
      {videoData
        ? videoData.map((video) => (
            <YoutubeIframe
              videoId={video.id.videoId}
              videoTitle={video.snippet.title}
              channelName={video.snippet.channelTitle}
            />
          ))
        : null}
    </div>
  );
};

export default IframeRenderer;
