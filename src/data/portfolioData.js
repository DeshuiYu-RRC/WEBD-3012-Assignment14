export const basicInfo = {
  name: 'Deshui Yu',
  title: 'Web Developer',
  email: 'dyu3@rrc.ca',
  phone: '(123) 456-7890',
  location: 'Winnipeg, Manitoba, CA',
  bio: 'Passionate web developer with experience in modern web technologies including React, Node.js, and Docker. Currently studying web development and continuously learning new technologies to build scalable and maintainable applications.',
  github: 'https://github.com/DeshuiYu-RRC',
  linkedin: 'https://www.linkedin.com/in/alex-deshui-yu/',
};

export const workProjects = [
  {
    id: 1,
    title: 'WEBD-3012-Assignment11',
    description:
      'This project is a Node.js web application that runs on http://127.0.0.1:7775.\nIt uses Node 20 (Alpine) as the base image and exposes port 7775 for development.',
    image: 'https://placehold.co/400x300?text=Assignment11%5CnReact',
    link: 'https://github.com/DeshuiYu-RRC/WEBD-3012-Assignment11',
    techList: [
      'React',
      'Node.js',
      'CSS',
      'JavaScript',
      'Docker',
      'Git',
      'HTML',
    ],
  },
  {
    id: 2,
    title: 'WEBD-3012-Assignment12',
    description:
      'A comprehensive UI component library built with React, TypeScript, Styled Components, and Storybook.',
    image: 'https://placehold.co/400x300?text=Assignment12%5CnStorybook',
    link: 'https://github.com/DeshuiYu-RRC/WEBD-3012-Assignment12',
    techList: ['React', 'TypeScript', 'Git', 'Docker', 'Storybook', 'CSS'],
  },
  {
    id: 3,
    title: 'WEBD-3012-Assignment13',
    description:
      'This project is a complete UI component library featuring 10 reusable React components with full Storybook integration, comprehensive testing, Docker deployment support, and automated code quality checks.',
    image: 'https://placehold.co/400x300?text=Assignment13%5CnCI/CD',
    link: 'https://github.com/DeshuiYu-RRC/WEBD-3012-Assignment12',
    techList: ['React', 'TypeScript', 'Git', 'Docker', 'Storybook', 'CSS'],
  },
  {
    id: 4,
    title: 'WEBD-3012-Assignment14',
    description:
      'This project is a complete UI component library featuring 10 reusable React components with full Storybook integration, comprehensive testing, Docker deployment support, and automated code quality checks.',
    image: 'https://placehold.co/400x300?text=Assignment14%5CnPortfolio',
    link: 'https://github.com/DeshuiYu-RRC/WEBD-3012-Assignment14',
    techList: ['React', 'TypeScript', 'Git', 'Docker', 'Storybook', 'CSS'],
  },
];

export const skills = {
  description:
    'Throughout my program, I have developed proficiency in various technologies and tools essential for modern web development, with a focus on React, Docker, and version control.',
  languages: ['JavaScript', 'TypeScript', 'HTML5', 'CSS', 'React'],
  frameworks: ['React.js', 'Node.js', 'Bootstrap'],
  tools: [
    'Git & GitHub',
    'Docker',
    'NVM (Node Version Manager)',
    'VS Code',
    'npm',
    'Storybook',
  ],
};

export const resources = [
  {
    id: 1,
    title: 'React Documentation',
    icon: '/icons/react.png',
    summary:
      'Official React documentation with tutorials, guides, and comprehensive API references for building modern web applications.',
    link: 'https://react.dev/learn',
  },
  {
    id: 2,
    title: 'Docker Documentation',
    icon: '/icons/docker.png',
    summary:
      'Complete Docker documentation covering containerization, deployment, and best practices for building portable applications.',
    link: 'https://docs.docker.com/get-started/',
  },
  {
    id: 3,
    title: 'Git',
    icon: '/icons/git.png',
    summary:
      'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
    link: 'https://git-scm.com/learn',
  },
  {
    id: 4,
    title: 'GitHub',
    icon: '/icons/github.png',
    summary:
      'Version control and collaboration platform using Git. Essential for team development and project management.',
    link: 'https://github.com/',
  },
  {
    id: 5,
    title: 'Storybook',
    icon: '/icons/storybook.png',
    summary:
      'UI component development tool for building, testing, and documenting React components in isolation.',
    link: 'https://storybook.js.org/docs',
  },
  {
    id: 6,
    title: 'Node Version Manager',
    icon: '/icons/nvm.png',
    summary:
      'NVM allows you to manage multiple Node.js versions on your machine and switch between them easily.',
    link: 'https://github.com/nvm-sh/nvm',
  },
];

export const developerSetup = {
  vscode: {
    theme: 'Dark+ (default dark)',
    extensions: [
      'ESLint',
      'Prettier - Code formatter',
      'GitLens',
      'Docker',
      'Live Server',
      'GitHub',
      'React/Redux/React-Native snippets',
    ],
    settings:
      'Auto-save enabled, format on save, tab size: 2 spaces, bracket pair colorization enabled',
  },
  terminal: {
    shell: 'Bash / Zsh',
    theme: 'Custom dark theme with Nord colors',
    tools: 'Git, NVM, Node.js, npm, Docker, docker-compose',
  },
  font: {
    editor: 'Fira Code',
    size: '14px',
    ligatures: 'Enabled for better code readability and modern syntax support',
  },
  nodeSetup: {
    version: 'Node.js 20 LTS (managed via NVM)',
    packageManager: 'npm 9.x',
    globalPackages: ['create-react-app', 'serve', 'typescript', 'nodemon'],
  },
};
