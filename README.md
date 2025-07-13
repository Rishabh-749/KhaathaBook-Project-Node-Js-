# 📒 KhaataBook Mini Project

> A digital credit-debit ledger system built with Node.js, Express, and EJS — inspired by traditional Indian bookkeeping practices (`हिसाब किताब`). Designed for small businesses, shopkeepers, and individuals to maintain simple financial records.

---

## 🚀 Project Overview

This mini-project is a simplified digital version of a **personal ledger book**. Users can create, read, update, and delete (CRUD) financial records. Each entry is stored as a separate text file on the server, and the frontend is rendered using EJS templates. The project is designed to be minimal yet functional for small-scale use cases like personal finance tracking or micro business accounts.

---

## 🛠 Features

- ✅ Create new **hisaab (record)**
- ✅ View all existing entries
- ✅ Edit entries with updated information
- ✅ Delete records permanently
- ✅ File-based backend (stored in `./Hisaabs`)
- ✅ Clean UI with EJS templates
  
---

## 📁 Folder Structure

> KhaataBook_Project_NodeJS/
│                              
├── app.js # Main Express server
├── package.json # NPM dependencies
├── /views # EJS template files
│ ├── index.ejs
│ ├── create.ejs
│ ├── edit.ejs
│ └── hissab.ejs
│                                            
├── /public # Static assets (CSS, images, JS)
│                                           
├── /Hisaabs # Stores each record as .txt file
│ └── sample.txt
│                                              
└── /node_modules # Node packages


## 📦 Installation

> Prerequisite: Node.js installed on your system

```bash
# Step 1: Clone the repository
git clone https://github.com/Rishabh-749/KhaathaBook-Project-Node-Js-.git

# Step 2: Move into the project directory
cd KhaathaBook-Project-Node-Js-

# Step 3: Install required dependencies
npm install

# Step 4: Run the development server
node app.js

# Optional: If using nodemon
npx nodemon app.js


🧑‍💻 Usage
Navigate to http://localhost:749 in your browser.

Click "Create" to make a new entry.

Each entry is saved as ./Hisaabs/<title>.txt.

You can view, update, or delete any record directly from the UI.
