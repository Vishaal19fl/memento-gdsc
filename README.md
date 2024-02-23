

# Memento

## Overview
Memento is a web application developed as a project for the GDSC Solution Challenge. It is an online marketplace which specifically showcases Indian traditional products like pots, sculptures, handmade jewellery and dresses. The primary focus is on uplifting the livelihoods of rural artisans.

## Features
- **Tailored Recommendations**: Our platform offers personalized recommendations based on user preferences and location, ensuring relevance and convenience.
- **Optimized Routes**: Users can access optimized routes for commuting, considering factors such as traffic conditions and public transportation schedules.
- **Real-time Updates**: Integration of real-time updates ensures that users stay informed about changes or disruptions affecting their daily routines.
- **Image Upload**: Cloudinary integration allows users to securely upload and manage images, enhancing the visual experience of the application.

## Technologies Used
- **Frontend**: React.js for building dynamic and responsive user interfaces.
- **Backend**: Express.js and Vite for server-side logic and API development.
- **Database**: MongoDB for efficient data storage and retrieval.
- **Image Upload**: Cloudinary for secure image storage and management.

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

