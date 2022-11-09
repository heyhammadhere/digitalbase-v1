import Icon from "../Icon";
import arrowDown from "../../assets/icons/arrow-down.svg";
import arrowUp from "../../assets/icons/arrow-up.svg";
const Card = ({ heading, data, direction }) => {
  return (
    <div class="outlet-content-card-1">
      <div>
        <p className="card-header">{heading}</p>
      </div>
      <div>
        <p className="card-body">
          {data}
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
      <div>
        <p className="card-content">Compared To (136 Last Month)</p>
      </div>
    </div>
  );
};

export default Card;
