import { memo, useContext } from "react";
import { AdminContext } from "../../contexts/admin.context";

const UserTable = () => {
  const { triggerAddUser, users, setSingleSelectedUser } =
    useContext(AdminContext);

    console.log({users})
  return (
    <div className="mt-14 flex justify-center flex-col">
      <div className="w-[836px] mx-auto">
        <button
          onClick={triggerAddUser}
          className="bigButton text-[#fff] text-[42px] px-56 py-8 font-bold  flex justify-center mx-auto"
        >
          Add User
        </button>
        <table className="mt-16 w-full">
          <thead className="border-b-4 py-4 border-[#000]">
            <th className="text-4xl font-semibold text-start p-6">Users</th>
            <th className="text-4xl font-semibold text-start p-6">Password</th>
            <th></th>
          </thead>
          <tbody>
            {users?.map((user) => {
              const { name, password } = user;

              return (
                <tr className="border-b-2 border-[#000] py-4">
                  <td className="text-4xl text-start p-4">{name}</td>
                  <td className="text-4xl text-start p-4">{password.slice(0,20)}</td>
                  <td onClick={() => setSingleSelectedUser(user)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-8 h-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </td>
                </tr>
              );
            })}

            <tr className="border-b-2 border-[#000] py-4"></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default memo(UserTable);
