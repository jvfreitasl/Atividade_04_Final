import "./Button.css";

const Button = ({ text, onClick, ...props }) => {
  return (
    <div className="containerButton">
      <button
        className="button-input"
        type={props.type}
        onClick={(event) => {
          event.preventDefault(); 
          onClick()
        }}>
          {text}
          </button>
    </div>
  );
};

export default Button;
