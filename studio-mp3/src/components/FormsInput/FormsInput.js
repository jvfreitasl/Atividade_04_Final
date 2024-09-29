import "./FormsInput.css";

const FormsInput = ({ inputName, onChange, ...props }) => {
  return (
    <div className="containerFormsInput">
      <label htmlFor={props.id}>{inputName}:</label>
      <input type={props.type} onChange={onChange} {...props}></input>
    </div>
  );
};

export default FormsInput;
