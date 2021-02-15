// This is the main HTML file to my GITHUB README Generator, Assignment 9. It is
// organized top down to match the prompter flow.  */

// Last updated by Michael O'Connor, February 15, 2021 -->



const inquirer = require("inquirer");
const fs = require("fs");


const promptUser = () => 
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your Project Title?',
    },
    {
      type: 'input',
      name: 'ContactName',
      message: 'Enter the name of the contact person?',
    },
    {
      type: 'input',
      name: 'GitHub',
      message: 'What is your GITHUB user name?',
    },
    {
      type: 'email',
      name: 'email',
      message: 'What is your email?',
      validate: function (value) {
        let pass = value.match(
            /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
            // /^(\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+[,;]?[ ]?)+$/
        );
        if (pass) {
            return true;
        }
        return 'Please enter a valid email address!';
    },
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your project?',
    },
    {
      type: 'input',
      name: 'goal',
      message: 'Explain the Goal of this project?',
    },
    {
      type: 'input',
      name: 'InstalInstruct',
      message: 'Installation Instructions',
    },
    {
      type: 'input',
      name: 'approach',
      message: 'Please describe the approach to the project?',
    },
    {
      type: 'input',
      name: 'UsageInfo',
      message: 'Enter Usage Information.',
    },
    {
      type: 'input',
      name: 'Contribution',
      message: 'Enter Contribution Guidelines.',
      },
      {
      type: 'input',
      name: 'Testing',
      message: 'Enter Testing and any Quality Control Instructions.',
      },
      {
      type: 'list',
      name: 'LicenceOptions',
      message: 'Select Licence Options.',
      choices: ["MIT", "FASB", "CTF", "Whatever"]
      },
      {
        type: 'input',
        name: 'lessons',
        message: 'Describe the lessons learned in this project?',
      },
      {
        type: 'input',
        name: 'improve',
        message: 'Describe future improvements?',
      },
  ]);


  promptUser()

  .then(data => {
          
  let card=`# Title: ${data.title}\n\n` + 
    `Last Updated: ${new Date()} \n\n` +
    `# Description \n\n`+
    `${data.description}\n\n` +
    `# Table of Contents
        Enter TOC Here\n\n` +
    `# 01 Goal \n\n` +
    `${data.goal}\n\n` + 
    `# 02 Approach \n\n` +
    `${data.approach}\n\n` + 
    `# 03 Installation Instructions \n\n` +
    `${data.InstalInstruct}\n\n` + 
    `# 04 Usage Info \n\n`+
    `${data.UsageInfo}\n\n` +
    `# 05 Contribution Guidelines \n\n` +
    `${data.Contribution}\n\n` +
    `# 06 Licence \n\n ` +
    `${data.LicenceOptions}\n\n` +
    `# 07 Testing and Quality Control \n\n` +
    `${data.Testing}\n\n` +
    `# 08 Lessons Learned \n\n` +
    `${data.InstalInstruct}\n\n` + 
    `# 09 Improvements for the Future \n\n` +
    `${data.improve}\n\n` + 
    `# 10 Questions \n\n` +
    `If there are any questions please contact me directly. \n\n` +
    `## Contact Details: \n\n` +
    `Contact name: ${data.ContactName} \n\n` +
    `GITHUB: https://github.com/${data.GitHub} \n\n` + 
    `Email: ${data.email}\n\n`

  fs.writeFileSync("README.md",card);
  
  console.log('A READ.ME file has been created, go forth and complete it. Remember to save as you go.');

  console.log('To create a TOC, type ./gh-md-toc README.md, then cut and paste the resulting code in the TOC area');
      })
