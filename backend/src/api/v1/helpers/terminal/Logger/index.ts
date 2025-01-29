import chalk from 'chalk';
import moment from 'moment';
export const themes = {
  error: chalk.red,
  success: chalk.green,
  warning: chalk.yellow,
  info: chalk.blue,
};

const log = (
  theme: 'error' | 'success' | 'warning' | 'info',
  ...data: any[]
) => {
  console.log(themes[theme](...data));
};

const timestamp = () => {
  return moment().format('YYYY-MM-DD HH:mm:ss');
};

class Logger {
  public error = (...data: any[]) =>
    log('error', `x ${timestamp()}: ` + [...data]);
  public success = (...data: any[]) => log('success', '✓ ' + [...data]);
  public warn = (...data: any[]) => log('warning', '! ' + [...data]);
  public info = (...data: any[]) => log('info', '🛈 ' + [...data]);
  public debug = (...data: any[]) => log('info', '🛈 ' + [...data]);
  public group = (...data: any[]) =>
    console.group(chalk.bgBlueBright.black(...data));
  public groupEnd = () => console.groupEnd();
}

export default Logger;
