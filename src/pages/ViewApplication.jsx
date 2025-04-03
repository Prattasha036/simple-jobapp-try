import React from "react";
import { useLoaderData } from "react-router-dom";

export const ViewApplication = () => {
  const applications = useLoaderData();

  const handleStatus = (e, id) => {
    console.log(e.target.value, id);
    const data = {
      status: e.target.value,
    };
    fetch(`http://localhost:3000/job-application/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      ViewApplication:{applications.length}
      <div className="flex">
        {applications.map((app, index) => (
          <div key={app._id}>
            <p>{index + 1}</p>
            <p>applicat user email:{app.applicant_email}</p>
            <div>
              <h1>Stats</h1>
              <select
                onChange={(e) => handleStatus(e, app._id)}
                defaultValue={app.status || "Change status"}
                className="select select-sm"
              >
                <option>Waiting</option>
                <option>On Interview</option>
                <option>Hired</option>
                <option>Reject</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
