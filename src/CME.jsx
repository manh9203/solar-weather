import React from 'react';
import cme from "./assets/icon-cme.jpg";
import flr from "./assets/icon-flr.jpg";
import gms from "./assets/icon-gms.jpg";
import hss from "./assets/icon-hss.jpg";
import ips from "./assets/icon-ips.jpg";
import mpc from "./assets/icon-mnp.jpg";
import rbe from "./assets/icon-rbe.png";
import sep from "./assets/icon-sep.jpg";
import { Link } from 'react-router-dom';
import "./App.css";

function CME() {
  return (
    <>
      <div className="container">
        <img src={cme} alt="Coronal Mass Ejection" className="image" />

        <div className="description">
          <h2>Coronal Mass Ejections (CMEs)</h2>
          
          <p>
            Coronal mass ejections are huge bubbles of coronal plasma threaded by intense magnetic field lines that are ejected from the Sun over the course of several hours. CMEs often look like huge, twisted ropes, which scientists call "flux ropes."
          </p>
        </div>
      </div>
      <Link className="white-link" to="/">Return to Start</Link>

    </>
  );
}

export default CME;
