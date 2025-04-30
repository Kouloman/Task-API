import { VercelResponse } from "@vercel/node";
import { VercelRequest } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.status(200).json({ message: "Hello from tasks!" });
} // eslint-disable-line no-unused-vars