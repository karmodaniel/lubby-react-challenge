import React from "react";
import "../login.css";
import logo from "../../assets/GitHub.png";
import seta from "../../assets/seta-direita.svg";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { FaGithub } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();


  function addProfile(profile) {
    return {type: 'ADD_PROFILE', profile}
  }

  async function signIn() {
    const username = document.querySelector(".input").value;
    console.log(username);

    if (username !== "") {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const data = await response.json();
        const userData = {
          login: data.login,
          name: data.name,
          email: data.email,
          location: data.location,
          company: data.company,
          bio: data.bio,
          repos_url: data.repos_url,
          avatar_url: data.avatar_url,
          followers_url: data.followers_url,
          following_url: data.following_url,
          organizations_url: data.organizations_url,
          starred_url: data.starred_url,
          public_repos: data.public_repos,
          public_gists: data.public_gists,
          followers: data.followers,
          following: data.following,
        };

        dispatch(addProfile(userData));
        console.log(userData);
        history.push('/home');
        return userData;
      } catch (error) {
        console.error(error);
      }
    } else {
      document.querySelector('.error').innerHTML = 'Campo Obrigatório';
      console.log("Campo obigatório");
    }
  }

  return (
    <section className="container">
      <div className="logo">
        <FaGithub className="logo-icon"/>
      </div>
      <div className="input-data">
        <input
          className="input"
          required
          type="text"
          placeholder="Usuário"
        ></input>
        <span className="error"></span>
      </div>

      <button onClick={signIn} className="btn">
        <span>ENTRAR</span>
        <div>
          <FaArrowRight className="seta"/>
        </div>
      </button>
    </section>
  );
}

export default Login;
