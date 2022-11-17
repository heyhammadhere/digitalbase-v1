import Icon from "../Icon";
import arrowRight from "../../Assets/icons/arrow-right.svg";

const CardHeader = ({ title, action, ...rest }) => {
  return (
    <div className="card-action" {...rest}>
      <p className="card-header">{title}</p>
      {action ? (
        <span className="card-action-button">
          {action}
          <Icon src={arrowRight} size={10} margin="0rem 0rem 0rem 0.5rem" />
        </span>
      ) : null}
    </div>
  );
};

export default CardHeader;
