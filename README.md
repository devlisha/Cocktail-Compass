# Cocktail Compass

Cocktail Compass is a web application designed to be your ultimate guide to the world of cocktails. Built with modern web technologies, it allows users to discover, search, and save their favorite cocktail recipes. The app features a clean, responsive interface and multi-language support.

## Features

- **Dynamic Cocktail Library:** Browse an extensive list of cocktails powered by TheCocktailDB API.
- **Daily Suggestion:** Discover a new "Cocktail of the Day" every time you visit.
- **Real-time Search:** Quickly find cocktails by name.
- **Filter by Spirit:** Narrow down your search by base spirits like Vodka, Gin, Rum, etc.
- **Favorites System:** Save your favorite cocktails for easy access (uses browser's localStorage).
- **Multi-language Support:** The interface is available in English, Spanish, German, and Russian.
- **Responsive Design:** A fully responsive UI that works on all screen sizes, from mobile to desktop.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
- **AI Integration:** [Genkit (Google AI)](https://firebase.google.com/docs/genkit)
- **Data Source:** [TheCocktailDB API](https://www.thecocktaildb.com/api.php)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (version 20 or later is recommended)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd cocktail-compass
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

To start the application in development mode, run the following command:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser to see the result.

## Project Structure

- **/src/app**: Contains the main pages and layout of the application, using the Next.js App Router.
- **/src/components**: Reusable React components, including UI components from ShadCN.
- **/src/lib**: Utility functions and the main logic for interacting with TheCocktailDB API (`cocktails.ts`).
- **/src/contexts**: React Context for managing global state like language and favorites.
- **/src/hooks**: Custom React hooks for shared logic.
- **/src/ai**: Configuration and flows for Genkit AI functionality.
- **/public**: Static assets like images and fonts.

## Deployment

This project is pre-configured for deployment on **Firebase App Hosting**. The configuration can be found in the `apphosting.yaml` file.
