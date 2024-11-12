/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { stringToTime } from "@/utils/stringToTime";

const ReportDetailsModal = ({ report }: any) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="p-2 shadow-sm rounded-md cursor-pointer">
          {stringToTime(report?.appointment)}
        </p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Your previous medical History</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* prescription image */}
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="name" className="text-right">
              Prescription Image
            </Label>
            <div className="w-[200px] h-[200px] mx-auto">
              <img
                src={report?.prescriptionImg}
                alt=""
                className="w-full h-full object-fill"
              />
            </div>
          </div>
          {/* doctor name */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              {report?.doctorName}
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
              readOnly
            />
          </div>
          {/* doctor number */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="doctorNumber" className="text-right">
              {report?.doctorNumber}
            </Label>
            <Input
              id="doctorNumber"
              defaultValue="+8801800000"
              className="col-span-3"
              readOnly
            />
          </div>
          {/* symptom */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="symptom" className="text-right">
              {report?.symptom}
            </Label>
            <Input
              id="symptom"
              defaultValue="Fever"
              className="col-span-3"
              readOnly
            />
          </div>
          {/* appointment date */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              {stringToTime(report?.appointment)}
            </Label>
            <Input
              id="date"
              defaultValue="20-10-2024"
              className="col-span-3"
              readOnly
            />
          </div>
          {/* Doctor Advise */}
          {/* prescription image */}
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="name" className="text-right">
              Report Image
            </Label>
            <div className="w-[200px] h-[200px] mx-auto">
              <img
                src={report?.prescriptionImg}
                alt=""
                className="w-full h-full object-fill"
              />
            </div>
          </div>
        </div>
        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};

export default ReportDetailsModal;
