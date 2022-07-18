import pool from "../database/db.js";

export const returnTasks = async (req, res) => {
    try {
        const {rows} = await pool.query("SELECT * FROM tasks;");
        res.json(rows)
    } catch (error) {
        res.status(500).send("An Error has occur returning the tasks:\n" + error);
    };
};

export const returnOneTask = async (req, res) => {
    try {
        const {rows} = await pool.query(`SELECT * FROM tasks WHERE id = ${req.params.id};`)
        res.json(rows[0])
    } catch (error) {
        res.status(500).send("An Error has occur returning the task:\n" + error);
    }
}

export const saveTask = async (req, res) => {
    try {
        const {id, title, content} = req.body;
        res.json({id, title, content});
        pool.query(`INSERT INTO tasks VALUES (${id}, '${title}', '${content}');`)
    } catch(error) {
        res.status(500).send("Un error ha ocurrido mientras se guardaba las tareas\n" + error)
    }
}

export const updateTasks = async (req, res) => {
    try {
        null
    } catch (error) {
        res.status(500).send("An Error has occur during the task update:\n" + error);
    }
}

/**
 * ! Unused Code
 * //res.render("index", {rows});
 */