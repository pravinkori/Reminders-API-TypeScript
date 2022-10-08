import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('List of reminders')
});

// DTO: Data Transfer Object
interface CreateReminderDto {
    title: string
}

router.post('/', (req, res) => {
    const { title } = req.body as CreateReminderDto;
    res.json(title)
})

export default router



