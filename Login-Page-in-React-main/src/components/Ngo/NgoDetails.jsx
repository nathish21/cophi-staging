import React, { useState, useEffect } from "react";
import "./NgoDetails.css";
import { getNgoDetails } from "../../api/userService";

export const NgoDetails = () => {
  const [ngoDetails, setNgoDetails] = useState(null);

  useEffect(() => {
    const fetchNgoDetails = async () => {
      try {
        const data = await getNgoDetails();
        setNgoDetails(data);
      } catch (error) {
        console.error("Error fetching NGO details:", error);
      }
    };

    fetchNgoDetails();
  }, []);

  return (
    <div className="ngo-details-container">
      <h2>NGO Details</h2>
      {ngoDetails ? (
        <div className="ngo-details">
          <p>
            <strong>email:</strong> {ngoDetails.email}
          </p>
          <p>
            <strong>Category Name:</strong> {ngoDetails.categoryName}
          </p>
          <p>
            <strong>Category Id:</strong> {ngoDetails.categoryId}
          </p>
          <p>
            <strong>Organization Name:</strong> {ngoDetails.organizationName}
          </p>{" "}
          <p>
            <strong>Welfare Description:</strong>{" "}
            {ngoDetails.welfareDescription}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
