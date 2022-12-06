Running the application:

1. Clone the repo onto your local machine.
2. "npm install"
3. Depending on the environment you are using:

Development:
"npm run dev"

Production:
You should input the database credentials of the production database into a .env file at the root of the project in this format:
DB_USER = "userchallenge@vt-code-challenge"
DB_PASSWORD = "userchallenge"
DB_HOST = "vt-code-challenge.postgres.database.azure.com"
DB_PORT = "5432"
DB_DATABASE = "challenge"

Once that is done:
"npm run prod"
