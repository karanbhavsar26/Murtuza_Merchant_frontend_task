import { SlOptionsVertical } from "react-icons/sl";
import { IoVideocamOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlinePlus } from "react-icons/hi";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { MdSend } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";
export default function ChatComponentMobile() {
    const location = useLocation()
    const navigate = useNavigate()

    console.log("location", location?.state)
    const openConversationDetail = location?.state
    return (
        <>
            {
                <div className="flex flex-col justify-between">
                    <header className=" sticky bottom-0">
                        <div className="flex justify-between items-center p-2 bg-gray-100 rounded">
                            <div className="flex gap-2 justify-center items-center">
                                <SlArrowLeft color={"skyblue"} size={12} onClick={() => navigate("/")} />
                                <img
                                    src={openConversationDetail?.profilePictureURL}
                                    className="w-8 h-8 rounded-full"
                                />
                                <div >
                                    <h6 className="font-semibold text-sm">{openConversationDetail?.name}</h6>
                                    <p className="font-light text-xs">Click here for contact info</p>

                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-4">
                                <IoVideocamOutline color={"skyblue"} size={16} />
                                <IoCallOutline color={"skyblue"} size={16} />
                                <SlOptionsVertical color={"skyblue"} size={12} />
                            </div>
                        </div>
                    </header>
                    <main className="h-[85vh] flex items-end  w-full text-right">
                        <div className="flex flex-col gap-1 p-2 overflow-auto w-full items-end">
                            {
                                openConversationDetail?.chat?.map((conv) => {
                                    {
                                        return Object.keys(conv).map((key) => {
                                            if (key != "you") {
                                                return (<div className="flex flex-col  items-start w-full">
                                                    <div className="bg-gray-100 rounded-full p-2 flex flex-col justify-start items-start font-medium max-w-fit min-w-20 text-sm text-left">
                                                        <p>{conv?.[key]?.message}</p>
                                                        <div className="font-light text-gray-500 text-xs">
                                                            {conv?.[key]?.timeStamp}
                                                        </div>
                                                    </div>


                                                </div>)
                                            }
                                            else {
                                                return (<div className="flex flex-col  items-end w-full">
                                                    <div className="bg-green-100 rounded-full p-2 flex flex-col justify-end items-end max-w-fit font-medium min-w-20 text-sm text-right">
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
                                <HiOutlinePlus color={"gray"} size={16} />
                            </div>
                            <div className=" rounded-full border p-2 ">
                                <MdOutlineKeyboardVoice color={"gray"} size={16} />
                            </div>
                            <div className=" rounded-full border p-2 flex-auto flex">
                                <div className="flex-auto">

                                </div>
                                <MdSend color={"gray"} size={12} />
                            </div>
                        </div>
                    </footer>
                </div>

            }

        </>
    )
}