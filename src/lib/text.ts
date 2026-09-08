export const text: Text = {
    hero: {
        profession: 'Développeur full-stack · Data & IA',
        title: `De l'idée au produit livré, sans détour.`,
        pitches: [
            `Développeur full-stack polyvalent et ingénieur logiciel orienté data & IA, capable de concevoir des produits complets de A à Z : scraping, backend, frontend, pipelines CI/CD, modèles ML, intégrations LLM.`,
            `J'aime explorer, prototyper vite, apprendre continuellement et transformer une idée en solution concrète. Je recherche un environnement dynamique où je peux maximiser mon impact produit et tech.`
        ],
        locations: [
            `Lannion (22)`,
            `Paris (75)`,
            `Remote`,
        ],
        lookingFor: `Start-ups, PME et missions longues en grands groupes`,
        status: 'Disponible',
        photo: '/me.jpeg',
    },
    products: [
        {
            caption: '/frontend',
            title: 'Développement web frontend',
            description: `Interfaces React modernes, design systems, performance et accessibilité.`,
            tools: [
                `React`,
                `Vue.js`,
                `TypeScript`,
            ],
        },
        {
            caption: '/backend',
            title: 'Développement web backend',
            description: `APIs robustes, architecture, bases de données, CI/CD et mise en production.`,
            tools: [
                `Node.js`,
                `Python`,
                `Java`,
                `PostgreSQL`,
                `Docker`,
            ],
        },
        {
            caption: '/data',
            title: 'Data & exploration',
            description: `Scraping, pipelines de données, analyses et visualisations.`,
            tools: [
                `Playwright`,
                `ETL`,
                `Pandas`,
                `Seaborn`,
                `Tableau`,
            ],
        },
        {
            caption: '/ia',
            title: 'Agents IA et MCP servers',
            description: `Intégrations LLM, agents outillés et serveurs MCP sur mesure.`,
            tools: [
                `OpenAI`,
                `n8n`,
                `Scikit-learn`,
                `RAG`
            ],
        },
        {
            caption: '/observabilité',
            title: 'Tracking & alertes',
            description: `Monitoring, alertes, logs et dashboards.`,
            tools: [
                `Datadog`,
            ],
        },
    ],
    projects: [
        {
            during: 'PERSO',
            title: 'EPMU',
            description: `Plateforme d'aide à la décision pour les paris hippiques.`,
            tools: [
                `FastAPI`,
                `Next.js`,
                `VPS`,
                `PostgreSQL`,
            ],
            links: [
                {
                    platform: 'web',
                    href: 'https://tallys.cypit.dev/',
                },
            ],
        },
        {
            during: 'PRO',
            title: 'ENGIE (Techlead)',
            description: `Gestion d'un parc de 6 applications web pour plusieurs miliers d'utilisateurs.`,
            tools: [
                `NestJS`,
                `Vue.js`,
                `AWS`,
                `SSO`,
                `PostgreSQL`,
            ],
            logo_href: {
                href: '/engie_logo.png',
                alt: 'ENGIE',
            },
        },
        {
            during: 'PRO',
            title: 'Scolibree (Premier ingénieur)',
            description: `Plateforme d'aide à l'apprentissage pour les élèves de collège et lycée.`,
            tools: [
                `Next.js`,
                `RAG`,
                `LLM`,
                `BetterAuth`,
                `Stripe`,
                `Strapi`,
                `PostgreSQL`,
            ],
            links: [
                {
                    platform: 'web',
                    href: 'https://scolibree.com/',
                },
            ],
            logo_href: {
                href: '/scolibree_logo.jpeg',
                alt: 'Scolibree',
            },
        },
        {
            during: 'PRO',
            title: 'Club Med (Premier ingénieur)',
            description: `Mise en place de la stack technique de l'entreprise et procédures pour des tests automatisés des applications du parc IT.`,
            tools: [
                `Katalon`,
                `Playwright`,
                `Docker`,
                `CI/CD`,
                `Jenkins`,
            ],
            logo_href: {
                href: '/clubmed_logo.png',
                alt: 'Club Med',
            },
        },

    ],
    contact: {
        whatsapp: {
            title: 'WhatsApp',
            href: `https://wa.me/${process.env.WHATSAPP_PHONE_NUMBER}?text=Bonjour Cyril, j'aimerai discuter d'un projet.`,
        },
        google: {
            title: 'Google Agenda',
            href: `https://calendly.com/cyril-perie-pro/30min`,
        },
        email: {
            title: 'Email',
            href: `mailto:${process.env.EMAIL}`,
        },
        github: {
            title: 'GitHub',
            href: `https://github.com/CyrilPERIE`,
        },
    }
};

export interface Text {
    hero : {
        profession: string;
        title: string;
        pitches: string[];
        locations: string[];
        lookingFor: string;
        status: string;
        photo: string;
    },
    products: {
        caption: string;
        title: string;
        description: string;
        tools: string[];
    }[],
    projects: {
        during : 'PRO' | 'PERSO'
        logo_href?: {
            href: string;
            alt: string;
        };
        title: string;
        description: string;
        tools: string[];
        links?: LinkProject[];
    }[],
    contact: {
        whatsapp: {
            title: string;
            href: string;
        },
        google: {
            title: string;
            href: string;
        },
        github: {
            title: string;
            href: string;
        },
        email: {
            title: string;
            href: string;
        },
    }
}

export interface LinkProject {
    platform: 'web' | 'github' | 'youtube'
    href: string;
}