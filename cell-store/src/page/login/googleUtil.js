import jwt_decode from "jwt-decode";
export const decodeGoogle = (variable) => {
  const mop = JSON.stringify(jwt_decode(variable));
  const decoded = JSON.parse(mop);

  const mapped = {
    username: decoded.name,
    image: decoded.picture,
    email: decoded.email,
    confirmed: decoded.email_verified,
    token: variable,
  };
  console.log(mapped);

  return { ...mapped };
};
