import React, { useState, useEffect } from "react";
import "../list/list.css";
import Footer from '../footer/Footer';

import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';


function List() {
  const profile = useSelector((state) => state.data[0]);
  const [dataUser, setDataUser] = useState([]);

  const location = useLocation();
  const idPage = location.state;
  
  useEffect(() => {
    getUsersData();
  }, []);


  async function getUsersData() {
    try {
      console.log('profile', profile);
      console.log('idPage', idPage);
      let userData = -1;
      if ( idPage === 1 ) { 
        userData = profile.followers_url
      } else { 
        userData = profile.following_url.replace('{/other_user}', '');
      } 
      
      console.log('userData', userData);
      const response = await fetch(userData);
      const data = await response.json();
       console.log(data);
      setDataUser(data);
     
    } catch (error) {
      console.log(error);
    }
  }


  return (
     

    <div className="container-list">
      <header className="header-list">
        <Link className="back" to="/home">
          <span><FaArrowLeft/></span>
        </Link>

        <h1>{dataUser.length} {idPage === 1 ? 'Seguidores' : 'Seguindo'}</h1>
      </header>
      {dataUser.map((user) => (
        <section className="list-item">
          <div className="profile-image">
            <img key= { user.id } src={user.avatar_url} alt="Avatar"></img>
          </div>
          <h2>{user.login}</h2>
          <span><FaArrowRight/></span>
        </section>
      ))}

      <Footer/>
     
    </div>
  );
}

export default List;
