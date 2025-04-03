import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Swal from "sweetalert2";

export const JobApply = () => {
  const { id } = useParams();

  const { user } = useAuth();
  // console.log(id, user);

  const navigate = useNavigate();

  const submitJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkdin = form.linkdin.value;
    const resume = form.resume.value;
    // console.log(linkdin, resume);
    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkdin,
      resume,
    };
    fetch("http://localhost:3000/job-application", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Apply job Succes-fully",
            icon: "success",
            draggable: true,
          });
          navigate("/myApplications");
        }
      });
  };
  return (
    <div className="card bg-base-100 w-full shadow-2xl">
      <form onSubmit={submitJob} className="card-body ">
        <h1 className="text-2xl font-bold">Aplly job and Good luck!</h1>
        <fieldset className="fieldset">
          <label className="fieldset-label w-full">Linkdin Url</label>
          <input
            type="url"
            name="linkdin"
            className="input"
            placeholder="url"
          />
          <label className="fieldset-label w-full">Resume Url</label>
          <input type="url" name="resume" className="input" placeholder="url" />

          <button className="btn btn-neutral mt-4 w-[60px]">Apply</button>
        </fieldset>
      </form>
    </div>
  );
};
