export const GET = async (req: Request) => {
  try {
    return new Response(JSON.stringify("Welcome to Mr-Happy server :) "), {
      status: 200,
    });
  } catch (error) {
    return new Response("Faild to get products", { status: 500 });
  }
};
