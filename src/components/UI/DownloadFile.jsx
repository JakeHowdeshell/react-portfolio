export default function DownloadFile() {
    const createFile = () => {
  const fileUrl = "";
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "downloaded_file_name.pdf";
  link.click();
}
  return (
    <div> 
     Download my <button onClick={createFile}>resume</button>
    </div>
  );
}

// change the button to a link