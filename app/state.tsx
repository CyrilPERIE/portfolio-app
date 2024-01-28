export type Certification = {
  name: string;
  logoUrl: string;
  alt: string;
  href: string;
  obtainedDate: number;
};

export type Formation = {
  name: string;
  yearStarting?: number;
  yearEnding: number;
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
  formation: Formation[];
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
  skills: Skill[];
};

export type Project = {
  href: string;
  title: string;
  spitch: string;
  content: string;
  screenshot: string;
  alt: string;
  skills: Skill[];
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
  href: "https://www.java.com/fr/",
  type: Type.Back,
  stack: Stack.Java,
};

const TailwindCSS: Skill = {
  name: "TailwindCSS",
  href: "https://tailwindcss.com/",
  type: Type.Front,
  stack: Stack.FrameworkFront,
};

const Next: Skill = {
  name: "Next",
  href: "https://nextjs.org/",
  type: Type.Front,
  stack: Stack.FrameworkFront,
};

const Figma: Skill = {
  name: "Figma",
  href: "https://www.figma.com/",
  type: Type.GestionDeProjet,
  stack: Stack.GestionDeProjet,
};

const Vercel: Skill = {
  name: "Vercel",
  href: "https://vercel.com/",
  type: Type.Infrastructure,
  stack: Stack.Infrastructure,
};

const Gradle: Skill = {
  name: "Gradle",
  href: "https://gradle.org/",
  type: Type.Infrastructure,
  stack: Stack.Infrastructure,
};

const H2: Skill = {
  name: "H2",
  href: "https://www.h2database.com/html/main.html",
  type: Type.Données,
  stack: Stack.Java,
};

const Redux: Skill = {
  name: "Redux",
  href: "https://redux.js.org/",
  type: Type.Front,
  stack: Stack.FrameworkFront,
};

const Vue: Skill = {
  name: "Vue",
  href: "https://vuejs.org/",
  type: Type.Front,
  stack: Stack.FrameworkFront,
};

const Jenkins: Skill = {
  name: "Jenkins",
  href: "https://www.jenkins.io/",
  type: Type.Infrastructure,
  stack: Stack.Infrastructure,
};

const Angular: Skill = {
  name: "Angular",
  href: "https://angular.io/",
  type: Type.Front,
  stack: Stack.FrameworkFront,
};

const React: Skill = {
  name: "React",
  href: "https://fr.legacy.reactjs.org/",
  type: Type.Front,
  stack: Stack.FrameworkFront,
};

const Hibernate: Skill = {
  name: "Hibernate",
  href: "https://hibernate.org/",
  type: Type.Données,
  stack: Stack.Java,
};

const ELK: Skill = {
  name: "ELK",
  href: "https://www.elastic.co/fr/elastic-stack/",
  type: Type.Données,
  stack: Stack.Polyvalent,
};

const Spring: Skill = {
  name: "Spring",
  href: "https://spring.io/",
  type: Type.Framework,
  stack: Stack.Java,
};

const Puppeteer: Skill = {
  name: "Puppeteer",
  href: "https://pptr.dev/",
  type: Type.Scraping,
  stack: Stack.Scraping,
};

const Katalon: Skill = {
  name: "Katalon",
  href: "https://katalon.com/",
  type: Type.Scraping,
  stack: Stack.Scraping,
};

const Selenium: Skill = {
  name: "Selenium",
  href: "https://www.selenium.dev/",
  type: Type.Scraping,
  stack: Stack.Scraping,
};

const Playwright: Skill = {
  name: "Playwright",
  href: "https://playwright.dev/",
  type: Type.Scraping,
  stack: Stack.Scraping,
};

const Python: Skill = {
  name: "Python",
  href: "https://www.python.org/",
  type: Type.Back,
  stack: Stack.Python,
};

const Flask: Skill = {
  name: "Flask",
  href: "https://flask.palletsprojects.com/en/3.0.x/",
  type: Type.Back,
  stack: Stack.Python,
};

const Fast: Skill = {
  name: "Fast",
  href: "https://fastapi.tiangolo.com/",
  type: Type.Back,
  stack: Stack.Python,
};

const NumPy: Skill = {
  name: "NumPy",
  href: "https://numpy.org/",
  type: Type.Données,
  stack: Stack.Python,
};

const Pandas: Skill = {
  name: "Pandas",
  href: "https://pandas.pydata.org/",
  type: Type.Données,
  stack: Stack.Python,
};

const SKlearn: Skill = {
  name: "SKlearn",
  href: "https://scikit-learn.org/stable/",
  type: Type.Données,
  stack: Stack.Python,
};

const Node: Skill = {
  name: "Node",
  href: "https://nodejs.org/",
  type: Type.Back,
  stack: Stack.Node,
};

const Express: Skill = {
  name: "Express",
  href: "https://expressjs.com/fr/api.html",
  type: Type.Back,
  stack: Stack.Node,
};

const Git: Skill = {
  name: "Git",
  href: "https://git-scm.com/",
  type: Type.GestionDeProjet,
  stack: Stack.GestionDeProjet,
};

const GitLab: Skill = {
  name: "GitLab",
  href: "https://about.gitlab.com/",
  type: Type.GestionDeProjet,
  stack: Stack.GestionDeProjet,
};

const Jira: Skill = {
  name: "Jira",
  href: "https://www.atlassian.com/fr/software/jira",
  type: Type.GestionDeProjet,
  stack: Stack.GestionDeProjet,
};

const Maven: Skill = {
  name: "Maven",
  href: "https://maven.apache.org/",
  type: Type.Infrastructure,
  stack: Stack.Java,
};

const MySQL: Skill = {
  name: "MySQL",
  href: "https://www.mysql.com/fr/",
  type: Type.Données,
  stack: Stack.Polyvalent,
};

const SQL: Skill = {
  name: "SQL",
  href: "https://sql.sh/",
  type: Type.Données,
  stack: Stack.Polyvalent,
};

const AWS: Skill = {
  name: "AWS",
  href: "https://aws.amazon.com/fr/",
  type: Type.Infrastructure,
  stack: Stack.Infrastructure,
};

const Docker: Skill = {
  name: "Docker",
  href: "https://www.docker.com/",
  type: Type.Infrastructure,
  stack: Stack.Infrastructure,
};

export const state: stateModel = {
  me: {
    name: "Cyril PERIE",
    wantedJob: "Ingénieur informatique",
    catchPhrase: `Passionné et formé en autodidacte`,
    professionalContext: `<p>C'est à la suite d'un module Java prodigué par mon école que mon intérêt pour le développement informatique a commencé. Je suis resté dans une formation généraliste pour avoir des connaissances larges tout en me formant au développement en réalisant des petits projets ou codingames sur mon temps libre.</p></br>
    <p>L'infomatique me permet de laisser libre cours à mon imagination pour aider ou rendre le quotidien ludique</p>
    <p>De par la logique il est rapidement possible de faire des choses en ayant les bases, contrairement à d'autres matières où tout repose sur de la connaissance.</p>
    <p>Cela fait maintenant 3 ans que j'ai réussi à intégrer ce milieu qui me passione et ai réussi à monter rapidement en réponsabilité dès ma première mission.</p></br>
    <p>Si au début ma carrière était guidée par mes ambitions, cherchant à apprendre du monde professionel pour gagner en autonomie sur mon temps personnel pour mes idées, je me rends compte aujourd'hui que j'aime l'envergure et le relationnel des projets professionels.</p>
    <p>C'est pour cela que je suis plus attiré par le projet que les technologies utilisées afin d'être entièrement stimulé dans ma créativité et motivation.</p>
    <p>N'hésitez pas à me contacter pour toute demande professionnelle</p>`,
    certification: [
      {
        name: "OCA - Oracle Certified Associate",
        logoUrl: "/assets/OCA_logo.png",
        href: "https://education.oracle.com/oracle-certified-associate-java-se-8-programmer/trackp_333",
        alt: "OCA_logo",
        obtainedDate: 2023,
      },
      {
        name: "OCP - Oracle Certified Professional",
        logoUrl: "/assets/OCP_logo.png",
        href: "https://education.oracle.com/fr/oracle-certified-professional-java-se-8-programmer/trackp_357",
        alt: "OCP_logo",
        obtainedDate: 2024,
      },
    ],
    formation: [
      {
        name: "EIGSI - Diplôme d'ingénieur généraliste Spécialité industrie 4.0",
        yearStarting: 2015,
        yearEnding: 2021,
      },
      {
        name: "BAC S",
        yearEnding: 2015,
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
      Fast,
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
            Gestion de données, Web Scraping, Manipulation de fichiers Excel</p>`,
      skills: [Python, Pandas, NumPy, Selenium],
    },
    {
      href: ClubMed.href,
      startingDate: new Date(2021, 4),
      endingDate: new Date(2022, 9),
      job: "Techlead développeur QA",
      company: ClubMed,
      description: `<p>En charge de mettre en place des tests automatisés, d'abord au sein d'une
        équipe puis dans une démarche globale pour Club Med.</br>
        Intervention du début à la fin du processus. Choix des outils à utiliser, mise
        en place de l'usine logicielle, mise en place des parcours de test,
        développement des différents parcours et mise en place des processus de
        développement</p>`,
      skills: [Git, GitLab, Jira, Selenium, Katalon, Puppeteer, ELK, Jenkins],
    },
    {
      href: Oxyl.href,
      startingDate: new Date(2022, 9),
      endingDate: new Date(2022, 11),
      job: "Ingénieur Full Stack",
      company: Oxyl,
      description: `<p>Intervention sur un outil interne d'aide au développement commercial et recrutement d'Oxyl.</br>
            Nous naviguons sur des sites à l'aide de scraper afin de récupérer des informations sur des sociétés et des profils de potentiels candidats.</br>
            Ces informations sont évaluées et si pertinentes elles sont envoyées sur des interfaces pour recruteurs ou comerciaux.</p>`,
      skills: [Node, Puppeteer, Angular, Git],
    },
    {
      href: Wedia.href,
      startingDate: new Date(2023, 0),
      endingDate: new Date(2023, 7),
      job: "Ingénieur Full stack",
      company: Wedia,
      description: `<p>J'interviens sur l'outil phare développé et maintenu par Wedia, un DAM (Data Access Management).</br>
        - Respect récurrent de dead-lines courtes grâce à des pics de charge.</br>
        - Création/modification des plugins Gradle afin de traiter automatiquement certaines tâches ou modifications de données, ou alors l'envoi de mails générés automatiquement à l'aide de template.</br>
        - Montées de version du Front et du Back-Office en gardant la compatibilité ascendante.</br>
        - Livraisons en intégration et en pré-prod (Déploiements d’archives avec création et configuration suivant le contexte/cible).</br>
        - Création/maintenance de documentation pour assurer la passation/unité de connaissances.</p>`,
      skills: [Java, Vue, Git, Gradle],
    },
    {
      href: Oxyl.href,
      startingDate: new Date(2023, 8),
      job: "Ingénieur Full stack",
      company: Oxyl,
      description: `<p>J'arrive à l'initialisation d'un projet à but d'aider les personnes à s'autoformer.</br>
        Cette application est en interaction avec des IA génératives.</br>
        Si je souhaite me préparer à un entretien, découvrir une technologie, valider mes connaissances...</br> 
        On peut intéragir avec les IA qui feront un retour ou généreront un programme et seront capables d'interroger ou encore de corriger l'utilisateur.</br>
        J'interviens sur:</br>
        - La mise en place des bonnes pratiques</br>
        - Choix des technologies, priorisation, solutions techniques</br>
        - Développement des différents serveur.</br>
        - Participation aux événements de la vie de projet dans un contexte d'agilité.</p>`,
      skills: [
        Java,
        Spring,
        Hibernate,
        React,
        Vue,
        Node,
        H2,
        Git,
        GitLab,
        Docker,
        SQL,
        AWS,
        Maven,
      ],
    },
  ],
  projects: [
    {
      href: "https://github.com/CyrilPERIE/portfolio-app",
      title: "Site portfolio",
      spitch: "Site vitrine",
      content: `Bienvenue sur mon site et merci d'avoir lu jusqu'ici. Puisque je trouve qu'un site est plus parlant qu'un CV en une page, j'ai créé mon propre hub sur lequel centraliser mes projets et donner de la visibilité à mon profil et mon travail.`,
      screenshot: "/assets/portfolio.png",
      alt: "portfolio",
      skills: [TailwindCSS, Next, Figma, Vercel],
    },
    {
      href: "https://galop-ai.vercel.app/",
      title: "E-PMU",
      spitch: "Application de statistiques hippiques",
      content: `Basée sur l’API publique fournie par le PMU, j’ai développée des IA afin de m’aider à parier quotidiennement sur les courses hippiques. Ce projet me sert encore aujourd’hui de support pour ma veille technologique.`,
      screenshot: "/assets/e_pmu.png",
      alt: "e-pmu",
      skills: [
        React,
        Fast,
        Python,
        Flask,
        NumPy,
        Pandas,
        SKlearn,
        Git,
        GitLab,
        Docker,
        SQL,
        AWS,
        Maven,
        Express,
        Vercel,
        Redux,
      ],
    },
    {
      href: "https://github.com/CyrilPERIE/images",
      title: "Images génératrices d'image",
      spitch: "Mosaïque d'images reproduisant une image fournie",
      content:
        "Première utilisation concrète de mes apprentissages pour un projet. L'idée était de créer une première base de données et être capable d'intéragir avec pour ambition d'être capable de créer une image qui me représente avec des images qui me représentent. Une amélioration pourrait être de fournir une interface utilisateur ainsi que d'optimiser le temps de traitement de la demande.",
      screenshot: "/assets/images.png",
      alt: "image",
      skills: [Python, NumPy, SQL],
    },
  ],
};
