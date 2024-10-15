Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) installed for containerization.

### Running Locally

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd InterIIT-Task
   ```
   
2. **Backend Setup**:
    Navigate to the backend directory:
   ```bash
   cd backend
   ```
   Install dependencies:

   ```bash
   npm install
   ```

   Create a .env file in the backend directory with the following content:

   ```env
   MONGO_URI=<your-mongodb-uri>
   PORT=5000
   ```

   Start the backend server:

   ```bash
    node server.js
   ```

3. **Frontend Setup**:

    Navigate to the frontend directory:

    ```bash
      cd ../frontend
    ```

   Install dependencies:

   ```bash
   npm install
   ```
   
   Start the frontend development server:

   ```bash
   npm start
   ```
4. **Access the Application**:
    Open your browser and go to http://localhost:3000.
   
### Running with Docker

1. **Build and Run Containers**:
   From the root directory of the project, run:
   Build and Run Containers:

   From the root directory of the project, run:

    ```bash
    docker-compose up --build
    ```

2. **Access the Application**:

    Open your browser and go to http://localhost:3000.
   
## Conclusion

This project demonstrates a full-stack application with user authentication, data management, and a responsive UI. The use of Docker ensures that the application can be easily deployed and scaled. The deployment on Azure provides a robust platform for hosting the application.

