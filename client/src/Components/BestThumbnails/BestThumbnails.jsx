import CardHeader from "../CardHeader";

const BestThumbnails = ({ loading, ...rest }) => {
  return (
    <div className="youtube-content-card-8" {...rest}>
      <div>
        <CardHeader title="Best Thumbnails" />
      </div>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          {[].map(({ thumbnail, title, likes }, index) => (
            <div key={index} className="thumbnail">
              <img className="thumbnail-img" src={thumbnail} alt="Thumbnail" />
              <div>
                <p className="thumbnail-title">{title}</p>
                <small className="thumbnail-views">{likes} Likes</small>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BestThumbnails;
