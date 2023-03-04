import supabase from "@/server/supabase";
import { Session } from "next-auth";
import Link from "next/link";
import React, { useEffect } from "react";

interface UserSession extends Session {
  id: string;
}

type Props = {
  session: UserSession;
};

const ProfileIcon = ({ session }: Props) => {
  return (
    <Link href={`/user/${session.id}`}>
      <img
        className="w-10 h-10 rounded-full"
        src={session.user?.image}
        alt={session.user?.name}
      />
    </Link>
  );
};

export default ProfileIcon;
