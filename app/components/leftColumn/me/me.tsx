import { state } from "@/app/state";

export default function Me() {
  return (
    <div>
      <h1>{state.me.name}</h1>
      <h2>{state.me.wantedJob}</h2>
      <p>{state.me.catchPhrase}</p>
    </div>
  );
}
