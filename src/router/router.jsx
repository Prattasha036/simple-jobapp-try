import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Register from "../pages/Register";
import { SignIn } from "../pages/SignIn";
import { JobDetails } from "../pages/JobDetails";
import { PrivateRoute } from "../context/authcontext/PrivateRoute";
import { JobApply } from "../pages/JobApply";
import { Myapplication } from "../pages/Myapplication";
import { AddJob } from "../pages/AddJob";
import { MyPostedJobs } from "../pages/MyPostedJobs";
import { ViewApplication } from "../pages/ViewApplication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>404 Route not found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "/jobapply/:id",
        element: (
          <PrivateRoute>
            <JobApply></JobApply>
          </PrivateRoute>
        ),
      },
      {
        path: "/addjob",
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },

      {
        path: "/mypostedjobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoute>
        ),
      },

      {
        path: "/myApplications",
        element: (
          <PrivateRoute>
            <Myapplication></Myapplication>
          </PrivateRoute>
        ),
      },
      {
        path: "/viewapplications/:job_id",
        element: (
          <PrivateRoute>
            <ViewApplication></ViewApplication>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/job-applications/jobs/${params.job_id}`),
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "signin",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default router;
