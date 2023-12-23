import Links from "./me/links/link";
import Me from "./me/me";
import Technos from "./me/technos/technos";

export default function LeftColumn() {
  return (
    <div className="flex-none" style={{ width: "40%" }}>
      <Me />
      <Technos />
      <Links />
    </div>
  );
}
