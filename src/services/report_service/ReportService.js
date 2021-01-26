import { ReportItem } from "./ReportItem";

export class ReportService {
  constructor() {
    this.report = [
      new ReportItem("is_logged", "true"),
      new ReportItem("user_name", "oody"),
      new ReportItem("is_currupted", "true"),
    ];
  }
}
