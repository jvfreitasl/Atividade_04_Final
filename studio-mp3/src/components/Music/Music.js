import './Music.css'
const Music = ({music}) => {
  return (
    <li className="lineMusic">
      <img src={music.capa} alt={music.nome} />
      <h4>{music.nome}</h4>
      <p>{music.anoLancamento}</p>
    </li>
  );
};

export default Music;