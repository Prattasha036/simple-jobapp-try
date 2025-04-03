import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function HotjobCrad({ job }) {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;
  return (
    <div>
      <div className="card bg-base-100 h-90 shadow-sm">
        <div className="flex gap-2 p-2">
          <figure>
            <img className="w-12" src={company_logo} alt="Company logo" />
          </figure>
          <div>
            <h4 className="text-2xl">{company}</h4>
            <p className="flex items-center">
              <HiOutlineLocationMarker />
              {location}
            </p>
          </div>
        </div>
        <div className="card-body">
          <div className="flex items-center gap-1">
            <h2 className="card-title">{title}</h2>
            <div className="badge badge-secondary">new</div>
          </div>
          <p>{description}</p>
          <div className="flex gap-2 flex-wrap">
            {requirements.map((skill, index) => (
              <p
                key={index}
                className="border rounded-md text-center px-2 hover:text-blue-300"
              >
                {skill}
              </p>
            ))}
          </div>
          <div className="card-actions justify-end items-center">
            <p>
              Salary: ${salaryRange.min} - {salaryRange.max}{" "}
              {salaryRange.currency}
            </p>
            <Link to={`/jobs/${_id}`}>
              <button className="btn btn-primary">Apply</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
