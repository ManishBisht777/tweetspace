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
        <div className="absolute w-4 h-4 rotate-45 rounded-sm bg-accent-base top-[.7rem] right-4 z-10"></div>
        <Menu.Items className="absolute right-0 my-5 p-3 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-skin-base font-normal border-2 border-accent-inverted/50 flex gap-2 flex-col">
          <Menu.Item>
            <Link
              className="flex gap-2 items-center justify-start p-2 bg-accent-base/10 rounded-sm text-accent-base"
              href={`/user/${session.id}`}
            >
              <BiUserCircle className="text-xl" /> Profile
            </Link>
          </Menu.Item>
          <Menu.Item>
            <button
              className="flex gap-2 items-center justify-start p-2 bg-accent-inverted/10 rounded-sm text-accent-inverted"
              onClick={() => signOut()}
            >
              <BiLogOut className="text-xl" /> Logout
            </button>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileIcon;
