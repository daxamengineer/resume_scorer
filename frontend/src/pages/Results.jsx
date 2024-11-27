import ResumeScore from "../components/ResumeScore";
import { useLocation } from "react-router-dom";

const Results = () => {
    const location = useLocation();
    const { score, feedback } = location.state || {};

    const handleDownload = () => {
        const content = `Resume Score: ${score}/100\n\nFeedback:\n${feedback}`;
        const blob = new Blob([content], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'resume_summary.txt'; // File name for the .txt file
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    };
    
    return (
        <div>
            <h1 className="text-2xl">Resume Score & Feedback</h1>
            <ResumeScore score={score} feedback={feedback} />
            <button onClick={handleDownload}>Download Summary</button>
        </div>
    );
};


export default Results;
