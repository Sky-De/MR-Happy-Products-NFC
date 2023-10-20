import { connectToDB } from "@/db/database";
import ProductModel from "@/models/product";

type GetProps = {
  params: { product: string };
};

export const GET = async (req: Request, { params }: GetProps) => {
  try {
    connectToDB();
    const result = await ProductModel.find({ type: params.product });
    console.log(result, "result");

    return new Response(JSON.stringify(result), {
      status: 200,
    });
  } catch (error) {
    return new Response("Faild to get products", { status: 500 });
  }
};

// type DeleteProps = {
//   params: { product: string };
// };
// export const DELETE = async (req: Request, { params }: DeleteProps) => {
//   try {
//   connectToDB();
//     await ProductModel.findByIdAndRemove(params.product);
//     return new Response(JSON.stringify("product deleted."), {
//       status: 200,
//     });
//   } catch (error) {
//     return new Response("Faild to get products", { status: 500 });
//   }
// };
