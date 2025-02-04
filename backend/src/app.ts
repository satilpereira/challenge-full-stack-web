import serverV1 from '@server';
// import { routesExec } from '@routes/index';
import Env from '@utils/Env';
import chalk from 'chalk';
import { routesExec } from '@routes/index';

const log = console.log;

Env.validate();

const PORT = Env.get('PORT');

routesExec();

serverV1.listen(PORT, () => {
  log(
    chalk.green(
      `Server running on http://${
        (process.env.NODE_ENV === 'development' && 'localhost') || '127.0.0.1'
      }:${PORT}`
    )
  );
}); // Path: src/api/v1/server.ts
