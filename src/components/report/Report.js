import { ReportService } from "../../services/report_service/ReportService";
import ListItem from "../listItem/ListItem";
import "./Report.css";

const reportService = new ReportService();

function prepareList() {
  const report = reportService.report;
  return report.map((e) => {
    return <ListItem key={e.name} name={e.name} value={e.value} />;
  });
}

function Report() {
  return (
    <div className="report">
      <div className="report__title">Layout Information</div>
      <div className="report__container">{prepareList()}</div>
    </div>
  );
}

export default Report;
