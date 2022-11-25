import React from "react";
import Httpskapedcapitalsignup from "pages/Httpskapedcapitalsignup";
import Httpskapedcapitalver from "pages/Httpskapedcapitalver";
import Httpskapedcapitaldas from "pages/Httpskapedcapitaldas";
import Httpskapedcapitallistings from "pages/Httpskapedcapitallistings";
import Httpskapedcapitalabout from "pages/Httpskapedcapitalabout";
import Httpskapedcapitalloans from "pages/Httpskapedcapitalloans";
import Httpskapedcapitalborrow from "pages/Httpskapedcapitalborrow";
import Httpskapedcapitalinv from "pages/Httpskapedcapitalinv";
import Httpskapedcapital from "pages/Httpskapedcapital";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/httpskapedcapital" element={<Httpskapedcapital />} />
        <Route
          path="/httpskapedcapitalinv"
          element={<Httpskapedcapitalinv />}
        />
        <Route
          path="/httpskapedcapitalborrow"
          element={<Httpskapedcapitalborrow />}
        />
        <Route
          path="/httpskapedcapitalloans"
          element={<Httpskapedcapitalloans />}
        />
        <Route
          path="/httpskapedcapitalabout"
          element={<Httpskapedcapitalabout />}
        />
        <Route
          path="/httpskapedcapitallistings"
          element={<Httpskapedcapitallistings />}
        />
        <Route
          path="/httpskapedcapitaldas"
          element={<Httpskapedcapitaldas />}
        />
        <Route
          path="/httpskapedcapitalver"
          element={<Httpskapedcapitalver />}
        />
        <Route
          path="/httpskapedcapitalsignup"
          element={<Httpskapedcapitalsignup />}
        />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
