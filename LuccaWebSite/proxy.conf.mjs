import { exec } from 'child_process';

console.log('starting server ...');
exec('node server/index.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(`stdout:\n${stdout}`);
});
export default {
  '/api/': {
    target: 'http://localhost:3200',
  }
}
