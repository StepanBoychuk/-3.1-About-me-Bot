const keyboard = [['/about', '/links'], ['/help']];

const startResponse = 'Welcome! Here is the list of available commands:';

const aboutResponse = `Hi! My name is Stepan. I'm trying to become a node.js developer and this is my first telegram bot`;

const linksResponse = `Here are some of my links:
\nGithub: https://github.com/StepanBoichuk
\n Linkedin: https://www.linkedin.com/in/stepan-boichuk-95aa4a248/ 
 `;

const helpResponse =  'Here is the list of available commands:';

module.exports = {
    keyboard,
    startResponse,
    aboutResponse,
    linksResponse,
    helpResponse
}