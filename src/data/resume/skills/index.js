import Type from '@/data/resume/skill';

// Details
import cpp from './cpp.md';
import csharp from './csharp.md';
import java from './java.md';
import js from './js.md';
import html from './html.md';
import php from './php.md';
import python from './python.md';
import spring from './spring.md';
import vue from './vue.md';
import laravel from './laravel.md';
import sql from './sql.md';
import mongo from './mongo.md';
import elastic from './elastic.md';
import docker from './docker.md';
import aws from './aws.md';
import kafka from './kafka.md';
import jms from './jms.md';
import agile from './agile.md';
import microservices from './microservices.md';
import git from './git.md';
import design from './design.md';
import gitlabci from './gitlabci.md';
import jenkins from './jenkins.md';
import tdd from './tdd.md';

class Skill {
  constructor(type, level, details = []) {
    this.type = type;
    this.level = level;
    this.details = details;
  }

  get name() {
    return this.type.name;
  }

  get category() {
    return this.type.type;
  }

  get image() {
    return this.type.logo;
  }
}

export default [

  // Languages
  new Skill(Type.CPLUSPLUS, 0.50, cpp),
  new Skill(Type.CSHARP, 0.75, csharp),
  new Skill(Type.JAVA, 1.00, java),
  new Skill(Type.JAVASCRIPT, 0.85, js),
  new Skill(Type.HTMLCSS, 0.75, html),
  new Skill(Type.PHP, 0.85, php),
  new Skill(Type.PYTHON, 0.40, python),

  // Frameworks
  new Skill(Type.SPRING, 1.00, spring),
  new Skill(Type.VUE, 1.00, vue),
  new Skill(Type.LARAVEL, 0.90, laravel),

  // Database
  new Skill(Type.SQL, 0.75, sql),
  new Skill(Type.MONGO, 0.90, mongo),
  new Skill(Type.ELASTIC, 0.90, elastic),

  // Cloud
  new Skill(Type.DOCKER, 1.00, docker),
  new Skill(Type.AWS, 0.85, aws),
  new Skill(Type.KAFKA, 0.75, kafka),
  new Skill(Type.JMS, 1.00, jms),

  // Methodologies
  new Skill(Type.AGILE, 0.85, agile),
  new Skill(Type.DESIGN, 0.90, design),
  new Skill(Type.TDD, 0.75, tdd),
  new Skill(Type.MICROSERVICES, 0.90, microservices),

  // Tools
  new Skill(Type.GIT, 0.90, git),
  new Skill(Type.GITLABCI, 0.90, gitlabci),
  new Skill(Type.JENKINS, 0.50, jenkins),

];
