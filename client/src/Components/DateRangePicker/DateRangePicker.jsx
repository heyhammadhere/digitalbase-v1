import { useEffect, useState } from "react";
import moment from "moment";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker as DatePicker } from "react-date-range";
import Icon from "../Icon";
import calendar from "../../Assets/icons/calendar.svg";
import collapse from "../../Assets/icons/collapse.svg";

const DateRangePicker = ({ range, setRange, isOpen, setIsOpen, ...rest }) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  }, [window.innerWidth]);
  return (
    <>
      <div className="youtube-header-filter-wrapper" {...rest}>
        <div
          className="youtube-header-filter"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon src={calendar} margin="0rem 1rem 0rem 0rem" />
          <span style={{ userSelect: "none" }}>
            Last {moment(range[0].endDate).diff(range[0].startDate, "days") + 1}{" "}
            Day(s)
          </span>
          <Icon src={collapse} size={15} margin="0rem 0rem 0rem 1rem" />
        </div>
        <DatePicker
          className={`date-range-filter ${isOpen ? "show" : ""}`}
          onChange={({ range }) => setRange([range])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          maxDate={new Date()}
          months={2}
          ranges={range}
          direction={windowSize < 950 ? "vertical" : "horizontal"}
        />
      </div>
    </>
  );
};

export default DateRangePicker;
