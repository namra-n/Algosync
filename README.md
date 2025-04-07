# AlgoSync – Smart Code Snippet Manager

AlgoSync is a full-stack code snippet manager designed for developers. It offers secure storage using AES encryption, fast search via a Trie data structure, and efficient organization with heap-based sorting. The system is built with a modern React frontend and a Node.js + MongoDB backend.

---

## Features

- AES encryption for secure snippet storage
- Trie-based search for fast keyword lookup
- Heap-based sorting for snippet prioritization
- RESTful API with full CRUD functionality
- React frontend for an intuitive user experience
- Tag-based classification and filtering

---

## Tech Stack

### Frontend
- React
- Axios
- React Router DOM
- Tailwind CSS 

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- AES encryption using crypto module
- Trie and Heap (custom implementations)

---

## Project Structure
algosync/ ├── backend/ │ ├── controllers/ │ ├── models/ │ ├── routes/ │ ├── utils/ │ ├── .env │ └── server.js ├── frontend/ │ ├── src/ │ │ ├── components/ │ │ ├── pages/ │ │ └── App.js │ └── public/ └── README.md


## Setup Instructions

### Prerequisites

- Node.js and npm
- MongoDB (local or Atlas)
- Git

### Clone the Repository

bash
git clone https://github.com/YOUR_USERNAME/algosync.git
cd algosync

### Backend Setup
cd backend
npm install

### Start the backend server:
node server.js

### Frontend Setup
cd ../frontend
npm install
npm start

### Security and Data Handling
Snippet content is encrypted using AES-256-CBC before storage in MongoDB. Decryption occurs during retrieval to ensure secure storage without affecting usability.

### Trie and Heap Utilities
utils/trie.js handles keyword-based search and autocomplete.
utils/heap.js enables frequency or priority-based sorting.

### License
This project is licensed under the MIT License.
