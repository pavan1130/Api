import React from "react";
import "../Styles/Freetestapi.css";

export default function FreeTestApi() {
  return (
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
          <li>Home</li>
          <li>APIs</li>
          <li>Docs</li>
        </ul>
      </nav>

      <section className="api-list">
        <h2>Search for an API...</h2>
        <ul>
          <li>Airports - 50 objects</li>
          <li>Books - 50 objects</li>
          <li>Teachers - 35 objects</li>
          <li>Dogs - 40 objects</li>
          <li>Mobiles - 30 objects</li>
          <li>Movies - 20 objects</li>
          <li>Posts - 50 objects</li>
          <li>Us-States - 50 objects</li>
          <li>Countries - 199 objects</li>
          <li>Footballs - 35 objects</li>
          <li>Students - 40 objects</li>
          <li>Politicians - 50 objects</li>
        </ul>
        <button>Show More</button>
      </section>
    </div>
  );
}
