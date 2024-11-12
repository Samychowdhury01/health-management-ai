/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetReportsQuery } from "@/redux/api/report/reportApi";
import ReportDetailsModal from "./ReportDetailsModal";
import Spinner from "../ui/Spinner";

const PatientReportList = () => {
  const { data, isLoading } = useGetReportsQuery("");
  console.log(data);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Spinner />
      </div>
    );
  }
  return (
    <div>
      {data?.data.length ? (
    data?.data.map((report: any) => (
        <ReportDetailsModal key={report?._id} report={report} />    
    ))
      ) : (
        <p className="text-red-500">No Medical Details Added Yet</p>
      )}
    </div>
  );
};

export default PatientReportList;
