import CardHeader from "../CardHeader";
import Icon from "../Icon";
import arrowDown from "../../Assets/icons/arrow-down.svg";
import arrowUp from "../../Assets/icons/arrow-up.svg";
import arrowRight from "../../Assets/icons/arrow-right.svg";
const Card = ({ heading, stats, previous, direction, loading, ...rest }) => {
  return (
    <div {...rest}>
      <CardHeader title={heading} />
      {loading ? (
        "Loading..."
      ) : (
        <>
          {stats ? (
            <div>
              <p className="card-body">
                {direction ? (
                  <Icon
                    src={direction === "up" ? arrowUp : arrowDown}
                    size={10}
                    margin="0rem 0.5rem"
                  />
                ) : null}
                <span
                  className="card-data-percentage"
                  style={{
                    color: direction === "up" ? "#8AD670" : "#D6566D",
                  }}
                >
                  5%
                </span>
              </p>
            </div>
          ) : null}
          {previous ? (
            <div>
              <p className="card-content">
                Compared To ( {previous} Last Month)
              </p>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

export default Card;
