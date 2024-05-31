import React, { useState, useEffect } from "react";
import "./NgoDetails.css"; // Import your CSS file for styling

const NgoDetails = () => {
  // State to store NGO details
  const [ngoDetails, setNgoDetails] = useState(null);

  // Simulate fetching NGO details on component mount
  useEffect(() => {
    // Replace this with actual API call to fetch NGO details
    // For example:
    fetchNgoDetails()
      .then((data) => setNgoDetails(data))
      .catch((error) => console.error("Error fetching NGO details:", error));
  }, []);

  // Function to fetch NGO details from backend
  const fetchNgoDetails = async () => {
    // Simulating API call with setTimeout
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Replace this with actual data from your backend
        const fakeNgoDetails = {
          name: "Example NGO",
          address: "123 Main St, City, Country",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          // Add more fields as needed
        };
        resolve(fakeNgoDetails);
      }, 1000); // Simulating delay for fetching data
    });
  };

  return (
    <div className="ngo-details-container">
      <h2>NGO Details</h2>
      {ngoDetails ? (
        <div className="ngo-details">
          <p>
            <strong>Name:</strong> {ngoDetails.name}
          </p>
          <p>
            <strong>Address:</strong> {ngoDetails.address}
          </p>
          <p>
            <strong>Description:</strong> {ngoDetails.description}
          </p>
          {/* Render more details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NgoDetails;
