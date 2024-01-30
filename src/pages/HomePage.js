import React from "react";
import './HomePage.css';
import profilePhoto from '../profilePhoto.png';

const page_contents = [
  {
    "text": `
      I was the CTO and cofounder of Biomage, which was acquired by Parse Biosciences.
      At Parse I am the Director of Cloud Computing, leading the cloud analysis team to
      build bioinformatics software for data analysis with Parse’s single cell technology.
    `,
    "links": {
      "Biomage": "https://www.biomage.net/",
      "was acquired by Parse Biosciences": "https://www.businesswire.com/news/home/20240116719945/en/Parse-Biosciences-Acquires-Biomage"
    }
  },
  {
    "text": `
      While at Biomage, I worked on projects at Harvard Medical School. My most impactful 
      contribution there was Cellenics, which is currently the world's most widely used open source web platform for
      analysis of single cell sequencing data. I was the chief architect and technical 
      team lead behind the project. In my role I also contributed to Vitessce.io -
        an open source tool for exploring high-plex microscopy data.
    `,
    "links": {
      "Cellenics": "https://github.com/hms-dbmi-cellenics",
      "single cell sequencing": "https://en.wikipedia.org/wiki/Single-cell_sequencing#Single-cell_transcriptome_sequencing_(scRNA-seq)",
      "Vitessce.io": "http://vitessce.io/",
      "spatial single cell": "https://en.wikipedia.org/wiki/Spatial_transcriptomics"
    }
  },
  {
    "text": `
      Before starting Biomage I worked as a full stack engineer at Skyscanner.
      I was a core developer of the company’s in-house CI/CD product and AWS-based
      infrastructure that powers the website.
    `,
    "links": {
      "Skyscanner": "https://www.skyscanner.net/"
    }
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
    }
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
    }
  },
  {
    "text": `
      I like to read books and sometimes I give talks.
    `,
    "links": {
      "give talks": "https://turingfest.com/videos/iva-babukova-can-open-source-cure-cancer/",
      // "talks": "https://www.bio-itworldexpo.com/23/bioinformatics"
    }
  },
  {
    "text": `
      I am married to a scientist and entrepreneur Adam Kurkiewicz with whom I have a daughter.
    `,
    "links": {
      "Adam Kurkiewicz": "https://www.linkedin.com/in/adam-kurkiewicz-37393681/",
    }
  },
  {
    "text": `
      Write me an e-mail to get in touch!
    `,
    "links": {
      "e-mail": "mailto:ibabukova@gmail.com"
    }
  }
]

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
    return insertLinks(paragraph.text, paragraph.links);
  }

  return (
    <div className="HomePage">
      <div className="container">
        <div className="box">
          <h1>Hi! <br/> I am Iva Babukova</h1>
          <h2>I am a software engineer, team lead and entrepreneur</h2>
          {page_contents.map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: getFormattedText(paragraph) }}></p>
          ))}
        </div>
        <div className="box">
          <img src={profilePhoto} alt="My Profile Photo" />
        </div>
      </div>
    </div>
  );
}
