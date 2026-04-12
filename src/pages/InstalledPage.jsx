import React, { useContext } from "react";
import { InstalledAppsContext } from "../context/InstalledAppsProvider";
import { toast } from "react-toastify";

const InstalledPage = () => {
  const { installedApps, setInstalledApps } = useContext(InstalledAppsContext);
  // console.log(installedApps, "InstalledApps");
  const handleUninstallButton = (iapp) => {
    const filterdapp = installedApps.filter((installapp) => installapp.id !== iapp.id);
    // console.log(filterdapp);
    setInstalledApps(filterdapp);
    toast.warning(`${iapp.title} has been uninstalled`);
  };
  return (
    <div className="container mx-auto my-10">
      {installedApps.length == 0 ? (
        <div className="flex justify-center items-center py-30 bg-base-200 border border-gray-300 shadow-md rounded-md ">
          <h1 className="text-3xl font-bold">Installed Apps Section is Empty</h1>
        </div>
      ) : (
        <div className="space-y-5">
          {installedApps.map((iapp, ind) => (
            <div key={ind} className="p-3 border border-gray-200 shadow-md rounded-md">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <img className="w-30 h-30 object-cover rounded-md" src={iapp.image} alt={iapp.title} />
                  <div className="">
                    <h3 className="text-xl font-bold">{iapp.title}</h3>
                    <p className="text-gray-500 font-semibold">Downloads: {iapp.downloads}</p>
                  </div>
                </div>
                <button onClick={() => handleUninstallButton(iapp)} className="btn btn-error">
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InstalledPage;
