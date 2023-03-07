import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.query.secret !== process.env.REVALIDATE_SECRET_TOKEN) {
    return response.status(401).json({
      message: "Invalid token",
    });
  }

  //fix
  try {
    return response.status(200).json({ revalidated: true });
  } catch (err) {
    return response.status(500).send("Error revalidating");
  }
}
