import React from "react";
import { Link } from "react-router-dom";
// import "../Style/DummyApi.css";

const DummyApi = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Dummy API</h1>
      </header>
      <main className="app-main">
        <section className="features">
          <h2>Features</h2>
          <ul>
            <li>REST API - DummyAPI is a RESTful online fake API...</li>
            <li>
              GraphQL - Access static fake data via the GraphQL interface.
            </li>
            <li>
              Cross-platform - application/json format, Mock JSON dummy API
              server...
            </li>
            <li>Data relations - Various data structures and types...</li>
            <li>24/7 uptime - DummyAPI deployed on Google Cloud Platform...</li>
            <li>
              Free to use - Free for all users, up to 500 requests per day on a
              beta phase...
            </li>
          </ul>
        </section>

        <section className="use-cases">
          <h2>Use Cases</h2>
          <ul>
            <li>
              Education, Learning - suitable fake API for any types of
              tutorials...
            </li>
            <li>Free Image API - We have a lot of dummy data...</li>
            <li>
              Demo page, Portfolio - our non-auth fake API data is perfect for
              creating a presentation page...
            </li>
            <li>
              Testing - Dummy API for testing JSON, go deep with Unit tests for
              Rest API...
            </li>
            <li>
              Skill evaluation - Want to give your future employee an
              assignment?...
            </li>
            <li>
              Any other cases - We have no restriction for dummy API usage...
            </li>
          </ul>
        </section>

        <section className="usage-statistic">
          <h2>Usage Statistic</h2>
          <p>Status: Deploying on GCF and maintain 99.99% uptime.</p>
          <p>API working normally</p>
          <p>Response Time: Average response time in your region - 414ms</p>
          <p>
            API Calls per day: Last 100 days statistic of API calls per each
            day. 🚧 Area is under construction
          </p>
        </section>
      </main>

      <footer className="app-footer">
        <p>
          Our Sponsors
          <br />
          You can become our sponsor on Patreon, we will place a logo and a link
          to your website in the current section.
        </p>
        {/* Add Patreon button or sponsorship details here */}
        <p>
          Related Links
          <br />
          Contact Us: Email - dummyapi.io@gmail.com
        </p>
        {/* Add links to the Telegram community and chat */}
        <p>
          Copyright Notices
          <br />
          User Data - All user pictures and data are fake and randomly generated
          by an open-source third-party service randomuser.me...
        </p>
        <p>
          Side Projects
          <br />
          RGBTOHEX.PAGE - Feel free to check our side project...
        </p>
        <p>Created by Developers for Developers. © 2019-2023</p>
      </footer>
      <Link to="/">
        {" "}
        <h6 className="hometop">Go back to Home</h6>{" "}
      </Link>
    </div>
  );
};

export default DummyApi;
