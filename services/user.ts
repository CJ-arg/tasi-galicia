const apiUrl = "http://localhost:5000";

export const getUser = async () => {
  const result = await fetch(apiUrl + "/user");
  const user = await result.json();
  return user;
};
