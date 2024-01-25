import express from 'express';
import { exec } from 'child_process';

const app = express();
const port = 3000;

app.get('/start-trial', (req, res) => {
    exec('cd ./guest-book && yarn start', (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    res.send('Starting guest book...');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
