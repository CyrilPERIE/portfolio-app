import { state } from "@/app/state";

export default function AboutMe() {

    const test: string = `<span>Développeur autodidacte par passion, je cherche aujourd'hui à m'épanouir à travers ces trois axes:</span>
    <ul>
      <li>- Travail orienté R&D</li>
      <li>- La possibilité de faire une différence positive dans la société</li>
      <li>- Travail en équipe</li>
    </ul>`
    
    return(
        <div className="h-screen bg-[url('/assets/about-me.png')]">
            <div className="bg-white size-2/6 absolute left-1/2 top-24 flex flex-col items-center justify-center">
                <h1>{state.me.name}</h1>
                <h2>{state.me.wantedJob}</h2>
                <div dangerouslySetInnerHTML={{ __html: state.me.catchPhrase }}  />
            </div>
        </div>
    )
}