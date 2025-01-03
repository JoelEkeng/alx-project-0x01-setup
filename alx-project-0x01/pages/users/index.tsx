import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces/index";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">User Content</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button>
        </div>
        <div className="grid grid-cols-4 w-full gap-4">
          {posts?.map((user: UserProps) => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              id={user.id}
              username={user.username}
              address={user.address}
              phone={user.phone}
              website={user.website}
              company={user.company}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const posts = await response.json();

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error("Error fetching users:", error);

    return {
      props: {
        posts: [],
      },
    };
  }
}

export default Users;
