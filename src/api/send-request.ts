export const sendRequest = (url: string, data: any) => {
  console.log("sendRequest", url, data);

  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
