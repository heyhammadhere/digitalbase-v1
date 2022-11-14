import Icon from "../Icon";
import arrowDown from "../../Assets/icons/arrow-down.svg";
import arrowUp from "../../Assets/icons/arrow-up.svg";
import arrowRight from "../../Assets/icons/arrow-right.svg";
const Card = ({
  children,
  heading,
  action,
  stats,
  previous,
  direction,
  ...rest
}) => {
  return (
    <div {...rest}>
      {heading ? (
        <div className={`${action ? "card-action" : ""}`}>
          <p className="card-header">{heading}</p>
          {action ? (
            <span className="card-action-button">
              {action}
              <Icon src={arrowRight} size={10} margin="0rem 0rem 0rem 0.5rem" />
            </span>
          ) : null}
        </div>
      ) : null}
      {stats ? (
        <div>
          <p className="card-body">
            {stats}
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
          <p className="card-content">Compared To ( {previous} Last Month)</p>
        </div>
      ) : null}
      {children ? children : null}
    </div>
  );
};

export default Card;
