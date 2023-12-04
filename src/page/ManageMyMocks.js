import React from "react";
import { Link } from "react-router-dom";
import "../Styles/ManageMyMocks.css";

const ManageMyMocks = () => {
  return (
    <div>
      <div className="button-container">
        <button className="left-button">Mocky</button>

        <div className="right-buttons">
          <button>Manage My Mocks</button>
          <button>New Mock</button>
        </div>
      </div>
      <div className="maincontainer">
        <h2>API Mocks for Free</h2>
        <p>
          Don't wait for the backend to be ready, generate custom API responses
          with Mocky and start working on your application straightaway
        </p>

        <button className="buttonmain">Start designing your mock</button>

        <h3>No signup</h3>
        <p>Start designing your mock</p>

        <h3>Free & Unlimited</h3>
        <p>
          Mocky is free to use, no ads, no hidden subscriptions or service
          limits. Your mocks will be available forever if you call it at least
          once per year, but without any guarantee.
        </p>

        <h3>Total control</h3>
        <p>
          New in Mocky, you can now update or delete your mocks at any time. The
          next release will go further and offer you request inspector and
          cloud-based mock management.
        </p>

        <h3>Developer Friendly</h3>
        <p>
          Mocky is compatible with JS, Mobile and Server applications, featuring
          CORS, JSONP, and GZIP responses. No authentication, just call it!
        </p>

        <h3>Open Source</h3>
        <p>
          Mocky is distributed with Apache 2 licence on Github. Community
          contributions are welcome! Ready-to-use distributions will be
          available to host your own Mocky instance.
        </p>
      </div>

      <Link to="/">
        {" "}
        <h6 className="hometop">Go back to Home</h6>{" "}
      </Link>
    </div>
  );
};

export default ManageMyMocks;
