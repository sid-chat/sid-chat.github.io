// Edit this file when your CV changes.
// You usually do not need to touch index.html or styles.css.

window.CV_DATA = {
  name: "Siddharth Chaturvedi",
  initials: "SC",
  role: "PhD candidate,\nArtificial Cognitive Systems lab,\nDonders Institute,\nRadboud University",
  location: "",
  shortSummary: "",
  about: `Namaste and welcome to my website.
  I am a mechanical and control engineer who began doing a PhD in the field of AI and is now concluding it in the field of complex systems. I am currently part of the <a href="https://dbi2.nl/" target="_blank" rel="noreferrer">Dutch Brain Interface Initiative (DBI2)</a> consortium and am supervised by <a href="https://www.ru.nl/en/people/gerven-m-van" target="_blank" rel="noreferrer">Prof. Marcel van Gerven</a>.
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
      "We live in (economic systems, social networks, transport routes, ecology, etc) and we are (immunity systems, thoughts, cells, etc) complex adaptive systems where the number of entities and thus their connections continuously keeps changing. Certain traits of such systems remain robust, and certain traits evolve (often power scaling). Aim is to better our understanding of such systems by modelling them computationally.",
    tags: [
    {
      label: "Scale: The Universal Laws of Life and Death in Organisms, Cities and Companies",
      url: "https://indico.cern.ch/event/1049159/attachments/2271054/3856975/CERN_6-21.pdf"
    },
    {
      label: "Introduction to the Theory of Complex Systems",
      url: "https://www.academia.edu/93423257/Introduction_to_the_Theory_of_Complex_Systems"
    }
  ]
  },
  {
    name: "Collective and Diverse Intelligence",
    meta: "Is the traditional cognitive science inspired intelligence the only mechanism by which general intelligence can be realized?",
    image: "media/collective_diverse_intelligence.png",
    description:
      "Maybe the way a biological brain produces intelligence is just one mechanism to functionally realize it. Like an island in the sea. Maybe there are other islands in the sea. Maybe these other islands are more efficient when realized in-silico. For instance, think of how the distributed nervous system of an octopus is different than ours. Here, aim is to define intelligence more functionally rather than mechanistically.",
    tags: [
    {
      label: "Intelligence as remapping and navigation of an embedding space",
      url: "https://arxiv.org/pdf/2601.14096"
    },
    {
      label: "Collective and Diverse Intelligence",
      url: "https://blog.donders.ru.nl/collective-and-diverse-intelligence-something-beyond-cognitive-science/?lang=en"
    },
    {
      label: "Other Minds",
      url: "https://www.goodreads.com/en/book/show/28116739-other-minds"
    }  
  ]
  },
  {
    name: "Vectorized Algorithms for Discrete Logic",
    meta: "Can a brute-force vectorized version of an algorithm be more efficient than its optimized serial version?",
    image: "media/seq_to_vec.png",
    description:
      "Given the increasing availability of vectorized compute (GPU, TPU, FPGAs), can we redesign classical algorithms such that their brute-force vectorized version can utilize the hardware accelerators to outperform their streamlined serial versions? Such implementations can be useful for instance in the case of event-based models. JAX can be useful here, as we can vectorize over loops and conditional logic using it.",
    tags: [
    {
      label: "JAX",
      url: "https://docs.jax.dev/en/latest/notebooks/thinking_in_jax.html"
    },
    {
      label: "ABMax",
      url: "https://github.com/i-m-iron-man/abmax"
    }  
  ]
  },
  {
    name: "Emergence in Multi-Agent Systems",
    meta: "How and why does cooperation emerge in purely competitive agents?",
    image: "media/foraging_swarm.gif",
    description:
      "Simulations of non-cooperative agents foraging from common resources show the emergence of coordination among them. This can occur, for instance, through aggregation or role differentiation. The aim is to understand what factors lead to such emergence and how we can control it. A broader aim is to study open-endedness as a function of the number of agents coordinating to outperform other coalitions.",
    tags: [
    {
      label: "Emergence of aggregation",
      url: "https://arxiv.org/pdf/2510.18886"
    },
    {
      label: "Emergence of role-differentiation",
      url: "https://arxiv.org/pdf/2604.00810"
    }  
  ]
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
      title: "Tutorial on using Genetic Programming to design Complex Adaptive Systems.",
      authors: "Siddharth Chaturvedi, Sigur de Vries",
      venue: "Simulation of Adaptive Behaviour, 2026, Berlin (Accepted)",
      description:
        "",
      link: "https://sab-gp-cas-tutorial.github.io/website/",
      linkLabel: "Tutorial website"
    },
    {
      year: "2025",
      title: "Foragax: Large-Scale Agent-Based Modeling of Adaptive Multi-Agent Foraging.",
      venue: "The Mechanistic Basis of Foraging, 2025, Birmingham",
      description:
        "",
      link: "https://uobevents.eventsair.com/the-mechanistic-basis-of-foraging/",
      linkLabel: "Event website"
    },
    {
      year: "2025",
      title: "ABMax: an agent-based modelling framework based in JAX.",
      venue: "Dutch Sequential Decision Making meeting, Eindhoven",
      description:
        "",
      link: "https://www.lnmb.nl/pages/courses/phdcourses/SDM/",
      linkLabel: "Event website"
    },
    {
      year: "2025",
      title: "An introduction to agent-based modelling using ABMax.",
      venue: "Guest lecture, Complex Adaptive Systems (M.Sc. course), Radboud University, Nijmegen",
      description:
        "",
      link: "https://ru.osiris-student.nl/onderwijscatalogus/extern/cursus?cursuscode=SOW-MKI49&collegejaar=2026",
      linkLabel: "Course website"
    },
    {
      year: "2024",
      title: "Why is it time to revisit Artificial Life?",
      venue: "Pint of Science, Nijmegen",
      description:
        "",
      link: "https://www.pintofscience.nl/event/questions-that-move-science-day-3/",
      linkLabel: "Event website"
    },
    {
      year: "2024",
      title: "An introduction to optimal foraging theory.",
      venue: "Guest lecture, Complex Adaptive Systems (M.Sc. course), Radboud University, Nijmegen",
      description:
        "",
      link: "https://ru.osiris-student.nl/onderwijscatalogus/extern/cursus?cursuscode=SOW-MKI49&collegejaar=2026",
      linkLabel: "Course website"
    },
    {
      year: "2023",
      title: "An introduction to agent-based AI.",
      venue: "Guest lecture, AI Hons. Bachelor, Radboud University, Nijmegen",
      description:
        "",
      link: "https://ru.osiris-student.nl/onderwijscatalogus/extern/cursus?cursuscode=SOW-MKI49&collegejaar=2026",
      linkLabel: "Course website"
    },
    {
      year: "2023",
      title: "What can we do with AI?",
      venue: "Guest lecture, Bachelor's experience day artificial intelligence, Radboud University, Nijmegen",
      description:
        "",
      link: "",
      linkLabel: ""
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
