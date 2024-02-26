

# Memento

## Overview
Memento is a web application developed as a project for the GDSC Solution Challenge. It is an online marketplace which specifically showcases Indian traditional products like pots, sculptures, handmade jewellery and dresses. The primary focus is on uplifting the livelihoods of rural artisans.

## Features

- **Browse Categories:** Users can explore various categories of traditional products such as pottery, sculptures, jewelry, clothing, and paintings.
- **Product Customization:** Users have the option to customize certain products according to their preferences, such as adding personalized engravings or selecting specific colors and designs.
- **Subscription Service:** Offering a subscription service where users receive a curated list of products from featured artisans every month, providing them with a convenient way to discover new items.
- **Artisan Profiles:** Profiles for individual artisans showcasing their work, background, and skills, allowing users to learn more about the creators behind the products.
- **Localization:** Support for multiple languages and currencies to cater to users from diverse cultural backgrounds and regions.


## Technologies Used
- **Frontend**: React.js for building dynamic and responsive user interfaces.
- **Backend**: Express.js and Vite for server-side logic and API development.
- **Database**: MongoDB for efficient data storage and retrieval.
- **Image Upload**: Cloudinary for secure image storage and management.

---

**Repository Structure:**
| Directory     | Description                           |
| ------------- | ------------------------------------- |
| /api      | Houses the backend codebase developed with MongoDB and the server side code with express.js. |
| /client     | Contains the frontend codebase built with React.js. |


---

## Getting Started
1. Clone the repository:

   ```bash
   git clone https://github.com/Vishaal19fl/memento-gdsc.git
   ```

2. Install dependencies:

   ```bash
   cd memento-gdsc
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following:

   ```plaintext
   PORT=3000
   MONGO=your-mongodb-uri
   CLOUDINARY_API_KEY=your-cloudinary-api-key
   CLOUDINARY_API_SECRET=your-cloudinary-api-secret
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

---

**Team:**
| Name           | GitHub Username |
| -------------- | --------------- |
| Meena          | @Meena-Ramalingam          |
| Shakithiyan    | @Shock-22   |
| Vishaal        | @Vishaal-Sathya       |
| Mentor         | Rakesh Kumar    | @RakeshMahi |

---

   Certainly! Here's an expanded version of the documentation with additional sections including tables and more detailed information:

---

**Project Name: RuralCrafts**

**Description:**
RuralCrafts is an innovative platform designed to empower rural artisans and preserve traditional craftsmanship. Leveraging modern technologies, such as React.js for the frontend, MongoDB for the backend, and Vite for rapid development, RuralCrafts connects buyers with authentic handmade products while supporting artisans' livelihoods. This documentation provides an overview of the project structure, installation instructions, usage guidelines, contribution guidelines, team members, and licensing information.

---

**Repository Structure:**
| Directory     | Description                           |
| ------------- | ------------------------------------- |
| /frontend     | Contains the frontend codebase built with React.js. |
| /backend      | Houses the backend codebase developed with MongoDB. |
| /docs         | Stores project documentation, including this README file. |

---

**Installation:**
1. Clone the repository: 
   ```
   git clone https://github.com/your-username/RuralCrafts.git
   ```
2. Navigate to the project directory: 
   ```
   cd RuralCrafts
   ```
3. Install dependencies for the frontend: 
   ```
   cd frontend && npm install
   ```
4. Install dependencies for the backend: 
   ```
   cd ../backend && npm install
   ```

---

**Usage:**
1. Start the frontend development server: 
   ```
   cd ../frontend && npm start
   ```
2. Start the backend server: 
   ```
   cd ../backend && npm start
   ```
3. Access the application at `http://localhost:3000` in your web browser.

---

**Contribution Guidelines:**
1. Fork the repository.
2. Create a new branch for your feature or bug fix: 
   ```
   git checkout -b feature-name
   ```
3. Make your changes and commit them: 
   ```
   git commit -m "Your commit message"
   ```
4. Push your changes to your fork: 
   ```
   git push origin feature-name
   ```
5. Submit a pull request to the main repository's `main` branch.



**License:**
This project is licensed under the MIT License. See the LICENSE file for more details.

---

**Contact:**
For inquiries or assistance, please reach out to [email@example.com](mailto:email@example.com).

---

**Note:** Ensure to replace placeholders (e.g., "your-username", "feature-name", "email@example.com") with actual values.

--- 

This expanded documentation provides a comprehensive overview of the project, including its structure, installation, usage, contribution guidelines, team members, licensing information, and contact details.

