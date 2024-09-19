import { useQuery } from "react-query";
import { Swal } from 'sweetalert2';
import { serverUrl } from "../../lib/utils";
import UserLoading from "../../shared/svgIcon/UserLoading";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
    error,
  } = useQuery("users", () =>
    fetch(`${serverUrl}/users`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }).then((res) => res.json())
  );

  const makeAdmin = (email) => {
    Swal.fire({
      title: "Confirm Making this user an Admin?",
      showDenyButton: true,
      confirmButtonText: "Confirm",
      denyButtonText: "No",
      customClass: {
        actions: "my-actions",
        confirmButton: "order-2",
        denyButton: "order-3",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${serverUrl} / admin / ${email}`, {
          method: "PUT",
          headers: {
            authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire("User is now an Admin", "", "success");
            if (data.modifiedCount) {
              refetch();
            }
          });
      }
    });
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Confirm Deleting This User?",
      showDenyButton: true,
      confirmButtonText: "Confirm",
      denyButtonText: "No",
      customClass: {
        actions: "my-actions",
        confirmButton: "order-2",
        denyButton: "order-3",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${serverUrl} / user / ${id}`, {
          method: "Delete",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            refetch();
          });
        Swal.fire("User Deleted!", "", "success");
      }
    });
  };
  if (isLoading) return <UserLoading />;
  if (error) console.log(error);

  return (
    <div>
      <h3 className="text-center text-3xl mb-4">
        {" "}
        Manage Users : {users?.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((u, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>
                  <div>
                    {u.role !== "admin" && (
                      <button
                        onClick={() => makeAdmin(u.email)}
                        className="btn btn-xs btn-success mr-2"
                      >
                        Make Admin
                      </button>
                    )}
                    <button
                      onClick={() => deleteUser(u._id)}
                      className="btn btn-xs btn-warning"
                    >
                      Delete Account
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
