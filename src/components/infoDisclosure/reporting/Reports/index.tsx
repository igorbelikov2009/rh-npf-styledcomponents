import React, { FC } from "react";
import { IReport } from "../../../../interfaces/types";
import Report from "../Report";

interface ReportsProps {
  reports: IReport[];
  isVisible: boolean;
}

const Reports: FC<ReportsProps> = ({ reports, isVisible }) => {
  return (
    <>
      {isVisible && (
        <>
          {reports.map((report, index) => (
            <Report key={index} heading={report.heading} archiveLinks={report.archiveLinks} />
          ))}
        </>
      )}
    </>
  );
};

export default Reports;
