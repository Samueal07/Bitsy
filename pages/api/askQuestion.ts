import query from "../../lib/queryApi";
import admin from "firebase-admin";
import type { NextApiRequest, NextApiResponse } from "next";
import logo from "../../images/logo.png";
import { adminDb } from "@/firebaseAdmin";
type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // the body in string format sent in chat input is
  // dsturctred in here
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({
      answer: "please provide a prompt",
    });
    return;
  }

  if (!chatId) {
    res.status(400).json({
      answer: "Please provide a valid chat ID",
    });
    return;
  }

  //CHatGPT Query
  const response = await query(prompt, chatId, model);
  const message: Message = {
    text: response || "Not able to find an Answer",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "Bitsy",
      name: "Bitsy",
      avatar: `https://links.papareact.com/89k`,
    },
  };

  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
}
