// OptionModal.js
import React from 'react';

const OptionModal = ({ show, onClose, onDelete,onMarkAsUnread }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="absolute shadow-xl w-32 z-10 top-10 right-0 flex items-center justify-center flex-col bg-white px-2 py-2 rounded-lg gap-2">
        {/* <h2 className="text-lg font-semibold mb-4">Options</h2> */}
        <div  className="hover:bg-gray-50 w-full p-2"
          onClick={()=>onMarkAsUnread()} 
        >
          Mark as Unread
        </div >
        <div  className="hover:bg-gray-50 w-full p-2"
          onClick={()=>onDelete()} 
        >
          Delete
        </div >
        <div   className="hover:bg-gray-50 w-full p-2"
          onClick={()=>onClose()} 
        >
          Cancel
      </div>
    </div>
  );
};

export default OptionModal;
