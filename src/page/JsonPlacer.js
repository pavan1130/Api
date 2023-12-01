// JsonPlacer.js
import React from "react";
import "../Styles/JsonPlacer.css";

export default function JsonPlaceholder() {
  return (
    <div className="json-placer">
      <header>
        <h1>JSONPlaceholder</h1>
        <p>Free fake API for testing and prototyping.</p>
      </header>

      <section className="sponsors">
        <h2>Sponsors</h2>
        <p>
          JSONPlaceholder is supported by the following companies and Sponsors
          on GitHub, check them out 💖
        </p>
      </section>

      <section className="when-to-use">
        <h2>When to use</h2>
        <p>
          JSONPlaceholder is a free online REST API that you can use whenever
          you need some fake data.
        </p>
        <p>
          It can be in a README on GitHub, for a demo on CodeSandbox, in code
          examples on Stack Overflow, ...or simply to test things locally.
        </p>
      </section>

      <section className="resources">
        <h2>Resources</h2>
        <p>JSONPlaceholder comes with a set of 6 common resources:</p>
        <ul>
          <li>/posts - 100 posts</li>
          <li>/comments - 500 comments</li>
          <li>/albums - 100 albums</li>
          <li>/photos - 5000 photos</li>
          <li>/todos - 200 todos</li>
          <li>/users - 10 users</li>
        </ul>
        <p>
          Note: resources have relations. For example: posts have many comments,
          albums have many photos, ... see guide for the full list.
        </p>
      </section>

      <section className="routes">
        <h2>Routes</h2>
        <p>
          All HTTP methods are supported. You can use http or https for your
          requests.
        </p>
        <ul>
          <li>GET /posts</li>
          <li>GET /posts/1</li>
          <li>GET /posts/1/comments</li>
          <li>GET /comments?postId=1</li>
          <li>POST /posts</li>
          <li>PUT /posts/1</li>
          <li>PATCH /posts/1</li>
          <li>DELETE /posts/1</li>
        </ul>
        <p>Note: see guide for usage examples.</p>
      </section>
    </div>
  );
}
