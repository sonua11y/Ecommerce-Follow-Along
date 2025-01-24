# E-Commerce Application using MERN Stack

## Description
As part of this project, I am building a comprehensive E-Commerce Application from scratch using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This hands-on experience will help me explore real-world development practices, equipping me with the skills to create scalable and secure web applications.

---

## Milestone 1: Project Overview

### Learning Goals 
By the end of this milestone, I:
- Understood the overall structure of a MERN project.
- Learned the foundational steps for setting up a new project.
- Gained clarity on the functionalities of an e-commerce application.
- Prepared for upcoming milestones by setting up the project repository.

### Key Features of the Project
1. **Technology Stack**: MERN (MongoDB, Express.js, React.js, Node.js).
2. **REST API Creation**: I learned how to build scalable APIs to handle various tasks like user authentication, product management, and order handling.
3. **Authentication**: I explored how to implement secure login and registration functionalities.
4. **Database Schema Design**: I started understanding how to design structured data models using MongoDB.
5. **Backend Development**: I worked on setting up robust server-side logic with Node.js and Express.
6. **Frontend Development**: Using my knowledge of React.js, I will build a user-friendly interface.

### Core Concepts Covered
#### Overview of the MERN Stack
The MERN stack is a JavaScript-based technology stack, making it an ideal choice for building full-stack web applications. Its unified language across the stack simplifies development, making it accessible even for beginners like me.

#### REST API Structure and Endpoints
A REST API enables communication between the client and the server. In this project, I will create endpoints for:
- **User Authentication**: Registering and logging in users.
- **Product Management**: Adding, updating, and retrieving product data.
- **Order Handling**: Managing customer orders.

#### Basics of Database Schema Design
I learned about defining the structure and relationships of the data stored in MongoDB.

#### Role of Authentication in Web Applications
Authentication verifies user identity before granting access to specific resources. In this project, I will ensure users authenticate to make purchases or access sensitive information.

---

## Milestone 2: Setting Up the Project
### Learning Goals
By the end of this milestone, I:
- Set up a new MERN project from scratch.
- Configured the project structure.
- Installed necessary dependencies.
- Set up MongoDB for data storage.
- Implemented user authentication.
- Created REST API endpoints for user registration and login.
- Ensured secure password hashing and salting.
- Implemented user session management.
- Set up a basic React.js frontend.
- Integrated the frontend with the backend API.
- Ensured proper error handling and logging.

---

## Milestone 3: Project Setup for Backend
### Achievements
- Set up the foundational backend architecture using Express.js and Node.js.
- Configured environmental variables for secure configuration management.
- Connected the backend to a MongoDB database using Mongoose for data modeling.
- Implemented essential middleware for logging, request parsing, and error handling.
- Validated backend setup through initial test API routes.

---

## Milestone 4: Creating User Model and Controller
### Achievements
- Designed and implemented the **User** model using Mongoose, defining fields such as `name`, `email`, `password`, and `avatar`.
- Created controllers for handling user-related actions like registration and login.
- Incorporated validation logic for secure user input handling.
- Implemented password encryption using bcrypt for secure storage of user credentials.
- Added a basic controller structure for extensibility in future milestones.

---

## Milestone 5: Creating the Signup Page
### Achievements
- Built a responsive and user-friendly signup page using React and Tailwind CSS.
- Integrated file input functionality for users to upload profile pictures (avatar).
- Implemented a password toggle feature for enhanced usability.
- Established seamless communication between the frontend and backend for user registration using Axios.
- Handled form data securely using FormData and ensured compatibility with backend endpoints.
- Displayed success and error messages based on API responses to improve user feedback.

---

Here’s a clear and engaging description for your README file:

---

Here’s a README description for Milestone 7:

---

# Milestone 7: Backend User Login Endpoint with Password Validation 🔐

## Overview 📌
This milestone focuses on building a **secure login endpoint** for user authentication. The process includes **validating user credentials** and securely comparing the provided password with the **encrypted password** stored in the database. 

The implementation follows industry standards for **privacy** and **data protection**, ensuring a reliable and robust login system.

---

## Features 🚀
### 1. **User Login Endpoint**
   - Accepts **email/username** and **password** as inputs.
   - Validates user existence and authenticates credentials.

### 2. **Password Encryption & Comparison**
   - Utilized **bcrypt** for password hashing and comparison.
   - Ensured user passwords are protected even if the database is compromised.

### 3. **Secure Authentication Process**
   - Step-by-step approach:
     1. Fetch user data based on the provided email/username.
     2. If the user does not exist, return an error: *"User does not exist."*
     3. Hash the entered password using bcrypt and compare it with the stored hash.
     4. If the hashes match, the user is successfully authenticated; otherwise, return an error.

---

## Why Password Encryption Matters 🔒
### 1. **Protects User Data**:
   - Prevents the exposure of plain-text passwords in case of a data breach.
### 2. **Complies with Security Standards**:
   - Adheres to regulations like GDPR and PCI-DSS.
### 3. **Enhances Security**:
   - Hashed passwords are **one-way encrypted**, making it challenging to reverse-engineer them.

---

## Tech Stack 🛠️
- **Node.js/Express**: For creating the backend API.
- **bcrypt**: For password hashing and secure comparison.
- **Database (e.g., MongoDB)**: For user record storage.

---

## Getting Started 🏁
1. Clone the repository:
   ```bash
   git clone <repository-link>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```
4. Test the endpoint using tools like **Postman**:
   - Endpoint: `POST /login`
   - Payload:
     ```json
     {
       "email": "user@example.com",
       "password": "password123"
     }
     ```

---




# Milestone 8: Product Card Component & Homepage Layout 🎨✨

## Overview 📌
In this milestone, we developed a **frontend card component** for products and designed a structured **homepage layout** to display these cards. This project demonstrates the principles of reusability, organized design, and dynamic rendering to enhance user experience in web applications.

---

## Features 🚀
### 1. **Reusable Card Component**
   - Showcases product details such as **name**, **image**, and **price**.
   - Flexible design with props for dynamic content.
   - Streamlined layout to maintain visual consistency.

### 2. **Dynamic Data Rendering**
   - Utilized **array mapping** to iterate over product lists and render multiple cards.
   - Passed unique product data (name, price, image) dynamically to each card.

### 3. **Responsive Homepage Design**
   - Created a neat **grid layout** or **flexbox** to display cards effectively.
   - Ensured a visually appealing and user-friendly product showcase.

---

## How It Works 🔧
1. **Card Component Creation**:
   - Developed a modular card component that accepts props for `name`, `price`, and `image`.
2. **Homepage Layout**:
   - Set up a grid structure for multiple product cards using modern CSS techniques.
3. **Dynamic Rendering**:
   - Products data is passed dynamically to the card component via **array mapping**, allowing scalability for more products.

---

## Tech Stack 🛠️
- **HTML**
- **CSS** (for layout and design)
- **JavaScript** (for rendering cards dynamically)

---


## Submission Progress 🚩
- **Code Repository:** [GitHub Link](#)  
- **README:** Updated with milestone details and implementation steps.  
- **Project Completed:** Reusable card components and a functional homepage layout are ready.

---


