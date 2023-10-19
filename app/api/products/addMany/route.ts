import { connectToDB } from "@/db/database";
import ProductModel from "@/models/product";

type NewProductType = {
  type: string;
  url: string;
};
export const POST = async (req: Request) => {
  const { urls, type } = await req.json();
  try {
    const newProducts: NewProductType = urls.map((url: string) => ({
      url,
      type,
    }));
    connectToDB();
    const insertedProdcts = await ProductModel.insertMany(newProducts);
    return new Response(JSON.stringify(insertedProdcts), {
      status: 200,
    });
  } catch (error) {
    return new Response("Faild to get products", { status: 500 });
  }
};
