"use client";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import NewChat from "./NewChat";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";

function SideBar() {
  const { data: session } = useSession();
  // passing in the actual path/directory using collection()
  // to get all the chats in the deststruced chat variable
  // making usre its in assening order
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );
  // console.log(chats);
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/*Chat section whole */}
          <NewChat />
          <div className="hidden sm:inline">
            {/*dropbox to select AI Model */}
            <ModelSelection />
          </div>

          {/*Chatlist of history Mapping */}

          <div className="flex flex-col space-y-2 my-2">
            {loading && (
              <div
                className="animate-pulse text-center
              text-white
              "
              >
                <p>Loading Chats..</p>
              </div>
            )}
            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>
      {session && (
        <img
          onClick={() => signOut()}
          className="h-12 w-12 rounded-full cursor-pointer hover:opacity-50
          mx-auto mb-2
          "
          src={session.user?.image!}
          alt="your photo"
        />
      )}
    </div>
  );
}

export default SideBar;
