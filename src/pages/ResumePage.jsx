import DownloadFile from '../components/UI/DownloadFile'

export default function Resume() {
    return (
      <div>
        <h4 className="page-title">Resume</h4>
        <div className="profeciencies">
       <DownloadFile/>
       <div>
        <h6>Front-end Proficiencies</h6><ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>JQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
       </ul>
       </div>
       <div>
        <h6>Back-end Proficiencies</h6><ul>
        <li>API</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL Sequilize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
       </ul>
       </div>
       </div>
      </div>
    );
  }