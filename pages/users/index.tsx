import { useRouter } from "next/dist/client/router";
import Layout from "../../components/Layout";

interface UsersProps {
  dataUsers: Array<any>;
}

export default function Users(props: UsersProps) {
  const router = useRouter();
  const { dataUsers } = props;
  return (
    <Layout pageTitle="User Page">
      {dataUsers.map((user) => {
        return (
          <div
            className="card"
            key={user.id}
            onClick={() => router.push(`/users/${user.id}`)}
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </Layout>
  );
}

// get static props

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
