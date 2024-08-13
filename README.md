# Filmix - Entertainment Web App 🎥

## Table of Contents

1. [Overview](#overview)
2. [Live Demo](#live-demo)
3. [Features](#features)
   - [User Features](#user-features)
   - [Admin Features](#admin-features)
   - [Additional Pages & Features](#additional-pages--features)
4. [Work in Progress](#work-in-progress)
5. [Test Credentials](#test-credentials)
6. [Tech Stack](#tech-stack)
7. [Getting Started](#getting-started)
   - [Installation](#installation)
8. [Deployment](#deployment)
9. [Future Improvements](#future-improvements)
10. [Contribution](#contribution)

## Overview

**Filmix** is a full-stack, multi-page platform designed for users to explore and manage their favorite movies and TV series. The app allows users to navigate through various sections, bookmark shows, and manage their profiles. It also includes an admin dashboard for managing content and users.

Building this app was a key learning experience for me, as it was my first interaction with Next.js. Through this project, I familiarized myself with the Next.js App Router and the full-stack development workflow.

## Live Demo

You can access the live deployed version of Filmix at: [https://filmix-app.vercel.app/](https://filmix-app.vercel.app/)

## Features

### User Features

- **Multi-page Navigation**: Users can seamlessly navigate between Home, Movies, TV Series, and Bookmarked Shows pages.
- **Account Management**: Users can upload an avatar, update their about information, or delete their account from the Account page.
- **Bookmarking**: Add or remove bookmarks from the list of movies and TV series.
- **Search Functionality**: Search for relevant shows across all pages.
- **Authentication**: Users can sign up, log in, and access protected content based on their roles (admin or user).
- **Cloudinary Integration**: User avatars and show thumbnails are stored securely using Cloudinary.

### Admin Features

- **Admin Dashboard**: Admins can access a dedicated dashboard to manage the platform.
- **Shows Management**: Overview and management of the movies and TV series available on the platform.
- **User Management**: Admins can view and manage user accounts.

### Additional Pages & Features

This project is based on a [Frontend Mentor](https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X) challenge, where the design data and requirements were provided. However, I've extended the project by adding several additional pages and functionalities:

- **Admin Dashboard**
- **Shows and Users Management**
- **User Account Page**
- **Help Centre**
- **Dropdown Menu** in the header for user options

## Work in Progress

Some pages and functionalities are still under development:

- **Markup Incomplete**: The markup on the following pages is not fully completed yet:

  - `/dashboard`
  - `/app/movies/[showId]`
  - `/app/shows/[showId]`
  - `/app/help-centre`

  The delay in completing these pages is due to the focus on implementing core functionalities and familiarizing with new technologies.

- **Disabled Features**: Some buttons on the additional pages are currently disabled and display a "coming soon" tooltip. These include:

  - **Filter**: Filtering options on tables
  - **Export Table**: Functionality to export table data
  - **Add Show/User**: Adding new shows or users
  - **Edit/Delete Show**: Editing or deleting existing shows

  These features are planned for future improvements.

## Test Credentials

To test the app, you can use the following credentials:

- **User Role:**

  - Login: `user1@example.com`
  - Password: `12345678`

- **Admin Role:**
  - Login: `admin@example.com`
  - Password: `12345678`

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Authentication**: NextAuth.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Deployment**: Vercel
- **Styling**: Tailwind CSS
- **Components**: Shadcn UI
- **Image Storage**: Cloudinary

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rusbers/filmix-app
   cd your-repo-name
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up the environment variables:
   Create a `.env` file in the root directory and add the following variables:

   ```bash
   # Your database variables

   # Other variables
   AUTH_SECRET="random string - run 'openssl rand -hex 32' in your terminal to generate it"
   NEXTAUTH_SECRET="your_nextauth_secret"
   NEXTAUTH_URL="http://localhost:3000"
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="xxx"
   NEXT_PUBLIC_CLOUDINARY_API_KEY="xxx"
   CLOUDINARY_API_SECRET="xxx"
   AUTH_TRUST_HOST="http://localhost:3000"
   ```

4. Initialize the Prisma client and push the database schema:

   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Seed the initial data:

   ```bash
   npx prisma db seed
   ```

6. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

7. Open your browser and navigate to `http://localhost:3000`.

## Deployment

The app is deployed on Vercel. To deploy your own version:

1. Push your code to a GitHub repository.
2. Link the repository to Vercel.
3. Set the necessary environment variables in Vercel.
4. Deploy the app directly from Vercel.

## Future Improvements

- **Complete Markup**: Finalize the markup for the incomplete pages.
- **Enable Disabled Features**: Implement the filtering, exporting, and CRUD functionalities for shows and users.
- **Enhanced Search**: Implement fuzzy search and filtering options.
- **User Roles**: Expand role-based access control to include more roles or permissions.
- **Notifications**: Add email or in-app notifications for new shows or updates.
- **Mobile Responsiveness**: Optimize the app for better performance on mobile devices.
- **Payment Integration**: Add payment functionalities using Stripe.
- **Better Error Handling**: Improve error handling across the app for a smoother user experience.

## Contribution

If you want to contribute to this project, feel free to open an issue or submit a pull request.
