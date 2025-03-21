import { UserPen } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useUserStore from "../../../stores/userStore";
import useAdminUserStore from "../../../stores/AdminUserStore";

function UserProfile() {
  const { id } = useParams();
  const token = useUserStore((state) => state.token);
  const fetchUserById = useAdminUserStore((state) => state.fetchUserById);
  const userById = useAdminUserStore((state) => state.userById);
  const updateUser = useAdminUserStore((state) => state.updateUser);
  const [userData, setUserData] = useState({
    phone: "",
    role: userById.role || "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchUserById(id, token);
  }, [userById]);

  const hdlChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const hdlUpdate = async () => {
    try {
        if (id) {
            await updateUser(id, token,{
              phone: userData.phone,
              role: userData.role
          });
            setIsEditing(false);
          }
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <div className="p-4 ml-50">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="rounded-full w-20 h-20 mr-4"
        />
        <div className="flex-1 min-w-0">
          <p className="text-xl whitespace-nowrap">
            {userById?.firstname} {userById?.lastname}
          </p>
          <p className="text-gray-500 whitespace-nowrap">{userById?.role}</p>
          <p className="text-gray-500 whitespace-nowrap">{userById?.address}</p>
        </div>
        <div className="ml-auto flex">
          <UserPen
            className="w-8 h-8 text-amber-500"
            onClick={() => setIsEditing(true)}
          />
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-4 mb-4">
        <div className="flex">
          <h2 className="text-lg font-bold mb-2">Personal Information</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>Name</p>
            <p>
              {userById?.firstname} {userById?.lastname}
            </p>
          </div>
          <div>
            <p>Email</p>
            <p>{userById?.email}</p>
          </div>
          <div>
            <p>Phone</p>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                defaultValue={userById?.phone || ""}
                onChange={hdlChange}
                className="border p-1 rounded"
              />
            ) : (
              <p>{userById?.phone}</p>
            )}
          </div>
          <div>
            <p>Role</p>
            {isEditing ? (
              <select
                name="role"
                onChange={hdlChange}
                className="border p-1 rounded"
              >
                <option value="ADMIN">ADMIN</option>
                <option value="USER">USER</option>
              </select>
            ) : (
              <p>{userById?.role}</p>
            )}
          </div>
          <div>
            <p>Created</p>
            <p>{userById?.createdAt}</p>
          </div>
          <div>
            <p>Update</p>
            <p>{userById?.updatedAt}</p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-lg font-bold mb-2">Medical History</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="border p-2 rounded-md text-center">
            <p>Package 1</p>
            <span>None</span>
          </div>
          <div className="border p-2 rounded-md text-center">
            <p>Package 2</p>
            <span>None</span>
          </div>
          <div className="border p-2 rounded-md text-center">
            <p>Package 3</p>
            <span>None</span>
          </div>
        </div>
      </div>
      {isEditing && (
        <button
          onClick={hdlUpdate}
          className=" bg-amber-500 text-white p-2 rounded mt-4 ml-150"
        >
          Update
        </button>
      )}
    </div>
  );
}

export default UserProfile;
