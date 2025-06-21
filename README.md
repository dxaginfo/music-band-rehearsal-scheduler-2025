# Rehearsal Scheduler

A comprehensive web application designed to help bands and musicians efficiently schedule and manage rehearsals, track attendance, and optimize rehearsal times based on member availability.

## Features

- **User Authentication and Band Management**
  - Create and manage band profiles
  - Join existing bands via invitations
  - Manage multiple band memberships

- **Availability Management**
  - Set weekly recurring availability
  - Mark specific dates as unavailable
  - Set preferred rehearsal times

- **Rehearsal Scheduling**
  - Schedule based on member availability
  - Automatically suggest optimal rehearsal times
  - Set recurring rehearsal events

- **Notifications and Reminders**
  - Receive notifications for new rehearsals
  - Get reminders before rehearsals
  - Send custom messages with notifications

- **Attendance Tracking**
  - Confirm attendance for rehearsals
  - View attendance history
  - See attendance statistics

- **Rehearsal Details and Resources**
  - Add rehearsal agendas
  - Upload and share files (sheet music, recordings)
  - Link rehearsals to specific songs or setlists

- **Venue Management**
  - Save rehearsal venues
  - Track venue costs
  - Access venue details and directions

- **Calendar Integration**
  - Sync rehearsals with personal calendars
  - View conflicts with other events
  - Export rehearsal schedules

## Technology Stack

### Frontend
- React.js with TypeScript
- Redux Toolkit for state management
- Material-UI for components
- FullCalendar.js for calendar functionality
- Formik with Yup for form validation
- Axios for HTTP requests

### Backend
- Node.js with Express.js
- RESTful API with OpenAPI specification
- JWT authentication with OAuth 2.0

### Database
- PostgreSQL
- Prisma ORM
- Redis for caching

### DevOps & Infrastructure
- Docker
- GitHub Actions for CI/CD
- AWS hosting (Elastic Beanstalk or ECS)
- Sentry and New Relic for monitoring

## System Architecture

The application follows a modern microservices architecture:

1. **Client Layer** - React.js frontend
2. **API Gateway** - Routing, authentication, and request validation
3. **Microservices**
   - User Service
   - Band Service
   - Scheduling Service
   - Notification Service
   - Resource Service
4. **Data Layer**
   - PostgreSQL for relational data
   - Redis for caching
   - S3 for file storage
5. **External Integrations**
   - Calendar providers
   - Email and SMS gateways
   - OAuth providers

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- Docker and Docker Compose
- PostgreSQL 14.x
- Redis 6.x

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/dxaginfo/music-band-rehearsal-scheduler-2025.git
   cd music-band-rehearsal-scheduler-2025
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   ```
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. Start the development environment:
   ```
   docker-compose up -d
   npm run dev
   ```

5. Run database migrations:
   ```
   npm run migrate
   ```

6. Access the application:
   ```
   Frontend: http://localhost:3000
   API: http://localhost:8000
   ```

## Deployment

### Using Docker

1. Build the Docker image:
   ```
   docker build -t rehearsal-scheduler:latest .
   ```

2. Run the container:
   ```
   docker run -p 80:3000 -p 8000:8000 rehearsal-scheduler:latest
   ```

### AWS Deployment

1. Set up AWS credentials:
   ```
   aws configure
   ```

2. Deploy using the provided script:
   ```
   npm run deploy:aws
   ```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -am 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact dxag.info@gmail.com