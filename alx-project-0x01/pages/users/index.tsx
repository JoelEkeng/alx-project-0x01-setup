import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal"; 
import { UserProps } from "@/interfaces/index";
import { useState } from "react";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">User Content</h1>
          <button
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
            onClick={handleOpenModal}
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-4 w-full">
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
      {isModalOpen && <UserModal onClose={handleCloseModal} />}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;