# Todoapp

## API server

Run `pm2 start server.js --name NodeServer --log-date-format 'DD/MM HH:mm:ss' --watch` for the API server. Navigate to `http://localhost:4000` to test if the API server is active.
Run 'sequelize-auto -o "./models" -d un_ami_pour_la_vie -h localhost -u root -p 3306 -e mysql' for update the models sequelize.
