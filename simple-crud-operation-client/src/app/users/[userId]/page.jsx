import { getUserById } from "@/lib/getData";
import { Button, Card } from "@heroui/react";
import Link from "next/link";

export default async function UsersDetails({ params }) {
  const { userId } = await params;
  const user = await getUserById(userId);
  //   console.log(user);

  return (
    <div className="px-20 py-5">
      <h1 className="text-3xl font-bold mb-5 ml-1">UsersDetails Page</h1>
      <Card className="w-[520px]" variant="secondary">
        <Card.Header>
          <Card.Title className="text-2xl">{user.name}</Card.Title>
          <Card.Description>{user.email}</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>{user.role}</p>
          <p>{user.phone}</p>
          <p>{user.address}</p>
        </Card.Content>
        <Link href={"/users"}><Button variant="primary" className={"rounded-xl"}>Back To Users Page</Button></Link>
      </Card>
    </div>
  );
}
