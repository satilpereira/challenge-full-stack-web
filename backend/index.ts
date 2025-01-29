import serverV1 from './src/api/v1/server';
import Env from './src/api/v1/utils/Env';

const PORT = Env.get('PORT');

serverV1.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
