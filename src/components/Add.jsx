import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const validationSchema = Yup.object({
	Subject: Yup.string().required("Error"),
	Description: Yup.string().required("Error"),
	Category: Yup.string().required('Error'),


});
 
const Add = () => {


  return(
    <div>
    
    <Formik 
    initialValues={{ Subject: '', Description: '', Category: '' }}
    validationSchema={validationSchema}
    onSubmit={ values => {
      console.log(values);
      axios
      .post('http://localhost:3000/posts',values).then((response) => console.log(response.data))
      
      toast.success('Card is ready!')
    }}
		>
 
    {({ handleSubmit, handleChange, values, errors }) => (
      <div className='divform'>
      <form className='from' onSubmit={handleSubmit}>
      <input className='inputSubject'
      type="text"
						name="Subject"
						placeholder="Subject"
						onChange={handleChange}
						values={values.Subject}
					/>
					{errors.Subject && errors.Subject}
					<input
            className='inputDescription'

						type="text"
						name="Description"
						placeholder="Description"
						onChange={handleChange}
						values={values.Description}
					/>
          <Toaster
  position="top-center"
  reverseOrder={false}
/>
					{errors.Description && errors.Description}
					<select
          className='selectCategory'
						name="Category"
						placeholder="Category"
						onChange={handleChange}
						values={values.Category}
					>
                <option value="Nike">Nike</option>
                <option value="Air">Air Max</option>
            <option value="DunkHigh">Dunk High</option>
            <option value="AirMag">Air Mag</option>
          </select>
					{errors.Category && errors.Category}
					<button className='sumbitBtn' type="submit">Submit</button>
				</form></div>
        
			)}
      
		</Formik></div>
	);
}
export default Add;
