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
      ) : Object.keys(data).length ? (
        <div>
          <IframeRenderer videos={[data]} />
        </div>
      ) : (
        <p>No Data To Show</p>
      )}
    </div>
  );
};

export default TopVideo;
