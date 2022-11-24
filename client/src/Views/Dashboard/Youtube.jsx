import { useState, useContext, useEffect } from "react";
import moment from "moment";
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
  const [isOpen, setIsOpen] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: moment().subtract(29, "days")._d,
      endDate: moment()._d,
      key: "range",
    },
  ]);
  const [duration, setDuration] = useState(0);
  const [channelVideos, setChannelVideos] = useState({});
  const [channelData, setChannelData] = useState({});
  useEffect(() => {
    handleFetchChannelVideos();
    handleFetchChannelData();
  }, []);
  useEffect(() => {
    if (!isOpen) {
      handleFetchChannelVideos();
      handleFetchChannelData();
    }
  }, [isOpen]);
  useEffect(() => {
    setDuration(moment(range[0].endDate).diff(range[0].startDate, "days") + 1);
  }, [range]);
  const handleFetchChannelVideos = async () => {
    setLoading(true);
    try {
      const { status, data } = await fetchChannelVideos({
        tokens: user.token,
        startDate: moment(range[0].startDate),
        endDate: moment(range[0].endDate),
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
        startDate: moment(range[0].startDate),
        endDate: moment(range[0].endDate),
      });
      if (status !== 200) throw new Error("Invalid Request");
      setChannelData(data);
    } catch ({ message }) {}
    setLoading(false);
  };
  return (
    <>
      <div className="youtube-header">
        <div>
          <h1 className="youtube-header-title">Overview</h1>
        </div>
        <DateRangePicker
          range={range}
          setRange={setRange}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          duration={duration}
        />
      </div>
      <div className="youtube-content">
        <Card
          className="youtube-content-card-1"
          heading="Subscribers"
          stats={channelData?.currentData?.subsGained}
          previous={channelData?.previousData?.subsGained}
          duration={duration}
          loading={loading}
        />
        <Card
          className="youtube-content-card-2"
          heading="Views"
          stats={channelData?.currentData?.views}
          previous={channelData?.previousData?.views}
          duration={duration}
          loading={loading}
        />
        <Card
          className="youtube-content-card-3"
          heading="Likes"
          stats={channelData?.currentData?.likes}
          previous={channelData?.previousData?.likes}
          duration={duration}
          loading={loading}
        />
        <LastVideos loading={loading} data={channelVideos?.latestVideos} />
        <UserStatistics
          data={channelData?.currentData?.rawData?.views}
          loading={loading}
        />
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
