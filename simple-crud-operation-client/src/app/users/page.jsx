import { AddUser } from "@/components/AddUser";
import UserTable from "@/components/UsersTable";
import { addNewUser, deleteUserById } from "@/lib/actions";
import { getData } from "@/lib/getData";

export default async function UsersCollection() {
  const users = await getData();
  console.log(users);

  return (
    <div>
      <div className="flex justify-between p-5">
        <h1>This is Users Page.</h1>
        <AddUser addNewUserAction={addNewUser} />
      </div>
      <div className="px-5">
        <UserTable users={users} deleteUserAction={deleteUserById} />
      </div>
    </div>
  );
}
