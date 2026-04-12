import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { InstalledAppsContext } from "../../context/InstalledAppsProvider";
import { useRouteLoaderData } from "react-router";

const DeshboardDetails = () => {
  const { installedApps } = useContext(InstalledAppsContext);
  const apps = useRouteLoaderData("root");
  const uninstallApps = apps.length - installedApps.length;

  const data = [
    { name: "Group A", value: installedApps.length, fill: "#0088FE" },
    { name: "Group D", value: uninstallApps, fill: "#FF8042" },
  ];
  return (
    <div className="container mx-auto my-10">
      <div className="border border-gray-200 shadow-md rounded-md p-5">
        <h1 className="text-4xl font-bold text-center mb-10">Plechart of Install & Uninstall Apps</h1>
        <PieChart className="my-10" style={{ width: "50%", margin: "auto", maxWidth: "400px", maxHeight: "80vh", aspectRatio: 1 }} responsive>
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={2}
            dataKey="value"
            isAnimationActive={true}
          />
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default DeshboardDetails;
