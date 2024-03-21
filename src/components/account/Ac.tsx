"use client";
import { useState, useEffect, Fragment } from "react";
import { useUser } from "@supabase/auth-helpers-react";
import supabase from "../../../utils/supabase";
import { useParams } from "next/navigation";
import { Dialog, Transition } from "@headlessui/react";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useFormState } from "react-dom";
import { submitFormAction } from "@/app/actions";

export default function Account({
  session,
  web_site,
  desc,
  isEdit,
  onClose,
  profileData,
}: any) {
  const { profile } = useParams();
  const [website, setWebsite] = useState(null);
  const [description, setDescription] = useState<any>(null);
  const [formState, formAction] = useFormState(submitFormAction, {
    message: "",
    errors: undefined,
    fieldValues: {
      id: profileData?.id,
      website: "",
      description: "",
    },
  });

  console.log(formState);

  useEffect(() => {
    // getProfile()
  }, [session]);

  async function updateProfile({ username, website, description }: any) {
    try {
      const updates = {
        id: session?.id,
        username: username || profile,
        description: description,
        website,
        updated_at: new Date().toISOString(),
      };

      await supabase.from("profiles").upsert(updates);
      // const { user } = await supabase.auth.update({
      //   data: {
      //     avatar_url : avatar_url
      //   }
      // })

      // if (error) throw error
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    } finally {
    }
  }

  return (
    <div className="" onClick={(e) => e.stopPropagation()}>
      <Transition appear show={isEdit} as={Fragment}>
        <Dialog
          as="form"
          action={formAction}
          // onSubmit={handleSubmit}
          className="relative z-50"
          onClose={onClose}
        >
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>
            </div>
          </div>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`w-full max-w-md transform overflow-hidden rounded-2xl bg-black/80 p-6 text-left align-middle shadow-xl transition-all`}
                >
                  <Dialog.Title
                    as="h3"
                    className={`text-lg font-medium leading-6 text-gray-200 pb-2`}
                  >
                    Edit Profile
                  </Dialog.Title>

                  <div className="flex flex-col gap-2 w-full px-3 mt-4">
                    <div>
                      <label className="text-zinc-400" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="p-2 bg-neutral-800 w-full disabled:text-red-500"
                        id="email"
                        type="text"
                        value={session?.email}
                        disabled
                      />
                    </div>
                    <div>
                      <label className="text-zinc-400" htmlFor="username">
                        Username
                      </label>
                      <input
                        className="p-2 bg-neutral-800 w-full"
                        id="username"
                        type="text"
                        defaultValue={profileData?.username}

                        // onChange={(e: any) => setUsername(e.target.value)}
                      />
                    </div>

                    <Textarea
                      label="Description"
                      className=""
                      name="description"
                      id="description"
                      defaultValue={profileData?.description}
                    />

                    <Input type="email" variant="underlined" label="Email" />

                    <div>
                      <label className="text-zinc-400" htmlFor="username">
                        Description
                      </label>
                      <textarea
                        className="p-2 bg-neutral-800 w-full"
                        placeholder="Description"
                        id="description"
                        name="description"
                        defaultValue={profileData?.description}

                        // onChange={(e: any) => setDescription(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-zinc-400" htmlFor="website">
                        Website
                      </label>
                      <input
                        className="p-2 bg-neutral-800 w-full"
                        id="website"
                        type="website"
                        name="website"
                        placeholder="Website"
                        defaultValue={profileData?.website}

                        // value={web_site || ""}
                        // onChange={(e: any) => setWebsite(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Button
                        type="submit"
                        className=" hover:bg-red-600 w-full p-2.5 rounded-sm"
                        // onClick={() => updateProfile({ username, website, avatar_url })}
                        // disabled={loading}
                      >
                        {"Update"}
                      </Button>

                      <Button className="bg-transparent hover:bg-neutral-800 w-full p-2.5 rounded-sm">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
