import { useContext, useEffect, useState } from "react";
import MyVisaApplicationCard from "./MyVisaApplicationCard";
import { AuthContext } from "../Provider/AuthProvider";
import Lottie from "lottie-react";
import LoadingJson from "../assets/loadingLottie.json";

const MyVisaApplications = () => {
  const [userVisas, setUserVisas] = useState([]); // Stores all the visa data
  const [loading, setLoading] = useState(true); // Tracks loading state
  const [searchQuery, setSearchQuery] = useState(""); // Tracks the search input value

  // use context to get logged-in user details
  const { user } = useContext(AuthContext);
  const email = user?.email; // Get user's email to fetch their visa applications

  // Fetch the visa data when the component loads
  useEffect(() => {
    fetch(`https://zvisa-server.vercel.app/userVisas/${email}`)
      .then((response) => response.json())
      .then((data) => {
        setUserVisas(data); // Store the fetched data in userVisas
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching visa data:", error);
        setLoading(false); // Set loading to false if there is an error
      });
  }, [email]); // Dependency on email ensures the fetch runs again if email changes

  // Function to handle delete operation
  const handleDelete = (id) => {
    setUserVisas((prev) => prev.filter((visa) => visa._id !== id)); // Remove deleted visa from the list
  };

  // Function to update the search query as the user types
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Set the search query to the input value
  };

  // The filteredVisas array will only contain visas where the country name matches the search query
  // .filter() goes through all visas and checks if the country name includes the search term
  const filteredVisas = userVisas.filter(
    (visa) =>
      visa.visaDetails.countryName
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    // Converts both the country name and search query to lowercase for case-insensitive matching
  );

  // Display loading spinner while data is being fetched
  // <span className="loading loading-bars loading-lg"></span>
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Lottie animationData={LoadingJson} style={{width:200, height:200}}></Lottie>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        My Visa Applications
      </h2>

      {/* Search Input */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search by country name..."
          value={searchQuery} // Bind the input field to the searchQuery state
          onChange={handleSearchChange} // Update searchQuery when the user types
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn bg-blue-500 text-white ml-2">Search</button>
      </div>

      {/* Display visas after filtering */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVisas.length > 0 ? (
          filteredVisas.map((userVisa) => (
            // Display each filtered visa as a card
            <MyVisaApplicationCard
              key={userVisa._id}
              userVisa={userVisa}
              onDelete={handleDelete}
            />
          ))
        ) : (
          // Show message if no visas match the search query
          <p className="text-center text-gray-500">
            No visas found for the given country.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyVisaApplications;
