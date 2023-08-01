import React from "react";
import TopBlock from "../../components/areCommon/TopBlock/TopBlock";
import managementImage from "../../assets/images/management/managementTop.jpg";

const ManagementPage = () => {
  return (
    <>
      <TopBlock heading="Руководство и команда" image={managementImage} />
    </>
  );
};

export default ManagementPage;
