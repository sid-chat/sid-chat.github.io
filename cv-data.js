// Edit this file when your CV changes.
// You usually do not need to touch index.html or styles.css.

window.CV_DATA = {
  name: "Siddharth Chaturvedi",
  initials: "SC",
  role: "PhD candidate,\nArtificial Cognitive Systems lab,\nDonders Institute,\nRadboud University",
  location: "",
  shortSummary: "",
  about: `
  Namaste and welcome to my website.

  Professionally: I am a mechanical and control engineer who began doing a PhD in the field of AI and is now concluding it in the field of complex systems. I am currently part of the <a href="https://dbi2.nl/" target="_blank" rel="noreferrer">Dutch Brain Interface Initiative (DBI2)</a> consortium and am supervised by <a href="https://www.ru.nl/en/people/gerven-m-van" target="_blank" rel="noreferrer">Prof. Marcel van Gerven</a>.

  Not professionally: Robot-maker, guitar-player, blog-writer, hike-master, salsa-dancer, slow-swimmer, animal-lover.
  `,
  links: [
    { label: "Email", url: "mailto:siddharth.chaturvedi@donders.ru.nl" },
    { label: "GitHub", url: "https://github.com/i-m-iron-man" },
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=adwoK0MAAAAJ&hl=en" },
    { label: "CV PDF", url: "#" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/siddharth-chaturvedi-a06471118/" },
    { label: "BlueSky", url: "https://bsky.app/profile/ssc842h.bsky.social" },
    { label: "X", url: "#" }
  ],

  contact: [
    {
      label: "Email",
      value: "siddharth.chaturvedi@donders.ru.nl",
      url: "mailto:siddharth.chaturvedi@donders.ru.nl"
    },
    {
      label: "GitHub",
      value: "github.com/i-m-iron-man",
      url: "https://github.com/i-m-iron-man"
    }
  ],

  keywords: [
    "Agent-based modelling",
    "Complex adaptive systems",
    "Collective and Diverse Intelligence",
    "Artificial life",
    "Multi-agent systems",
    "JAX",
    "Emergence",
    "Open-endedness",
    "Adaptive controllers"
  ],

  researchInterests: [
  {
    name: "Scaling of Complex Adaptive Systems",
    meta: "What happens when the number of entities in a complex adaptive system changes over time?",
    image: "media/SID_new.gif",
    description:
      "We live in (economic systems, social networks, transport routes, ecology, etc) and we are (immunity systems, thoughts, cells, etc) complex adaptive systems where the number of entities and thus their connections continuously keeps changing. Certain traits of such systems remain robust, and certain traits evolve (often power scaling). I aim to better our understanding of such systems by modelling them computationally.",
    tags: ["dynamic populations", "complex systems", "scaling"]
  },
  {
    name: "Collective and Diverse Intelligence",
    meta: "Placeholder",
    image: "media/collective_diverse_intelligence.png",
    description:
      "Placeholder text. Add a short description here about collective intelligence, diversity, embodied cognition, and how many interacting agents produce adaptive group-level behavior.",
    tags: ["collective intelligence", "diversity", "embodiment"]
  },
  {
    name: "Vectorized Algorithms",
    meta: "Placeholder",
    image: "media/seq_to_vec.png",
    description:
      "Placeholder text. Add a short description here about vectorized simulation, accelerator-friendly algorithms, JAX, batching, and scalable computational models.",
    tags: ["JAX", "vectorization", "simulation"]
  },
  {
    name: "Emergence in Multi-Agent Systems",
    meta: "Placeholder",
    image: "media/foraging_swarm.gif",
    description:
      "Placeholder text. Add a short description here about coordination, role differentiation, cooperation, competition, and emergent structure in multi-agent systems.",
    tags: ["multi-agent systems", "emergence", "coordination"]
  }
],

  publications: [
    {
      year: "2026",
      title: "Tuning Agent-Based Predator-Prey Models Toward Lotka-Volterra Dynamics",
      authors: "Corinna Mandl, Siddharth Chaturvedi, Marcel van Gerven",
      venue: "Simulation of Adaptive Behaviour, 2026, (Accepted)",
      description:
        "Using an engineered fitness function to tune a predator-prey continuous ABM towards Lotka-Volterra dynamics in a top-down manner.",
      link: "https://arxiv.org/pdf/2606.13639",
      linkLabel: "Pre-print"
    },
    {
      year: "2026",
      title: "Role differentiation in a shared-resource ecology under multi-level selection",
      authors: "Siddharth Chaturvedi, Ahmed, El-Gazzar, Marcel van Gerven",
      venue: "Artificial Life, 2026, (Accepted)",
      description:
        "Agent-based model to study role differentiation, resource use, and group-level selection in a shared-resource ecology.",
      link: "https://arxiv.org/pdf/2604.00810",
      linkLabel: "Pre-print"
    },
    {
      year: "2025",
      title: "Emergence of Internal State-Modulated Swarming in Multi-Agent Patch Foraging System",
      authors: "Siddharth Chaturvedi, Ahmed, El-Gazzar, Marcel van Gerven",
      venue: "GECCO, 2026 (Accepted)",
      description: "A model showing that swarming in partially-observable multi-agent patch foraging systems depends on the internal state representing the virtual hunger or resource levels of the foragers",
      link: "https://arxiv.org/pdf/2510.18886",
      linkLabel: "Pre-print"
    },
    {
      year: "2025",
      title: "ABMax: A JAX-based Agent-based Modeling Framework",
      authors: "Siddharth Chaturvedi, Ahmed, El-Gazzar, Marcel van Gerven",
      venue: "EUROSIM, 2026 (Accepted)",
      description: "An efficient and scalable agent-based modelling framework based on JAX that can handle dynamic population size and conflict management.",
      link: "https://arxiv.org/pdf/2508.16508",
      linkLabel: "Pre-print"
    },
    {
      year: "2024",
      title: "A dynamical systems approach to optimal foraging",
      authors: "Siddharth Chaturvedi, Ahmed, El-Gazzar, Marcel van Gerven",
      venue: "PLOS Complex Systems",
      description: "A model formulating a CTRNN foraging from two resource patches as a continuous coupled dynamical system.",
      link: "https://journals.plos.org/complexsystems/article?id=10.1371/journal.pcsy.0000018",
      linkLabel: "Article"
    },
    {
      year: "2022",
      title: "Dynamic energy budgeting using potential-based reward function",
      authors: "Siddharth Chaturvedi",
      venue: "M.Sc. thesis under Dr. Federico Califano, RAM lab, University of Twente",
      description: "Combining energy budgets with reinforcement learning to attain dynamic passivity in autonomous robots.",
      link: "https://essay.utwente.nl/",
      linkLabel: "Thesis"
    }
  ],

  talks: [
    {
      year: "2026",
      title: "Tutorial on using Genetic Programming to design Complex Adaptive Systems",
      venue: "SAB 2026, Berlin",
      description:
        "Accepted tutorial on genetic programming for the design and analysis of complex adaptive systems.",
      link: "#",
      linkLabel: "Add website"
    }
  ],

  software: [
    {
      name: "ABMax",
      meta: "Open-source software",
      description:
        "JAX-based tools and examples for dynamic-population agent-based modelling.",
      tags: ["Python", "JAX", "simulation"],
      link: "https://github.com/i-m-iron-man/abmax",
      linkLabel: "Repository"
    }
  ],

  education: [
    {
      year: "Present",
      title: "PhD research",
      venue: "Complex systems, agent-based modelling, and artificial life",
      description:
        "Add university, lab, supervisor, and dissertation title when ready."
    }
  ],

  service: [
    {
      year: "2024",
      title: "PON PhD Day organization",
      venue: "PhD Organization Nijmegen",
      description:
        "Organized community and academic events for PhD researchers."
    }
  ]
};
