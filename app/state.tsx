import { Project } from "./components/rightColumn/project/card-project"
import { Experience } from "./components/rightColumn/resume/card-experience"

type Me = {
    "name": string,
    "wantedJob": string,
    "catchPhrase": string,
    "professionalContext": string
}

type stateModel = {
    "me": Me
    "resume": Experience[] 
    "projects": Project[]
}

export const state: stateModel = {
    "me": {
        "name": "Cyril PERIE",
        "wantedJob": "Développeur Front-End",
        "catchPhrase": "Ceci est ma catch phrase",
        "professionalContext": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi voluptatum aut commodi ipsam numquam nesciunt iste, officiis dolorem modi distinctio necessitatibus quas soluta! Sit modi mollitia fuga dolore quisquam in. Quis, adipisci. Illum natus beatae reiciendis maxime voluptatibus adipisci perspiciatis! Exercitationem est quam ipsam voluptas officiis quaerat quae, libero assumenda! Repudiandae commodi quas exercitationem numquam similique nulla deleniti incidunt iste sunt sit placeat autem veritatis asperiores quam aspernatur, dolore voluptate alias delectus rerum, ipsam consequatur, velit quos. Doloremque, praesentium! Pariatur omnis non unde impedit dolorem libero, accusantium explicabo distinctio itaque corrupti repudiandae ullam velit, numquam laboriosam temporibus, veniam molestias error ipsum deserunt nemo obcaecati. Molestias animi minima placeat unde adipisci deserunt quod sapiente dolor ipsum fugiat eos delectus blanditiis, asperiores ducimus rem omnis est incidunt debitis esse molestiae obcaecati amet. Molestias iste facilis, minus adipisci, nostrum molestiae similique voluptates, ut alias soluta odio beatae temporibus facere modi exercitationem accusantium rem earum tenetur. Vero et hic ipsam? Est minima molestias voluptatibus, eaque eligendi soluta a deleniti iste enim dolores mollitia, expedita consectetur facere facilis vitae neque dolorum id unde quae? Neque architecto beatae animi minima, quidem vitae! Modi velit impedit fuga quisquam nulla, iure aliquid pariatur facere commodi porro recusandae accusamus."
    },
    "resume": [
        {
            href: "href",
            startingDate: new Date(2021, 1),
            job: "job",
            company: "company",
            description: "description"
        }
    ],
    "projects": [
        {
            href: "https://www.myneurofactory.fr/",
            title: "MyNeuro",
            content: "MyNeuro",
        },
        {
            href: "https://www.myneurofactory.fr/",
            title: "MyNeuro2",
            content: "MyNeuro2",
        }
    ]
}