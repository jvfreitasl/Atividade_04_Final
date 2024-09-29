import './Navegador.css'

const Navegador = () => {
  return(
    <nav className='containerNav'>
      <ul className='blocoNav'>
        <li className='lineNav'>Top 10 musicas Brasil</li>
        <li className='lineNav'>Melhores do Rock</li>
        <li className='lineNav'>Top 10 musicas Internacionais</li>
        <li className='lineNav'>Monte sua playlist</li>
        <li className='lineNav'>Melhores do Funk</li>
        <li className='lineNav'>Melhores do Samba</li>
        <li className='lineNav'>Top 10 da semana</li>
        <li className='lineNav'>Seu Histórico</li>
        <li className='lineNav'>Descubra</li>
      </ul>
    </nav>
  )
}

export default Navegador;