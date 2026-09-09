# Week 1 - Task Management System

## 1. Project Overview

The Task Management System is a simple web-based application developed using Python Flask, SQLite, HTML, CSS, and JavaScript.

The application allows users to manage their daily tasks through a web interface. Users can add new tasks, view existing tasks, update their task status, and delete tasks when they are no longer required.

The project demonstrates the basic working of a full-stack web application where the frontend interacts with a Python backend and a SQLite database.

## 2. Objectives

The main objectives of this project are:

- To understand the basics of Flask web development.
- To create a simple interactive web application.
- To understand how a backend communicates with a database.
- To perform CRUD operations.
- To use HTML, CSS, and JavaScript for the frontend.
- To store and retrieve task information using SQLite.

## 3. Technologies Used

- **Python** - Programming language
- **Flask** - Web application framework
- **SQLite** - Database
- **HTML** - Structure of the webpage
- **CSS** - Styling and layout
- **JavaScript** - Client-side interactivity

## 4. Features

The application provides the following features:

- Add a new task.
- Display all existing tasks.
- Update the status of a task.
- Delete a task.
- Store task information permanently in a SQLite database.
- Interactive and user-friendly web interface.
- Communication between frontend, backend, and database.

## 5. CRUD Operations

The project demonstrates the four basic database operations:

| Operation | Description |
|---|---|
| Create | Add a new task |
| Read | Display existing tasks |
| Update | Change task information/status |
| Delete | Remove a task |

## 6. Project Structure

```text
Week 1/
│
├── app.py
├── database.py
├── models.py
├── requirements.txt
│
├── templates/
│   └── index.html
│
├── static/
│   ├── style.css
│   └── script.js
│
└── README.md
```

## 7. File Description

### `app.py`

Contains the main Flask application and handles the web routes and requests.

### `database.py`

Handles the connection and interaction with the SQLite database.

### `models.py`

Defines the task-related data structure and database operations.

### `templates/index.html`

Contains the HTML structure of the task management interface.

### `static/style.css`

Contains the styling and layout of the web application.

### `static/script.js`

Contains JavaScript code used to add client-side interaction.

### `requirements.txt`

Contains the Python packages required to run the application.

## 8. How to Run the Project

### Step 1: Open the project

Open the `Week 1` folder in Visual Studio Code.

### Step 2: Open the terminal

Open the VS Code terminal and make sure you are inside the Week 1 folder.

```bash
cd "Week 1"
```

### Step 3: Install the required packages

Run:

```bash
pip install -r requirements.txt
```

### Step 4: Run the application

Run:

```bash
python app.py
```

### Step 5: Open the application

After running the program, Flask will display a local address in the terminal, usually:

```text
http://127.0.0.1:5000
```

Open this address in a web browser to use the Task Management System.

## 9. Working of the Application

The application follows a simple client-server architecture.

1. The user interacts with the webpage.
2. The frontend sends requests to the Flask backend.
3. Flask processes the request.
4. The backend communicates with the SQLite database when required.
5. The requested task information is retrieved or modified.
6. The updated information is displayed on the webpage.

## 10. Learning Outcomes

After completing this project, the following concepts were understood:

- Flask application structure.
- Basic web development using Python.
- Creating Flask routes.
- Connecting a web application to SQLite.
- Performing CRUD operations.
- Using HTML, CSS, and JavaScript together.
- Handling user requests.
- Working with a relational database.
- Understanding the interaction between frontend and backend.

## 11. Conclusion

The Task Management System demonstrates how a simple web application can be developed using Flask and SQLite. It provides basic task management functionality while demonstrating important concepts such as routing, database operations, CRUD functionality, and frontend-backend communication.
