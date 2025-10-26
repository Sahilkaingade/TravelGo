const API_URL = "http://localhost:5000/api";

// ---------------- AUTH ----------------

// Register
export const registerUser = async (userData) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return res.json();
};

// Login
export const loginUser = async (loginData) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginData),
  });
  return res.json();
};

// ---------------- CART ----------------

export const addToCart = async (userId, item) => {
  const res = await fetch(`${API_URL}/cart/${userId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  return res.json();
};

export const getCart = async (userId) => {
  const res = await fetch(`${API_URL}/cart/${userId}`);
  return res.json();
};

// ---------------- FEEDBACK ----------------

export const submitFeedback = async (feedbackData) => {
  const res = await fetch(`${API_URL}/feedback`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(feedbackData),
  });
  return res.json();
};

export const getFeedbacks = async () => {
  const res = await fetch(`${API_URL}/feedback`);
  return res.json();
};

// ---------------- HELP ----------------

export const submitHelpRequest = async (helpData) => {
  const res = await fetch(`${API_URL}/help`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(helpData),
  });
  return res.json();
};

export const getHelpRequests = async () => {
  const res = await fetch(`${API_URL}/help`);
  return res.json();
};

// ---------------- DOWNLOAD LOG ----------------

export const logDownload = async (downloadData) => {
  const res = await fetch(`${API_URL}/downloads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(downloadData),
  });
  return res.json();
};

export const getDownloadLogs = async () => {
  const res = await fetch(`${API_URL}/downloads`);
  return res.json();
};
