# Title: Assignment 09 - README Generator

Last Updated: Mon Feb 15 2021 08:54:15 GMT-0500 (Eastern Standard Time) 

# Description: 

When creating an open source project on GitHub, it’s important to have a high-quality README for the app.  This server-side app, allows you to  quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.  I have tried to automate the more tedious parts of creating a standardized README file for use on GITHUB.

# Table of Contents

   * [Table of Contents](#table-of-contents)
   * [01 Goal](#01-goal)
   * [02 Approach](#02-approach)
   * [03 Installation Instructions](#03-installation-instructions)
   * [04 Usage Info](#04-usage-info)
   * [05 Contribution Guidelines](#05-contribution-guidelines)
   * [06 Licence](#06-licence)
   * [07 Testing and Quality Control](#07-testing-and-quality-control)
   * [08 Lesson Learned](#08-lesson-learned)
   * [09 Improvements for the Future](#09-improvements-for-the-future)
   * [10 Questions](#10-questions)
      * [Contact Details:](#contact-details)

# 01 Goal 

The goal is to create a professional quality README file for use on GITHUB.  The mission is to create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). I have reviewed the [Good README Guide](../../01-HTML-Git-CSS/04-Important/Good-README-Guide/README.md) as a reminder of everything that a high-quality, professional README should contain, but have blended it with the practices I have applied during the course to create useful README files.  

# 02 Approach 

I started with some of the code that was used in class to invoke the prompt line using inquirer.  I then worked out how best to display and space using line breaks and headings in a markdown file.

# 03 Installation Instructions 

1. Add the index.js file to a utilities folder.
2. Ensure that NPM is installed in that folder.
3. Ensure inquirer is installed as well as gh-md-toc is installed as well, I used the one I found here https://github.com/ekalinin/github-markdown-toc.
4. From the command line, enter “node index.js” to run the README Generator.
5. Once the README.md file is generated, to create a TOC, on the command line type “./gh-md-toc README.md” then paste the resulting code in the TOC area of the README.file and tailor in place.
6. Save the README.md file and continue with the project and its documentation.
7. Redo the TOC following the steps in 5 above to update the final TOC before posting in final to GITHUB.

# 04 Usage Info 

There is no Usage info, but feel free to use it.

# 05 Contribution Guidelines 

I do not expect any contributions, but am open to any feedback.

# 06 Licence 

 MIT - As selected during the user prompts.

I did not yet work out how to format badges.

# 07 Testing and Quality Control 

I have run it several times to ensure that it works as described and remains close to the video created at the time of posting.

# 08 Lesson Learned 

1. How to create USER Prompts on the COmmand Line;
2. How to access the inquirer and FS features.  I cannot teol if I used markdown.js, but did require it at the start.  The thing works so I have not worried about it.

# 09 Improvements for the Future 

1. Add a way to automatically create the TOC after the file has been created. But then it occurred to me that the TOC could change and so, doing it somewhat manually I felt was adequate at this stage.

# 10 Questions 

If there are any question please contact me directly. 

## Contact Details: 

Contact name: Michael O'Connor 

GITHUB: https://github.com/Emjayosee 

Email: michael.j.oconnor@me.com

