const YoutubeIframe = ({
  src = "",
  title = "",
  artist = "",
  views = "",
  ...rest
}) => {
  return (
    <div {...rest}>
      <div className="youtube-video-wrapper">
        <iframe
          width="560"
          height="315"
          src={src}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="youtube-video-meta">
        {title} <span>- {artist} </span>
      </p>
      <p className="youtube-video-description">{views} Views</p>
    </div>
  );
};

export default YoutubeIframe;
