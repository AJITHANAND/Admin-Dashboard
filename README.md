# React Admin Dashboard

This is a static admin dashboard built with Vite and React. It includes Google Charts for data visualization and Redux for state management. The project is containerized using Docker.

## Features

- **Vite & React:** The project is built using Vite and React, offering fast and efficient development and build processes.
- **Google Charts:** The dashboard includes various data visualizations created with Google Charts.
- **Redux:** State management in the application is handled by Redux, providing a predictable state container.
- **Docker:** The project includes a Dockerfile for building a Docker image of the application.

## Live Demo

You can view a live demo of the admin dashboard at [https://ajithanand.github.io/Admin-Dashboard/]

## Docker Image

A public Docker image of the application is available. You can pull the image using the following command:

```bash
docker pull ajithanand1/react-admin-dashboard
```

## Local Development

To run the application locally, you can follow these steps:

- Clone the repository
- Install the dependencies with `npm install`
- Start the development server with `npm run dev`

## Building the Docker Image

To build a Docker image of the application, you can use the included Dockerfile. Run the following command in the root directory of the project:

```bash
docker build -t react-admin-dashboard .
```

This will create a Docker image named `react-admin-dashboard`.

## License

This project is open source and available under the MIT License.
