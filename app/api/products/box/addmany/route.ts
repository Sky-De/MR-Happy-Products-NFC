import { connectToDB } from "@/db/database";
import BoxModel from "@/models/product";

//POST: creates many new box  api/products/box
export const POST = async (req: Request) => {
  const { urls } = await req.json();

  try {
    const newBoxes = urls.map((url: string) => ({ url }));
    connectToDB();
    const insertedBoxes = await BoxModel.insertMany(newBoxes);

    return new Response(JSON.stringify(insertedBoxes), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Faild to create new post", { status: 500 });
  }
};
