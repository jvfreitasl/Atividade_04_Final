import "./Button.css";

const Button = ({ text, onClickText, ...props }) => {
  return (
    <div className="containerButton">
      <button
        name="button-input"
        type={props.type}
        onClick={(event) => {
          event.preventDefault(); alert(onClickText);
        }}>
          {text}
          </button>
    </div>
  );
};

export default Button;
