import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { addSpace } from "@/server/lib/addSpace";
import { RxCross2 } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";

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
    setIsOpen(false);
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
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex items-center justify-center p-4 ">
          <Dialog.Panel className="relative w-full max-w-[18rem] rounded bg-white py-6 px-4 dark:bg-skin-inverted ">
            <Dialog.Title className="mb-7 font-bold text-accent-base text-xl">
              Add Space
            </Dialog.Title>
            <form
              className="flex flex-col gap-4 text-accent-base dark:text-skin-inverted"
              onSubmit={(e) => handleSubmit(e)}
            >
              <input
                className="w-full rounded-sm border-none bg-accent-base/20 p-2 focus:outline-none"
                type="text"
                name="title"
                placeholder="Title"
                id=""
                onChange={(e) => handleFormDataChange(e)}
              />
              <div className="w-full flex justify-between">
                <div className="flex flex-col w-[48%] gap-2">
                  <label
                    className="flex gap-3 items-center text-skin-inverted"
                    htmlFor="date"
                  >
                    <BsFillCalendar2DateFill />
                    Date
                  </label>
                  <input
                    className="w-full rounded-sm border-none bg-accent-base/20 p-2 focus:outline-accent-base"
                    type="date"
                    name="date"
                    placeholder="date"
                    id="Date"
                    onChange={(e) => handleFormDataChange(e)}
                  />
                </div>
                <div className="flex flex-col w-[48%] gap-2">
                  <label
                    className="flex gap-2 items-center text-skin-inverted"
                    htmlFor="time"
                  >
                    <BiTime />
                    Time
                  </label>
                  <input
                    className="rounded-sm border-none bg-accent-base/20 p-2 focus:outline-accent-base"
                    type="time"
                    name="start"
                    placeholder="Start time"
                    id="time"
                    onChange={(e) => handleFormDataChange(e)}
                  />
                </div>
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
