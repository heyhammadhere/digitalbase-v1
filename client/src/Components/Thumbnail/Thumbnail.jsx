const Thumbnail = ({ thumbnails = [] }) => {
  return thumbnails.map(({ img, title, views }) => (
    <div className="thumbnail">
      <img className="thumbnail-img" src={img} alt="Thumbnail" />
      <div>
        <p className="thumbnail-title">{title}</p>
        <small className="thumbnail-views">{views} Likes</small>
      </div>
    </div>
  ));
};

export default Thumbnail;
