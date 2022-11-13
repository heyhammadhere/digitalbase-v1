import { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider";
import Card from "../../Components/Card";
import Chart from "../../Components/Chart";
import Keyword from "../../Components/Keyword";
import Thumbnail from "../../Components/Thumbnail";
import Icon from "../../Components/Icon";
import calendar from "../../Assets/icons/calendar.svg";
import collapse from "../../Assets/icons/collapse.svg";
import thumbnail from "../../Assets/images/thumbnail.jpg";
import IframeRenderer from "../../Components/YoutubeIframe/IframeRenderer";
import { fetchChannelData, fetchChannelVideos } from "../../Services/dashboard";

const Youtube = () => {
  const [user] = useContext(AuthContext);
  const [channelData, setChannelData] = useState({});
  const [channelVideos, setChannelVideos] = useState({});
  useEffect(() => {
    handleFetchChannelData();
    handleFetchChannelVideos();
  }, []);
  const handleFetchChannelData = async () => {
    try {
      const { status, data } = await fetchChannelData(user.token);
      if (!status === 200) {
      }
      setChannelData(data);
    } catch (error) {
      toast("Something Went Wrong");
    }
  };
  const handleFetchChannelVideos = async () => {
    try {
      const { status, data } = await fetchChannelVideos(user.token);
      if (!status === 200) {
      }
      setChannelVideos(data);
    } catch (error) {
      toast("Something Went Wrong");
    }
  };
  return (
    <>
      <div className="youtube-header">
        <div>
          <h1 className="youtube-header-title">Overview</h1>
        </div>
        <div className="youtube-header-filter">
          <Icon src={calendar} margin="0rem 1rem 0rem 0rem" />
          <span>Last 30 Days</span>
          <Icon src={collapse} size={15} margin="0rem 0rem 0rem 1rem" />
        </div>
      </div>
      <div className="youtube-content">
        <Card
          className="youtube-content-card-1"
          heading="Subscribers"
          previous={"136"}
          direction="up"
          matrics="subscribersGained,subscribersLost"
          dataCallback={() => {}}
        />
        <Card
          className="youtube-content-card-1"
          heading="Views"
          previous={"241.1K"}
          direction="up"
          matrics="views,annotationClickThroughRate"
          dataCallback={() => {}}
        />
        <Card
          className="youtube-content-card-1"
          heading="Revenue"
          data={"$379900"}
          previous={"255000"}
          direction="up"
        />
        <div className="youtube-content-card-4">
          <div>
            <p className="card-header">Last 3 Videos With Views</p>
            <IframeRenderer endpoint="latestVideos" />
          </div>
        </div>
        <Card heading="User Statistics" className="youtube-content-card-5">
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
                  data: channelData
                    ? channelData?.rows?.map((row) => row[1])
                    : [],
                },
              ],
            }}
          />
        </Card>
        <Card
          heading="Top 3 Keywords"
          action="Details"
          className="youtube-content-card-6"
        >
          <Keyword keywords={["Stefania", "Top", "Popular"]} />
        </Card>
        <Card
          heading="Top Video"
          action="Details"
          className="youtube-content-card-7"
        >
          <IframeRenderer endpoint="topVideo" />
        </Card>
        <Card heading="Best Thumbnails" className="youtube-content-card-8">
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
