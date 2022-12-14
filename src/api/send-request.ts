export const sendRequest = async (url: string, data: any) => {
  console.log("sendRequest", url, data);

  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const error = new Error("Uh oh something went wrong.");

    // @ts-ignore
    error.info = res;
    // @ts-ignore
    error.status = res.status;
    throw error;
  } else {
    return res.json();
  }
};
