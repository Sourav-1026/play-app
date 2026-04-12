import React from "react";
import { Link, useRouteLoaderData } from "react-router";

const AppsPage = () => {
  const apps = useRouteLoaderData("root");
  // console.log(apps);
  return (
    <div className="container mx-auto my-20">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">All Apps</h1>
        <p className="text-gray-400 w-[50%] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptate perferendis porro, illum quod animi cumque quidem sed nesciunt delectus a quos architecto ullam, asperiores
          neque, perspiciatis fugit amet. Eligendi.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5">
        {apps.map((app, ind) => (
          <Link to={`/apps/${app.id}`} key={ind} className="card bg-base-100  p-3.5 shadow-sm border border-gray-200 rounded-md">
            <figure>
              <img className="w-50 h-50 object-cover rounded-md" src={app.image} alt={app.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{app.title}</h2>
              <div className="card-actions justify-between">
                <div className="badge bg-green-100 text-green-400">{app.downloads}</div>
                <div className="badge bg-orange-100 text-orange-500">{app.ratingAvg}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AppsPage;
