const apiUrl = "http://localhost:5000";

export const getUser = async () => {
  const result = await fetch(apiUrl + "/user");
  const user = await result.json();
  return user;
};

export const putExtraction = async function postJSON(data) {
  console.log("se disparo put");

  console.log(data, "seria el monto");

  try {
    const response = await fetch("http://localhost:5000/user/1", {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
};

// postJSON(data);
