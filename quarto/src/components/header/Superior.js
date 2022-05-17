import Marca from "./Marca";
import Titulo from "./Titulo";

export default function Superior() {
  return (
    <div className="superior">
      <Marca />
      <Titulo nome="Edilson" />
    </div>
  );
}
