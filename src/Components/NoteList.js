import React from "react";
import EachNote from "./EachNote";

const NoteList=({notes})=>{
    return ( 
        <>
        
            {notes.map((note,index)=>(
                <EachNote key={index} note={note}/>
            ))};
        
        </>
     );
};
export default NoteList;