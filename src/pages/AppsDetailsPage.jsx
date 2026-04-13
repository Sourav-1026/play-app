import React, { useContext } from "react";
import { useParams, useRouteLoaderData } from "react-router";
import { InstalledAppsContext } from "../context/InstalledAppsProvider";
import { toast } from "react-toastify";

const AppsDetailsPage = () => {
  const { id } = useParams();

  const apps = useRouteLoaderData("root");
  const expectedApp = apps.find((app) => app.id === parseInt(id));

  const { installedApps, setInstalledApps } = useContext(InstalledAppsContext);

  const handleInstallButton = () => {
    const isFound = installedApps.find((iapp) => iapp.id === expectedApp.id);
    if (isFound) {
      toast.error(`${isFound.title} is already installed`);
      return;
    }

    setInstalledApps([...installedApps, expectedApp]);
    toast.success(`${expectedApp.title} is successfully installed`);
  };
  return (
    <div className="container mx-auto my-10">
      <div className="flex gap-6 border border-gray-200 shadow-md rounded-md">
        <div className="bg-base-200 p-10 flex justify-center items-center">
          <img className="w-80 h-80 object-cover" src={expectedApp.image} alt={expectedApp.title} />
        </div>
        <div className="written space-y-4">
          <h1 className="text-3xl font-bold">{expectedApp.title}</h1>
          <p className="text-gray-300">{expectedApp.company}</p>
          <div className="">
            <p>Rating</p>
          </div>
          <button onClick={handleInstallButton} className="btn bg-green-400 text-white">
            Install Now ({expectedApp.size} MB)
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppsDetailsPage;
