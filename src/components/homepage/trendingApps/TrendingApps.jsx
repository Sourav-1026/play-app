import React from "react";
import { Link, useRouteLoaderData } from "react-router";

const TrendingApps = () => {
  const apps = useRouteLoaderData("root");
  return (
    <div className="container mx-auto my-10 lg:my-20">
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-bold">Trending Apps</h1>
        <p className="text-gray-400 text-lg w-[80%] lg:w-[50%] mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum maxime dolores quisquam ad similique id provident veniam dolorum nihil ipsa fuga alias deleniti debitis aut, cumque qui in.
          Nesciunt, ipsa?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 lg:px-0 mt-5">
        {apps.slice(0, 9).map((app, ind) => (
          <div key={ind} className="card bg-base-100  p-3.5 shadow-sm border border-gray-200 rounded-md">
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
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <Link className="btn bg-purple-500 text-white" to="/apps">
          View All
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
