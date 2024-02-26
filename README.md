

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

  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React Logo" width="100px">  <img src="https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png" alt="Mongo Logo" width="100px">  <img src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" alt="Mongo Logo" width="100px">
 
---

**Repository Structure:**
| Directory   | Description              |
| ------------- | ------------------------------------- |
| /api   | Houses the backend codebase developed with MongoDB and the server side code with express.js. |
| /client   | Contains the frontend codebase built with React.js. |


---

## Getting Started


1. **Clone the repository:**
   ```bash
   git clone https://github.com/Vishaal19fl/memento-gdsc.git
   ```

2. **Install dependencies:**
   ```bash
   cd memento-gdsc
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```
   PORT=3000
   MONGO=your-mongodb-uri
   CLOUDINARY_API_KEY=your-cloudinary-api-key
   CLOUDINARY_API_SECRET=your-cloudinary-api-secret
   ```

4. **Start the backend server:**
   ```bash
   cd api
   yarn start
   ```
   
5. **Start the frontend server:**
   ```bash
   cd client
   yarn dev --host
   ```   

6. **Open your browser:**
   Navigate to http://localhost:3000 to view the application.

Make sure to replace `your-mongodb-uri`, `your-cloudinary-api-key`, and `your-cloudinary-api-secret` with your actual MongoDB URI and Cloudinary API credentials. This will ensure proper functioning of the application.

---

**Team:**
| Name      | GitHub Username |
| -------------- | --------------- |
| Vishaal Krishna    | @Vishaal19fl    |
| Meena     | @Meena-Ramalingam     |
| Shakithiyan  | @Shock-22  |
| Vishaal S    | @Vishaal-Sathya    |
| Mentor     | Rakesh Kumar (@RakeshMahi)  |  

---
