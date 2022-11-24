import CardHeader from "../CardHeader";
import IframeRenderer from "../YoutubeIframe/IframeRenderer";

const LastVideos = ({ loading, data = [], ...rest }) => {
  return (
    <div className="youtube-content-card-4" {...rest}>
      <div>
        <CardHeader title="Last 3 Videos With Views" />
      </div>
      {loading ? (
        "Loading..."
      ) : data.length ? (
        <div>
          <IframeRenderer videos={data} />
        </div>
      ) : (
        <p>No Data To Show</p>
      )}
    </div>
  );
};

export default LastVideos;
