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
    new Skill(Type.JAVASCRIPT, 0.50, []),
    new Skill(Type.GIT, 1.00, []),
    new Skill(Type.DESIGN, 0.80, []),
    new Skill(Type.VUE, 0.20, []),
    new Skill(Type.MICROSERVICES, 1.00, []),
    new Skill(Type.JMS, 1.00, []),
    new Skill(Type.KAFKA, 0.50, []),
    new Skill(Type.DOCKER, 1.00, []),
    new Skill(Type.MONGO, 0.75, []),
    new Skill(Type.SPRING, 1.00, []),
    new Skill(Type.GITLABCI, 0.80, []),
    new Skill(Type.TDD, 0.50, []),
  ]),
  new Project('RoadToGlory', 'Fantasy Football WebApp', road2glory, [
    new Skill(Type.PHP, 1.00, []),
    new Skill(Type.LARAVEL, 1.00, []),
    new Skill(Type.SQL, 1.00, []),
    new Skill(Type.VUE, 1.00, []),
    new Skill(Type.DESIGN, 1.00, []),
    new Skill(Type.GIT, 1.00, []),
    new Skill(Type.HTMLCSS, 1.00, []),
    new Skill(Type.JAVASCRIPT, 1.00, []),
  ]),
];
