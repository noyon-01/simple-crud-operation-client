import UserTable from "@/components/UsersTable";
import { getData } from "@/lib/getData"

export default async function UsersCollection() {
  const users = await getData();
  console.log(users);

  return (
    <div>
      <h1>This is Users Page.</h1>
      <UserTable users={users}/>
    </div>
  )
}