import { connectToDB } from "@/db/database";
import BoxModel from "@/models/product";

export const GET = async (req: Request) => {
  try {
    connectToDB();
    const boxProducts = await BoxModel.find();
    // add lightProducts here and add to response

    return new Response(JSON.stringify({ box: boxProducts }), {
      status: 200,
    });
  } catch (error) {
    return new Response("Faild to get products", { status: 500 });
  }
};
