import CardHeader from "../CardHeader";
import Icon from "../Icon";
import arrowDown from "../../Assets/icons/arrow-down.svg";
import arrowUp from "../../Assets/icons/arrow-up.svg";
const Card = ({ heading, stats, previous, duration, loading, ...rest }) => {
  const direction =
    stats < previous ? "down" : stats > previous ? "up" : "neutral";
  return (
    <div {...rest}>
      <CardHeader title={heading} />
      {loading ? (
        "Loading..."
      ) : stats !== undefined ? (
        <>
          {stats !== undefined ? (
            <div>
              <p className="card-body">
                <span>{stats}</span>
                <Icon
                  src={
                    direction === "up"
                      ? arrowUp
                      : direction === "down"
                      ? arrowDown
                      : ""
                  }
                  size={10}
                  margin="0rem 0.25rem 0rem 0.5rem"
                />
                <span
                  className="card-data-percentage"
                  style={{
                    color:
                      direction === "up"
                        ? "#8AD670"
                        : direction === "down"
                        ? "#D6566D"
                        : "#ffff00",
                  }}
                >
                  {(() => {
                    try {
                      const change = stats - previous;
                      const inPercentage = (change / previous) * 100;
                      return [NaN, Infinity, -Infinity].includes(inPercentage)
                        ? 0
                        : Math.floor(inPercentage);
                    } catch (error) {
                      return 0;
                    }
                  })()}
                  %
                </span>
              </p>
            </div>
          ) : null}
          {previous !== undefined ? (
            <div>
              <p className="card-content">
                Compared To ( {previous} Last {duration} Days)
              </p>
            </div>
          ) : null}
        </>
      ) : (
        <p>No Data To Show</p>
      )}
    </div>
  );
};

export default Card;
