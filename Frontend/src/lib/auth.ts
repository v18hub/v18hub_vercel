// src/lib/auth.ts
export const login = () => {
  const keycloakUrl = "http://localhost:8080";
  const realm = "v18hub";
  const clientId = "v18hub-frontend";
  const redirectUri = encodeURIComponent(window.location.origin);

  window.location.href = `${keycloakUrl}/realms/${realm}/protocol/openid-connect/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid profile email`;
};

export const getUserFromCode = async (code: string): Promise<any> => {
  const response = await fetch(`http://localhost:8000/auth/callback?code=${code}`);
  if (!response.ok) throw new Error("Auth failed");
  return response.json();
};