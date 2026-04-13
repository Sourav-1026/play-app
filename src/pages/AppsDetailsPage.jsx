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
    <div className="container mx-auto my-10 px-4">
      <div className="flex flex-col lg:flex-row gap-6 border border-gray-200 shadow-md rounded-md">
        {/* Image Section */}
        <div className="bg-base-200 p-6 sm:p-8 flex justify-center items-center">
          <img className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 lg:h-80 object-cover" src={expectedApp.image} alt={expectedApp.title} />
        </div>

        {/* Content Section */}
        <div className="written space-y-4 p-4 sm:p-6 flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold">{expectedApp.title}</h1>

          <p className="text-gray-400 text-sm sm:text-base">{expectedApp.company}</p>

          <div>
            <p>Rating</p>
          </div>

          <button onClick={handleInstallButton} className="btn bg-green-400 text-white w-full sm:w-auto">
            Install Now ({expectedApp.size} MB)
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppsDetailsPage;
