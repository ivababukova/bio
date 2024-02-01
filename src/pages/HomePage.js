import React from "react";
import './HomePage.css';
import profilePhoto from '../profilePhoto.png';
import { Vega } from 'react-vega';


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

const spec = {
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "description": "A node-link diagram with force-directed layout, depicting character co-occurrence in the novel Les Misérables.",
  "width": 700,
  "height": 500,
  "padding": 0,

  "signals": [
    { "name": "cx", "update": "width / 2" },
    { "name": "cy", "update": "height / 2" },
    { "name": "nodeRadius", "value": 8,
      "bind": {"input": "range", "min": 1, "max": 50, "step": 1} },
    { "name": "nodeCharge", "value": -30,
      "bind": {"input": "range", "min":-100, "max": 10, "step": 1} },
    { "name": "linkDistance", "value": 30,
      "bind": {"input": "range", "min": 5, "max": 100, "step": 1} },
    { "name": "static", "value": true,
      "bind": {"input": "checkbox"} },
    {
      "description": "State variable for active node fix status.",
      "name": "fix", "value": false,
      "on": [
        {
          "events": "symbol:mouseout[!event.buttons], window:mouseup",
          "update": "false"
        },
        {
          "events": "symbol:mouseover",
          "update": "fix || true"
        },
        {
          "events": "[symbol:mousedown, window:mouseup] > window:mousemove!",
          "update": "xy()",
          "force": true
        }
      ]
    },
    {
      "description": "Graph node most recently interacted with.",
      "name": "node", "value": null,
      "on": [
        {
          "events": "symbol:mouseover",
          "update": "fix === true ? item() : node"
        }
      ]
    },
    {
      "description": "Flag to restart Force simulation upon data changes.",
      "name": "restart", "value": false,
      "on": [
        {"events": {"signal": "fix"}, "update": "fix && fix.length"}
      ]
    }
  ],

  "data": [
    {
      "name": "node-data",
      "url": "https://raw.githubusercontent.com/vega/vega/main/docs/data/miserables.json",
      "format": {"type": "json", "property": "nodes"}
    },
    {
      "name": "link-data",
      "url": "https://raw.githubusercontent.com/vega/vega/main/docs/data/miserables.json",
      "format": {"type": "json", "property": "links"}
    }
  ],

  "scales": [
    {
      "name": "color",
      "type": "ordinal",
      "domain": {"data": "node-data", "field": "group"},
      "range": {"scheme": "category20c"}
    }
  ],

  "marks": [
    {
      "name": "nodes",
      "type": "symbol",
      "zindex": 1,

      "from": {"data": "node-data"},
      "on": [
        {
          "trigger": "fix",
          "modify": "node",
          "values": "fix === true ? {fx: node.x, fy: node.y} : {fx: fix[0], fy: fix[1]}"
        },
        {
          "trigger": "!fix",
          "modify": "node", "values": "{fx: null, fy: null}"
        }
      ],

      "encode": {
        "enter": {
          "fill": {"scale": "color", "field": "group"},
          "stroke": {"value": "white"}
        },
        "update": {
          "size": {"signal": "2 * nodeRadius * nodeRadius"},
          "cursor": {"value": "pointer"}
        }
      },

      "transform": [
        {
          "type": "force",
          "iterations": 300,
          "restart": {"signal": "restart"},
          "static": {"signal": "static"},
          "signal": "force",
          "forces": [
            {"force": "center", "x": {"signal": "cx"}, "y": {"signal": "cy"}},
            {"force": "collide", "radius": {"signal": "nodeRadius"}},
            {"force": "nbody", "strength": {"signal": "nodeCharge"}},
            {"force": "link", "links": "link-data", "distance": {"signal": "linkDistance"}}
          ]
        }
      ]
    },
    {
      "type": "path",
      "from": {"data": "link-data"},
      "interactive": false,
      "encode": {
        "update": {
          "stroke": {"value": "#ccc"},
          "strokeWidth": {"value": 0.5}
        }
      },
      "transform": [
        {
          "type": "linkpath",
          "require": {"signal": "force"},
          "shape": "line",
          "sourceX": "datum.source.x", "sourceY": "datum.source.y",
          "targetX": "datum.target.x", "targetY": "datum.target.y"
        }
      ]
    }
  ]
};


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
    <div>
      <div className="container">
        <div className="box-text">
          <h1>Hi, I am Iva </h1>
          <h2>I am a software engineer, team lead and entrepreneur</h2>
          {page_contents.map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: getFormattedText(paragraph) }}></p>
          ))}
          <Vega spec={spec} />
        </div>
        <div className="box-image">
          <img src={profilePhoto} alt="My Profile Photo" />
        </div>
      </div>
    </div>
  );
}
