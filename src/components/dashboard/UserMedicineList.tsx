/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetUserMedicinesQuery } from "@/redux/api/medicine/medicineApi";
import { convertHourTime } from "@/utils/convertHourTime";
const UserMedicineList = () => {
  const { data, isLoading } = useGetUserMedicinesQuery("");
  return (
    <>
      <h1 className="text-center font-semibold text-3xl border-b-2 text-gradient mb-5">
        A list of your Medicines.
      </h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Power</TableHead>
            <TableHead className="text-center">Taking Time</TableHead>
            <TableHead className="text-center">Days</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {!isLoading &&
            data?.data.map((medicine: any) => (
              <TableRow key={medicine._id}>
                <TableCell>
                  <div className="font-medium w-[100px] h-[100px]">
                    <img
                      src={medicine.imgUrl}
                      alt={medicine.name}
                      className="object-fill w-full h-full rounded-lg"
                    />
                  </div>
                </TableCell>
                <TableCell>{medicine.name}</TableCell>
                <TableCell>{medicine.power}</TableCell>
                <TableCell className="text-center">
                  {convertHourTime(medicine.time)}
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {medicine.days.map((day: string, index: number) => (
                      <p
                        key={index}
                        className="text-sm p-2 bg-blue-50 text-gray-600 rounded-lg"
                      >
                        {day}
                      </p>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
};

export default UserMedicineList;
