import { getUser } from '../utils/utils';
/**
 * auth headers
 * @returns 
 */
export default function authHeader() {
  const user = getUser();

  if (user && user.accessToken) {
    return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
  } else {
    return {};
  }
}
