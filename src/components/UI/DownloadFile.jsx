// creates a file using the resume uploded to the assets folder
export default function DownloadFile() {
    const createFile = () => {
  const fileUrl = "src/assets/resume.pdf";
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "jakeHowdeshellResume.pdf";
  link.click();
}
  return (
    <div> 
     Download my: <button className="resume-link" onClick={createFile}>resume</button>
    </div>
  );
}
