import React, { useEffect, useState } from 'react'
import $ from "jquery";

export default function Achedemics() {
    const [name, setName] = useState();
    const handleChange = (e) => {
        setName(e.target.value);
    };

    const [record, setrecord] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData('uploadfile',name);
        console.log(form)
        $.ajax({
            type: "post",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setrecord(data);
            },
        });
    };

    useEffect(() => {
        const getUserdata = async () => {
            const reqData = await fetch("http://localhost/react%20js/upload.php");
            const resData = await reqData.json();
            setrecord(resData);

        }
        // getUserdata();

    }, []);

    return (
        <div className="App">
            
            <form
                action="http://localhost/react%20js/upload.php"
                method="post"
                onSubmit={(event) => handleSubmit(event)}
            >
                <label htmlFor="name">Name: </label>
                <input
                    type="file"
                    id="name"
                    name="uploadfile"
                    onChange={(event) =>
                        handleChange(event)
                    }
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            <h1>{record}</h1>
        </div>

        // <div>

        //     <form onSubmit={(event) => handleSubmit(event)} action= "http://localhost/react%20js/upload.php" method="post" encType = "multipart/form-data">
        //     <input type="file"  name="uploadfile" id="" value={name} onChange={(event) =>handleChange(event)}/>
        //     <input type="submit" value="upload file"/>
        //     </form>
        //     <h1>{record}</h1>

        //     {/* {record.map((element,index)=>(
        //         <div key={index}>
        //           <a href={element.path}>{element.title}</a>
        //           d
        //         </div>
        //         ))
        //       } */}

        // </div>
    )
}
