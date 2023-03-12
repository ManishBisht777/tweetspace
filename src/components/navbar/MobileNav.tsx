import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FC, Dispatch, SetStateAction, Fragment, ReactNode } from "react";

type Props = {
  navOpen: boolean;
  setNavOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
};

function MobileNav({ navOpen, setNavOpen, children }: Props) {
  return (
    <Transition.Root show={navOpen} as={Fragment}>
      <Dialog
        onClose={() => setNavOpen(false)}
        className={`fixed inset-0 z-50 h-screen w-full p-4 text-skin-base dark:text-skin-inverted`}
      >
        <Transition.Child
          enter="transition duration-100 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-300 ease-out"
          leaveFrom=" opacity-100"
          leaveTo=" opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 -z-10 bg-skin-base/50 backdrop-blur-sm " />
        </Transition.Child>
        <Transition.Child
          enter="transition duration-300 ease-out"
          enterFrom="transform -translate-x-full opacity-0"
          enterTo="transform translate-x-0 opacity-100"
          leave="transition duration-300 ease-in"
          leaveFrom="transform translate-x-0 opacity-100"
          leaveTo="transform -translate-x-full opacity-0"
        >
          <Dialog.Panel className="relative h-[calc(100vh-2rem)] w-full max-w-xs overflow-y-auto rounded-lg border border-accent-base bg-skin-base dark:bg-skin-inverted">
            {/* top bar */}
            <div className="sticky inset-x-0 top-0 flex items-center justify-between border-b border-skin-base bg-skin-base p-4 dark:bg-skin-inverted">
              {/* <Logo normal small /> */}
              <img
                className="w-10"
                src="/logoNoText.png"
                alt="tweetspace logo"
              />
              <button
                onClick={() => setNavOpen(false)}
                className="rounded-full bg-skin-inverted px-2 py-0.5 text-sm font-medium text-skin-inverted dark:bg-skin-base dark:text-skin-base"
              >
                close
              </button>
            </div>
            {/* links */}
            <div className="p-4">{children}</div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}

export default MobileNav;
