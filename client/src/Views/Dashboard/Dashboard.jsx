import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import { NavbarItem } from "../../Components/Navbar";
import { Card } from "../../Components/Card";
import Keyword from "../../Components/Keyword";
import Thumbnail from "../../Components/Thumbnail";
import YoutubeIframe from "../../Components/YoutubeIframe";
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

const Dashboard = () => {
  return (
    <>
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
            ].map(({ text, src, classes }) => (
              <Link to="">
                <NavbarItem text={text} iconSrc={src} classes={classes} />
              </Link>
            ))}
          </ul>
        </nav>
      </section>
      <section className="outlet">
        <main className="outlet-container">
          <Header />
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
              data={"+228"}
              previous={"241.1K"}
              direction="down"
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
              {youtubeData.map((meta) => (
                <YoutubeIframe {...meta} />
              ))}
            </div>
            <Card heading="User Statistics" className="outlet-content-card-5" />
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
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
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
    </>
  );
};

export default Dashboard;
