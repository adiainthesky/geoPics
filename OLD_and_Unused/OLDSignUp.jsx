// import React from 'react';
// import validate from './validateInfo';
// import useTripForm from './useTripForm';
// import '../Form.css';

// const Signup = ({ submitForm }) => {
//     const { handleChange, handleSubmit, values, errors } = useTripForm(
//         submitForm,
//         validate
//     );

//     return (
//         <div className='form-content-right'>
//         <form onSubmit={handleSubmit} className='form' noValidate>
//             <h1>
//             Welcome to GeoPics. Lets start by creating an account.
//             </h1>
//             <div className='form-inputs'>
//             <label className='form-label'>Username</label>
//             <input
//                 className='form-input'
//                 type='text'
//                 name='username'
//                 // when you click on lable this will highlight corresponding input area:
//                 id='username'
//                 placeholder='Enter your username'
//                 value={values.username}
//                 onChange={handleChange}
//             />
//             {errors.username && <p>{errors.username}</p>}
//             </div>
//             <div className='form-inputs'>
//             <label className='form-label'>Email</label>
//             <input
//                 className='form-input'
//                 type='email'
//                 name='email'
//                 // when you click on lable this will highlight corresponding input area:
//                 id='email'
//                 placeholder='Enter your email'
//                 value={values.email}
//                 onChange={handleChange}
//             />
//             {errors.email && <p>{errors.email}</p>}
//             </div>
//             <div className='form-inputs'>
//             <label className='form-label'>Password</label>
//             <input
//                 className='form-input'
//                 // this type hides chars as *s
//                 type='password'
//                 name='password'
//                 // when you click on lable this will highlight corresponding input area:
//                 id='password'
//                 placeholder='Enter your password'
//                 value={values.password}
//                 onChange={handleChange}
//             />
//             {errors.password && <p>{errors.password}</p>}
//             </div>
//             <div className='form-inputs'>
//             <label className='form-label'>Confirm Password</label>
//             <input
//                 className='form-input'
//                 type='password'
//                 name='password2'
//                 // when you click on lable this will highlight corresponding input area:
//                 id='password2'
//                 placeholder='Confirm your password'
//                 value={values.password2}
//                 onChange={handleChange}
//             />
//             {errors.password2 && <p>{errors.password2}</p>}
//             </div>
//             <button className='form-input-btn' type='submit'>
//             Sign up
//             </button>
//             <span className='form-input-login'>
//             Already have an account? Login <a href='#'>here</a>
//             </span>
//         </form>
//         </div>
//     );
// };

// export default Signup;