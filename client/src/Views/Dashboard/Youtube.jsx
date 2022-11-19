import { useState, useContext, useEffect } from "react";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider";
import DateRangePicker from "../../Components/DateRangePicker";
import Card from "../../Components/Card";
import LastVideos from "../../Components/LastVideos";
import UserStatistics from "../../Components/UserStatistics";
import TopKeywords from "../../Components/TopKeywords/TopKeywords";
import TopVideo from "../../Components/TopVideo";
import BestThumbnails from "../../Components/BestThumbnails";
import { fetchChannelVideos, fetchChannelData } from "../../Services/dashboard";

const Youtube = () => {
  const [user] = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: moment().add(1, "months"),
      key: "range",
    },
  ]);
  const [channelVideos, setChannelVideos] = useState({});
  const [channelData, setChannelData] = useState({});
  useEffect(() => {
    handleFetchChannelVideos();
    handleFetchChannelData();
  }, []);
  const handleFetchChannelVideos = async () => {
    setLoading(true);
    try {
      const { status, data } = await fetchChannelVideos({
        tokens: user.token,
        startDate: moment(range[0].startDate).format("yyyy-MM-DD"),
        endDate: moment(range[0].endDate).format("yyyy-MM-DD"),
      });
      if (status !== 200) throw new Error("Invalid Request");
      setChannelVideos(data);
    } catch ({ message }) {}
    setLoading(false);
  };
  const handleFetchChannelData = async () => {
    setLoading(true);
    try {
      const { status, data } = await fetchChannelData({
        tokens: user.token,
        startDate: moment(range[0].startDate).format("yyyy-MM-DD"),
        endDate: moment(range[0].endDate).format("yyyy-MM-DD"),
      });
      if (status !== 200) throw new Error("Invalid Request");
      const views = data.views.reduce((a, b) => a + b);
      const likes = data.likes.reduce((a, b) => a + b);
      const subsGained = data.subsGained.reduce((a, b) => a + b);
      const subsLost = data.subsLost.reduce((a, b) => a + b);

      setChannelData({
        viewsArray: data.views,
        views,
        subscribers: {
          count: subsGained >= subsLost ? subsGained : subsLost,
          direction: subsGained >= subsLost ? "up" : "down",
        },
        likes,
      });
    } catch ({ message }) {}
    setLoading(false);
  };
  console.log(channelData);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
      <div className="youtube-header">
        <div>
          <h1 className="youtube-header-title">Overview</h1>
        </div>
        <DateRangePicker range={range} setRange={setRange} />
      </div>
      <div className="youtube-content">
        <Card
          className="youtube-content-card-1"
          heading="Subscribers"
          direction={channelData?.subscribers?.direction}
          stats={channelData?.subscribers?.count}
          loading={loading}
        />
        <Card
          className="youtube-content-card-2"
          heading="Views"
          direction="up"
          stats={channelData.views}
          loading={loading}
        />
        <Card
          className="youtube-content-card-3"
          heading="Likes"
          direction="up"
          stats={channelData?.likes}
          loading={loading}
        />
        <LastVideos loading={loading} data={channelVideos?.latestVideos} />
        <UserStatistics data={channelData.viewsArray} loading={loading} />
        <TopKeywords loading={loading} data={channelVideos?.topThreeKeywords} />
        <TopVideo loading={loading} data={channelVideos?.mostViewedVideo} />
        <BestThumbnails
          loading={loading}
          data={channelVideos?.bestThumbnails}
        />
      </div>
    </>
  );
};

export default Youtube;
