import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export let dataContext = createContext("");

export default function DataContextProvider({ children }) {
  const navigate = useNavigate();
  const [imgFile, setImgFile] = useState(null);
  const [cvData, setCvData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    summary: "",
    experience: [
      { jobTitle: "", employer: "", city: "", startDate: "", endDate: "", jobDescription: "" }
    ],
    education: [
      { degree: "", institution: "", city: "", startDate: "", endDate: "", description: "" }
    ],
    skills: "",
  });
  
  const handel = (e) => {
    const { name, value } = e.target;
    setCvData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handelImg = (e) => {
    const file = URL.createObjectURL(e.target.files[0]);
    setImgFile(file);
  };
const handelExpirience = (e) => {
    const { name, value } = e.target;
    setCvData((prev) => ({
      ...prev,
      experience: [
        {
          ...prev.experience[0],
          [name]: value,
        },
      ],
    }));
  };
  const handelEducation = (e) => {
    const { name, value } = e.target;
    setCvData((prev) => ({
      ...prev,
      education: [
        {
          ...prev.education[0],
          [name]: value,
        },
      ],
    }));
  };
  const onClick = (e) => {
    e.preventDefault();
    navigate("/final-result");
  };

  return (
    <dataContext.Provider value={{ cvData, handel, handelImg, onClick, imgFile , handelExpirience, handelEducation }}>  
      {children}
    </dataContext.Provider>
  );
}

