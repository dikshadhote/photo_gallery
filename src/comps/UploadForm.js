import React,{useState} from 'react';
const UploadForm = () => {

    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);

    const types=['image/png','image/jpeg'];
    const changeHandler = (e) =>
        {
            let selectedFile=e.target.files[0];
              if(selectedFile && types.includes(selectedFile.type))
              {   setError('');
                  setFile(selectedFile);      
              }
              else{
                  setFile(null);
                  setError("You have selected invalid file type.Only .jpeg and .png files are allowed");
              }
        }
    return(
       <form>
            <input type="file" onClick={changeHandler} />
            <div class="output">
            { error && <div className="error">{ error }</div>}
            </div>
       </form> 
    )

}
export default UploadForm;