/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Chainalysis',
    position: 'Senior Blockchain Developer',
    url: 'https://demo.chainalysis.com/',
    startDate: '2022-03-01',
    endDate: '2024-11-01',
    // summary: 'Promptfoo builds open-source tools to evaluate, find, and fix vulnerabilities in
    // large language models
    // (LLMs). Our open-source tools are used by over 35,000 developers and researchers worldwide.',
    highlights: [
      'Developed and deployed high-performance smart contracts on Ethereum using Solidity, resulting in a 40% reduction in transaction costs and improved application efficiency.',
      'Led the design and implementation of a decentralized application (dApp) for secure peer-to-peer transactions, increasing user confidence and reducing processing times by 25%.',
      'Worked with stakeholders to gather requirements and develop user stories, successfully launching several features that implemented overall system functionality by 38%.',
    ],
  },
  {
    name: 'Tribe Capital',
    position: 'Senior Backend Developer',
    url: 'https://tribecap.co/',
    startDate: '2020-06-01',
    endDate: '2022-02-01',
    highlights: [
      'Successfully migrated 3 legacy systems to a cloud-based architecture, using Node.js and AWS, resulting in a 50% reduction in operational costs.',
      'Upgraded robust RESTful APIs to facilitate enable interaction between front-end applications and back-end services, improving overall application performance and reliability.',
      'Conducted thorough code reviews, ensuring adherence to best practices and coding standards, resulting in a significant reduction in defects and improved code quality.',
      'Participated in agile ceremonies to continuously improve team performance and adapt to changing project requirements.',
    ],
  },
  {
    name: 'Clevertech',
    position: 'Software Frontend Developer',
    url: 'https://tribecap.co/',
    startDate: '2018-02-01',
    endDate: '2020-04-01',
    highlights: [
      'Designed and produced more than 10 responsible websites and web applications using HTML, CSS, JavaScript, React and Next.js.',
      'Provided technical support and troubleshooting for more than 80% of Web sites and Web applications.',
      'Collaborated with cross-functional and backend teams to gather requirements and implement features that aligned with business objectives, achieving a 95% on-time project completion rate.',
      'Analyzed user feedback to iterate on features, resulting in a 20% increase in user retention and satisfaction.',
    ],
  },
];

export default work;
