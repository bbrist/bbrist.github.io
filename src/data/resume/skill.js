import cplusplus from '@/assets/logos/skills/cpp-01.png';
import csharp from '@/assets/logos/skills/csharp-01.png';
import java from '@/assets/logos/skills/java-01.png';
import js from '@/assets/logos/skills/js-01.png';
import html from '@/assets/logos/skills/html-01.png';
import php from '@/assets/logos/skills/php-01.png';
import python from '@/assets/logos/skills/python-01.png';
import spring from '@/assets/logos/skills/spring-01.png';
import vue from '@/assets/logos/skills/vue-01.png';
import laravel from '@/assets/logos/skills/laravel-01.png';
import sql from '@/assets/logos/skills/mysql-01.png';
import mongo from '@/assets/logos/skills/mongo-01.png';
import elastic from '@/assets/logos/skills/elastic-01.png';
import docker from '@/assets/logos/skills/docker-01.png';
import aws from '@/assets/logos/skills/aws-01.png';
import kafka from '@/assets/logos/skills/kafka-01.png';
import activemq from '@/assets/logos/skills/mq-01.png';
import agile from '@/assets/logos/skills/agile-01.png';
import microservices from '@/assets/logos/skills/microservices-01.png';
import git from '@/assets/logos/skills/git-01.png';

const Type = {
  LANGUAGE: 'language',
  FRAMEWORK: 'framework',
  DATABASE: 'database',
  CLOUD: 'cloud',
  TOOL: 'tool',
  METHODOLOGY: 'methodology',
};

class Skill {
  constructor(key, name, logo, type) {
    this.key = key;
    this.name = name;
    this.logo = logo;
    this.type = type;
  }
}

export default {

  // Languages
  CPLUSPLUS: new Skill('c++', 'C++', cplusplus, Type.LANGUAGE),
  CSHARP: new Skill('c#', 'C#', csharp, Type.LANGUAGE),
  JAVA: new Skill('java', 'Java', java, Type.LANGUAGE),
  JAVASCRIPT: new Skill('js', 'JavaScript', js, Type.LANGUAGE),
  HTMLCSS: new Skill('html/css', 'HTML/CSS', html, Type.LANGUAGE),
  PHP: new Skill('php', 'PHP', php, Type.LANGUAGE),
  PYTHON: new Skill('python', 'Python', python, Type.LANGUAGE),

  // Frameworks
  SPRING: new Skill('spring', 'Spring', spring, Type.FRAMEWORK),
  VUE: new Skill('vue', 'VueJS', vue, Type.FRAMEWORK),
  LARAVEL: new Skill('laravel', 'Laravel', laravel, Type.FRAMEWORK),

  // Database
  SQL: new Skill('sql', 'SQL', sql, Type.DATABASE),
  MONGO: new Skill('mongo', 'Mongo', mongo, Type.DATABASE),
  ELASTIC: new Skill('elastic', 'Elastic', elastic, Type.DATABASE),

  // Cloud
  DOCKER: new Skill('docker', 'Docker', docker, Type.CLOUD),
  AWS: new Skill('aws', 'AWS', aws, Type.CLOUD),
  KAFKA: new Skill('kafka', 'Kafka', kafka, Type.CLOUD),
  JMS: new Skill('jms', 'JMS', activemq, Type.CLOUD),

  // Methodologies
  AGILE: new Skill('agile', 'Agile', agile, Type.METHODOLOGY),
  MICROSERVICES: new Skill('microservices', 'Microservices', microservices, Type.METHODOLOGY),

  // Tools
  GIT: new Skill('git', 'Git', git, Type.TOOL),

};
