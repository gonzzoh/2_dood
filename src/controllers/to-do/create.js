const create = async (req, res) => {
  const { ToDo, body: { title } } = req;
  const newTask = await ToDo.create(title);
  newTask
    ? res.status(201).send(newTask)
    : res.status(500).send({ err: "Can't create" });
};

module.exports = create;

/*
static async create(title) {
    try {
      const query = 'INSTER INTO to_dos (title) VALUES (?) RETURNING *';
      const res = await knex.raw(query, [title]);
      debugger;
      return res.rows[0];
    } catch {
      console.error(err);
      return null;
    }
  }
*/