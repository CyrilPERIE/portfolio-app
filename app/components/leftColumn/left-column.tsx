import Links from "./links/link";
import Me from "./me/me";
import Technos from "./technos/technos";

export default function LeftColumn() {
  return (
    <div className="flex-none" style={{ width: "50%" }}>
      <Me />
      <Technos />
      <Links />
    </div>
  );
}
