import React from 'react'
import {Form } from 'react-bootstrap';

const DatePicker =()=>{



        return(
         
            <div >
                <div className="row">
                    <div >
                        <Form.Group controlId="dob">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                        </Form.Group>
                    </div>
                </div>
            </div>
      
        )
    
    
}

export default DatePicker;