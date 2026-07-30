# Sezzle Full-Stack Calculator

A full-stack calculator application built with React and TypeScript for the frontend and Go (Gin) for the backend. The frontend communicates with the backend through a REST API to perform basic arithmetic operations, while the backend handles the calculations, validates user input, and returns JSON responses. The project is organized into separate components, services, handlers, and models to keep the code easy to read and maintain. It also includes backend unit tests and basic error handling for cases such as invalid input and division by zero.


## Setup Instructions

### Backend

Navigate to the `backend` directory, install the required Go dependencies, and start the API server:

```bash
go run .
```

The backend will run on `http://localhost:8080`.

### Frontend

Navigate to the `frontend` directory, install the required Node dependencies, and start the development server:

```bash
npm install
npm run dev
```

The frontend will run on `http://localhost:5173`.

## API Example

**POST** `/calculate`

Request:

```json
{
  "operation": "add",
  "a": 5,
  "b": 3
}
```

Response:

```json
{
  "result": 8
}
```

## Design Decisions

* React with TypeScript was used to provide a type-safe and component-based frontend.
* Go with the Gin framework was chosen to implement a lightweight RESTful microservice.
* The backend follows a layered architecture separating handlers, services, models, and tests to improve maintainability and code organization.
* Axios is used for HTTP communication between the frontend and backend, while both frontend and backend perform input validation to ensure reliable operation.


## Coverage

Backend tests can be run using:

go test ./... -cover

To generate a detailed HTML coverage report:

go test ./... -coverprofile=coverage.out
go tool cover -html=coverage.out