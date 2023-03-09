import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { addSpace } from "@/server/lib/addSpace";

type Props = {
  session: any;
};

const AddSpaceModal = ({ session }: Props) => {
  let [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    start: "",
    end: "",
    image: "",
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
    <div>
      <div
        className="w-[12rem] h-full bg-accent-muted rounded-lg flex justify-center items-center"
        onClick={() => setIsOpen(true)}
      >
        Add Space
      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative w-full max-w-[22rem] rounded bg-white py-6 px-4">
            <Dialog.Title className="mb-7 font-bold text-[#303933]">
              Add Space
            </Dialog.Title>
            <form
              className="flex flex-col gap-2"
              onSubmit={(e) => handleSubmit(e)}
            >
              <input
                className="w-full rounded-sm border-none bg-[#C6DBCE] p-2"
                type="text"
                name="title"
                placeholder="Title"
                id=""
                onChange={(e) => handleFormDataChange(e)}
              />
              <div className="flex w-full justify-between ">
                <input
                  className="w-[60%] rounded-sm border-none bg-[#C6DBCE] p-2"
                  type="date"
                  name="date"
                  placeholder="date"
                  id=""
                  onChange={(e) => handleFormDataChange(e)}
                />
                <input
                  className="w-[37%] rounded-sm border-none bg-[#C6DBCE] p-2"
                  type="text"
                  name="description"
                  placeholder="Description"
                  id=""
                  onChange={(e) => handleFormDataChange(e)}
                />
              </div>
              <div className="flex justify-between">
                <input
                  className="w-[49%] rounded-sm border-none bg-[#C6DBCE] p-2"
                  type="time"
                  name="start"
                  placeholder="Start time"
                  id=""
                  onChange={(e) => handleFormDataChange(e)}
                />
                <input
                  className="w-[49%] rounded-sm border-none bg-[#C6DBCE] p-2"
                  type="time"
                  name="end"
                  placeholder="End time"
                  id=""
                  onChange={(e) => handleFormDataChange(e)}
                />
              </div>

              {/* <ModalImage
              url={img_url}
              onUpload={(url) => {
                setEventImageUrl(url);
              }}
            /> */}
              <button
                type="submit"
                className="w-full rounded-sm border-none bg-[#C6DBCE] p-2"
              >
                Submit
              </button>
            </form>

            <button
              type="submit"
              className="absolute top-5 right-5"
              onClick={() => setIsOpen(false)}
            >
              X
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default AddSpaceModal;
