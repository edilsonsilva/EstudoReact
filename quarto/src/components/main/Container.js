import Conteudo from "./Conteudo";
import Mensagem from "./Mensagem";

export default function Container() {
  return (
    <div className="container">
      <Mensagem />
      <Conteudo />
    </div>
  );
}
