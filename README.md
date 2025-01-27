# React QR Code, Barcode, and Business Card Generator

This project is a React-based web application that allows users to generate and download QR codes, barcodes, and business cards. The project uses SCSS for styling to ensure a modern and responsive design.

---

## Features
- **QR Code Generator**: Create QR codes for text, URLs, or other data inputs.
- **Barcode Generator**: Generate barcodes based on user-provided data.
- **Business Card Creator**: Design and download custom business cards.
- **Download Options**: Download the generated QR codes, barcodes, or business cards in image format.
- **Responsive Design**: The application is fully responsive and works across devices.

---

## Prerequisites
Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (latest LTS version recommended)
- npm (comes with Node.js)

---

## Installation
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. Navigate to the project directory:
   ```bash
   cd your-repo-name
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

---

## Running the Project
To start the development server, run:
```bash
npm run dev
```
This command will launch the application, and you can access it in your browser at `http://localhost:3000`.

---

## Project Structure
```
project-root
├── public          # Static files
├── src             # Source files
│   ├── components  # React components
│   ├── styles      # SCSS files
│   ├── utils       # Helper functions
│   └── App.jsx     # Main app component
├── package.json    # Project metadata and dependencies
└── README.md       # Project documentation
```

---

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **SCSS**: Preprocessor for writing CSS more effectively.
- **Libraries**:
  - `qrcode.react`: For QR code generation.
  - `jsbarcode`: For barcode generation.
  - `html-to-image`: For exporting business cards.

---

## Usage
1. **Generate QR Code**: Enter the desired text or URL, and click "Generate QR Code."
2. **Generate Barcode**: Provide numeric or alphanumeric data, and click "Generate Barcode."
3. **Create Business Card**: Fill in the required fields (name, contact, etc.) and customize the layout.
4. **Download**: Click the download button to save the generated output.

---




