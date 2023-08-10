import React from "react";
import supportImage from "../../assets/images/support/supportTop.jpg";
import TopBlock from "../../components/areCommon/TopBlock";
import QuestionsAnswers from "../../components/serviceSupport/QuestionsAnswers";
import PensionPrograms from "../../components/serviceSupport/PensionPrograms";
import SupportForm from "../../components/serviceSupport/SupportForm";

const ServiceSupportPage = () => {
  return (
    <>
      <TopBlock heading="Поддержка" image={supportImage} />

      <div id={"questionsAnswers"}>
        <QuestionsAnswers />
      </div>

      <PensionPrograms />

      <div id={"form"}>
        <SupportForm />
      </div>
    </>
  );
};

export default ServiceSupportPage;
