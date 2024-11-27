import React from "react";
import { useNavigate } from "react-router-dom";
import FileUpload from "../components/FileUpload";

const Home = () => {
    const navigate = useNavigate();

    const handleUploadSuccess = (data) => {
        navigate("/results", { state: data });
    };

    return (
        <div>
            <p>Upload your resume here</p>
            <div>
                <FileUpload onUploadSuccess={handleUploadSuccess} />
            </div>
        </div>
    );
};

export default Home;
