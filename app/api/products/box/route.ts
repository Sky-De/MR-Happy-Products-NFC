import { connectToDB } from "@/db/database";
import BoxModel from "@/models/product";

//GET: gets all boxes  api/products/box
export const GET = async (req: Request) => {
  try {
    connectToDB();
    const products = await BoxModel.find();

    return new Response(JSON.stringify(products), {
      status: 200,
    });
  } catch (error) {
    return new Response("Faild to get products", { status: 500 });
  }
};

//POST: creates new box  api/products/box
export const POST = async (req: Request) => {
  const { url } = await req.json();
  try {
    const newBox = new BoxModel({
      url,
    });

    connectToDB();
    await newBox.save();

    return new Response(JSON.stringify(newBox), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Faild to create new post", { status: 500 });
  }
};
