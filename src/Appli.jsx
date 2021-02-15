import './Appli.scss';
import ListeRepertoires from "./liste-repertoires";
import Entete from "./entete";

export default function Appli() {
  return (
    <div className="Appli">
        <Entete/>
        <ListeRepertoires/>
    </div>
  );
}
