import { useEffect, useState } from "react";
import YoutubeIframe from "../../Components/YoutubeIframe";
import Card from "../../Components/Card";
import Chart from "../../Components/Chart";
import Keyword from "../../Components/Keyword";
import Thumbnail from "../../Components/Thumbnail";
import Icon from "../../Components/Icon";
import calendar from "../../assets/icons/calendar.svg";
import collapse from "../../assets/icons/collapse.svg";
import thumbnail from "../../assets/images/thumbnail.jpg";

const Youtube = () => {
  const [channelData, setChannelData] = useState([]);
  const [user, setUser] = useState(null);

  const viewCard = (data, cb) => {
    const rows = data.rows.map((row) => {
      return row[1];
    });
    const views = rows.reduce((current, previous) => current + previous);
    return cb(`+${views}`);
  };

  const subscriberCard = (data, cb) => {
    let state = true;
    const subsGainedRow = data.rows.map((row) => {
      return row[1];
    });
    const subsLostRow = data.rows.map((row) => {
      return row[2];
    });

    const subsGained = subsGainedRow.reduce(
      (current, previous) => current + previous
    );
    const subsLost = subsLostRow.reduce(
      (current, previous) => current + previous
    );

    if (subsGained >= subsLost) {
      state = true;
    } else {
      state = false;
    }

    return cb(state ? `+${subsGained}` : `-${subsLost}`);
  };
  useEffect(() => {
    const response = JSON.parse(localStorage.getItem("user"));
    setUser(response.profile);
  }, []);
  return (
    <>
      <div className="outlet-header">
        <div>
          <h1 className="outlet-header-title">Overview</h1>
        </div>
        <div className="outlet-header-filter">
          <Icon src={calendar} margin="0rem 1rem 0rem 0rem" />
          <span>Last 30 Days</span>
          <Icon src={collapse} size={15} margin="0rem 0rem 0rem 1rem" />
        </div>
      </div>
      <div className="outlet-content">
        <Card
          className="outlet-content-card-1"
          heading="Subscribers"
          previous={"136"}
          direction="up"
          matrics="subscribersGained,subscribersLost"
          dataCallback={subscriberCard}
        />
        <Card
          className="outlet-content-card-1"
          heading="Views"
          previous={"241.1K"}
          direction="up"
          matrics="views,annotationClickThroughRate"
          dataCallback={viewCard}
        />
        <Card
          className="outlet-content-card-1"
          heading="Revenue"
          data={"$379900"}
          previous={"255000"}
          direction="up"
        />
        <div className="outlet-content-card-4">
          <div>
            <p className="card-header">Last 3 Videos With Views</p>
          </div>
          {[
            {
              src: "https://www.youtube.com/embed/AUvodoVurps",
              title: "Unstoppable",
              views: "144M",
              artist: "Sia",
            },
            {
              src: "https://www.youtube.com/embed/ki0Ocze98U8",
              title: "One Dance",
              views: "2.1B",
              artist: "Drake",
            },
            {
              src: "https://www.youtube.com/embed/rH8P_JavvXQ",
              title: "One Kiss",
              views: "804M",
              artist: "Dua Lipa",
            },
          ].map((meta, index) => (
            <YoutubeIframe key={index} {...meta} />
          ))}
        </div>
        <Card heading="User Statistics" className="outlet-content-card-5">
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
                  data: channelData?.rows?.map((row) => row[1]),
                },
              ],
            }}
          />
        </Card>
        <Card
          heading="Top 3 Keywords"
          action="Details"
          className="outlet-content-card-6"
        >
          <Keyword keywords={["Stefania", "Top", "Popular"]} />
        </Card>
        <Card
          heading="Top Video"
          action="Details"
          className="outlet-content-card-7"
        >
          <YoutubeIframe src="https://www.youtube.com/embed/xzrE-PYzH7M" />
        </Card>
        <Card heading="Best Thumbnails" className="outlet-content-card-8">
          <Thumbnail
            thumbnails={[
              { img: thumbnail, title: "Who Cares", views: "14.6K" },
              { img: thumbnail, title: "Who Cares", views: "14.6K" },
              { img: thumbnail, title: "Who Cares", views: "14.6K" },
              { img: thumbnail, title: "Who Cares", views: "14.6K" },
            ]}
          />
        </Card>
      </div>
    </>
  );
};

export default Youtube;
