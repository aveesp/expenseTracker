import React, { useContext} from 'react';
import { GlobalContext } from "../Context/GlobalState";
import { Formik } from "formik";
import Error from "./Error"
import * as Yup from 'yup';

const AddTransaction = () => {

    const {addTransaction} = useContext(GlobalContext);
    const validationSchema = Yup.object().shape({
        text: Yup.string().min(1, "Must Have a Charactor").max(255, "Must be Shorter Than 255").required("Must Enter a Text"),
        amount: Yup.number().min(-999999999, "Must Have a Number").required("Must Enter a Number")
    })
    
    return (
        <>
             <h3>Add new transaction</h3>
                <Formik 
                    initialValues={{text: "", amount: ""}} 
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting, resetForm  }) =>{
                        setSubmitting(true);

                        console.log(values);
                        addTransaction(values);

                        // alert(JSON.stringify(values, null, 2));
                        resetForm();
                        setSubmitting(false);
                        
                    }}
                >
                    {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) =>(
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label htmlFor="text"><strong>Text</strong></label>
                                <input type="text" name="text" id="text" value={values.text}  onChange={handleChange} onBlur={handleBlur} placeholder="Enter text..." className={touched.text && errors.text ? 'has-error' : null } />
                                <Error touched={touched.text} message={errors.text} />
                            </div>
                            <div className="form-control">
                                <label htmlFor="amount"
                                    ><strong>Amount</strong> <br />
                                    (negative - expense, positive - income)</label
                                >
                                <input type="number" name="amount" id="amount" value={values.amount} onChange={handleChange}  onBlur={handleBlur} placeholder="Enter amount..." className={touched.text && errors.text ? 'has-error' : null } />
                                <Error touched={touched.amount} message={errors.amount} />
                            </div>
                            <button className="btn" type="submit" disabled={isSubmitting}>Add transaction</button>
                        </form>
                    )}
                </Formik>
        </>
    )
}

export default AddTransaction;
