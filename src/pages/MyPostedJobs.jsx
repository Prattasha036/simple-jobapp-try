import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

export const MyPostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:3000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);
  return (
    <div>
      <h2>my posted jobs:{jobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>

              <th>Deadline</th>
              <th>Applications</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jobs.map((job, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.title}</div>
                      <div className="text-sm opacity-50">{job.company}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {job.description}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {job.requirements}
                  </span>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">
                    {job.applicationDeadline}
                  </span>
                </td>
                <td>
                  <Link to={`/viewapplications/${job._id}`}>
                    <button className="btn">View Applications</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
