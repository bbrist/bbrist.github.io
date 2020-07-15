// import marked from 'marked';
import Type from '@/data/resume/skill';
import Skill from '@/data/resume/skill-details';

// Details
import simulao from './simulao.md';
import road2glory from './road2glory.md';

class Project {
  constructor(name, description, details, skills) {
    this.name = name;
    this.description = description;
    this.details = details;
    this.skills = skills;
  }
}

export default [
  new Project('Simulao', 'Data Simulation & Testing Tool', simulao, [
    new Skill(Type.JAVA, 1.00, []),
  ]),
  new Project('RoadToGlory', 'Fantasy Football WebApp', road2glory, [
    new Skill(Type.PHP, 1.00, []),
    new Skill(Type.LARAVEL, 1.00, []),
  ]),
];
