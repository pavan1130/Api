import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import JsonPlaceholder from "./page/JsonPlacer";
import FreeTestApi from "./page/FreeTestAPI";
import MockFakeApi from "./page/MockFakeApi";
import ManageMyMocks from "./page/ManageMyMocks";
import DummyApi from "./page/DummyApi";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/jsonplaceholder" element={<JsonPlaceholder />} />

        <Route path="/mockfakeapi" element={<MockFakeApi />} />
        <Route path="/dummyapi" element={<DummyApi />} />
        <Route path="/freetestapi" element={<FreeTestApi />} />
        <Route path="/dinssermockapi" element={<ManageMyMocks />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
