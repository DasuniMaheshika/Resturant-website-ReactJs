import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.png";
import '../styles/HomeStyles.css';

function Home() {
  return (
    <div>
      <Layout>
        <div className="home" style={{backgroundImage: `url(${Banner})`}}>
          <div className="headerContainer">
            <h1>Food Website</h1>
            <p>Best food in Sri Lanka</p>
            <Link to="/menu">
              <button>ORDER NOW</button>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
