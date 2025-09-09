"use client";

import React from "react";

export default function Section2Componet() {
  return (
    <section id="section2">
      <div className="container">
        <a href="#">
          <div className="content">
            <div className="col1">
              <img src="/images/banner.jpg" alt="banner" />
            </div>
            <div className="col2">
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium tempore quam ab excepturi a dignissimos velit
                aperiam, consequatur quia vel ipsam eum, odio tempora, nostrum
                officia sed eveniet aspernatur laborum.
              </p>
            </div>
          </div>

          <span className="arrow-btn btn1"></span>
          <span className="arrow-btn btn2"></span>
        </a>
      </div>
    </section>
  );
}
