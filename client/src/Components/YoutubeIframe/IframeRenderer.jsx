import YoutubeIframe from "./YoutubeIframe";

const IframeRenderer = ({ videos = [] }) => {
  return (
    <div>
      {videos?.map?.(({ videoId, videoTitle, channelTitle }, index) => (
        <YoutubeIframe
          key={index}
          videoId={videoId}
          videoTitle={videoTitle}
          channelName={channelTitle}
        />
      ))}
    </div>
  );
};

export default IframeRenderer;
