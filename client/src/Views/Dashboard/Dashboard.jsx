import { NavbarItem } from "../../Components/Navbar";
import { Card } from "../../Components/Card";
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
import { youtubeData } from "../../fakeData";

const Dashboard = () => {
  return (
    <>
      <section class="navbar">
        <nav class="navbar-container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <ul>
            {[
              { text: "Youtube API", src: youtube, className: "active" },
              { text: "SEO API", src: seo },
              { text: "Music Engine", src: music },
              { text: "Payments", src: payments },
              { text: "Settings", src: settings },
              { text: "Log Out", src: logout },
            ].map(({ text, src, className }) => (
              <NavbarItem text={text} iconSrc={src} className={className} />
            ))}
          </ul>
        </nav>
      </section>
      <section class="outlet">
        <main class="outlet-container">
          <div class="outlet-content">
            <Card heading="Subscribers" data={113} direction="up" />
            <Card heading="Views" data={228} direction="down" />
            <Card heading="Revenue" data={379900} direction="up" />

            <div class="outlet-content-card-4">
              <div>
                <p className="card-header">Last 3 Videos With Views</p>
              </div>
              {youtubeData.map((meta) => (
                <YoutubeIframe {...meta} />
              ))}
            </div>
            <div class="outlet-content-card-5">
              <div>
                <p className="card-header">User Statistics</p>
              </div>
            </div>
            <div class="outlet-content-card-6">
              <div>
                <p className="card-header">Top 3 Keywords</p>
              </div>
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
            </div>
            <div class="outlet-content-card-8">
              <div>
                <p className="card-header">Best Thumbnails</p>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Dashboard;
