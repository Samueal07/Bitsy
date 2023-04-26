"use client";
import { db } from "@/firebase";
import { PlusIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Session } from "inspector";
import { useSession } from "next-auth/react";
// make sure its from next-navigation and not next-router
import { useRouter } from "next/navigation";

function NewChat() {
  const { data: session } = useSession();
  const router = useRouter();
  const createNewChat = async () => {
    // pushing document in firebase
    // collection-doucment-collection-document
    // first argument in collection() is the collection route

    const doc = await addDoc(
      // made a users document in the 1st collection
      // that document we stroe the email id
      // inside this users we make a subcollection of that emailid
      // in that we have the chat document stored

      // upar ka path is were we store the actual data see path
      collection(db, "users", session?.user?.email!, "chats"),
      {
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );
    // redirect to screen of the chat which is clicked by us
    router.push(`/chat/${doc.id}`);
  };
  return (
    <div onClick={createNewChat} className="border-gray-700 border ChatRow">
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
}

export default NewChat;
