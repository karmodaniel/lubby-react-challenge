import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { FaStar } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import Footer from '../footer/Footer';

import './repos.css';

function Repos() {

    const profile = useSelector((state) => state.data[0]);
    const [dataRepos, setDataRepos] = useState([]);
    
    useEffect(() => {
    getRepos();
    }, []);
  
  
    async function getRepos() {
      try {
       const repos = profile.repos_url; 
        console.log('userData', repos);
        const response = await fetch(repos);
        const data = await response.json();
         console.log(data);
         setDataRepos(data);
      } catch (error) {
        console.log(error);
      }
    }

    console.log('data Repos', dataRepos)
  
    return (
        <div className="container-repos">
      <header className="header-repos">
        <Link className="back" to="/home">
          <span><FaArrowLeft/></span>
        </Link>

        <h1>{ dataRepos.length } Repositórios</h1>
      </header>
     
     {dataRepos.map((repos => (
          <section className="list-repos-item">
          <div className="repos-about">
             <h1 key={ repos.name }>{ repos.name }</h1>
             <p>{ repos.description }</p>
          </div>
 
          <div className="repos-info">
              <div className="stars">
                 <span><FaStar className="star-icon"/></span>
                 <span>{ repos.stargazers_count }</span>
              </div>
              
              <span className="status">{ repos.private }</span>
          </div>
      </section>
     )))}
    
    <Footer/>
     
    </div>
    )
}

export default Repos;