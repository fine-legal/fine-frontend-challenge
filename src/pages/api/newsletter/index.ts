import { NextApiRequest, NextApiResponse } from "next";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ message: "Thank you for subscribing!" });
}
