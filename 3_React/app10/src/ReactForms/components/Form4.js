import React, { useState } from "react";

function Form4() {
    const [txtID, setID] = useState();
    const [txtName, setName] = useState();
    const [txtEmail, setEmail] = useState();
    const [gender, setGender] = useState();
    const [reading, setReading] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [others, setOthers] = useState(false);
    const [qualification, setQualification] = useState();
    const [txtComment, setComment] = useState();
    const [selectedFile, setSelectedFile] = useState();

    var handleSubmit = (event) => {
        event.preventDefault();
        console.log("ID : " + txtID.toString());
        console.log("NAME : " + txtName);
        console.log("EMAIL : " + txtEmail);
        console.log("GENDER : " + gender);
        console.log("HOBBIES READING : " + reading);
        console.log("HOBBIES PLAYING : " + playing);
        console.log("HOBBIES OTHERS : " + others);
        console.log("QUALIFICATION : " + qualification);
        console.log("COMMENTS : " + txtComment);
        console.log("PHOTO FILE : " + selectedFile.name);
        //call restapi and post data to insert
    }

    return (
        <div>
            <h3>WebForm-4</h3>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="id">ID : </label>
                    <input type='number' name='txtID' id='txtID' value={txtID} onChange={(e) => setID(e.target.value)} />
                </p>
                <p>
                    <label htmlFor="id">NAME : </label>
                    <input type='text' name='txtName' id='txtName' value={txtName} onChange={(e) => setName(e.target.value)} />
                </p>
                <p>
                    <label htmlFor="txtEmail">EMAIL : </label>
                    <input type='text' name='txtEmail' id='txtEmail' value={txtEmail} onChange={(e) => setEmail(e.target.value)} />
                </p>

                <p>GENDER :
                    <input
                        type="radio"
                        value="male"
                        name="gender"
                        onChange={(e) => setGender(e.target.value)}
                        checked
                    />
                    Male | 
                    <input
                        type="radio"
                        value="female"
                        name="gender"
                        onChange={(e) => setGender(e.target.value)}
                    />
                    Female | 
                    <input
                        type="radio"
                        value="other"
                        name="gender"
                        onChange={(e) => setGender(e.target.value)}
                    />
                    Others
                </p>
                <p>HOBBIES :
                    <input type="checkbox" id="chkReading" name="hobbies1" value={true} onChange={(e) => setReading(e.target.value)} />
                    <label htmlFor="chkReading">Reading</label>
                    <input type="checkbox" id="chkPlaying" name="hobbies2" value={true} onChange={(e) => setPlaying(e.target.value)} />
                    <label htmlFor="chkPlaying">Playing</label>
                    <input type="checkbox" id="chkOther" name="hobbies3" value={true} onChange={(e) => setOthers(e.target.value)} />
                    <label htmlFor="chkOther">Other</label>
                </p>
                <p>QUALIFICATION : 
                    <select name="qualification" id="qualification" onChange={(e)=> setQualification(e.target.value)}>
                        <option value='SEE'>SEE</option>
                        <option value='plus2'>10+2</option>
                        <option value='bachelor'>Bachelors</option>
                        <option value='master'>Masters</option>
                        <option value='other'>Others</option>
                    </select>
                </p>
                <p>COMMENTS : <textarea rows='5' cols='20' value={txtComment} onChange={(e) => setComment(e.target.value)} /></p>
                <p>PHOTO : <input type='file' onChange={(e) => setSelectedFile(e.target.files[0])} /></p>
                <input type="hidden" name="txtHidden" value="23232323" />
                <p>
                    <input type="submit" name="submit" value="Submit" />
                    <input type="reset" name="reset" value="Reset" />
                    <input type="button" name="ok" value="OK" />
                </p>
                
            </form>
        </div>
    );
}
export default Form4;