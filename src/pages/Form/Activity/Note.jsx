import React from "react";

const Note = ({note, setNote}) => {
  return (
    <>
      <div className="Box flex items-center justify-between shadow-lg bg-slate-100 text-black w-[400px] h-14 rounded-xl">
        <h2 className="mr-2 flex ml-[10px] text-black font-semibold">Note</h2>
      </div>
      <textarea  
      value={note} 
      onChange={(e) => setNote(e.target.value)}
      className="w-full resize-none h-[150px] text-black font-semibold outline-none shadow-lg bg-slate-100 rounded-xl border-2 p-[10px]"></textarea>
    </>
  );
};

export default Note;
