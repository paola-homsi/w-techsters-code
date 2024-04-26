const instructorController = require('../controllers/instructorControllers.js');

app.post('/instructor', [
  instructorController.create
]);