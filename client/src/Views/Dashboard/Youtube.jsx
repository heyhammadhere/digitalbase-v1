import { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import DateRangePicker from "../../Components/DateRangePicker";
import Card from "../../Components/Card";
import LastVideos from "../../Components/LastVideos";
import UserStatistics from "../../Components/UserStatistics";
import TopKeywords from "../../Components/TopKeywords/TopKeywords";
import TopVideo from "../../Components/TopVideo";
import BestThumbnails from "../../Components/BestThumbnails";

const Youtube = () => {
  const [user] = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  console.log(user);
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
