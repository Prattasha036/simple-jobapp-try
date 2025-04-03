import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export const JobDetails = () => {
  const {
    _id,
    title,
    company,
    company_logo,
    description,

    deadline,
  } = useLoaderData();
  return (
    <div>
      <h1>{title}</h1>
      <img src={company_logo} alt="" />
      <p>{company}</p>

      <p>{description}</p>
      <p>{deadline}</p>
      <Link to={`/jobapply/${_id}`}>
        <button className="btn btn-primary">Apply Now</button>
      </Link>
    </div>
  );
};
