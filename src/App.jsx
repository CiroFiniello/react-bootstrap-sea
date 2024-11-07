import { useState, useEffect } from "react";

import Navbar from "./components/shared/navbar/Navbar";
import ProfileMain from "./components/profileMain/ProfileMain";
import Aside from "./components/aside/Aside";
import Comments from "./components/comments/comments";
import Attivita from "./components/attivita/attivita";

import "./App.scss";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    // URL diretto dell'immagine
    const imageUrl = "https://xsgames.co/randomusers/avatar.php?g=male ";
    setAvatarUrl(imageUrl); // Impostiamo direttamente l'URL
  }, []);
  return (
    <>
      <>
        <Navbar avatar={avatarUrl} />
      </>
      <main className="container">
        <ProfileMain avatar={avatarUrl} />
        <div className="row">
          <div className="col-md-9">
            <div>
              <Attivita />
            </div>
            <div>
              <Comments />
            </div>
          </div>
          <section className="col-md-3">
            <Aside />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
