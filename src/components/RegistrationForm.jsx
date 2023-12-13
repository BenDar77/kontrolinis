import { useState } from 'react';
import Navbar from './Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bloodGroup, setbloodGroup] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {

      const newUser = {
        firstName,
        lastName,
        age,
        gender,
        bloodGroup

      };


      const response = await fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {

        const responseData = await response.json();
        console.log('Data saved successfully:', responseData);

        // išvalau formos laukus
        setFirstName("");
        setLastName("");
        setAge("");
        setGender("");
        setbloodGroup("");
      } else {

        console.error('Failed to save data');
      }
    } catch (error) {

      console.error('Error occurred during data submission:', error);
    }


  };

  return (
    <div>
      <Navbar />
      <div className="registration-form">

        <h2 className="text-center mt-5">Register to become a donor</h2>

        <div className='form form-control p-1'>
          <form onSubmit={handleRegistration}
            className='m-3 '>
            <input
              type="text"
              placeholder="Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <Form.Select value={gender} onChange={(e) => setGender(e.target.value)} size="sm" aria-label="Default select example ">
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Form.Select>
            <Form.Select value={bloodGroup} onChange={(e) => setbloodGroup(e.target.value)} size="sm" aria-label="Default select example ">
              <option value="">Select your blood group:</option>
              <option value="AB+">AB+</option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="O+">O+</option>
              <option value="AB-">AB-</option>
              <option value="A-">A-</option>
              <option value="B-">B-</option>
              <option value="O-">O-</option>

            </Form.Select>


            <Button variant="primary" type="submit">
              Register
            </Button>

          </form>

        </div>
        <img src="./src/images/blood.png" alt="blood" className="image--blood" />
      </div>
    </div>

  );
};

export default RegistrationForm;
