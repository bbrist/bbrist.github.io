import Type from '@/data/resume/skill';
import Skill from '@/data/resume/skill-details';

// eslint-disable-next-line import/no-named-as-default
import Date from '@/data/Date';

// Images
import ngc from '@/assets/logos/company/ngc.jpeg';
import learn from '@/assets/logos/company/learn.jpeg';
import trivera from '@/assets/logos/company/trivera.png';
import harris from '@/assets/logos/company/harris.jpeg';
import dod from '@/assets/logos/company/dod.jpeg';

// Details
import ngcmd from './ngc.md';
import learn4funmd from './learn4fun.md';
import triveramd from './trivera.md';
import harrismd from './harris.md';
import dodmd from './dod.md';

export default [
  {
    company: 'Northrop Grumman',
    logo: ngc,
    role: 'Software Engineer',
    period: Date.period(2017),
    details: ngcmd,
    skills: [
      new Skill(Type.JAVA, 0.80, []),
      new Skill(Type.JAVASCRIPT, 0.50, []),
      new Skill(Type.ELASTIC, 0.80, []),
      new Skill(Type.GIT, 1.00, []),
      new Skill(Type.DESIGN, 0.80, []),
      new Skill(Type.VUE, 0.20, []),
      new Skill(Type.AGILE, 1.00, []),
      new Skill(Type.MICROSERVICES, 1.00, []),
      new Skill(Type.JMS, 1.00, []),
      new Skill(Type.KAFKA, 0.50, []),
      new Skill(Type.DOCKER, 1.00, []),
      new Skill(Type.MONGO, 0.75, []),
      new Skill(Type.SPRING, 1.00, []),
      new Skill(Type.GITLABCI, 0.80, []),
      new Skill(Type.JENKINS, 0.60, []),
      new Skill(Type.TDD, 0.50, []),
    ],
  },
  {
    company: 'Learn4Fun',
    logo: learn,
    role: 'Lead Software Engineer & Architect',
    period: Date.period(2019),
    details: learn4funmd,
    skills: [
      new Skill(Type.JAVA, 1.00, []),
      new Skill(Type.DOCKER, 1.00, []),
      new Skill(Type.MONGO, 0.50, []),
      new Skill(Type.SPRING, 1.00, []),
      new Skill(Type.GITLABCI, 1.00, []),
      new Skill(Type.MICROSERVICES, 1.00, []),
      new Skill(Type.AGILE, 0.50, []),
      new Skill(Type.JAVASCRIPT, 0.75, []),
      new Skill(Type.ELASTIC, 0.80, []),
      new Skill(Type.GIT, 1.00, []),
      new Skill(Type.DESIGN, 1.00, []),
      new Skill(Type.VUE, 1.00, []),
      new Skill(Type.AWS, 1.00, []),
    ],
  },
  {
    company: 'Trivera Interactive',
    logo: trivera,
    role: 'Software Engineer & Consultant',
    period: Date.period(2017, 2018),
    details: triveramd,
    skills: [
      new Skill(Type.PHP, 1.00, []),
      new Skill(Type.LARAVEL, 1.00, []),
      new Skill(Type.SQL, 1.00, []),
      new Skill(Type.VUE, 1.00, []),
      new Skill(Type.DESIGN, 1.00, []),
      new Skill(Type.GIT, 1.00, []),
      new Skill(Type.HTMLCSS, 1.00, []),
      new Skill(Type.JAVASCRIPT, 1.00, []),
    ],
  },
  {
    company: 'L3Harris',
    logo: harris,
    role: 'Software Engineer',
    period: Date.period(2017, 2017),
    details: harrismd,
    skills: [
      new Skill(Type.CSHARP, 1.00, []),
      new Skill(Type.AGILE, 1.00, []),
    ],
  },
  {
    company: 'Department of Defense',
    logo: dod,
    role: 'Cooperative Education Intern',
    period: Date.period(2014, 2017),
    details: dodmd,
    skills: [
      new Skill(Type.PYTHON, 0.80, []),
      new Skill(Type.HTMLCSS, 0.80, []),
      new Skill(Type.JAVASCRIPT, 0.80, []),
    ],
  },
];
