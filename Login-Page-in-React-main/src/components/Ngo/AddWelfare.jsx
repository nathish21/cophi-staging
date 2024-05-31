import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AddWelfare.css";
import add_icon from "../Assets/add.png";
import { getCatalogs, updateNgoDetails } from "../../api/userService";

export const AddWelfare = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [welfareTitle, setWelfareTitle] = useState("");
  const [welfareDescription, setWelfareDescription] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [welfareList, setWelfareList] = useState([]);
  const [catalogs, setCatalogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCatalogs = async () => {
      try {
        const data = await getCatalogs();
        setCatalogs(data);
      } catch (error) {
        console.error("Error fetching catalogs:", error);
      }
    };

    fetchCatalogs();
  }, []);

  const updateNgo = async () => {
    try {
      if (!selectedCategory) {
        setError("Please select a category.");
        return;
      }

      const userdata = {
        categoryId: selectedCategory.categoryId,
        categoryName: selectedCategory.categoryName,
        organizationName: organizationName,
        welfareDescription: welfareDescription,
      };

      const response = await updateNgoDetails(userdata);

      if (response.status === 200) {
        console.log("Success");
        navigate("/ngo-details");
      } else {
        setError("Unexpected response status");
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  const handleSelectChange = (e) => {
    const selectedCategoryName = e.target.value;
    const catalog = catalogs.find(
      (catalog) => catalog.categoryName === selectedCategoryName
    );
    setSelectedCategory(catalog);
    setWelfareTitle(catalog.categoryName);
  };

  const toggleShowMore = (index) => {
    const updatedList = welfareList.map((item, idx) =>
      idx === index ? { ...item, showMore: !item.showMore } : item
    );
    setWelfareList(updatedList);
  };

  const handleSubmit = async () => {
    if (welfareTitle && welfareDescription && organizationName) {
      // setWelfareList([
      //   ...welfareList,
      //   {
      //     title: welfareTitle,
      //     description: welfareDescription,
      //     organization: organizationName,
      //     showMore: false,
      //   },
      // ]);
      // setWelfareTitle("");
      // setWelfareDescription("");
      // setOrganizationName("");
      updateNgo();
      // setShowPopup(false);
    } else {
      setError("Please fill in all the details.");
    }
  };

  const handleTransactionClick = () => {
    navigate("/transactions");
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Add Welfare</div>
        <div className="underline"></div>
      </div>

      {welfareList.length === 0 && (
        <div className="add-icon-container" onClick={() => setShowPopup(true)}>
          <img src={add_icon} alt="add icon" className="add-icon" />
        </div>
      )}

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <div className="header">
              <div className="text">Add Welfare Details</div>
              <div className="underline"></div>
            </div>
            <input
              type="text"
              placeholder="Organization Name"
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
              className="input-field"
            />

            <select
              value={selectedCategory ? selectedCategory.categoryName : ""}
              onChange={handleSelectChange}
              className="input-field"
            >
              <option value="" disabled>
                Select Welfare Title
              </option>
              {catalogs.map((catalog) => (
                <option key={catalog._id} value={catalog.categoryName}>
                  {catalog.categoryName}
                </option>
              ))}
            </select>

            <textarea
              placeholder="Welfare Description"
              value={welfareDescription}
              onChange={(e) => setWelfareDescription(e.target.value)}
              className="input-field"
            />
            <div className="popup-buttons">
              <button onClick={handleSubmit}>OK</button>
              <button onClick={() => setShowPopup(false)}>Cancel</button>
            </div>
            {error && <p className="error-message">{error}</p>}
          </div>
        </div>
      )}
      <div className="welfare-list">
        {welfareList.map((welfare, index) => (
          <div key={index} className="welfare-item">
            <h4>{welfare.title}</h4>
            {welfare.showMore && (
              <>
                <p>
                  <strong>Organization:</strong> {welfare.organization}
                </p>
                <p>{welfare.description}</p>
              </>
            )}
            <button
              className="show-more-btn"
              onClick={() => toggleShowMore(index)}
            >
              {welfare.showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        ))}
      </div>

      <div className="transaction-button-container">
        <button className="transaction-button" onClick={handleTransactionClick}>
          Transactions
        </button>
      </div>
    </div>
  );
};
