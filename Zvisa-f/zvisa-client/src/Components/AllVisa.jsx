import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import VisaCard from "./VisaCard";
import { Typewriter } from "react-simple-typewriter";

const AllVisa = () => {
  const loadVisas = useLoaderData(); // Loaded visas from server
  const [visas, setVisas] = useState(loadVisas); // State for displayed visas
  const [filter, setFilter] = useState("All"); // State for selected filter

  // Handle dropdown selection change
  const handleFilterChange = (event) => {
    const selectedType = event.target.value;
    setFilter(selectedType);

    if (selectedType === "All") {
      setVisas(loadVisas); // Show all visas
    } else {
      // Filter visas based on the selected type
      setVisas(loadVisas.filter((visa) => visa.visaType === selectedType));
    }
  };

  // Extract unique visa types for dropdown
  /**
   * Create a list of visa types for the dropdown:
   * - `loadVisas.map((visa) => visa.visaType)` generates an array of all visa types.
   * - `new Set(...)` removes duplicate visa types, ensuring each type appears only once.
   * - `[...new Set(...)]` converts the `Set` back into an array.
   * - We prepend "All" at the beginning of the array to allow showing all visas.
   *
   * Example:
   * If `loadVisas` contains:
   * [{visaType: "Tourist"}, {visaType: "Business"}, {visaType: "Tourist"}]
   * Then `visaTypes` will be:
   * ["All", "Tourist", "Business"]
   */
  const visaTypes = ["All", ...new Set(loadVisas.map((visa) => visa.visaType))];

  return (
    <div className="w-11/12 mx-auto mt-6 mb-6 bg-gray-50 py-8 rounded-md">

      {/* <<<<<<<<<<<<<<<<<<<<React Simple Typewriter>>>>>>>>>>>>>>>>>>Start */}
      <h2 className="text-center font-bold text-3xl mb-6">
        {""}
        <span style={{ color: "#4F709C", fontWeight: "bold" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[
              "Student Visa",
              "Official Visa",
              "Business Visa",
              "Tourist Visa",
              "Transit Visa",
            ]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h2>
      {/* <<<<<<<<<<<<<<<<<<<React Simple Typewriter>>>>>>>>>>>>>>>>>>>>>End */}

      {/* Dropdown filter with label */}
      <div className="mb-6 flex items-center justify-start">
        <label
          htmlFor="visa-filter"
          className="mr-4 ml-4 font-semibold text-gray-700"
        >
          Filter by Visa Type:
        </label>
        <select
          id="visa-filter"
          value={filter}
          onChange={handleFilterChange}
          className="border bg-slate-50 border-gray-300 rounded-md px-4 py-2 text-gray-700"
        >
          {visaTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Visa grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {visas.map((visa) => (
          <VisaCard
            key={visa._id}
            visa={visa}
            visas={visas}
            setVisas={setVisas}
          ></VisaCard>
        ))}
      </div>
    </div>
  );
};

export default AllVisa;
