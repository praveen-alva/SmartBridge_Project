# Online Complaint Registration and Management System

## Project Description

The Online Complaint Registration and Management System is a comprehensive platform that allows users to register, track, and resolve complaints efficiently. Designed to streamline the complaint-handling process, this system improves user satisfaction by providing a centralized, secure, and transparent platform for complaint management.

## Features

1. **User Registration and Login**:

   * Users can create accounts and log in securely.
   * Email verification ensures account authenticity.

2. **Complaint Submission**:

   * Submit detailed complaints with attachments such as images and documents.
   * Include necessary information like contact details and issue descriptions.

3. **Tracking and Notifications**:

   * Real-time tracking of complaint status.
   * Automated email and SMS notifications for updates.

4. **Agent Interaction**:

   * Users can communicate directly with the assigned agents.
   * Built-in messaging system for smooth communication.

5. **Admin Management**:

   * Admins monitor, assign, and manage complaints efficiently.
   * Oversee platform operations and ensure compliance.

6. **Security**:

   * User authentication and data encryption ensure privacy.
   * Access controls safeguard user information.

---

## Technical Architecture

The project follows a client-server architecture:

* **Frontend**: Built with React.js, utilizing Material-UI and Bootstrap for an interactive and responsive UI.
* **Backend**: Powered by Node.js and Express.js, offering RESTful APIs for seamless communication.
* **Database**: MongoDB ensures scalable and efficient data storage.
* **Real-Time Communication**: Enabled via Socket.io and WebRTC APIs.

---

## Folder Structure

### Backend

* **Controllers**: Contains logic for user authentication, database connection, and complaint management.

  * `Auth.webtoken.js`
  * `Connect.db.js`
  * `Login.js`
  * `Verify.email.otp.js`
  * `UserManagement.js`
* **Models**: Defines the data schema.

  * `complaints.js`
  * `user.js`
* **Routes**: Handles API endpoints.

  * `ComplaintRouter.js`
  * `initializeSocketHandlers.js`
  * `login.js`
* **Utils**: Contains utility functions.

  * `email.js`
  * `optUtils.js`
* **Root Files**:

  * `.env`
  * `index.js`
  * `package.json`

### Frontend

* **Components**:

  * **Dashboard**:

    * `Admin`, `Agent`, `User` layouts and their respective components.
  * **Layouts**: Common layouts for the application.
  * **Login**: User authentication interface.
  * **Navbar**: Navigation bar for easy access.
* **API**:

  * `AxiosInstance.jsx`
* **Context**: Manages application state.

  * `AuthContext.jsx`
  * `SocketContext.jsx`
* **Assets**: Stores static files such as images and icons.
* **Root Files**:

  * `App.jsx`
  * `index.css`
  * `main.jsx`

---

## Scenario

**John's Journey**:

1. **Registering**: Creates an account and verifies it via email.
2. **Submitting a Complaint**: Provides issue details and attaches evidence.
3. **Tracking Progress**: Monitors the complaint's status and receives updates.
4. **Agent Interaction**: Communicates with assigned agents for resolution.
5. **Resolution**: Receives a resolution and provides feedback on the process.

---

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory and install dependencies:

   ```bash
   cd ProjectCode
   npm install
   ```
3. Start the backend server:

   ```bash
   cd backend
   node index.js
   ```

   Backend runs on `http://localhost:3000`.
4. Start the frontend:

   ```bash
   cd frontend
   npm start
   ```

   Frontend runs on `http://localhost:5173`.

---

## Contributors

* **Team Size**: 4 members
* Roles are assigned across frontend, backend, and quality assurance.

---

## License

This project is licensed under the MIT License team VSSMS.
