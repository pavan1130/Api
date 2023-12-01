import React, { useState } from "react";
import "../Styles/Freetestapi.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const apiList = [
  { text: "Airports - 50 objects", link: "/airports", className: "airport" },
  { text: "Books - 50 objects" },
  { text: "Airports - 50 objects", link: "/airports", className: "airport" },
  { text: "Books - 50 objects" },
  { text: "Teachers - 35 objects" },
  { text: "Dogs - 40 objects" },
  { text: "Mobiles - 30 objects" },
  { text: "Movies - 20 objects" },
  { text: "Posts - 50 objects" },
  { text: "Us-States - 50 objects" },
  { text: "Countries - 199 objects" },
  { text: "Footballs - 35 objects" },
  { text: "Students - 40 objects" },
  { text: "Politicians - 50 objects" },
];

export default function FreeTestApi() {
  const [visibleItems, setVisibleItems] = useState(5);

  const handleShowMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
  };

  return (
    <>
      <Navbar />
      <div className="free-test-api-container">
        <header>
          <h1>Welcome to FreeTestAPI</h1>
          <p>
            Empower Your Development Process With 350+ Quality Mock Data & Get
            Access to a Diverse Range of Fake Testing APIs at Completely Free of
            Cost.
          </p>
        </header>

        <nav>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <li>APIs</li>
            <li>Docs</li>
          </ul>
        </nav>

        <section className="api-list">
          <div>
            <h2>Explore APIs</h2>
            <p>Discover a variety of APIs across different categories.</p>
          </div>
          <ul>
            {apiList.slice(0, visibleItems).map((api, index) => (
              <li key={index}>
                {api.link ? (
                  <Link to={api.link} className={api.className}>
                    {api.text}
                  </Link>
                ) : (
                  api.text
                )}
              </li>
            ))}
          </ul>
          {visibleItems < apiList.length && (
            <button className="show-more-btn" onClick={handleShowMore}>
              Show More
            </button>
          )}
        </section>
      </div>
    </>
  );
}
