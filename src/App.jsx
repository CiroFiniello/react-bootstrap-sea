import { useState, useEffect } from "react";

import Navbar from "./components/shared/navbar/Navbar";
import ProfileMain from "./components/profileMain/ProfileMain";
import Aside from "./components/aside/Aside";
import Comments from "./components/comments/comments";
import Attivita from "./components/attivita/attivita";

import "./App.scss";

//dati dei commenti

function App() {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [nickname, setNickname] = useState("");
  const [visitatore, setVisitatore] = useState(null);
  const [visitatorename, setVisitatoreName] = useState("");

  const Amici = [
    {
      id: 0,
      name: "Sarah",
      status: "online",
      game: "Rust",
      commento:
        "Che bel profilo hai creato, sono contento di vederti su Sea, ti andrebbe di giocare con me a Rust?",
      profilepic:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
    {
      id: 1,
      name: "John",
      status: "offline",
      game: "League of Legends",
      commento: "Ehi, voglio sfidarti in una partita a League of Legends!",
      profilepic:
        "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg",
    },
    {
      id: 2,
      name: "Emma",
      status: "online",
      game: "Minecraft",
      commento: "Stiamo costruendo un castello su Minecraft, unisciti a noi!",
      profilepic:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    },
    {
      id: 3,
      name: "Mike",
      status: "offline",
      game: "Fortnite",
      commento: "Dovremmo fare una squadra su Fortnite questo weekend!",
      profilepic:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
    {
      id: 4,
      name: "Anna",
      status: "online",
      game: "Apex Legends",
      commento: "Sono pronta per una partita a Apex Legends, ci sei?",
      profilepic:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
    {
      id: 5,
      name: "James",
      status: "offline",
      game: "Call of Duty",
      commento: "Devo migliorare le mie abilità su Call of Duty, mi aiuti?",
      profilepic:
        "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg",
    },
    {
      id: 6,
      name: "Sophia",
      status: "online",
      game: "Overwatch",
      commento: "Sono entrata nella tua squadra su Overwatch!",
      profilepic:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    },
    {
      id: 7,
      name: "Chris",
      status: "offline",
      game: "Valorant",
      commento: "Dovremmo fare una partita a Valorant domani!",
      profilepic:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
    {
      id: 8,
      name: "Olivia",
      status: "online",
      game: "PUBG",
      commento: "Sto cercando un partner per PUBG, ti unisci a me?",
      profilepic:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
    {
      id: 9,
      name: "David",
      status: "offline",
      game: "Dota 2",
      commento: "Hai tempo per una partita a Dota 2 questo fine settimana?",
      profilepic:
        "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg",
    },
  ];

  useEffect(() => {
    // URL diretto dell'immagine
    const imageUrl = "https://xsgames.co/randomusers/avatar.php?g=male";
    setAvatarUrl(imageUrl); // Impostiamo direttamente l'URL
  }, []);

  useEffect(() => {
    // URL diretto dell'immagine
    const visitatoreUrl = `https://xsgames.co/randomusers/avatar.php?g=male&random=${Math.random()}`;
    setVisitatore(visitatoreUrl); // Impostiamo direttamente l'URL
  }, []);

  useEffect(() => {
    const fetchNickname = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const nickname = data.results[0].login.username;
        setNickname(nickname);
      } catch (error) {
        console.error("Errore nel fetch del nickname:", error);
      }
    };

    const fetchVisitatoreName = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const visitatorename = data.results[0].login.username;
        setVisitatoreName(visitatorename);
      } catch (error) {
        console.error("Errore nel fetch del visitatorename:", error);
      }
    };

    fetchNickname();
    fetchVisitatoreName();
  }, []);

  return (
    <>
      <Navbar
        avatar={avatarUrl}
        nickname={nickname}
        visitatore={visitatore}
        visitatorename={visitatorename}
      />
      <main className="container">
        <ProfileMain avatar={avatarUrl} nickname={nickname} />
        <div className="row">
          <div className="col-md-9">
            <Attivita />
            <Comments
              Amici={Amici}
              Avatar={avatarUrl}
              visitatorename={visitatorename}
              visitatore={visitatore}
            />
          </div>
          <section className="col-md-3">
            <Aside Amici={Amici} />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
