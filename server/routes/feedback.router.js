const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//send feedback to database

router.post('/', (req, res) => {
    let newFeedback = req.body;
    console.log('Adding feedback', newFeedback);
    
    let queryText = `INSERT INTO "prime_feedback" ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4);`;
    
    let queryValues = [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments];
    pool.query(queryText, queryValues)
    .then(result => {
        res.sendStatus(201);
    })
    .catch(error => {
        console.log(`Error adding feedback`, error);
        res.sendStatus(500);
    });
});

//GET route for admin page

router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "prime_feedback"
                    ORDER BY "id" DESC;
    `)
    .then((result)=> {
        res.send(result.rows);
})
    .catch((error) => {
        console.log(`Error in get route`, error);
        res.sendStatus(500);
    })
})

router.delete('/:id', (req,res) => {
    const sqlText = `
        DELETE FROM "prime_feedback"
        WHERE id=$1;
    `
    const sqlValues =[req.params.id];
    pool.query(sqlText,sqlValues)
        .then((dbRes) => {
            res.sendStatus(200);
        })
        .catch((dbErr) => {
            console.log('error in deleting feedback', dbErr);
        })
})


module.exports = router;