export const login = () => {
  const url = `http://localhost:8080/realms/v18hub/protocol/openid-connect/auth`;
  const params = new URLSearchParams({
    client_id: "v18hub-frontend",
    redirect_uri: window.location.origin,
    response_type: "code",
    scope: "openid profile email",
  });
  window.location.href = `${url}?${params}`;
};

export const logout = () => {
  localStorage.removeItem("user");
  window.location.href = "/";
};