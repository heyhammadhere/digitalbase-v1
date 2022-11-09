import { NavbarItem } from "../../Components/Navbar";
import logo from "../../assets/logos/digital-base.svg";
import youtube from "../../assets/icons/youtube-api.svg";
import seo from "../../assets/icons/seo-api.svg";
import music from "../../assets/icons/music-engine.svg";
import payments from "../../assets/icons/payments.svg";
import settings from "../../assets/icons/settings.svg";
import logout from "../../assets/icons/logout.svg";

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
            <div class="outlet-content-card-1">
              <div>
                <p className="card-header">Subscribers</p>
              </div>
              <div>
                <p className="card-body">+113</p>
              </div>
              <div>
                <p className="card-content">Compared To (136 Last Month)</p>
              </div>
            </div>
            <div class="outlet-content-card-2">
              <div>
                <p className="card-header">Views</p>
              </div>
              <div>
                <p className="card-body">252.5K</p>
              </div>
              <div>
                <p className="card-content">Compared To (241.1K Last Month)</p>
              </div>
            </div>
            <div class="outlet-content-card-3">
              <div>
                <p className="card-header">Revenue</p>
              </div>
              <div>
                <p className="card-body">$379900</p>
              </div>
              <div>
                <p className="card-content">Compared To (255000 Last Month)</p>
              </div>
            </div>
            <div class="outlet-content-card-4">
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
              ].map(({ src, title, views, artist }) => (
                <div>
                  <div className="youtube-video-wrapper">
                    <iframe
                      width="560"
                      height="315"
                      src={src}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <p className="youtube-video-meta">
                    {title} <span>- {artist} </span>
                  </p>
                  <p className="youtube-video-description">{views} Views</p>
                </div>
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
            <div class="outlet-content-card-7">
              <div>
                <p className="card-header">Top Video</p>
              </div>
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
