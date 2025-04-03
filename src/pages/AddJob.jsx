import React from "react";
import Swal from "sweetalert2";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const AddJob = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleaddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    // \n soriye akta array te convert korer jonne
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    // console.log(newJob);

    fetch("http://localhost:3000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "job-details Succes-fully created",
            icon: "success",
            draggable: true,
          });
          navigate("/mypostedjobs");
        }
      });
  };

  return (
    <div>
      <h1 className="text-2xl">Add a new Job</h1>
      <form onSubmit={handleaddJob} className="card-body max-w-full ">
        <fieldset className="fieldset">
          <label className="fieldset-label">Job Title</label>
          <input
            type="text"
            name="title"
            className="input input-bordered "
            placeholder="job title"
          />

          <label className="fieldset-label ">Location</label>
          <input
            type="text"
            name="location"
            className="input input-bordered "
            placeholder="location"
          />

          <label className="fieldset-label ">Job-type</label>
          <select defaultValue="Pick a font" className="select select-ghost">
            <option disabled={true}>jobType</option>
            <option>Full-time</option>
            <option>Intern</option>
            <option>Part-time</option>
          </select>

          <label className="fieldset-label ">Job-Field</label>
          <select
            name="category"
            defaultValue="Pick a font"
            className="select select-ghost"
          >
            <option disabled={true}>Job-type</option>
            <option>Engineer</option>
            <option>Teaching</option>
            <option>Textile</option>
          </select>

          <label className="fieldset-label ">Company name</label>
          <input
            type="text"
            name="company"
            className="input input-bordered "
            placeholder="company"
          />

          <p className="text-xl">Salary rance</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
            <input
              type="text"
              name="min"
              className="input input-bordered "
              placeholder="min-salary"
            />

            <input
              type="text"
              name="max"
              className="input input-bordered "
              placeholder="max-salary"
            />

            <select
              name="currency"
              defaultValue="Pick a font"
              className="select select-ghost"
            >
              <option disabled={true}>Currency</option>
              <option>BDT</option>
              <option>USD</option>
            </select>
          </div>

          <label className="fieldset-label ">Company description</label>
          <textarea
            placeholder="description"
            name="description"
            className="textarea textarea-md"
          ></textarea>

          <label className="fieldset-label ">Job requirements</label>
          <textarea
            placeholder="put each requirements in a new line"
            name="requirements"
            className="textarea textarea-md"
          ></textarea>

          <label className="fieldset-label ">Job responsibility</label>
          <textarea
            placeholder="put responsibility"
            name="responsibilities"
            className="textarea textarea-md"
          ></textarea>

          <label className="fieldset-label ">Hr-email and name</label>
          <input
            defaultValue={user.email}
            type="email"
            name="hr_email"
            className="input input-bordered "
            placeholder="email"
          />
          <input
            type="text"
            name="hr_name"
            className="input input-bordered "
            placeholder="name"
          />

          <label className="fieldset-label ">Company-logo</label>
          <input
            type="url"
            name="
               company_logo"
            className="input input-bordered "
            placeholder="logo"
          />

          <label className="fieldset-label ">applicationDeadline</label>
          <input
            type="date"
            name="applicationDeadline"
            className="input input-bordered "
            placeholder="applicationDeadline"
          />

          <button className="btn btn-neutral mt-4 w-[60px]">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};
