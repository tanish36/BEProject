# Codeit

Codeit is a comprehensive platform for competitive programmers, built with Django and React. It provides features like user authentication, problem sets, contests, discussion forums, and a personalized recommendation system that integrates with Codeforces.

## Features

- **User Authentication:** Secure registration and login system.
- **Problem Set:** Browse, solve, and give feedback on various programming problems.
- **Contests:** Participate in and manage programming contests with real-time scoring.
- **Discussion Forum:** Engage with the community through discussion topics and responses.
- **Personalized Recommendations:** Get problem recommendations based on your Codeforces performance. Includes links to relevant YouTube tutorials and HackerEarth algorithms.
- **User Profile & Progress:** Track your progress with submission statistics and history graphs.
- **Topic-wise Content:** Access curated content organized by specific programming topics.

## Tech Stack

### Backend
- **Django:** Core web framework.
- **Django Rest Framework (DRF):** For building the RESTful API.
- **PostgreSQL:** Primary database.
- **Selenium & BeautifulSoup:** Used for scraping/fetching recommendation data.

### Frontend
- **React:** UI library.
- **Material-UI & Bootstrap:** For responsive and modern design.
- **Chart.js:** For visualizing user progress and statistics.

---

## Getting Started

### Prerequisites
- Python 3.x
- Node.js & npm
- PostgreSQL

### Backend Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Python dependencies:**
   ```bash
   pip install -r requirement.txt
   ```

3. **Database Configuration:**
   Ensure PostgreSQL is running and update the `DATABASES` setting in `Codeit/settings.py` if necessary.

4. **Run Migrations:**
   ```bash
   python manage.py migrate
   ```

5. **Start the Django development server:**
   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install npm dependencies:**
   ```bash
   npm install
   ```

3. **Start the React development server:**
   ```bash
   npm start
   ```
   The application should now be running at `http://localhost:3000`.

## Testing

### Backend Tests
```bash
python manage.py test
```

### Frontend Tests
```bash
cd frontend
npm test
```
