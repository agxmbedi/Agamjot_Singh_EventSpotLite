<<<<<<< HEAD
# EventSpot Lite

EventSpot Lite is a single-page web application where users can discover local events nearby. The app features a visually appealing interface with smooth animations, responsiveness across devices, and user-friendly interactions.

## Features

- **Event Discovery**: Browse and search for events in various categories.
- **Responsive Design**: Optimized for use on both desktop and mobile devices.
- **Smooth Animations**: Enhanced user experience with fluid animations.
- **Dynamic Event Modals**: View detailed information for each event in a popup modal.

## Project Structure

- **`public/`**: Static assets, including images.
- **`src/`**: Source files, including components and styling.
- **`components/`**: Reusable components for events, modals, and other UI elements.
- **`pages/`**: Main pages for the application layout.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js (version 14 or later) installed.
- **Vercel CLI (optional)**: For deploying directly from the command line.

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/agxmbedi/eventspot-lite.git
   cd eventspot-lite
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file at the root of the project if there are any API keys or secrets required.
   - Example:
     ```plaintext
     REACT_APP_API_KEY=your_api_key_here
     ```

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   - Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

## Deployment

1. **Build the Project**:
   ```bash
   npm run build
   ```

2. **Deploy on Vercel**:
   - You can deploy the project directly by pushing it to GitHub and linking the repo to Vercel.
   - Alternatively, deploy from the command line using:
     ```bash
     vercel
     ```

## Troubleshooting

- **Images Not Showing**: Ensure all images are in the `public` directory and use absolute paths (`/images/image.png`) when referencing them.
- **Clearing Cache**: If you encounter caching issues, try redeploying the project on Vercel with a cleared cache.

