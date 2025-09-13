import { useContext, useEffect, useState } from "react";
import MyAddedVisasCard from "./MyAddedVisasCard";
import { AuthContext } from "../Provider/AuthProvider";

const MyAddedVisas = () => {
  const [myAddedvisas, setMyAddedvisas] = useState([]);
  const [loading, setLoading] = useState(true);

  // use context to get login user
  const { user } = useContext(AuthContext);

  const email = user?.email;

  useEffect(() => {
    fetch(`https://zvisa-server.vercel.app/myAddedvisas/${email}`)
      .then((response) => response.json())
      .then((data) => {
        setMyAddedvisas(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching visa data:", error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    setMyAddedvisas((prev) => prev.filter((visa) => visa._id !== id));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">My Added Visas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {myAddedvisas.map((myAddedvisa) => (
          <MyAddedVisasCard
            key={myAddedvisa._id}
            myAddedvisa={myAddedvisa}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default MyAddedVisas;

