// import React, { useState } from 'react'
// import ProgressBar from  './ProgressBar';


// const UploadForm = () => {
//     const [file, setFile] = useState(null);
//     const [error, setError] = useState(null);

//     const types = ['image/png', 'image/jpeg'];

//     const changeHandler = (e) => {
//         let selected = e.target.files[0];

//         if (selected && types.includes(selected.type)) {
//             setFile(selected);
//             setError('');
//         } else {
//             setFile(null);
//             setError('Please select a .png or .jpeg image file');
//         }
//     }

//     return (
//         <form>
//             <input className="photo-upload-button" type="file" onChange={changeHandler} />  
//             <div className="output">
//                 {/* if left conditional is true, then output left conditional */}
//                 { error && <div className="error">{ error }</div> }
//                 { file && <div> { file.name }</div> }
//                 { file && <ProgressBar file={file} setFile={setFile}/> }
//             </div>
//         </form>
//     )
// }

// export default UploadForm
