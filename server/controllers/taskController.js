const data = require('../data');

const taskController = {
    async getTasks(req, res, next) {
        try {
          const items = await data ;
          res.locals.task = items;
          return next();
        } catch (err) {
          return next({
            log: 'get Task cannot get Task',
            status: 500,
            message: 'Task cannot be reached',
          });
        }
    }
}

module.exports = taskController