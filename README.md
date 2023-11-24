# PPWEB2-2023

# configure .env file

"SERVER_URL = localhost"
SERVER_PORT=3000
DB_HOST=localhost
DB_USER=express_test
DB_PASSWORD="password"
DB_NAME=express_test 
DB_DIALECT=mysql


# launch new migration 

npm run migrate

OR 

cd src/database
npx sequelize db:migrate

# Run project 

npm run dev
