import experience from '@/data/resume/experience';
import projects from '@/data/resume/projects';
import skills from '@/data/resume/skills';

// Details
import background from './background.md';
import interests from './interests.md';
import hobbies from './hobbies.md';
import education from './education.md';
import contact from './contact.md';

export default {
  firstname: 'Brett',
  lastname: 'Brist',
  title: 'Software Engineer',
  experience,
  projects,
  skills,

  // Details
  background,
  interests,
  hobbies,
  education,
  contact,

  get name() {
    return `${this.firstname} ${this.lastname}`;
  },

};
