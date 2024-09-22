import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getErrorData } from "@/utils/getErrorData";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Profile = () => {
  // react-form-hook
  const { register, handleSubmit } = useForm();
  const [toggle, setToggle] = useState(true);
  const [gender, setGender] = useState("");
  //   const { data } = useGetProfileQuery("");
  const data = {
    data: "",
  };
  //   const { name, phone, address, email } = data?.data;
  //   const [updateProfile] = useUpdateProfileMutation();

  const onSubmit = async (data: any) => {
    try {
      //   const response = await updateProfile(data);
      const response = await {};

      if (response.data) {
        Swal.fire({
          title: "Success",
          text: "Profile updated successfully",
          icon: "success",
        });
        setToggle((prevToggle) => !prevToggle); // Toggle state
      } else {
        const errorData = getErrorData(response.error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text:
            errorData?.message ||
            "An error occurred while updating the profile",
        });
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Something went wrong, try again!";
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    }
  };

  return (
    <div>
      {/* profile completion */}
      <div className="mb-5">
        <p className="text-sm font-semibold text-end">100%</p>
        <Progress value={100} className="w-full" />
      </div>
      {/* profile details */}
      <h1 className="text-center font-semibold text-3xl border-b-2 text-gradient mb-5">
        Profile
      </h1>
      {data && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-2">
            {/* name */}
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input
                readOnly={toggle}
                defaultValue={data?.data.name}
                placeholder="Your Name"
                id="name"
                type="text"
                {...register("name", { required: true })}
              />
            </div>
            {/* email */}
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                defaultValue={data?.data.email}
                readOnly={toggle}
                placeholder="Your Email"
                id="email"
                type="email"
                {...register("email", { required: true })}
              />
            </div>
            {/* phone */}
            <div className="space-y-1">
              <Label htmlFor="phone">Phone No.</Label>
              <Input
                defaultValue={data?.data.phone}
                readOnly={toggle}
                placeholder="Your Phone No."
                id="phone"
                type="number"
                {...register("phone", { required: true })}
              />
            </div>
            {/* age */}
            <div className="space-y-1">
              <Label htmlFor="age">Age</Label>
              <Input
                defaultValue={data?.data.age}
                readOnly={toggle}
                placeholder="Your Phone No."
                id="age"
                type="number"
                {...register("age", { required: true })}
              />
            </div>
            {/* blood */}
            <div className="space-y-1">
              <Label htmlFor="blood">Blood Group</Label>
              <Input
                defaultValue={data?.data.blood}
                readOnly={toggle}
                placeholder="Your Blood Group"
                id="blood"
                type="text"
                {...register("blood", { required: true })}
              />
            </div>
            {/* gender */}

            <div className="space-y-1">
              <Label htmlFor="age">Gender</Label>
              <Select onValueChange={(value) => setGender(value)}>
                <SelectTrigger className="">
                  <SelectValue placeholder="Select your gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Gender</SelectLabel>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* pregnancy status  if gender female*/}
            {gender === "female" && (
              <div className="space-y-1">
                <Label htmlFor="pregnancy">pregnancy</Label>
                <Select {...register("pregnancy", { required: true })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select pregnancy status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>pregnancy</SelectLabel>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            )}
            {/* address */}
            <div className="space-y-1">
              <Label htmlFor="address">Address</Label>
              <Input
                defaultValue={data?.data.address}
                readOnly={toggle}
                placeholder="Your Address"
                id="address"
                type="text"
                {...register("address", { required: true, maxLength: 11 })}
              />
            </div>
          </div>
          {/* buttons */}
          <div className="flex gap-2 mt-5">
            {toggle ? (
              <Button onClick={() => setToggle(!toggle)}>Edit</Button>
            ) : (
              <Button>Update</Button>
            )}
            {!toggle && (
              <Button variant="outline" onClick={() => setToggle(true)}>
                Cancel
              </Button>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default Profile;
