import React, {useEffect, useState} from 'react'

export default function Achedemics() {
  

    const[record , setrecord] = useState([]);

    useEffect(()=>{
        const getUserdata = async()=>{
            const reqData = await fetch("https://video5743call.000webhostapp.com/upload.php");
            const resData = await reqData.json();
            setrecord(resData);
  
        }
        // getUserdata();

    },[]);  

  return (
    
    <div>
      
        <form onSubmit={(e)=>{e.preventDefault()}} action= "" method="post" enctype = "multipart/form-data">
        <input type="file" name="uploadfile" id=""/>
        <input type="submit" value="upload file" name = "submit"/>
        </form>

        {record.map((element,index)=>(
            <div key={index}>
              <a href={element.path}>{element.title}</a>
              
            </div>
            ))
          }
        
    </div>
  )
}
