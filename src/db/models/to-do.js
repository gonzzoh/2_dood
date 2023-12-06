const knex = require('./knex');

class ToDo {
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

  static async list() {
    try {
      const query = 'SELCT * FROM to_dos';
      const res = await knex.raw(query);
      debugger;
      return res.rows;
    } catch {
      console.error(err);
      return null;
    }
  }

  static async find() {
    try {

    } catch {
      console.error(err);
      return null;
    }
  }

  static async updateCompletion() {
    try {

    } catch {
      console.error(err);
      return null;
    }
  }

  static async delete() {
    try {

    } catch {
      console.error(err);
      return null;
    }
  }

  static async deleteAll() {
    try {
      await knex.raw('TRUNCATE to_dos');
      return true;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

module.exports = ToDo;
