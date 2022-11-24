import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import contactImg from "../assets/img/contact-img.svg"


export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''

    }
    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }
    

    const handleSubmit = async(e) => {
        e.preventDefault();
        setButtonText('Sending');
        let response = await fetch('http://localhost:5000/contact', {
            method: "POST",
            headers: {
                'Content-Type': "Application/jason;charset=uft-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText('Send');
        let result =response.jason();
        setFormDetails(formInitialDetails);
        if(result.code === 200) {
            setStatus({success:true, message:'Message sent successfully'})
        }else {
            setStatus({success:false, message:'Something went wrong, please try again later.'})
        }
    }


    return (
        <section className="contact" id="connect">
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                       <div>
                        <h2>So,</h2><p>Feel free to get in touch via social media or mail for some collaboration ,freelancing or for a cup of tea.</p>
                        <p>You can directly mail me here too..</p>
                       </div>
                       <div className="d-flex gap-4"><h2><i class="bi bi-envelope"></i></h2><p className="py-3">mandeerab20@gmail.com</p></div>
                    </Col>
                    <Col md={6}>
                        <h2> Contact Form </h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col className="px-1" sm={6}>
                                    <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col className="px-1" sm={6}>
                                    <input type='text' value={formDetails.lastName} placeholder='Last Name' onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col className="px-1" sm={6}>
                                    <input type='email' value={formDetails.email} placeholder='Email Address' onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col className="px-1" sm={6}>
                                    <input type='tel' value={formDetails.phone} placeholder='Phone Number' onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col>
                                <textarea rows="6"  value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)}/>
                                <button type="submit"><span>{buttonText}
                                </span></button>
                                </Col>
                                {
                                    <Col>
                                    <p className={status.success ===false ? 'danger':'success'}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Contact;