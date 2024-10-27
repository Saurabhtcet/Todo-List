To-Do List Application
A simple web-based To-Do List application that allows users to add, view, manage, and complete their tasks.

Features
Add a Task: Create a new task by providing details like title, description, and due date.
View Tasks: Displays a list of tasks with the following details:
Title
Description
Due Date
Created Date
Updated Date (if edited)
Color Coding: Tasks are color-coded based on their timing:
Future Task: Black
Past Task: Red
Today's Task: Orange
Completed Task: Green with a strikethrough
Mark Task as Complete: Mark tasks as completed with a button click.
Delete Task: Remove tasks from the list.
Edit a Task (Optional): Update task details by opening an edit form.
Design and Technical Specifications
UI and Design
The application has a simple, user-friendly design.
The background color is set to a light and neutral color (#F5F5F5).
Responsive design to work well on both desktop and mobile devices.
Technical Requirements
Developed using HTML, CSS, and JavaScript.
Data is persisted using local storage.
Basic error handling implemented to prevent empty tasks from being added.
Tasks are displayed in sorted order based on the due date.
Project Structure
bash
Copy code
/project-directory
|-- index.html        # Main HTML file
|-- style.css         # Styling file for the application
|-- script.js         # JavaScript logic for the application
|-- README.md         # Project documentation (this file)
Files Overview
index.html: Contains the basic structure of the application, including forms for adding and editing tasks, and sections to display tasks.
style.css: Provides styling for the application, including task colors based on status and responsiveness adjustments.
script.js: Contains the core functionality for managing tasks such as adding, deleting, editing, and color-coding based on the due date.
Installation and Setup
Download or Clone the Repository:

bash
Copy code
git clone https://github.com/Saurabhtcet/todo-list-app.git
cd todo-list-app
Open the Project:

Open the index.html file in your web browser to start using the application.

How to Use
Add a Task:

Click the "Add Task" button to open a new form.
Enter the title, description, and due date.
Click "Submit" to add the task.
View Tasks:

All tasks will be listed with their details.
Tasks are color-coded based on their due date.
Mark as Complete:

Click the "Mark Complete" button to mark a task as completed. It will turn green and get a strikethrough.
Delete a Task:

Click the "Delete" button to remove a task from the list.
Edit a Task (Optional):

Click the "Edit" button to open the edit form and update task details.
