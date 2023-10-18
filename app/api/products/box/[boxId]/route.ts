import { connectToDB } from "@/db/database";
import BoxModel from "@/models/product";

//GET: gets one box by id  api/products/box/:boxId
export const GET = async (
  req: Request,
  { params }: { params: { boxId: string } }
) => {
  try {
    connectToDB();
    const box = await BoxModel.findById(params.boxId);

    return new Response(JSON.stringify(box), {
      status: 200,
    });
  } catch (error) {
    return new Response("Faild to get box", { status: 500 });
  }
};

//PATCH: updates box  api/products/box/:boxId
export const PATCH = async (
  req: Request,
  { params }: { params: { boxId: string } }
) => {
  const { newUrl } = await req.json();
  try {
    connectToDB();
    const updatedBox = await BoxModel.findByIdAndUpdate(params.boxId, {
      url: newUrl,
    });

    return new Response(updatedBox, { status: 200 });
  } catch (error) {
    return new Response("Faild to get posts", { status: 500 });
  }
};

//DELETE: deletes box  api/products/box/:boxId
export const DELETE = async (
  req: Request,
  { params }: { params: { boxId: string } }
) => {
  try {
    connectToDB();
    await BoxModel.findByIdAndRemove(params.boxId);

    return new Response("Box deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Faild to delete posts", { status: 500 });
  }
};
