const express = require('express');
const app = express();
const port = 3004;
const session = require('express-session');
const bodyParser = require('body-parser');
const router = express.router();

[
    {
      "Id": 1,
      "Titel": "Task 1",
      "Beschreibung": "Beschreibung für Task 1",
      "DueDate": "2024-06-14",
      "ResolvedDate": "2024-06-14"
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
      "ResolvedDate": "2024-06-11"
    },
    {
      "Id": 5,
      "Titel": "Task 5",
      "Beschreibung": "Beschreibung für Task 5",
      "DueDate": "2024-06-18",
      "ResolvedDate": "2024-06-10"
    },
    {
      "Id": 6,
      "Titel": "Task 6",
      "Beschreibung": "Beschreibung für Task 6",
      "DueDate": "2024-06-19",
      "ResolvedDate": "2024-06-09"
    },
    {
      "Id": 7,
      "Titel": "Task 7",
      "Beschreibung": "Beschreibung für Task 7",
      "DueDate": "2024-06-20",
      "ResolvedDate": "2024-06-08"
    },
    {
      "Id": 8,
      "Titel": "Task 8",
      "Beschreibung": "Beschreibung für Task 8",
      "DueDate": "2024-06-21",
      "ResolvedDate": "2024-06-07"
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
  

app.get