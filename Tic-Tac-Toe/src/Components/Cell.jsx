import "./Cell.css";

const Cell = (props) => {
  return (
    <div className="cell  shadow p-3 m-1 bg-white rounded" onClick={props.onClick} style={{border:"2px solid green"}}>
      <h5 className="fw-bold ">{props.value }</h5>
    </div>
  );
};
export default Cell;
