"use client";
import { useState, useEffect, Fragment } from "react";
import { useUser } from "@supabase/auth-helpers-react";
import { useParams } from "next/navigation";
import { Dialog, Transition } from "@headlessui/react";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useFormState } from "react-dom";
import supabase from "../../../utils/supabase";
import { useAuth } from "../hooks/Auth";





export default function Account({
  session,
  web_site,
  desc,
  isEdit,
  onClose,
  profileData,
  refresh
}: any) {
  const { profile } = useParams();
const {user} = useAuth()


  async function submitFormAction(prevState: any, formData: FormData) {

    
    const updates = {
      id: user?.id,
      // username: username || profile,
      description: formData.get("description"),
      website: formData.get("website"),
      updated_at: new Date().toISOString(),
    };
    try {
      const { data, error } = await supabase
        .from("profiles")
        .upsert({
          id: user?.id,
          description: formData.get("description"),
          website: formData.get("website"),
          updated_at: new Date().toISOString(),
        })
        .select();
      refresh()
      
    } catch (e) {
      console.log(e);
    }
  }

  const [formState, formAction] = useFormState(submitFormAction, {
    message: "",
    errors: undefined,
    fieldValues: {
      id: session?.id,
      website: "",
      description: "",
    },
  });


  useEffect(() => {

  },[user,session])
  

  
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
                    <Input
                      isDisabled
                      type="email"
                      label="Email"
                      value={session?.email}
                    />

                    <Input
                      type="text"
                      defaultValue={profileData?.username}
                      className="bg-default-100 bg-opacity-40"
                      name="username"
                      id="username"
                      variant="underlined"
                      label="Username"
                    />

                    <Textarea
                      label="Description"
                      className="bg-default-100 bg-opacity-40"
                      name="description"
                      variant="underlined"
                      id="description"
                      defaultValue={profileData?.description}
                    />

                    <Input
                      startContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-small">
                            https://
                          </span>
                        </div>
                      }
                      defaultValue={profileData?.website}
                      name="website"
                      className="bg-default-100 bg-opacity-40"
                      variant="underlined"
                      label="Website"
                      id="website"
                    />

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
