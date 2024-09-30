import "./Set.css";
import { useEffect, useState } from "react";
import FormsInput from "../FormsInput/FormsInput";
import Button from "../Button/Button";
import Music from "../Music/Music";

const Set = () => {
  const [music, setMusics] = useState([]);
  useEffect(() => {
    //useEffect controla o ciclo de vida da aplicação, primeiro parâmetro é uma função no qual deseja que ele execute.
    //O segundo parâmentro é para caso haja alguma mudança na aplicação, é uma variável de estado, seja qual for a mudança, ele irá chamar novamente a função.
    getMusic();
  }, []);

  const [musicForm, setMusicForm] = useState({
    nome: "",
    capa: "",
    anoLancamento: "",
    banda: "",
  });

  const handleClick = async () => {
    const response = await fetch("http://localhost:3005/mp3", {
      method: "POST",
      header: new Headers({
        "Content-type": "application/json",
      }),
      body: JSON.stringify(musicForm),
    });

    const data = await response.json();
    alert(`Música ${data.nome} cadastrada com sucesso!`);

    getMusic();

    setMusicForm({
      nome: "",
      capa: "",
      anoLancamento: "",
      banda: "",
    });
  };

  const handleFiledsChange = (event) => {
    setMusicForm({
      ...musicForm,
      [event.target.name]: event.target.value,
    });
  };

  const getMusic = async () => {
    const response = await fetch("http://localhost:3005/mp3");
    const data = await response.json();
    setMusics(data);
  };

  return (
    <div className="containerSet">
      <section className="secSet">
        <form className="form">
          <h2>Cadastre sua música favorita:</h2>
          <FormsInput
            inputName="Nome"
            id="nome"
            name="nome"
            type="text"
            value={musicForm.nome}
            onChange={(event) => handleFiledsChange(event)}
          />
          <FormsInput
            inputName="Capa(URL)"
            id="capa"
            name="capa"
            type="text"
            value={musicForm.capa}
            onChange={(event) => handleFiledsChange(event)}
          />
          <FormsInput
            inputName="Ano de Lançamento"
            id="anoLancamento"
            name="anoLancamento"
            type="text"
            value={musicForm.anoLancamento}
            onChange={(event) => handleFiledsChange(event)}
          />
          <FormsInput
            inputName="Banda"
            id="banda"
            name="banda"
            type="text"
            value={musicForm.banda}
            onChange={(event) => handleFiledsChange(event)}
          />
          <Button text="Cadastrar" type="submit" onClick={handleClick} />
        </form>
        <ul className="listMusics">
          {music.map((music, index) => (
            <Music music={music} key={index} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Set;
