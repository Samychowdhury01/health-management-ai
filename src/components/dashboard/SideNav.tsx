/* eslint-disable @typescript-eslint/no-explicit-any */
import SideActiveLink from "./SideActiveLink";

const SideNav = () => {
  const user: any = {};
  const userNavItem = (
    <>
      <li>
        <SideActiveLink to="/dashboard/profile">Profile</SideActiveLink>
      </li>
      <li>
        <SideActiveLink to="/dashboard/add-medicine">
          Add Medicine
        </SideActiveLink>
      </li>
      <li>
        <SideActiveLink to="/dashboard/medicines">Medicines</SideActiveLink>
      </li>
    </>
  );
  const adminNavItem = (
    <>
      <li>
        <SideActiveLink to="/dashboard/profile">Profile</SideActiveLink>
      </li>
      <li>
        <SideActiveLink to="/dashboard/users">Users</SideActiveLink>
      </li>
      <li>
        <SideActiveLink to="/dashboard/rentals">User Activities</SideActiveLink>
      </li>
    </>
  );

  return (
    <div className="p-5 rounded-md h-full">
      <ul className="space-y-5">
        {user.role !== "user" ? userNavItem : adminNavItem}
      </ul>
    </div>
  );
};

export default SideNav;
