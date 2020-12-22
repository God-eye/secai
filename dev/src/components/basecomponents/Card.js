import React from "react";

export default function Card(props) {
  return (
    <div className="col-lg-4 col-sm-6">
      <div
        className="card work_item wow fadeInUp seo_service_item"
        data-wow-delay="0.1s"
        style={{ width: "28rem" }}
      >
        <img
          className="card-img-top"
          src={props.cardImg}
          alt="Demo Image"
        />
        <div className="card-body">
          <h5 className="card-title">{props.cardTitle}</h5>
          <p className="card-text">
              {props.cardBody}
          </p>
          <a href={props.cardLink} className="btn btn-primary">
            Try Me!
          </a>
        </div>
      </div>
    </div>
  );
}
