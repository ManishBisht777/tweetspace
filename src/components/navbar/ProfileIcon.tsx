import Link from "next/link";
import React from "react";
import { Menu, Transition } from "@headlessui/react";

import { BiLogOut, BiUserCircle } from "react-icons/bi";
import { signOut } from "next-auth/react";

type Props = {
  session: any;
};

const ProfileIcon = ({ session }: Props) => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button>
        <img
          className="w-10 h-10 rounded-full"
          src={session.user?.image}
          alt={session.user?.name}
        />
      </Menu.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="absolute right-0 -bottom-20 p-3 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-skin-base font-normal">
          <Menu.Item>
            <Link
              className="flex gap-2 items-center justify-start"
              href={`/user/${session.id}`}
            >
              <BiUserCircle /> Profile
            </Link>
          </Menu.Item>
          <Menu.Item>
            <button
              className="flex gap-2 items-center justify-start"
              onClick={() => signOut()}
            >
              <BiLogOut /> Logout
            </button>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileIcon;
