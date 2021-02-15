import Repertoires from "./repertoires";
import DataRepertoires from "./data/datarepertoires.json";

export default function ListeRepertoires ()
{
    return (
        <div className="Liste-Repertoires">
        {DataRepertoires.repertoires.map(item => <Repertoires key={item.id} id={item.id} titre={item.titre} couleur={item.couleur} date={item.date}/> )}
        </div>
    )
}
