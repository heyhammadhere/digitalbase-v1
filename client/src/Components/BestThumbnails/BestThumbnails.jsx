import CardHeader from "../CardHeader";

const BestThumbnails = ({ loading, data = [], ...rest }) => {
  if (data.length > 3) data.length = 3;
  return (
    <div className="youtube-content-card-8" {...rest}>
      <div>
        <CardHeader title="Best Thumbnails" />
      </div>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          {data.map(({ thumbnails, title, likes }, index) => (
            <div key={index} className="thumbnail">
              <img className="thumbnail-img" src={thumbnails} alt="Thumbnail" />
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
