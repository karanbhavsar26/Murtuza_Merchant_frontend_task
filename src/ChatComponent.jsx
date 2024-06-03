import { SlOptionsVertical } from "react-icons/sl";
import { IoVideocamOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlinePlus } from "react-icons/hi";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { MdSend } from "react-icons/md";
export default function ChatComponent({ openConversationDetail }) {
    return (
        <>
            {
                openConversationDetail && <div className="hidden lg:flex flex-col justify-between">
                    <header className=" p-4 sticky bottom-0">
                        <div className="flex justify-between items-center p-4 bg-gray-100 rounded">
                            <div className="flex gap-2 justify-center items-center p-1">
                                <img
                                    src={openConversationDetail?.profilePictureURL}
                                    className="w-14 h-14 rounded-full"
                                />
                                <div >
                                    <h6 className="font-semibold text-lg">{openConversationDetail?.name}</h6>
                                    <p className="font-light">Click here for contact info</p>

                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-4">
                                <IoVideocamOutline color={"skyblue"} size={24} />
                                <IoCallOutline color={"skyblue"} size={24} />
                                <SlOptionsVertical color={"skyblue"} size={20} />
                            </div>
                        </div>
                    </header>
                    <main className="h-[75vh] flex items-end  w-full text-right">
                        <div className="flex flex-col gap-1 p-4 overflow-auto w-full items-end">
                            {
                                openConversationDetail?.chat?.map((conv) => {
                                    {
                                        return Object.keys(conv).map((key) => {
                                            if (key != "you") {
                                                return (<div className="flex flex-col  items-start w-full">
                                                    <div className="bg-gray-100 rounded-full p-4 flex flex-col justify-start items-start font-medium max-w-fit min-w-20 text-right">
                                                        <p>{conv?.[key]?.message}</p>
                                                        <div className="font-light text-gray-500 text-xs">
                                                            {conv?.[key]?.timeStamp}
                                                        </div>
                                                    </div>


                                                </div>)
                                            }
                                            else {
                                                return (<div className="flex flex-col  items-end w-full">
                                                    <div className="bg-green-100 rounded-full p-4 flex flex-col justify-end items-end max-w-fit font-medium min-w-20 text-left">
                                                        <p>{conv?.[key]?.message}</p>
                                                        <div className="font-light text-gray-500 text-xs">
                                                            {conv?.[key]?.timeStamp}
                                                        </div>
                                                    </div>
                                                </div>)
                                            }
                                        })
                                    }
                                })
                            }
                        </div>
                    </main>
                    <footer className=" p-4 sticky bottom-0">
                        <div className="flex gap-2">
                            <div className=" rounded-full border p-2 ">
                                <HiOutlinePlus color={"gray"} size={24} />
                            </div>
                            <div className=" rounded-full border p-2 ">
                                <MdOutlineKeyboardVoice color={"gray"} size={24} />
                            </div>
                            <div className=" rounded-full border p-2 flex-auto flex">
                                <div className="flex-auto">

                                </div>
                                <MdSend color={"gray"} size={24} />
                            </div>
                        </div>
                    </footer>
                </div>

            }

        </>
    )
}