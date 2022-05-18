import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
    const [isExpanded, setExpanded]=useState(false);
    var [item, updateItem] = useState({
        title:"",
        content:""
    });
    function handleChange(e){
        const {name, value}=e.target;
        updateItem(prevItem=>{
            return {
            ...prevItem,
            [name]:value
            }
        })
    }
    function expand(){
        setExpanded(true);
    }
  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input 
        name="title" 
        placeholder="Title" 
        value={item.title} 
        onChange={handleChange}/>:null}
        <textarea 
        name="content" 
        onClick={expand} 
        placeholder="Take a note..." 
        rows={isExpanded?3:1} 
        value={item.content} 
        onChange={handleChange}/>
        <Zoom in={true}>
        <Fab onClick={(event) => {
                props.click(item);
                updateItem(()=>{
                    return {
                        title:"",
                        content:""
                    }
                });
                event.preventDefault();
            }
            }><AddIcon/>
            </Fab>
            </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

