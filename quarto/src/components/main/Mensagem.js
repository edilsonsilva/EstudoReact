export default function Mensagem(props) {
  return (
    <div className="mensagem">
      {props.info.map((m, i) => (
        <div key={i}>
          <h2>
            Titulo da Mensagem
            <br />
            {m.titulo}
          </h2>
          <p>Autor:{m.autor}</p>
          <p>Mensagem:{m.mensagem}</p>
          <hr />
          <br />
        </div>
      ))}
    </div>
  );
}
