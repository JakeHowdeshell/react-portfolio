export default function Project(props) {
  console.log(props);
  return (
    <>
    <div className="card">
      <a href={props.project.url}><h4>{props.project.name}</h4></a>
      <a href={props.project.gitHub}><img width="48" height="48" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/96/external-github-social-media-tanah-basah-glyph-tanah-basah.png" alt="external-github-social-media-tanah-basah-glyph-tanah-basah"/></a>
      <img src={props.project.image} alt={props.project.alt}></img>
      </div>
    </>
  );
}
