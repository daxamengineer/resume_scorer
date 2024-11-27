import React from "react";

const ResumeScore = ({ score, feedback }) => {
    return (
        <div>
            {score !== undefined ? (
                <div>
                    Score: {score}/100
                        <h3>Feedback:</h3>
                        {feedback || "No feedback provided."}
                </div>
            ) : (
                <p>Please upload a resume.</p>
            )}
        </div>
    );
};

export default ResumeScore;
