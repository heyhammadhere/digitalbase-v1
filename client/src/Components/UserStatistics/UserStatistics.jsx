import ActionButton from "../CardHeader";
import Chart from "../Chart";

const UserStatistics = ({ loading, data = [], ...rest }) => {
  return (
    <div className="youtube-content-card-5" {...rest}>
      <div>
        <ActionButton title="User Statistics" action="Details" />
      </div>
      {loading ? (
        "Loading..."
      ) : data.length ? (
        <Chart
          options={{
            chart: {
              type: "spline",
              height: 150,
              backgroundColor: "#24223b",
            },
            title: {
              text: "",
            },
            xAxis: {
              type: "datetime",
            },
            yAxis: {
              title: {
                text: "",
              },
              visible: false,
            },
            plotOptions: {
              spline: {
                lineWidth: 3.5,
                color: {
                  linearGradient: { x1: 0, x2: 1 },
                  stops: [
                    [0, "#9583FE"],
                    [1, "#FE82DB"],
                  ],
                },
                marker: {
                  enabled: false,
                },
                pointInterval: 3600000,
                pointStart: Date.UTC(2022, 5, 13, 0, 0, 0),
              },
            },
            legend: { enabled: false },
            series: [
              {
                name: "Views",
                data: data,
              },
            ],
          }}
        />
      ) : (
        <p>No Data To Show</p>
      )}
    </div>
  );
};

export default UserStatistics;
