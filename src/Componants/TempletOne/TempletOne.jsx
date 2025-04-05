import React, { useContext, useState } from "react";
import { dataContext } from "../DataContext/DataContext";
import { PDFDownloadLink } from "@react-pdf/renderer";
import GeneratePDF from "../GeneratePDF/GeneratePDF";

export default function TempletOne() {
  const { cvData, handel, handelExpirience, handelEducation } =
    useContext(dataContext);
  const [imgFile, setImgFile] = useState(null); // لحفظ صورة المستخدم

  // ✅ رفع صورة المستخدم
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgFile(reader.result); // تحويل الصورة إلى Base64 لاستخدامها في PDF
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      {/* ✅ الفورم لإدخال البيانات */}
      <form className="form-color form-control">
        <h2>Fill Your CV Details</h2>
        {/* ✅ تحميل صورة المستخدم */}
        <div className="mb-3">
          <label className="form-label">Upload Profile Image</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            onChange={handleImageUpload}
          />
        </div>
        <label htmlFor="firstName">First Name:</label>
        <input
          name="firstName"
          type="text"
          className="form-control"
          placeholder="Enter your first name"
          value={cvData.firstName}
          onChange={handel}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          type="text"
          className="form-control"
          placeholder="Enter your last name"
          value={cvData.lastName}
          onChange={handel}
        />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          name="phoneNumber"
          type="tel"
          className="form-control"
          placeholder="Enter your phone number"
          value={cvData.phoneNumber}
          onChange={handel}
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          className="form-control"
          placeholder="Enter your email"
          value={cvData.email}
          onChange={handel}
        />
        <label htmlFor="address">Address</label>
        <input
          name="address"
          type="text"
          className="form-control"
          placeholder="Enter your address"
          value={cvData.address}
          onChange={handel}
        />
        <label htmlFor="city">City</label>
        <input
          name="city"
          type="text"
          className="form-control"
          placeholder="Enter your city"
          value={cvData.city}
          onChange={handel}
        />
        <label htmlFor="summary">Summary</label>
        <textarea
          name="summary"
          className="form-control"
          placeholder="Enter your summary"
          value={cvData.summary}
          onChange={handel}
        />
        <label htmlFor="skills">Skills</label>
        <textarea
          name="skills"
          className="form-control"
          placeholder="Enter your skills"
          value={cvData.skills}
          onChange={handel}
        />
        <label htmlFor="experience">Experience</label>
        {cvData.experience.map((exp, index) => (
          <div key={index}>
            <input
              name="jobTitle"
              type="text"
              className="form-control"
              placeholder="Enter your job title"
              value={exp.jobTitle}
              onChange={(e) => handelExpirience(e, index)}
            />
            <input
              name="employer"
              type="text"
              className="form-control"
              placeholder="Enter your employer"
              value={exp.employer}
              onChange={(e) => handelExpirience(e, index)}
            />
            <input
              name="city"
              type="text"
              className="form-control"
              placeholder="Enter your city"
              value={exp.city}
              onChange={(e) => handelExpirience(e, index)}
            />
            <input
              name="startDate"
              type="date"
              className="form-control"
              value={exp.startDate}
              onChange={(e) => handelExpirience(e, index)}
            />
            <input
              name="endDate"
              type="date"
              className="form-control"
              value={exp.endDate}
              onChange={(e) => handelExpirience(e, index)}
            />
            <textarea
              name="jobDescription"
              className="form-control"
              placeholder="Enter job description"
              value={exp.jobDescription}
              onChange={(e) => handelExpirience(e, index)}
            />
          </div>
        ))}
        <label htmlFor="education">Education</label>
        {cvData.education.map((edu, index) => (
          <div key={index}>
            <input
              name="degree"
              type="text"
              className="form-control"
              placeholder="Enter your degree"
              value={edu.degree}
              onChange={(e) => handelEducation(e, index)}
            />
            <input
              name="institution"
              type="text"
              className="form-control"
              placeholder="Enter your institution"
              value={edu.institution}
              onChange={(e) => handelEducation(e, index)}
            />
            <input
              name="city"
              type="text"
              className="form-control"
              placeholder="Enter your city"
              value={edu.city}
              onChange={(e) => handelEducation(e, index)}
            />
            <input
              name="startDate"
              type="date"
              className="form-control"
              value={edu.startDate}
              onChange={(e) => handelEducation(e, index)}
            />
            <input
              name="endDate"
              type="date"
              className="form-control"
              value={edu.endDate}
              onChange={(e) => handelEducation(e, index)}
            />
            <textarea
              name="description"
              className="form-control"
              placeholder="Enter description"
              value={edu.description}
              onChange={(e) => handelEducation(e, index)}
            />
          </div>
        ))}
      </form>

      {/* ✅ زر تحميل PDF */}
      <PDFDownloadLink
        document={<GeneratePDF cvData={cvData} imgFile={imgFile} />}
        fileName="My_CV.pdf"
      >
        {({ loading }) =>
          loading ? (
            <button className="btn btn-secondary" disabled>
              Generating PDF...
            </button>
          ) : (
            <button className="btn btn-primary">Download PDF</button>
          )
        }
      </PDFDownloadLink>
    </div>
  );
}
