import React from "react";

export default function ReactComponents() {
  React.useEffect(() => {
    console.log("client key: ", [
      import.meta.env.PUBLIC_APP_KEY,
      import.meta.env.APP_KEY,
    ]);
    console.log("client secret: ", [
      import.meta.env.PUBLIC_APP_SECRET,
      import.meta.env.APP_SECRET,
    ]);
    request();
  }, []);

  async function request() {
    const response = await fetch("/api/test", {
      method: "POST",
      body: JSON.stringify([
        [import.meta.env.PUBLIC_APP_SECRET, import.meta.env.APP_SECRET],
        [import.meta.env.PUBLIC_APP_KEY, import.meta.env.APP_KEY],
      ]),
    });
    console.log(response);
    const json = await response.json();
    console.log(json);
  }

  return <div>this is react.</div>;
}
