const apiUrl = "http://localhost:5000";

export const getUser = async () => {
  const result = await fetch(apiUrl + "/user");
  const user = await result.json();
  return user;
};

export const putExtraction = async (data) => {
  try {
    const response = await fetch(`http://localhost:5000/user/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
};
