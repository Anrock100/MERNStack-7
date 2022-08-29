import React from "react";
import image1 from './image1.JPG';

function Form1(){
    return(
        <div>
            <h3>Web Form-1</h3>
            <p>ID : <input type='number'/></p>
            <p>NAME : <input type='text'/></p>
            <p>EMAIL : <input type='email'/></p>
            <p>PASSWORD : <input type='password'/></p>
            <p>GENDER : 
                <input type='radio' name='rb1' checked /> MALE | 
                <input type='radio' name='rb1' /> FEMALE | 
                <input type='radio' name='rb1' /> OTHERS 
            </p>
            <p>HOBBIES : 
                <input type='checkbox' name='chk1' /> READING | 
                <input type='checkbox' name='chk2' /> PLAYING | 
                <input type='checkbox' name='chk3' /> OTHERS 
            </p>
            <p>QUALIFICATION : 
                <select>
                    <option>SEE</option>
                    <option>10+2</option>
                    <option>Bachelor</option>
                    <option>Master</option>
                    <option>Others</option>
                </select>
            </p>
            <p>PHOTO : <input type='file'/></p>
            <p>COMMENTS : 
                <textarea rows='4' cols='40'/>
            </p>
            <input type='hidden'/>
            <p>
                <input type='button' value='Click Me'/>
                <input type='reset' value='Refresh'/>
                <input type='submit' value='SEND'/>
                <input type='image' src={image1} alt='Image 1'/>
            </p>
        </div>
    );
}
export default Form1;