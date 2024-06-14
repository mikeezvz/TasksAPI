const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(express.json());

//Testdaten mit ChatGPT generiert
const tasks = [
    {
      "Id": 1,
      "Titel": "Task 1",
      "Beschreibung": "Beschreibung für Task 1",
      "DueDate": "2024-06-14",
      "ResolvedDate": null
    },
    {
      "Id": 2,
      "Titel": "Task 2",
      "Beschreibung": "Beschreibung für Task 2",
      "DueDate": "2024-06-15",
      "ResolvedDate": null
    },
    {
      "Id": 3,
      "Titel": "Task 3",
      "Beschreibung": "Beschreibung für Task 3",
      "DueDate": "2024-06-16",
      "ResolvedDate": null
    },
    {
      "Id": 4,
      "Titel": "Task 4",
      "Beschreibung": "Beschreibung für Task 4",
      "DueDate": "2024-06-17",
      "ResolvedDate": null
    },
    {
      "Id": 5,
      "Titel": "Task 5",
      "Beschreibung": "Beschreibung für Task 5",
      "DueDate": "2024-06-18",
      "ResolvedDate": null
    },
    {
      "Id": 6,
      "Titel": "Task 6",
      "Beschreibung": "Beschreibung für Task 6",
      "DueDate": "2024-06-19",
      "ResolvedDate": null
    },
    {
      "Id": 7,
      "Titel": "Task 7",
      "Beschreibung": "Beschreibung für Task 7",
      "DueDate": "2024-06-20",
      "ResolvedDate": null
    },
    {
      "Id": 8,
      "Titel": "Task 8",
      "Beschreibung": "Beschreibung für Task 8",
      "DueDate": "2024-06-21",
      "ResolvedDate": null
    },
    {
      "Id": 9,
      "Titel": "Task 9",
      "Beschreibung": "Beschreibung für Task 9",
      "DueDate": "2024-06-22",
      "ResolvedDate": null
    },
    {
      "Id": 10,
      "Titel": "Task 10",
      "Beschreibung": "Beschreibung für Task 10",
      "DueDate": "2024-06-23",
      "ResolvedDate": null
    }
  ]
  

router.get('/', (request, response) => {
  const task = tasks.map(task =>({id:tasks.id, Titel:tasks.Titel, Beschreibung:tasks.Beschreibung, DueDate:tasks.DueDate, ResolvedDate:tasks.ResolvedDate}))
  response.json(tasks)
});

router.post('/', (request, response) => {
  let addTask = {
      task: request.body
  }
  tasks.push(addTask);
  response.send(addTask);
  response.status(201).send('Task erfolgreich hinzugefügt');

  console.log(tasks);

})

router.get('/:id', (request, response) => {
  const byId = request.params.id;
  const taskIndex = tasks.find(task => task.Id == byId);

  if (taskIndex) {
      response.json(taskIndex);
  } else {
      response.status(404).send('Task nicht gefunden');
  }
});

router.patch('/:id', (request, response) => {
  const byId = request.params.id;
  const taskIndex= tasks.find(task => task.Id == byId);

  if(request.body.Titel) {
      tasks[taskIndex].Titel = request.body.Titel;
  }

  response.json(bookArray[taskIndex]);

  console.log(bookArray);
});

router.delete('/:id', (request, response) => {
  const byId = request.params.id;
  const bookIndex = tasks.findIndex(task => task.id == byId);
  
  bookArray.splice(bookIndex, 1);
  response.json({ message: + "Task erfolgreich gelöscht"});

  console.log(bookArray);
})

module.exports = router