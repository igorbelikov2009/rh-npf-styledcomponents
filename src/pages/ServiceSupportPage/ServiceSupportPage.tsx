import React from "react";
import supportImage from "../../assets/images/support/supportTop.jpg";
import TopBlock from "../../components/areCommon/TopBlock";
import QuestionsAnswers from "../../components/serviceSupport/QuestionsAnswers";
import PensionPrograms from "../../components/serviceSupport/PensionPrograms";

const ServiceSupportPage = () => {
  return (
    <>
      <TopBlock heading="Поддержка" image={supportImage} />

      <div id={"questionsAnswers"}>
        <QuestionsAnswers />
      </div>

      <PensionPrograms />
    </>
  );
};

export default ServiceSupportPage;
