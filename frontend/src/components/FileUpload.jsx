import React, { useState, useEffect } from "react";
import axios from "axios";

const FileUpload = ({ onUploadSuccess }) => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState("");
    const [isUploading, setIsUploading] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setError(""); 
    };

    const handleSubmit = async () => {
        if (!file) {
            setError("Please select a file before uploading.");
            return;
        }

        if (file.type !== "application/pdf") {
            setError("Only PDF files are allowed.");
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            setError("File size exceeds 5 MB limit.");
            return;
        }

        // const formData = new FormData();
        // formData.append("file", file);

        try {
            setIsUploading(true); 
            const response = await axios.post(
                "http://127.0.0.1:8000/upload/", 
                {'file': file},
                { headers: { "Content-Type": "multipart/form-data" } }
            );
            onUploadSuccess(response.data); 
            setIsUploading(false);
        } catch (err) {
            setError("Failed to upload the file. Please try again.");
            setIsUploading(false);
        }
    };

    return (
        <div className="w-full flex items-center justify-center">
            <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
            />
            <button className="button-stroke" onClick={handleSubmit} disabled={isUploading}>
                {isUploading ? "Uploading..." : "Upload"}
            </button>
            {error && <p>{error}</p>} {/* Corrected rendering of the error */}
        </div>
    );
};

export default FileUpload;
