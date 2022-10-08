import { Router } from "express";
import CreateReminderDto from "../dtos/create-reminders";
import Reminder from "../models/reminder";

const router = Router();
const reminders: Reminder[] = [];

router.get('/', (req, res) => {
    res.json(reminders);
});

router.post('/', (req, res) => {
    const { title } = req.body as CreateReminderDto;
    const reminder = new Reminder(title);
    reminders.push(reminder);
    res.status(201).json(reminder);
});

router.put('/:id', (req, res) => {
    // Lookup the reminders
    const reminder = reminders.find(r => r.id === parseInt(req.params.id));
    // If not found, return 400 error - Bad request
    if (!reminder) res.status(404).send('The reminder with given ID is updated');

    reminder!.title = req.body.title;
    res.send(reminder);
});

router.delete('/:id', (req, res) => {
    // Lookup the reminders
    const reminder = reminders.find(r => r.id === parseInt(req.params.id));
    // If not found, return 400 error - Bad request
    if (!reminder) res.status(404).send('The reminder with given ID is updated');

    // Lookup for index in reminders array
    const index = reminders.indexOf(reminder!);
    reminders.splice(index, 1);

    // Send response
    res.send(reminder);

});

export default router



