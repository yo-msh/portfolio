const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Next.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'mySQL/SQL',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Express.JS',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Flask',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'EJS (Embedded JavaScript)',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
