import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { addSpace } from "@/server/lib/addSpace";
import { RxCross2 } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

type Props = {
  session: any;
};

const AddSpaceModal = ({ session }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    date: "",
    title: "",
    start: "",
    end: "",
    link: "",
  });

  const handleFormDataChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addSpace(formData, session);
  };

  return (
    <>
      <button
        className="flex gap-1 items-center px-4 py-2 rounded-full bg-skin-inverted text-skin-inverted text-sm"
        onClick={() => setIsOpen(true)}
      >
        <AiOutlinePlus />
        Add Space
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative w-full max-w-[22rem] rounded bg-white py-6 px-4">
            <Dialog.Title className="mb-7 font-bold text-accent-base/80 text-xl">
              Add Space
            </Dialog.Title>
            <form
              className="flex flex-col gap-2 text-accent-base "
              onSubmit={(e) => handleSubmit(e)}
            >
              <input
                className="w-full rounded-sm border-none bg-accent-base/20 p-2 focus:border-accent-base focus:outline-accent-base"
                type="text"
                name="title"
                placeholder="Title"
                id=""
                onChange={(e) => handleFormDataChange(e)}
              />
              <input
                className="w-full rounded-sm border-none bg-accent-base/20 p-2 focus:outline-accent-base"
                type="date"
                name="date"
                placeholder="date"
                id=""
                onChange={(e) => handleFormDataChange(e)}
              />

              <div className="flex justify-between items-center">
                <p className="flex gap-3 items-center text-xl text-skin-base">
                  <BiTimeFive /> Time
                </p>
                <input
                  className="w-[60%] rounded-sm border-none bg-accent-base/20 p-2 focus:outline-accent-base"
                  type="time"
                  name="start"
                  placeholder="Start time"
                  id=""
                  onChange={(e) => handleFormDataChange(e)}
                />
              </div>

              <input
                className="w-full rounded-sm border-none bg-accent-base/20 p-2 focus:outline-accent-base"
                type="text"
                name="link"
                placeholder="Twitter link"
                id=""
                onChange={(e) => handleFormDataChange(e)}
              />
              <button
                type="submit"
                className="w-full rounded-sm border-none bg-accent-base text-skin-inverted p-2 focus:outline-accent-base"
              >
                Submit
              </button>
            </form>

            <button
              type="submit"
              className="absolute top-5 right-5 text-2xl"
              onClick={() => setIsOpen(false)}
            >
              <RxCross2 />
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default AddSpaceModal;
