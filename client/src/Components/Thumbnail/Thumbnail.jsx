const Thumbnail = ({ thumbnails = [] }) => {
  return thumbnails.map(({ thumbnails, title, likes }, index) => (
    <div key={index} className="thumbnail">
      <img className="thumbnail-img" src={thumbnails} alt="Thumbnail" />
      <div>
        <p className="thumbnail-title">{title}</p>
        <small className="thumbnail-views">{likes} Likes</small>
      </div>
    </div>
  ));
};

export default Thumbnail;
