import "./Forms.css";
import FormsInput from "../FormsInput/FormsInput";
import Button from "../Button/Button";

const Forms = () => {
  return (
    <div className="containerForms">
      <form className="boxForms">
        <FormsInput inputName="Nome" id="nome" type="text" />
        <FormsInput inputName="Email" id="email" type="email" />
        <FormsInput inputName="Feedback" id="feedback" type="text" />
        <div className="botaoForms">
          <Button
            text="Enviar"
            type="submit"
            onClickText="Feedback enviado com sucesso."
          />
        </div>
      </form>
    </div>
  );
};

export default Forms;
