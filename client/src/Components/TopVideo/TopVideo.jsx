import ActionButton from "../CardHeader";
import IframeRenderer from "../YoutubeIframe/IframeRenderer";

const TopVideo = ({ loading, data = {}, ...rest }) => {
  return (
    <div className="youtube-content-card-7" {...rest}>
      <div>
        <ActionButton title="Top Video" action="Details" />
      </div>
      {loading ? (
        "Loading"
      ) : (
        <div>
          <IframeRenderer videos={[data]} />
        </div>
      )}
    </div>
  );
};

export default TopVideo;
