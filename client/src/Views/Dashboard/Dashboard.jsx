import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import { NavbarItem } from "../../Components/Navbar";
import { Card } from "../../Components/Card";
import Keyword from "../../Components/Keyword";
import Thumbnail from "../../Components/Thumbnail";
import YoutubeIframe from "../../Components/YoutubeIframe";
import Chart from "../../Components/Chart";
import Icon from "../../Components/Icon";
import logo from "../../assets/logos/digital-base.svg";
import youtube from "../../assets/icons/youtube-api.svg";
import seo from "../../assets/icons/seo-api.svg";
import music from "../../assets/icons/music-engine.svg";
import payments from "../../assets/icons/payments.svg";
import settings from "../../assets/icons/settings.svg";
import logout from "../../assets/icons/logout.svg";
import thumbnail from "../../assets/images/thumbnail.jpg";
import calendar from "../../assets/icons/calendar.svg";
import collapse from "../../assets/icons/collapse.svg";
import { youtubeData } from "../../fakeData";
import { useEffect, useState } from "react";
import axios from "axios";
import { gapi } from "gapi-script";
const Dashboard = () => {
  const [channelData, setChannelData] = useState([]);
  const [user, setUser] = useState({});
  const clientId =
    "68497100027-44f20865vmtphc5evfij91gbbtrgiueu.apps.googleusercontent.com";

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientId,
        scope:
          "https://www.googleapis.com/auth/yt-analytics-monetary.readonly https://www.googleapis.com/auth/userinfo.profile",
      });
    };
    gapi.load("client:auth2", start);

    const fetchChannel = async () => {
      const response = JSON.parse(localStorage.getItem("loggedInUser"));
      setUser(response.profile);
      const { data } = await axios.post(
        "http://localhost:5500/youtube/channelData",
        {
          tokens: response.token,
        }
      );
      setChannelData(data);
    };
    fetchChannel();
  }, []);
  return (
    <div className="dashboard">
      <section className="navbar">
        <nav className="navbar-container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <ul>
            {[
              { text: "Youtube API", src: youtube, classes: "active" },
              { text: "SEO API", src: seo },
              { text: "Music Engine", src: music },
              { text: "Payments", src: payments },
              { text: "Settings", src: settings },
              { text: "Log Out", src: logout },
            ].map(({ text, src, classes }, index) => (
              <Link key={index} to="/">
                <NavbarItem text={text} iconSrc={src} classes={classes} />
              </Link>
            ))}
          </ul>
        </nav>
      </section>
      <section className="outlet">
        <main className="outlet-container">
          <Header user={user?.name} />
          <div className="outlet-header">
            <div>
              <h1 className="outlet-header-title">Overview</h1>
            </div>
            <div className="outlet-header-filter ">
              <Icon src={calendar} margin="0rem 1rem" />
              <span>Last 30 Days</span>
              <Icon src={collapse} size={15} margin="0rem 1rem" />
            </div>
          </div>
          <div className="outlet-content">
            <Card
              className="outlet-content-card-1"
              heading="Subscribers"
              data={"+113"}
              previous={"136"}
              direction="up"
            />
            <Card
              className="outlet-content-card-1"
              heading="Views"
              data={channelData?.rows?.reduce(
                (current, previous) => `+${current[1] + previous[1]}`
              )}
              previous={"241.1K"}
              direction="up"
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
              {youtubeData.map((meta, index) => (
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
              <div className="youtube-video-wrapper">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/ki0Ocze98U8"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
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
        </main>
      </section>
    </div>
  );
};

export default Dashboard;
