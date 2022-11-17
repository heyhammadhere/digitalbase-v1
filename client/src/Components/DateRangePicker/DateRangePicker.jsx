import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker as DatePicker } from "react-date-range";
import Icon from "../Icon";
import calendar from "../../Assets/icons/calendar.svg";
import collapse from "../../Assets/icons/collapse.svg";

const DateRangePicker = (props) => {
  return (
    <div className="youtube-header-filter" {...props}>
      <Icon src={calendar} margin="0rem 1rem 0rem 0rem" />
      <span>Last 30 Days</span>
      <Icon src={collapse} size={15} margin="0rem 0rem 0rem 1rem" />
    </div>
  );
};

export default DateRangePicker;
