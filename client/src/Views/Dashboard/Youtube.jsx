import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import DateRangePicker from "../../Components/DateRangePicker";
import Card from "../../Components/Card";
import LastVideos from "../../Components/LastVideos";
import UserStatistics from "../../Components/UserStatistics";
import TopKeywords from "../../Components/TopKeywords/TopKeywords";
import TopVideo from "../../Components/TopVideo";
import BestThumbnails from "../../Components/BestThumbnails";
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
      if (!status === 200) return;
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
    } catch (error) {}
    setLoading(false);
  };
  const handleFetchChannelVideos = async () => {
    setLoading(true);
    try {
      const { status, data } = await fetchChannelVideos(user.token);
      if (!status === 200) return;
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
    } catch (error) {}
    setLoading(false);
  };
  return (
    <>
      <div className="youtube-header">
        <div>
          <h1 className="youtube-header-title">Overview</h1>
        </div>
        <DateRangePicker />
      </div>
      <div className="youtube-content">
        <Card
          className="youtube-content-card-1"
          heading="Subscribers"
          direction="up"
          stats=""
          loading={loading}
        />
        <Card
          className="youtube-content-card-2"
          heading="Views"
          direction="up"
          stats=""
          loading={loading}
        />
        <Card
          className="youtube-content-card-3"
          heading="Revenue"
          direction="up"
          stats=""
          loading={loading}
        />
        <LastVideos loading={loading} />
        <UserStatistics loading={loading} />
        <TopKeywords loading={loading} />
        <TopVideo loading={loading} />
        <BestThumbnails loading={loading} />
      </div>
    </>
  );
};

export default Youtube;
