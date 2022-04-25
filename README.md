# Professional README Generator Starter Code

## **Goal:**
### *To be able to create a README generator through Inquirer so that I can quickly create a professional README for a new project*

___

<br>

## Application Details
- A command-line application that accepts user input
- Prompts for information about an application repository and then creates sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions with the user inputed content.
- Gives a list of options to choose a license for my application from and then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.
- Prompts for the user's GitHub username and then creates a link to the GitHub profile which is added to the 'Questions' section, which also includes a link to the user's email address.
- Creates a table of contents based on user input that links to the different sections within the README file.

___

<br>

## Challenges Faced
- The first major issue I encountered was making sure I was able to extract the correct data from the user input from the inquirer prompt. Especially getting the input data from the checkbox prompt for the license.
- I decided to put the renderLicenses function into its own file because the markdown was so large. It took awhile to make sure the file was exporting correctly so it was used correctly when writing the file.

<br>

## *Links to GitHub repository, a walkthrough video, an example README created from the application, and a gif of the application:*

![README Generator](https://user-images.githubusercontent.com/98797799/165003290-cfd9cfc0-327b-4fc0-9b38-de1471fceaa8.gif)

- **[Link to the GitHub Repository](https://github.com/Doctor-Worm/Potential-Enigma)**

- **[README Generator Walkthrough Video](https://drive.google.com/file/d/1cnOS6w-W19MDO3XWrkQImixUhPl2M_kQ/view)**

- [Example README File](https://github.com/Doctor-Worm/potential-enigma/files/8550952/README.md)
