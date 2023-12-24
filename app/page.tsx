import LeftColumn from "./components/leftColumn/left-column";
import RightColumn from "./components/rightColumn/right-column";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-row">
      <LeftColumn />
      <RightColumn />
    </main>
  );
}
