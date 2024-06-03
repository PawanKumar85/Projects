const Button = (props) => {
    return(
        <div className="text-center m-5">
        <button className="btn btn-dark" onClick={props.onClick}>Reset</button>
        </div>
    );
}
export default Button;