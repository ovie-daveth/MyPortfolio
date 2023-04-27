import React, {useState} from 'react'
import './register.scss'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const nav = useNavigate();
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [residence, setResidence] = useState('')
    const [isStudent, setIsStudent] = useState("");
    const [course, setCourse] = useState("");
    const [experience, setExperience] = useState("");
    const [source, setSource] = useState("");
    const [willingToLearn, setWillingToLearn] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault(e)

        console.log("Form submitted with data: ", {
            name,
            email,
            phone,
            residence,
            isStudent,
            course,
            experience,
            source,
            willingToLearn,
          });

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
        method: "post",
        headers: myHeaders,
        redirect: "follow",
        body: JSON.stringify({"fields":[{"field":"email","value": email},{"field":"fullname","value":name},{"field":"phone","value":phone},{"field":"residence","value": residence},{"field":"isStudent?","value": isStudent},{"field":"course","value": course},{"field":"experience","value":experience},{"field":"GetInfoFrom","value":source},{"field":"3hoursTimeframe","value":willingToLearn}]})
        };

    fetch("https://v1.nocodeapi.com/davet/nForms/swupvbibpqqRntkD/data", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    toast.success("Form submitted")
    nav("/payment")
    }

  return (
    <div className='registerPage'>
      <h1>COHORT 3 REGISTRATION FORM</h1>
      <small>Begin your career with us</small>
      <form onSubmit={handleSubmit}>
        <div className="form___data">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='eg John Doe' />
            <small>Start with the surname</small>
        </div>
        <div className="form___data">
            <label htmlFor="email">Email</label>
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='eg johndoe3@gmail.com' />
        </div>
        <div className="form___data">
            <label htmlFor="number">Phone Number</label>
            <input type="text" value={phone} onChange={(e) =>setPhone(e.target.value)} placeholder='eg 08123456789' />
            <small>WhatsaAPP preferably</small>
        </div>
        <div className="form___data">
            <label htmlFor="residence">Residence</label>
            <input type="text" value={residence} onChange={(e)=> setResidence(e.target.value)} placeholder='eg Warri, Delta State' />
            <small>State only your city and state</small>
        </div>
        <div className="form___data">
            <p>Are You a Student?</p>
            <label htmlFor="student"> 
          <input
            type="radio"
            id="student_yes"
            name="student"
            value="yes"
            checked={isStudent === "yes"}
            onChange={(e) => setIsStudent(e.target.value)}
          />
          Yes
        </label>
        <label htmlFor="student_no"> 
          <input
            type="radio"
            id="student_no"
            name="student"
            value="no"
            checked={isStudent === "no"}
            onChange={(e) => setIsStudent(e.target.value)}
          />
          No
        </label>
        </div>
        <div className="form___data">
            <p>Which Course are you applying for?</p>
            <label htmlFor="frontend"> 
          <input
            type="radio"
            id="frontend"
            name="course"
            value="frontend"
            checked={course === "frontend"}
            onChange={(e) => setCourse(e.target.value)}
          />
          Frontend
        </label>
        <label htmlFor="backend_django"> 
          <input
            type="radio"
            id="backend_django"
            name="course"
            value="backend_django"
            checked={course === "backend_django"}
            onChange={(e) => setCourse(e.target.value)}
          />
          Backend(DJngo)
        </label>
        <label htmlFor="backend_nodejs"> 
          <input
            type="radio"
            id="backend_nodejs"
            name="course"
            value="backend_nodejs"
            checked={course === "backend_nodejs"}
            onChange={(e) => setCourse(e.target.value)}
          />
          Backend(Nodejs)
        </label>
        </div>
        <div className="form___data">
            <p>What is experience in programming?</p>
            <label htmlFor="newbie"> 
          <input
            type="radio"
            id="newbie"
            name="experience"
            value="newbie"
            checked={experience === "newbie"}
            onChange={(e) => setExperience(e.target.value)}
          />
          Newbie
        </label>
        <label htmlFor="intermediate"> 
          <input
            type="radio"
            id="intermediate"
            name="experience"
            value="intermediate"
            checked={experience === "intermediate"}
            onChange={(e) => setExperience(e.target.value)}
          />
          Intermediate
        </label>
        </div>
        <div className="form___data">
            <p>How did you hear about us?</p>
            <label htmlFor="facebook"> 
          <input
            type="radio"
            id="facebook"
            name="source"
            value="facebook"
            checked={source === "facebook"}
            onChange={(e) => setSource(e.target.value)} />
            Facebook
            </label>
            <label htmlFor="twitter"> 
          <input
            type="radio"
            id="twitter"
            name="source"
            value="twitter"
            checked={source === "twitter"}
            onChange={(e) => setSource(e.target.value)} />
            Twitter
            </label>
            <label htmlFor="whatsapp"> 
          <input
            type="radio"
            id="whatsapp"
            name="source"
            value="whatsapp"
            checked={source === "whatsapp"}
            onChange={(e) => setSource(e.target.value)} />
            WhatsApp
            </label>
            <label htmlFor="instagram"> 
          <input
            type="radio"
            id="instagram"
            name="source"
            value="instagram"
            checked={source === "instagram"}
            onChange={(e) => setSource(e.target.value)} />
            Instagram
            </label>
            <label htmlFor="linkedin"> 
          <input
            type="radio"
            id="linkedin"
            name="source"
            value="linkedin"
            checked={source === "linkedin"}
            onChange={(e) => setSource(e.target.value)} />
            Linkedin
            </label>

        </div>
        <div className="form___data">
            <p>Are you willing to spend minimum of 3 hours daily to learn coding?</p>
            <label htmlFor="willing_yes"> 
          <input
            type="radio"
            id="wiling_yes"
            name="willing"
            value="yes"
            checked={willingToLearn === "yes"}
            onChange={(e) => setWillingToLearn(e.target.value)}
          />
          Yes
        </label>
        <label htmlFor="willing_no"> 
          <input
            type="radio"
            id="willing_no"
            name="willing"
            value="no"
            checked={willingToLearn === "no"}
            onChange={(e) => setWillingToLearn(e.target.value)}
          />
          No
        </label>
        </div>
        <div className="form___data">
           <input type="submit" value='Submit'  />
        </div>
      </form>
    </div>
  )
}

export default Register
