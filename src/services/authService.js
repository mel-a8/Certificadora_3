const API_URL = "http://localhost:3001/api";

export const loginAPI = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Falha no login");
    }

    return data;
  } catch (error) {
    throw error;
  }
};
