# Shopy

This is a simple e-commerce web application built with **Next.js**. It allows users to view a list of products, search, filter, sort them, and view individual product details.

## Features

- **Product Listing**: View a list of products displayed in a grid.
- **Search Functionality**: Search for products based on query keywords.
- **Sorting**: Sort products by title (A-Z, Z-A) or price (Low to High, High to Low).
- **Pagination**: Navigate through product pages.
- **Single Product View**: View detailed information about a specific product.

## Tech Stack

- **Next.js** - Framework for React applications.
- **React** - JavaScript library for building user interfaces.
- **TailwindCSS** - Utility-first CSS framework for styling.
- **TypeScript** - Static typing for JavaScript.
- **Docker** - Used for containerization and deployment.

## Installation

To get started, clone the repository:

```bash
git clone https://github.com/your-username/test-shop.git
cd test-shop
```

### Install Dependencies

Run the following command to install the project dependencies:

```bash
npm install
```

## Development

To run the development server, use the following command:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Build

To create an optimized production build, run:

```bash
npm run build
```

## Docker

This project is Dockerized. To build and run the project in a Docker container, use the following commands:

### Build the Docker image

```bash
docker build -t shopy .
```

### Run the Docker container

```bash
docker run -p 3000:3000 shopy
```

The application will be available at [http://localhost:3000](http://localhost:3000) in the Docker container.

## Linting

This project uses ESLint for linting. To check for linting issues, run:

```bash
npm run lint
```

## Available Pages

- **Home**: Displays a list of products with the option to search and sort them.
- **Product Page**: View detailed information about a single product by clicking on it from the product list.
