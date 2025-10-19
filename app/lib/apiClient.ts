interface ApiOptions {
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: any; // object to send in request body
}

export async function apiClient(url: string, options: ApiOptions, token?: string) {
  const response = await fetch(url, {
    method: options.method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}
