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
    catchPhrase: `Passionné et curieux de nature`,
    professionalContext: `
    <p>Mon intérêt pour le développement informatique a pris forme à la suite d'un module Java dispensé par mon école. Bien que j'aie suivi une formation généraliste pour acquérir des connaissances étendues, j'ai également poursuivi des apprentissages en autodidacte à travers des cours en ligne, des projets, et des codingames pendant mes moments de temps libre, au-delà de mon cursus d'ingénieur.</p></br>
    <p>L'informatique me donne la possibilité d'exprimer librement mon imagination pour rendre le quotidien plus agréable ou pour aider autrui.</p>
    <p>La logique inhérente à ce domaine permet d'accomplir rapidement des tâches avec une base solide, contrairement à d'autres matières où beaucoup plus de tâches reposent sur la connaissance.</p>
    <p>Cela fait désormais trois ans que j'ai réussi à m'intégrer dans ce domaine qui me passionne, et dès ma première mission, j'ai pu évoluer rapidement en termes de responsabilités.</p></br>
    <p>Si, au départ, ma carrière était motivée par mes ambitions personnelles, cherchant à apprendre du monde professionnel pour gagner en autonomie et consacrer mon temps personnel à mes idées, je réalise aujourd'hui que j'apprécie l'envergure et les relations humaines dans les projets professionnels.</p>
    <p>C'est pourquoi je suis davantage attiré par le projet lui-même que par les technologies utilisées, afin de stimuler pleinement ma créativité et ma motivation.</p>
    <p>N'hésitez pas à me contacter pour toute demande professionnelle.</p>`,
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
      company: Gifi,
      description: `
      <p>Lors de ma première incursion dans le monde de l'informatique, j'élabore des scripts selon les besoins de l'équipe à laquelle je participe.</br>
      Gestion de données, Web Scraping, Manipulation de fichiers Excel</p>`,
      skills: [Python, Pandas, NumPy, Selenium],
    },
    {
      href: ClubMed.href,
      startingDate: new Date(2021, 4),
      endingDate: new Date(2022, 9),
      job: "Techlead développeur QA",
      company: ClubMed,
      description: `<p>Responsable de l'implémentation de tests automatisés, d'abord au sein d'une équipe, puis dans une démarche globale pour Club Med.</br>
      Intervention du début à la fin du processus, impliquant le choix des outils, l'établissement de l'usine logicielle, la création des parcours de test, le développement des différents scénarios, ainsi que la mise en place des processus de développement, la transmission de connaissances, et la documentation.</p>`,
      skills: [Git, GitLab, Jira, Selenium, Katalon, Puppeteer, ELK, Jenkins],
    },
    {
      href: Oxyl.href,
      startingDate: new Date(2022, 9),
      endingDate: new Date(2022, 11),
      job: "Ingénieur Full Stack",
      company: Oxyl,
      description: `<p>Participation au développement d'un outil interne visant à soutenir les activités commerciales et le recrutement chez Oxyl.</br>
      Nous effectuons la navigation sur des sites à l'aide de scrappers pour extraire des informations sur des entreprises et des profils de candidats potentiels.</br>
      Ces données sont ensuite évaluées, et si elles sont pertinentes, elles sont transmises aux interfaces destinées aux recruteurs ou aux commerciaux.</p>`,
      skills: [Node, Puppeteer, Angular, Git],
    },
    {
      href: Wedia.href,
      startingDate: new Date(2023, 0),
      endingDate: new Date(2023, 7),
      job: "Ingénieur Full stack",
      company: Wedia,
      description: `
      <p>J'interviens sur l'outil phare développé et maintenu par Wedia, un DAM (Data Access Management).</br>
      - Respect récurrent de délais serrés grâce à des pics de charge.</br>
      - Création/modification des plugins Gradle pour automatiser certaines tâches ou modifications de données, ainsi que l'envoi de mails générés automatiquement à l'aide de modèles.</br>
      - Mises à niveau du Front et du Back-Office en assurant la compatibilité ascendante.</br>
      - Livraisons en intégration et en pré-production (Déploiements d’archives avec création et configuration adaptées au contexte/cible).</br>
      - Création/maintenance de documentation pour assurer la passation et l'uniformité des connaissances.</p>`,
      skills: [Java, Vue, Git, Gradle],
    },
    {
      href: Oxyl.href,
      startingDate: new Date(2023, 8),
      job: "Ingénieur Full stack",
      company: Oxyl,
      description: `
      <p>J'aborde l'initialisation d'un projet visant à faciliter l'autoformation des individus.</br>
      Cette application interagit avec des IA génératives.</br>
      Que ce soit pour se préparer à un entretien, découvrir une technologie, ou valider des connaissances...</br> 
      Les utilisateurs peuvent interagir avec les IA, qui fourniront des retours, généreront des programmes, et auront la capacité d'interroger ou de corriger l'utilisateur.</br>
      Mes contributions incluent :</br>
      - La mise en place des bonnes pratiques.</br>
      - Le choix des technologies, la priorisation, les solutions techniques.</br>
      - Le développement des différents serveurs.</br>
      - La participation aux événements du cycle de vie du projet dans un contexte agile.</p>`,
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
      content: `Bienvenue sur mon site, et merci d'avoir pris le temps de lire jusqu'ici. Convaincu que l'expression d'un parcours est plus significative à travers un site que dans un CV d'une page, j'ai conçu mon propre hub. Celui-ci centralise mes projets, offrant ainsi une visibilité à mon profil et à mon travail.`,
      screenshot: "/assets/portfolio.png",
      alt: "portfolio",
      skills: [TailwindCSS, Next, Figma, Vercel],
    },
    {
      href: "https://galop-ai.vercel.app/",
      title: "E-PMU",
      spitch: "Application de statistiques hippiques",
      content: `En utilisant l'API publique fournie par le PMU, j'ai développé des intelligences artificielles (IA) pour m'assister dans mes paris quotidiens sur les courses hippiques. Ce projet continue de me servir aujourd'hui comme base pour ma veille technologique.`,
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
