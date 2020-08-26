/**
 * only support server-side
 */
import jwt from 'jsonwebtoken';

export function getUserInfo (__vut) {
  try {
    const decodedFirst = jwt.verify(__vut, process.env.NEXT_SERVER_UIT);
    const userInfoBase64Arr = decodedFirst.access_token.split('.');
    const userInfo = JSON.parse(Buffer.from(userInfoBase64Arr[1], 'base64').toString());
    return {
      role: userInfo.authorities ? userInfo.authorities[0] : '',
      token: decodedFirst.access_token,
      bcoId: userInfo.info.bcoId ? userInfo.info.bcoId : null,
    }
  } catch (error) {
    return { };
  }
}
