import React from "react";
import "./home.css";
import Footer from '../footer/Footer';
import { FaSignOutAlt } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const profile = useSelector((state) => state.data[0]);

  return (
    <div className="container-home">
      <header className="header">
        <h3 className="header-info home-exit">{profile.login}</h3>
        <div className="exit-area">
          <span className="header-info exit">Sair</span>

          <Link to="/login" className="links">
            <span>
              <FaSignOutAlt className="icon-exit" />{" "}
            </span>
          </Link>
        </div>
      </header>

      <section className="user-info">
        <img className="avatar" src={profile.avatar_url}></img>
        <h1 className="user-name"> {profile.name}</h1>
        <h3 className="user-location">{profile.location}</h3>
      </section>

      <section className="repo-info">
        <Link to={{ pathname: "/list", state: 1 }} className="links">
          <div className="repo-data">
            <h2 id="1">{profile.followers}</h2>
            <h3 id="1">Seguidores</h3>
          </div>
        </Link>

        <Link to={{ pathname: "/list", state: 2 }} className="links">
          <div className="repo-data">
            <h2 id="2">{profile.following}</h2>
            <h3 id="2">Seguindo</h3>
          </div>
        </Link>

        <Link to="/repos" className="links">
          <div className="repo-data">
            <h2>{profile.public_repos}</h2>
            <h3>Repo</h3>
          </div>
        </Link>
      </section>

      <section className="profile-bio">
        <h2>Bio</h2>
        <p>{profile.bio}</p>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
