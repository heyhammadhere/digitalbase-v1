import CardHeader from "../CardHeader";

const TopKeywords = ({ loading, data = [], ...rest }) => {
  return (
    <div className="youtube-content-card-6" {...rest}>
      <div>
        <CardHeader title="Top 3 Keywords" action="Details" />
      </div>
      {loading ? (
        "Loading..."
      ) : data.length ? (
        <div>
          {data.map((keyword, index) => (
            <div key={index} className="keyword">
              <span className="keyword-index">
                {index < 9 ? `0${++index}` : ++index}
              </span>
              {" -- "}
              <button className="keyword-btn">{keyword}</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No Data To Show</p>
      )}
    </div>
  );
};

export default TopKeywords;
