import { useState } from "react";
import { Dialog } from "@headlessui/react";

type Props = {};

const AddSpaceModal = (props: Props) => {
  let [isOpen, setIsOpen] = useState(false);

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
              // onSubmit={(e) => handleSubmit(e)}
            >
              <input
                className="w-full rounded-sm border-none bg-[#C6DBCE] p-2"
                type="text"
                name="title"
                placeholder="Title"
                id=""
                //   onChange={(e) => handleFormData(e)}
              />
              <div className="flex w-full justify-between ">
                <input
                  className="w-[60%] rounded-sm border-none bg-[#C6DBCE] p-2"
                  type="text"
                  name="genre"
                  placeholder="Genre"
                  id=""
                  // onChange={(e) => handleFormData(e)}
                />
                <input
                  className="w-[37%] rounded-sm border-none bg-[#C6DBCE] p-2"
                  type="text"
                  name="description"
                  placeholder="Description"
                  id=""
                  // onChange={(e) => handleFormData(e)}
                />
              </div>
              <input
                className="w-[37%] rounded-sm border-none bg-[#C6DBCE] p-2"
                type="text"
                name="part"
                placeholder="Part"
                id=""
                //   onChange={(e) => handleFormData(e)}
              />
              <div className="flex h-[2.5rem] cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-[#8B9A91]">
                <label className="flex h-full w-full items-center justify-center text-[#303933]">
                  {/* <BsMusicNote /> */}
                  <span className="">Add Audio</span>
                  {/* <Audio
                  url={audioUrl}
                  onUpload={(url) => {
                    setAudioUrl(url);
                  }}
                /> */}
                </label>
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

            <button onClick={() => setIsOpen(false)}>Deactivate</button>
            <button onClick={() => setIsOpen(false)}>Cancel</button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default AddSpaceModal;
