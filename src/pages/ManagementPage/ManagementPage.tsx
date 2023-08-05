import React from "react";
import TopBlock from "../../components/areCommon/TopBlock";
import managementImage from "../../assets/images/management/managementTop.jpg";
import Management from "../../components/management/Management/Management";

const ManagementPage = () => {
  return (
    <>
      <TopBlock heading="Руководство и команда" image={managementImage} />

      <Management />
    </>
  );
};

export default ManagementPage;
