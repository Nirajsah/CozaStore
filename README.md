## Getting Started

![HomePage](app/assets/HomePage.png)
This is an E-commerce site built with Next.js 13.4+ and Tailwind CSS. The project is still in development, and this README will be updated as the site progresses.

will be updating the data source with postgresql very soon.

I need more products with different categories, with product rating and reviews before i can intergrate a database, maybe i'll have to do some web scraping.

## Project Status (As of July 21, 2023):

most of the work is done, For animation, I am using framer motion(learning).

- category page: responsive
- product page: responsive
- navbar: responsive
- home page: not responsive
- cart page does not look good

## Project Status (As of September 10, 2023)

- Category page: responsive
- Product page: responsive
- Navbar: responsive
- Home page: not responsive
- Cart page: looks good

## Project Status (As of November 28, 2023)

- Category page: responsive
- Product page: responsive
- Navbar: responsive
- Home page: responsive
- Cart page: looks good

**Everything is responsive now, maybe requires some fixes**

## Features

- **Responsive Design:** The project includes responsive design for various pages, ensuring a consistent and user-friendly experience on different devices and screen sizes.

- **Framer Motion Animations:** To enhance the user interface, the project utilizes Framer Motion for animations. This adds visually appealing transitions and interactions to the website.

- **PostgreSQL Integration (Planned):** In the future, the project will integrate PostgreSQL for data source management. This will enable efficient storage and retrieval of data, enhancing the website's functionality and scalability.

## Technologies Used

This project leverages the following technologies and tools:

- **Next.js:** The project is built using Next.js, a popular React framework that offers server-side rendering and other features for building modern web applications.

- **Tailwind CSS:** Tailwind CSS is used for styling the project. It provides a utility-first approach for quickly creating responsive and customizable designs.

- **Framer Motion:** Framer Motion is used for animations in the project, adding fluid and interactive transitions to enhance the user experience.

- **PostgreSQL (Planned):** In the future, the project will integrate PostgreSQL for data source management, enabling efficient storage and retrieval of data.

## Installation

To get started with the project, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone git@github.com:Nirajsah/CozaStore.git
   ```

# Navigate to Project Directory

```bash
cd CozaStore
```

# Install Dependencies

```bash
npm install
# or
yarn install
```

# Run Development Server

```bash
npm run dev
# or
yarn dev
# or
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

Here's an instruction manual for running your e-commerce website project built with Next.js, Bun.js, and PostgreSQL running inside a Docker container:

# Instruction Manual: Running the E-commerce Website

## Prerequisites

Before you begin, ensure that you have the following software installed on your system:

- [Node.js](https://nodejs.org/en/) (version 14 or later)
- [Bun](https://bun.sh/) (version 0.5.0 or later)
- [Docker](https://www.docker.com/)

## Step 1: Clone the Repository

Open your terminal and navigate to the desired directory where you want to clone the project. Run the following command to clone the repository:

```
git clone https://github.com/Nirajsah/CozaStore.git
```

or

You can directly use the zip to run the code. Follow Step 2 after you unzip the file.

## Step 2: Install Dependencies

Navigate to the project directory:

```
cd your-file
```

Install the required dependencies for the Next.js application using Bun:

```
bun install
```

## Step 3: Set up the PostgreSQL Database

In this step, we'll set up the PostgreSQL database using Docker.

1. Make sure Docker is running on your system.

2. Navigate to the project directory (if not already there).

3. Create a new Docker container for PostgreSQL:

```
docker run --name your-postgres-container -e POSTGRES_PASSWORD=your-password -d -p 5432:5432 postgres
```

You can update postgresql credentials,
DEFAULT PostgreSQL CREDENTIALS

HOST: localhost, if running docker compose use service name as host. eg. db
USERNAME: postgres
PASSWORD: postgres

Replace `your-postgres-container` with a descriptive name for your PostgreSQL container, and `your-password` with a secure password of your choice.

## Step 4: Configure Environment Variables

Create a new file named `.env` in the project root directory and add the following environment variables:

```
DATABASE_URL=postgresql://postgres:your-password@localhost:5432/your-database
```

Replace `your-password` with the password you set for the PostgreSQL container, and `your-database` with the desired name for your database.

## Step 5: Run Database Migrations

Make Sure you are connected to the database.

```
bun generate

bun migrate
```

## Step 6: Run the Application

Start the Next.js development server with Bun:

```
bun dev
```

This command will start the development server and automatically open your application in the default web browser at `http://localhost:3000`.

## Step 7: Build for Production (Optional)

If you want to build the application for production, run the following command:

```
bun run build
```

After the build is complete, you can start the production server with:

```
bun start
```

Your e-commerce website should now be up and running!

## Additional Notes

- If you need to stop the PostgreSQL container, run `docker stop your-postgres-container`.
- To start the PostgreSQL container again, run `docker start your-postgres-container`.
- Refer to the project's documentation or README file for any additional configuration or customization options.

If you encounter any issues or have further questions, please consult the project's documentation or reach out to the project maintainers for assistance.
