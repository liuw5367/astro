import React from "react";

export default function ReactComponents() {
  const [response, setResponse] = React.useState<string[]>([]);

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
    setResponse(json.data);
    console.log(json.data);
  }

  return (
    <div>
      <div>
        <div>已配置设置的环境变量: </div>
        <div>Environment variables with configured settings.: </div>
        <div style={{ marginTop: 16 }}>
          <span>PUBLIC_APP_KEY : </span>
          <span>public-key-1111</span>
        </div>
        <div>
          <span>APP_KEY : </span>
          <span>server-key-2222</span>
        </div>
        <div>
          <span>PUBLIC_APP_SECRET : </span>
          <span>public-secret-333</span>
        </div>
        <div>
          <span>APP_SECRET : </span>
          <span>server-secret-444</span>
        </div>
      </div>
      <div>
        <div style={{ marginTop: 16 }}>接口返回的服务端环境变量：</div>
        <div >Server environment variables returned by the interface:</div>
        <div style={{  marginTop: 16,display: "flex", flexDirection: "column" }}>
          {response.map((v) => (
            <div key={v} style={{margin:5,padding: 5, background: '#eee'}}>{v}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
