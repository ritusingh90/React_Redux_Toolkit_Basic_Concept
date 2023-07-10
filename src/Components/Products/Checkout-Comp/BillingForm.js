import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


const BillingForm = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="billing-detail-wrap">
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01" className='mb-3'>
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom02" className='mb-3'>
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue="Otto"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="12" controlId="validationCustomUsername" className='mb-3'>
            <Form.Label>Company name (optional) *</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Company Name"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please Enter a Company.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="12" controlId="validationCustomUsername" className='mb-3'>
            <Form.Label>Country *</Form.Label>
            <InputGroup hasValidation>
                <Form.Select aria-label="Default select example" className='form-control'>
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please choose a Country.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="12" controlId="validationCustomUsername" className='mb-3'>
            <Form.Label>Street address *</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Address 1"
                aria-describedby="inputGroupPrepend"
                required
                className='w-100 mb-3'
              />
              <Form.Control
                type="text"
                placeholder="Address 2"
                aria-describedby="inputGroupPrepend"
                required
                className='w-100'
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Street Address.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="12" controlId="validationCustom03" className='mb-3'>
            <Form.Label>Town/City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="12" controlId="validationCustom04" className='mb-3'>
            <Form.Label>District</Form.Label>
            <Form.Control type="text" placeholder="District" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid District.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="12" controlId="validationCustom05" className='mb-3'>
            <Form.Label>Postcode/Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="12" controlId="validationCustom05" className='mb-3'>
            <Form.Label>Phone</Form.Label>
            <Form.Control type="number" placeholder="Enter your Phone Number" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Phone Number.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="12" controlId="validationCustom05" className='mb-3'>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your Email" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Email.
            </Form.Control.Feedback>
          </Form.Group>

        </Row>
        <Button variant='dark' type="submit" className='primary-btn'>Submit Billing Detail</Button>
      </Form>
    );
}

export default BillingForm