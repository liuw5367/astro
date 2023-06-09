import type { APIRoute } from "astro";

export const post: APIRoute = async (context) => {
  const body = await context.request.json();

  console.log("server request: ", body);
  console.log("server key: ", [
    import.meta.env.PUBLIC_APP_KEY,
    import.meta.env.APP_KEY,
  ]);
  console.log("server secret: ", [
    import.meta.env.PUBLIC_APP_SECRET,
    import.meta.env.APP_SECRET,
  ]);

  return new Response(
    JSON.stringify({
      requestBody: body,
      data: [
        import.meta.env.PUBLIC_APP_KEY,
        import.meta.env.APP_KEY,
        import.meta.env.PUBLIC_APP_SECRET,
        import.meta.env.APP_SECRET,
      ],
    })
  );
};
