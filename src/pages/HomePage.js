import React from "react";
import './HomePage.css';
import profilePhoto from '../profilePhotoResized.png';

const metaTags = {
  title: "Iva Babukova - Software Engineer, Technical Founder and Team Lead",
  description: "Discover Iva Babukova's experience as a software engineer, team lead, and entrepreneur. Explore her impactful projects in bioinformatics, web development, devops, engineering, building a team, running a company.",
  keywords: "Iva Babukova, software engineer, team lead, entrepreneur, bioinformatics, machine learning, web development",
  author: "Iva Babukova",
  image: profilePhoto
};

const structuredData = {
  "@context": "http://schema.org",
  "@type": "Person",
  "name": "Iva Babukova",
  "jobTitle": "Software Engineer, Team Lead, Entrepreneur",
  "url": "https://ivababukova.github.io/bio/",
  "image": "/build/static/media/profilePhotoResized.png",
  "description": "Discover Iva Babukova's experience as a software engineer, team lead, and entrepreneur. Explore her impactful projects in bioinformatics, web development, devops, engineering, building a team, running a company.",
};

const page_contents = [
  {
    "text": `
      I am currently working at Google, DeepMind as a Software Engineer. We are building a product to allow collection and processing of large amounts of video data. 
      The product will perform automatic filtering and will prepare the data for further downstream research and model training. I am using state of the art Computer Vision AI models and video processing tools.

    `,
    "links": {
    },
    "keywords": ["AI", "Computer Vision", "CTO", "software engineer", "LLM", "DeepMind", "Google"]
  },
  {
    "text": `
      I was the CTO and cofounder of Biomage, which was acquired by Parse Biosciences.
      I worked for a year and 4 months at Parse, where I was the technical lead of the Cloud Analysis team. We integrated the software platform that I built while at Harvard with Parse's technologies and wrote a new data preprocessing module. 
      This drastically reduced the analysis time (from 6 months to 2 weeks) and enabled the company to scale sales, removing its biggest bottleneck at the time (data analysis time). 
    `,
    "links": {
      "Biomage": "https://www.biomage.net/",
      "was acquired by Parse Biosciences": "https://www.businesswire.com/news/home/20240116719945/en/Parse-Biosciences-Acquires-Biomage"
    },
    "keywords": ["Biomage", "Parse Biosciences", "CTO", "cofounder", "Director of Cloud Computing", "bioinformatics", "single cell technology"]
  },
  {
    "text": `
      While at Biomage, I worked on projects at Harvard Medical School. My most impactful 
      contribution there was Cellenics, which is currently the world's most widely used open source web platform for
      analysis of single cell sequencing data. I was the architect and developer of the platform and later became the technical 
      team lead behind it.
      I also contributed to Vitessce.io -  an open source tool for exploring high-plex microscopy data.
    `,
    "links": {
      "Cellenics": "https://github.com/hms-dbmi-cellenics",
      "single cell sequencing": "https://en.wikipedia.org/wiki/Single-cell_sequencing#Single-cell_transcriptome_sequencing_(scRNA-seq)",
      "Vitessce.io": "http://vitessce.io/",
      "spatial single cell": "https://en.wikipedia.org/wiki/Spatial_transcriptomics"
    },
    "keywords": ["Biomage", "Harvard Medical School", "Cellenics", "chief architect", "technical team lead", "Vitessce.io", "high-plex microscopy data"]
  },
  {
    "text": `
      Before starting Biomage I worked as a full stack engineer at Skyscanner.
      I was a core developer of the company’s in-house CI/CD product and AWS-based
      infrastructure that powers the website.
    `,
    "links": {
      "Skyscanner": "https://www.skyscanner.net/"
    },
    "keywords": ["Biomage", "Skyscanner", "full stack engineer", "CI/CD product", "AWS-based infrastructure"]
  },
  {
    "text": `
      I hold a First Class MSci in Computer Science from the University of Glasgow. 
      My BSc and MSc final projects were both in the field of algorithmics and were supervised 
      by Patrick Prosser and David Manlove. The projects focused on finding efficient algorithms using 
      constraint and integer programming for Traveller’s Problem and Subgraph Isomorphism.
    `,
    "links": {
      "University of Glasgow": "https://www.gla.ac.uk/",
      "Patrick Prosser": "https://en.wikipedia.org/wiki/Patrick_Prosser",
      "David Manlove": "https://www.dcs.gla.ac.uk/~davidm/",
    },
    "keywords": ["University of Glasgow", "Computer Science", "algorithmics", "Patrick Prosser", "David Manlove", "Traveller’s Problem", "Subgraph Isomorphism"]
  },
  {
    "text": `
      At the University of Glasgow, I co-founded Glasgow University Tech Society (GUTS). 
      We organized hackathons, which attracted hundreds of students from all around Scotland 
      and tech companies local to the area.
    `,
    "links": {
      "Glasgow University Tech Society": "https://www.glasgowunisrc.org/organisation/8656/",
      "hackathons": "https://en.wikipedia.org/wiki/Hackathon"
    },
    "keywords": ["University of Glasgow", "Glasgow University Tech Society", "GUTS", "hackathons"]
  },
  {
    "text": `
      I like to read books and sometimes I give talks.
    `,
    "keywords": ["read books", "give talks"]
  },
  {
    "text": `
      I am married to a scientist and entrepreneur Adam Kurkiewicz with whom I have a daughter.
    `,
    "links": {
      "Adam Kurkiewicz": "https://www.linkedin.com/in/adam-kurkiewicz-37393681/",
    },
    "keywords": ["Adam Kurkiewicz", "scientist", "entrepreneur"]
  },
  {
    "text": `
      Write me an e-mail to get in touch!
    `,
    "links": {
      "e-mail": "mailto:ibabukova@gmail.com"
    },
    "keywords": ["e-mail"]
  }
];


export default function HomePage() {

  function insertLinks(text, links) {
  
    let resultPart = text;
    
    for (const key in links) {
      if (links.hasOwnProperty(key)) {
        const linkValue = links[key];
        const regex = new RegExp(key, 'g');
        resultPart = resultPart.replace(regex, `<a href='${linkValue}'>${key}</a>`);
      }
    }
      
    return resultPart;
  }

  function getFormattedText(paragraph) {
    let formattedText = insertLinks(paragraph.text, paragraph.links);
    const keywordsString = paragraph.keywords.join(',');
    formattedText += `<span style="display:none" data-keywords="${keywordsString}"></span>`;
    return formattedText;
  }

  return (
    <div>
      <title>{metaTags.title}</title>
      <meta name="description" content={metaTags.description} />
      <meta name="keywords" content={metaTags.keywords} />
      <meta name="author" content={metaTags.author} />
      <meta property="og:title" content={metaTags.title} />
      <meta property="og:description" content={metaTags.description} />
      <meta property="og:image" content={metaTags.image} />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <div className="container">
        <div className="box-text">
          <h1>Hi, I'm Iva </h1>
          <h2>I'm a software engineer, team lead and entrepreneur</h2>
          <p className="subtitle">
            I have spent most of my career collaborating with researchers and engineers and building and scaling software solutions that solve important problems impacting people's lives.
          </p>
          {page_contents.map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: getFormattedText(paragraph) }}></p>
          ))}
        </div>
        <div className="box-image">
          <img src={profilePhoto} alt="My Profile Photo" />
        </div>
      </div>
   </div>
  );
}
