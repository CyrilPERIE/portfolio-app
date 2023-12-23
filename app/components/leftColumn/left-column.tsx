import Links from "./links";
import Me from "./me";
import Technos from "./technos";

export default function LeftColumn() {
    return (
        <div className="flex-none" style={{width:"40%"}}>
            <Me />
            <Technos />
            <Links />
        </div>
    )
}