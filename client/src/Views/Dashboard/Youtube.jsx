import { useEffect, useState, useContext } from "react";
import { toast } from "../../Components/Toast";
import { AuthContext } from "../../Context/AuthProvider";
import Card from "../../Components/Card";
import Chart from "../../Components/Chart";
import Keyword from "../../Components/Keyword";
import Thumbnail from "../../Components/Thumbnail";
import Icon from "../../Components/Icon";
import calendar from "../../Assets/icons/calendar.svg";
import collapse from "../../Assets/icons/collapse.svg";
import IframeRenderer from "../../Components/YoutubeIframe/IframeRenderer";
import { fetchChannelData, fetchChannelVideos } from "../../Services/dashboard";

const Youtube = () => {
  const [user] = useContext(AuthContext);
  const [channelData, setChannelData] = useState({});
  const [thumbnails, setThumbnails] = useState([]);
  const [lastVideos, setLastVideos] = useState([]);
  const [topKeywords, setTopKeywords] = useState([]);
  const [topVideo, setTopVideo] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    handleFetchChannelData();
    handleFetchChannelVideos();
  }, []);
  const handleFetchChannelData = async () => {
    setLoading(true);
    try {
      const { status, data } = await fetchChannelData(user.token);
      if (!status === 200) return toast("No Channel Data Found", "error");
      const { columnHeaders, rows } = data;
      const _channelData = columnHeaders
        .map(({ name }) => name)
        .map((key, index) => ({ [key]: rows.map((row) => row[index]) }))
        .reduce(
          (prev, curr) => ({
            ...prev,
            ...curr,
          }),
          {}
        );
      setChannelData(_channelData);
    } catch (error) {
      toast("Something Went Wrong", "error");
    }
    setLoading(false);
  };
  const handleFetchChannelVideos = async () => {
    setLoading(true);
    try {
      const { status, data } = await fetchChannelVideos(user.token);
      if (!status === 200) return toast("No Channel Videos Found", "error");
      const {
        bestThumbnails,
        latestVideos,
        mostViewedVideo,
        topThreeKeywords,
      } = data;
      setThumbnails(bestThumbnails);
      setLastVideos(latestVideos);
      setTopVideo(mostViewedVideo);
      setTopKeywords(topThreeKeywords);
    } catch (error) {
      toast("Something Went Wrong", "error");
    }
    setLoading(false);
  };
  console.log(channelData);
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
        {loading ? (
          "Loading"
        ) : (
          <Card
            className="youtube-content-card-1"
            heading="Subscribers"
            direction="up"
            stats={(() => {
              const sum = (prev, curr) => prev + curr;
              const gained = channelData?.subscribersGained.reduce(sum, 0);
              const lost = channelData?.subscribersGained.reduce(sum, 0);
              return gained >= lost ? gained : lost;
            })()}
          />
        )}
        <Card
          className="youtube-content-card-2"
          heading="Views"
          direction="up"
          stats=""
        />
        <Card
          className="youtube-content-card-3"
          heading="Revenue"
          direction="up"
          stats=""
        />
        <div className="youtube-content-card-4">
          <div>
            <p className="card-header">Last 3 Videos With Views</p>
            <IframeRenderer videos={lastVideos} />
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
          <Keyword keywords={topKeywords} />
        </Card>
        <Card
          heading="Top Video"
          action="Details"
          className="youtube-content-card-7"
        >
          {loading ? (
            "Loading..."
          ) : (
            <IframeRenderer videos={[topVideo ? topVideo : {}]} />
          )}
        </Card>
        <Card heading="Best Thumbnails" className="youtube-content-card-8">
          {loading ? "Loading..." : <Thumbnail thumbnails={thumbnails} />}
        </Card>
      </div>
    </>
  );
};

export default Youtube;
