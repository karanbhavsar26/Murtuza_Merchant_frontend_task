import OptionModal from './OptionModal';
import { SlOptionsVertical } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';

export default function ContactComponent({ data, setData, setopenConversationDetail, handleDelete, handleOptionClick, handleMarkAsUnread, selectedConvId, optionselectedConvId, showModal, handleCloseModal,setselectedConvId }) {
    const navigate=useNavigate()
    return (<><div className="lg:flex hidden  flex-col gap-2">
        {
            data.map((user) => {
                return (
                    <div className="flex items-center justify-between w-full" key={user.userId}>
                        <div className={`flex w-full justify-between p-2 hover:bg-gray-50 hover:rounded ${selectedConvId == user.userId && 'bg-sky-50'}`} >
                            <div className="flex gap-2 w-full" onClick={() => {
                                let cloneData = [...data]
                                let newData = cloneData?.map(data => {
                                    if (user.userId == data.userId) {
                                        data.markasUnread = false
                                    }
                                    return data
                                })
                                setData(newData)
                                setopenConversationDetail(user);
                                setselectedConvId(user.userId);
                            }}>
                                <img
                                    src={user.profilePictureURL}
                                    className="w-14 h-14 rounded-full"
                                />
                                <div className="w-full px-2">
                                    <h6 className="font-semibold text-lg">{user.name}</h6>
                                    <div className="flex justify-between text-sm  ">
                                        <p className="w-20 truncate text-gray-500 text-sm">{
                                            user?.chat?.slice(-1)?.[0]?.["you"]?.message
                                        }</p>
                                        {(user?.unreadCount > 0 && user?.markasUnread) && <p className="bg-green-500 p-1 rounded-full w-5 h-5 flex justify-center items-center text-white">{user?.unreadCount}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex items-center justify-center " >
                                <SlOptionsVertical color={"lightblue"} className=" cursor-pointer" onClick={() => handleOptionClick(user.userId)}></SlOptionsVertical>
                                {optionselectedConvId == user.userId && <OptionModal
                                    show={showModal}
                                    onClose={handleCloseModal}
                                    onDelete={() => handleDelete(user.userId)}
                                    onMarkAsUnread={() => handleMarkAsUnread(user.userId)}
                                />}
                            </div>

                        </div>
                    </div>
                )
            })
        }
    </div>
    <div className="flex lg:hidden  flex-col gap-2">
        {
            data.map((user) => {
                return (
                    <div className="flex items-center justify-between w-full" key={user.userId}>
                        <div className={`flex w-full justify-between p-2 hover:bg-gray-50 hover:rounded ${selectedConvId == user.userId && 'bg-sky-50'}`} >
                            <div className="flex gap-2 w-full" onClick={() => {
                                let cloneData = [...data]
                                let newData = cloneData?.map(data => {
                                    if (user.userId == data.userId) {
                                        data.markasUnread = false
                                    }
                                    return data
                                })
                                setData(newData);
                                setopenConversationDetail(user);
                                setselectedConvId(user.userId);
                                navigate("/chat",{state:user})

                            }}>
                                <img
                                    src={user.profilePictureURL}
                                    className="w-14 h-14 rounded-full"
                                />
                                <div className="w-full px-2">
                                    <h6 className="font-semibold text-lg">{user.name}</h6>
                                    <div className="flex justify-between text-sm  ">
                                        <p className="w-20 truncate text-gray-500 text-sm">{
                                            user?.chat?.slice(-1)?.[0]?.["you"]?.message
                                        }</p>
                                        {(user?.unreadCount > 0 && user?.markasUnread) && <p className="bg-green-500 p-1 rounded-full w-5 h-5 flex justify-center items-center text-white">{user?.unreadCount}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex items-center justify-center " >
                                <SlOptionsVertical color={"lightblue"} className=" cursor-pointer" onClick={() => handleOptionClick(user.userId)}></SlOptionsVertical>
                                {optionselectedConvId == user.userId && <OptionModal
                                    show={showModal}
                                    onClose={handleCloseModal}
                                    onDelete={() => handleDelete(user.userId)}
                                    onMarkAsUnread={() => handleMarkAsUnread(user.userId)}
                                />}
                            </div>

                        </div>
                    </div>
                )
            })
        }
    </div>
    </>
    )
}