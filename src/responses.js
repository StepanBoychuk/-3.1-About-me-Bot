const keyboard = [['/about', '/links'], ['/help']];

const responses = {
    'start': {
        'text': 'Welcome! Here is the list of available commands:',
        'options': {
            'keyboard': keyboard
        }
    },
    'about': {
        'text': `Hi! My name is Stepan. I'm trying to become a node.js developer and this is my first telegram bot`,
        'options': {
            'keyboard': []
        }
    },
    'links': {
        'text': `Here are some of my links:
        \nGithub: https://github.com/StepanBoichuk
        \n Linkedin: https://www.linkedin.com/in/stepan-boichuk-95aa4a248/ 
         `,
         'options': {
            'keyboard': []
         }
    },
    'help': {
        'text': 'Here is the list of available commands:',
        'options': {
            'keyboard': keyboard
        }
    }
};

module.exports = responses