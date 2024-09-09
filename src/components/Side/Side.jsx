import "./Side.css";

export const Side = ({ img, title, description }) => {
  return (
    <div className="content-side__list-item">
      <img className="content-side__list-item--img" src={img} alt="" />
      <h5 className="content-side__list-item--title">{title}</h5>
      <p className="content-side__list-item--text">{description}</p>
    </div>
  );
};
