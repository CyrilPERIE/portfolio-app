export type Certification = {
  name: string;
  logoUrl: string;
  alt: string;
  href: string;
  obtainedDate: Date;
};

export type Link = {
  logoUrl: string;
  alt: string;
  name: string;
  href: string;
};

export type Me = {
  name: string;
  wantedJob: string;
  catchPhrase: string;
  professionalContext: string;
  certification: Certification[];
  links: Link[];
  skill: Skill[];
  softSkill: SoftSkill[];
};

export type Company = {
  name: string;
  logoUrl: string;
  alt: string;
  href: string;
};

export type Experience = {
  href: string;
  startingDate: Date;
  endingDate?: Date;
  job: string;
  company: Company;
  description: string;
};

export type Project = {
  href: string;
  title: string;
  content: string;
};

export enum Type {
  Back = "Back",
  Front = "Front",
  Scraping = "Scraping",
  Framework = "Framework",
  GestionDeProjet = "Gestion de projet",
  Données = "Données",
  Infrastructure = "Infrastructure",
}

export enum Stack {
  Python = "Python",
  Java = "Java",
  Node = "Node",
  Scraping = "Scraping",
  FrameworkFront = "Framework Front",
  GestionDeProjet = "Gestion de projet",
  Polyvalent = "Polyvalent",
  Infrastructure = "Infrastructure",
}

export type Skill = {
  name: string;
  logoUrl: string;
  alt: string;
  href: string;
  type: Type;
  stack: Stack;
};

export type SoftSkill = {
  name: string;
  type: "Softskill" | "Passion";
};

export type stateModel = {
  me: Me;
  resume: Experience[];
  projects: Project[];
};

const Gifi: Company = {
  name: "GIFI",
  logoUrl: "/assets/gifi_logo.png",
  alt: "gifi_logo",
  href: "https://www.gifi.fr/",
};

const ClubMed: Company = {
  name: "Club Med",
  logoUrl: "/assets/club_med_logo.png",
  alt: "club_med_logo",
  href: "https://www.clubmed.fr/",
};

const Oxyl: Company = {
  name: "Oxyl",
  logoUrl: "/assets/oxyl_logo.png",
  alt: "oxyl_logo",
  href: "https://www.oxyl.fr/",
};

const Wedia: Company = {
  name: "Wedia",
  logoUrl: "/assets/wedia_logo.webp",
  alt: "wedia_logo",
  href: "https://www.wedia-group.com/fr/",
};

const Java: Skill = {
  name: "Java",
  logoUrl: "",
  alt: "java_logo",
  href: "https://www.java.com/fr/",
  type: Type.Back,
  stack: Stack.Java,
};

const H2: Skill = {
  name: "H2",
  logoUrl: "",
  alt: "h2_logo",
  href: "https://www.h2database.com/html/main.html",
  type: Type.Données,
  stack: Stack.Java,
};

const Vue: Skill = {
  name: "Vue",
  logoUrl: "",
  alt: "vue_logo",
  href: "https://vuejs.org/",
  type: Type.Front,
  stack: Stack.FrameworkFront,
};

const Angular: Skill = {
  name: "Angular",
  logoUrl: "",
  alt: "angular_logo",
  href: "https://angular.io/",
  type: Type.Front,
  stack: Stack.FrameworkFront,
};

const React: Skill = {
  name: "React",
  logoUrl: "",
  alt: "react_logo",
  href: "https://fr.legacy.reactjs.org/",
  type: Type.Front,
  stack: Stack.FrameworkFront,
};

const Next: Skill = {
  name: "Next",
  logoUrl: "",
  alt: "next_logo",
  href: "https://nextjs.org/",
  type: Type.Front,
  stack: Stack.FrameworkFront,
};

const Hibernate: Skill = {
  name: "Hibernate",
  logoUrl: "",
  alt: "hibernate_logo",
  href: "https://hibernate.org/",
  type: Type.Données,
  stack: Stack.Java,
};

const ELK: Skill = {
  name: "ELK",
  logoUrl: "",
  alt: "elk_logo",
  href: "https://www.elastic.co/fr/elastic-stack/",
  type: Type.Données,
  stack: Stack.Polyvalent,
};

const Spring: Skill = {
  name: "Spring",
  logoUrl: "",
  alt: "spring_logo",
  href: "https://spring.io/",
  type: Type.Framework,
  stack: Stack.Java,
};

const Puppeteer: Skill = {
  name: "Puppeteer",
  logoUrl: "",
  alt: "puppeteer_logo",
  href: "https://pptr.dev/",
  type: Type.Scraping,
  stack: Stack.Scraping,
};

const Katalon: Skill = {
  name: "Katalon",
  logoUrl: "",
  alt: "katalon_logo",
  href: "https://katalon.com/",
  type: Type.Scraping,
  stack: Stack.Scraping,
};

const Selenium: Skill = {
  name: "Selenium",
  logoUrl: "",
  alt: "selenium_logo",
  href: "https://www.selenium.dev/",
  type: Type.Scraping,
  stack: Stack.Scraping,
};

const Playwright: Skill = {
  name: "Playwright",
  logoUrl: "",
  alt: "playwright_logo",
  href: "https://playwright.dev/",
  type: Type.Scraping,
  stack: Stack.Scraping,
};

const Python: Skill = {
  name: "Python",
  logoUrl: "",
  alt: "python_logo",
  href: "https://www.python.org/",
  type: Type.Back,
  stack: Stack.Python,
};

const Flask: Skill = {
  name: "Flask",
  logoUrl: "",
  alt: "flask_logo",
  href: "https://flask.palletsprojects.com/en/3.0.x/",
  type: Type.Back,
  stack: Stack.Python,
};

const Fast: Skill = {
  name: "Fast",
  logoUrl: "",
  alt: "fast_logo",
  href: "https://fastapi.tiangolo.com/",
  type: Type.Back,
  stack: Stack.Python,
};

const NumPy: Skill = {
  name: "NumPy",
  logoUrl: "",
  alt: "numpy_logo",
  href: "https://numpy.org/",
  type: Type.Données,
  stack: Stack.Python,
};

const Pandas: Skill = {
  name: "Pandas",
  logoUrl: "",
  alt: "pandas_logo",
  href: "https://pandas.pydata.org/",
  type: Type.Données,
  stack: Stack.Python,
};

const SKlearn: Skill = {
  name: "SKlearn",
  logoUrl: "",
  alt: "sklearn_logo",
  href: "https://scikit-learn.org/stable/",
  type: Type.Données,
  stack: Stack.Python,
};

const Node: Skill = {
  name: "Node",
  logoUrl: "",
  alt: "node_logo",
  href: "https://nodejs.org/",
  type: Type.Back,
  stack: Stack.Node,
};

const Express: Skill = {
  name: "Express",
  logoUrl: "",
  alt: "express_logo",
  href: "https://expressjs.com/fr/api.html",
  type: Type.Back,
  stack: Stack.Node,
};

const Git: Skill = {
  name: "Git",
  logoUrl: "",
  alt: "git_logo",
  href: "https://git-scm.com/",
  type: Type.GestionDeProjet,
  stack: Stack.GestionDeProjet,
};

const GitLab: Skill = {
  name: "GitLab",
  logoUrl: "",
  alt: "gitlab_logo",
  href: "https://about.gitlab.com/",
  type: Type.GestionDeProjet,
  stack: Stack.GestionDeProjet,
};

const Jira: Skill = {
  name: "Jira",
  logoUrl: "",
  alt: "jira_logo",
  href: "https://www.atlassian.com/fr/software/jira",
  type: Type.GestionDeProjet,
  stack: Stack.GestionDeProjet,
};

const MySQL: Skill = {
  name: "MySQL",
  logoUrl: "",
  alt: "mysql_logo",
  href: "https://www.mysql.com/fr/",
  type: Type.Données,
  stack: Stack.Polyvalent,
};

const SQL: Skill = {
  name: "SQL",
  logoUrl: "",
  alt: "sql_logo",
  href: "https://sql.sh/",
  type: Type.Données,
  stack: Stack.Polyvalent,
};

const AWS: Skill = {
  name: "AWS",
  logoUrl: "",
  alt: "aws_logo",
  href: "https://aws.amazon.com/fr/",
  type: Type.Infrastructure,
  stack: Stack.Infrastructure,
};

const Docker: Skill = {
  name: "Docker",
  logoUrl: "",
  alt: "docker_logo",
  href: "https://www.docker.com/",
  type: Type.Infrastructure,
  stack: Stack.Infrastructure,
};

export const state: stateModel = {
  me: {
    name: "Cyril PERIE",
    wantedJob: "Ingénieur informatique",
    catchPhrase: `Passionné et formé en autodidacte`,
    professionalContext:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi voluptatum aut commodi ipsam numquam nesciunt iste, officiis dolorem modi distinctio necessitatibus quas soluta! Sit modi mollitia fuga dolore quisquam in. Quis, adipisci. Illum natus beatae reiciendis maxime voluptatibus adipisci perspiciatis! Exercitationem est quam ipsam voluptas officiis quaerat quae, libero assumenda! Repudiandae commodi quas exercitationem numquam similique nulla deleniti incidunt iste sunt sit placeat autem veritatis asperiores quam aspernatur, dolore voluptate alias delectus rerum, ipsam consequatur, velit quos. Doloremque, praesentium! Pariatur omnis non unde impedit dolorem libero, accusantium explicabo distinctio itaque corrupti repudiandae ullam velit, numquam laboriosam temporibus, veniam molestias error ipsum deserunt nemo obcaecati. Molestias animi minima placeat unde adipisci deserunt quod sapiente dolor ipsum fugiat eos delectus blanditiis, asperiores ducimus rem omnis est incidunt debitis esse molestiae obcaecati amet. Molestias iste facilis, minus adipisci, nostrum molestiae similique voluptates, ut alias soluta odio beatae temporibus facere modi exercitationem accusantium rem earum tenetur. Vero et hic ipsam? Est minima molestias voluptatibus, eaque eligendi soluta a deleniti iste enim dolores mollitia, expedita consectetur facere facilis vitae neque dolorum id unde quae? Neque architecto beatae animi minima, quidem vitae! Modi velit impedit fuga quisquam nulla, iure aliquid pariatur facere commodi porro recusandae accusamus.",
    certification: [
      {
        name: "EIGSI - Diplôme d'ingénieur généraliste",
        logoUrl: "/assets/eigsi_logo.jpg",
        alt: "eigsi_logo",
        href: "https://www.eigsi.fr/",
        obtainedDate: new Date(2021),
      },
      {
        name: "OCA - Oracle Certified Associate",
        logoUrl: "/assets/OCA_logo.png",
        href: "https://education.oracle.com/oracle-certified-associate-java-se-8-programmer/trackp_333",
        alt: "OCA_logo",
        obtainedDate: new Date(2023),
      },
      {
        name: "OCP - Oracle Certified Professional",
        logoUrl: "/assets/OCP_logo.png",
        href: "https://education.oracle.com/fr/oracle-certified-professional-java-se-8-programmer/trackp_357",
        alt: "OCP_logo",
        obtainedDate: new Date(2024),
      },
    ],
    links: [
      {
        logoUrl: "/assets/malt.svg",
        alt: "malt_logo",
        name: "Malt",
        href: "https://www.malt.fr/profile/cyrilperie",
      },
      {
        logoUrl: "/assets/linkedin.svg",
        alt: "linkedin_logo",
        name: "Linkedin",
        href: "https://www.linkedin.com/in/cyril-perie/",
      },
      {
        logoUrl: "/assets/github.svg",
        alt: "github_logo",
        name: "GitHub",
        href: "https://github.com/CyrilPERIE",
      },
    ],
    skill: [
      Java,
      Python,
      Node,
      Express,
      Flask,
      Fast,
      NumPy,
      Pandas,
      SKlearn,
      H2,
      Hibernate,
      Spring,
      React,
      Vue,
      Angular,
      Next,
      Puppeteer,
      Katalon,
      ELK,
      Selenium,
      Playwright,
      Git,
      GitLab,
      Docker,
      SQL,
      MySQL,
      AWS,
      Jira,
    ],
    softSkill: [],
  },
  resume: [
    {
      href: Gifi.href,
      startingDate: new Date(2018, 6),
      endingDate: new Date(2018, 7),
      job: "Développeur Python",
      company: ClubMed,
      description: `<p>Première découverte du monde informatique, je réalise des scripts au besoin pour l'équipe à laquelle je suis intégrée.</br>
            - Gestion de données</br>
            - Web Scraping</br>
            - Manipulation de fichiers Excel</p>`,
    },
    {
      href: ClubMed.href,
      startingDate: new Date(2021, 4),
      endingDate: new Date(2022, 9),
      job: "Techlead développeur QA",
      company: ClubMed,
      description: `<p>J'interviens sur différents outils internes Club Med pour mettre en place des tests automatiques fonctionnels de non régression et les intégrer aux processus de mise en production:</br>
            - Choix des outils à utiliser</br>
            - Mise en place de l'usine logicielle</br>
            - Mise en place des parcours de test</br>
            - Développement des différents parcours</br>
            - Mise en place des processus de développement</p>`,
    },
    {
      href: Oxyl.href,
      startingDate: new Date(2022, 9),
      endingDate: new Date(2022, 11),
      job: "Ingénieur Full Stack",
      company: Oxyl,
      description: `<p>Intervention sur un outil interne d'aide au développement commercial et recrutement d'Oxyl.</br>
            Nous récupérons des informations sur des sites à l'aide de scraper afin de récupérer des informations sur des sociétés et des profils de potentiels candidats.</br>
            Ces informations sont évaluées et si pertinentes elles sont envoyées sur des interfaces pour recruteurs ou comerciaux.</p>`,
    },
    {
      href: Wedia.href,
      startingDate: new Date(2023, 0),
      endingDate: new Date(2023, 7),
      job: "Ingénieur Full stack",
      company: Wedia,
      description: `<p>J'interviens sur l'outils phare développé et maintenu par Wedia, un DAM (Data Access Management).</br>
        Respect récurrent de dead-lines courtes grâce à des pics de charge.</br>
        - Création/modification des plugins Gradle afin de traiter automatiquement certaines tâches ou modifications de données, ou alors l'envoi de mails générés automatiquement à l'aide de template.</br>
        - Montées de version du Front et du Back-Office en gardant la compatibilité ascendante.</br>
        - Livraisons en intégration et en pré-prod (Déploiements d’archives avec création et configuration suivant le contexte/cible).</br>
        - Création/maintenance de documentation pour assurer la passation/unité de connaissances.</p>`,
    },
    {
      href: Oxyl.href,
      startingDate: new Date(2023, 8),
      job: "Ingénieur Full stack",
      company: Oxyl,
      description: `<p>J'arrive à l'initialisation d'un projet à but d'aider les personnes à s'autoformer.</br>
        Cette application est en interaction avec des IA génératives.</br>
        Si je souhaite me préparer à un entretien, découvrir une technologie, valider mes connaissances,... je peux intéragir avec les IA qui me feront un retour ou me généreront un programme et seront capables de m'interroger et me corriger.</br>
        J'interviens sur:</br>
        - La mise en place des bonnes pratiques</br>
        - Choix des technologies, priorisation, solutions techniques</br>
        - Développement des différents serveur.</br>
        - Participation aux événements de la vie de projet dans un contexte d'agilité.</p>`,
    },
  ],
  projects: [
    {
      href: "https://www.myneurofactory.fr/",
      title: "MyNeuroFactory",
      content: `Site de validation de compétences.</br>
        Il est possible d'apprendre via des cours, TP disponibles sur la plateforme puis de se tester via des QCM journaliers.`,
    },
  ],
};
