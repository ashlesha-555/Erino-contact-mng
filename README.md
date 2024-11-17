# Erino-Contact-Management

A simple web-based contact management system that allows users to **add**, **view**, **edit**, and **delete** contact information. Built with **ReactJS**, **Node.js**, **MongoDB**, and **Material-UI**, this project demonstrates a full-stack CRUD application with form validation.

---

## 🚀 Features
- Add new contacts with the following details:
  - First Name (required, alphabet only)
  - Last Name (required, alphabet only)
  - Email (required, must follow proper format)
  - Phone Number (required, 10-digit numeric only)
  - Company (optional)
  - Job Title (optional)
- View all contacts in a tabular format with pagination and sorting.
- Edit contact information.
- Delete contacts.

---

## 🛠️ Tech Stack
### Frontend:
- **ReactJS**: A JavaScript library for building user interfaces.
- **Material-UI**: A React component library for UI styling and design.
- **React Hook Form** with **Yup**: For efficient form validation.

### Backend:
- **Node.js**: JavaScript runtime for the backend.
- **Express.js**: Web framework for Node.js.
- **Mongoose**: MongoDB object modeling tool.

### Database:
- **MongoDB**: NoSQL database for storing contact information.

---

## 🔧 Project Structure

```bash
ContactManagement/
├── client/                 # Frontend code
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   │   ├── ContactForm.js  # Form for adding/editing contacts
│   │   │   ├── ContactsTable.js  # Table for displaying contacts
│   │   ├── theme.js        # Material-UI theme configuration
│   │   ├── App.js          # Main React application
│   │   ├── index.js        # Entry point for React app
├── server/                 # Backend code
│   ├── models/
│   │   ├── Contact.js      # MongoDB schema for Contact
│   ├── routes/
│   │   ├── contacts.js     # API routes for CRUD operations
│   ├── server.js           # Entry point for Node.js backend
├── .env                    # Environment variables (e.g., MongoDB URI)
├── README.md               # Project documentation
```

---

## ✨ Prerequisites
1. **Node.js**: Install Node.js from [Node.js Official Website](https://nodejs.org/).
2. **MongoDB**:
   - Install MongoDB locally or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud-hosted database.
   - Ensure MongoDB is running.

---

## ⚙️ Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-repo/contact-management.git
cd ContactManagement
```

### 2. Setup Backend
1. Navigate to the `server` folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` folder and add the following:
   ```env
   MONGO_URI=mongodb://localhost:27017/contact_management
   PORT=5000
   ```
   Replace `MONGO_URI` with your MongoDB Atlas URI if using a remote database.

4. Start the backend server:
   ```bash
   npm start
   ```

### 3. Setup Frontend
1. Navigate to the `client` folder:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend:
   ```bash
   npm start
   ```

### 4. Access the Application
- Open a browser and go to `http://localhost:3000`.

---

## 📜 API Endpoints

### Base URL: `http://localhost:5000/contacts`

| Method | Endpoint         | Description                 |
|--------|------------------|-----------------------------|
| `POST` | `/contacts`      | Add a new contact           |
| `GET`  | `/contacts`      | Retrieve all contacts       |
| `PUT`  | `/contacts/:id`  | Update a specific contact   |
| `DELETE` | `/contacts/:id` | Delete a specific contact   |

---

## 📑 Form Validation Rules
1. **First Name**: Required; letters only (no numbers or special characters).
2. **Last Name**: Required; letters only.
3. **Email**: Required; must be a valid format (`example@gmail.com`, `example@domain.org`, or `.in`).
4. **Phone Number**: Required; exactly 10 numeric digits.
5. **Company**: Optional.
6. **Job Title**: Optional.

---

## 🌟 Features Breakdown
### Frontend
1. **ContactForm Component**:
   - Collects user input for new and updated contacts.
   - Validates fields using **React Hook Form** and **Yup**.
   - Submits the form to the backend via `axios`.

2. **ContactsTable Component**:
   - Displays contacts in a Material-UI `Table` with sorting and pagination.
   - Includes action buttons for editing and deleting contacts.

### Backend
1. **Express Routes**:
   - Handles CRUD operations for contact data.
   - Uses `Mongoose` for database operations.
   - Includes error handling for invalid data or database issues.

2. **Mongoose Schema**:
   - Defines a `Contact` model with required fields and validation rules.

---

## 🧪 Testing the Application
### Test Cases
1. **Add a New Contact**:
   - Submit valid data; it should be displayed in the table.
   - Submit invalid data; appropriate error messages should appear.

2. **Edit a Contact**:
   - Click the edit button for a contact, modify data, and save changes.

3. **Delete a Contact**:
   - Click the delete button for a contact and confirm deletion.

4. **Form Validation**:
   - Leave required fields empty and verify error messages.
   - Enter invalid email/phone numbers to test validation.

---

## 📂 Sample `.env` File
```env
MONGO_URI=mongodb://localhost:27017/contact_management
PORT=5000
```

---

## 🖼️ Screenshots
### Add Contact Form
![Add Contact Form Example](Add%20contact.png)

### Contact Table
![Contact Table Example](contact%20list.png)

---

## Difficulties Faced and How They Were Handled
Database Connectivity:

**1.** Challenge: Faced MongoDB connection timeouts and errors during database setup.
Solution: Added retry logic and increased timeout settings in Mongoose. Verified MongoDB service status and connection string for accuracy.
Error Handling:

**2.** Challenge: Ensuring meaningful feedback for users when API or form submissions failed.
Solution: Wrapped backend routes in try-catch blocks, returning descriptive error messages. On the frontend, displayed alerts and used helperText for field-specific errors.
Frontend-Backend Integration:

**3.** Challenge: Debugging and handling **axios requests** for proper communication between frontend and backend.
Solution: Logged API requests and responses to identify issues, ensuring consistent endpoint paths and proper request payloads.
## 🤝 Contributing
Feel free to fork the repository and submit pull requests for improvements or bug fixes.

---

Let me know if you need to modify or enhance this README further!
