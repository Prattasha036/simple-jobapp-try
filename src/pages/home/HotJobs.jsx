import React from "react";
import { useEffect, useState } from "react";
import HotjobCrad from "./HotjobCrad";

export default function HotJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {jobs?.map((job) => (
        <HotjobCrad key={job._id} job={job}></HotjobCrad>
      ))}
    </div>
  );
}
