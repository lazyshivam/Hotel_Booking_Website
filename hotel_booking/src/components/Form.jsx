import React, { useState, useEffect } from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  
  MDBBtn,
  MDBContainer,
} from "mdb-react-ui-kit";

export default function Form(props) {
  const [formValue, setFormValue] = useState({
    name: "",
    numberOfRoom: "",
    numberOfPeople: "",
    email: "",
    checkIn: "",
    checkOut: "",
    phoneNumber: "",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const [limit, setLimit] = useState(false);
  const [btnName, setBtnName] = useState("Book Now");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (limit) {
      return props.setShowAlert(true);
    }
    const postURL = "http://localhost:4000/api/client/";
    fetch(postURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValue),
    }).then(async(result) => {
      if(result.ok){
        // Once posted, the user will be notified
        alert("Your Form Submitted Successfully.");
      
        setFormValue({
          name: "",
          numberOfRoom: "",
          numberOfPeople: "",
          email: "",
          checkIn:"",
          checkOut: "",
          phoneNumber: "",
        });

      }
     

      return result.json().then((body) => {
        throw new Error(body.error)
      })
   
    }).catch((error)=>{
     
      if(error.message){
        setLimit(true);
      }
    });
  };
  //for limit booking per day
  var todayDate = new Date().getDate();
  setInterval(() => {
    let updatedDate = new Date().getDate();
    if (todayDate !== updatedDate) {
      setLimit(false);
      setBtnName("Book Now");
      todayDate = updatedDate;
    }
  }, 1000);

  useEffect(() => {
    if (limit) {
      setBtnName("Please Wait");
    }
  }, [limit]);

  const style = {
    position: "relative",
    bottom: "90px",
    backgroundColor: "white ",
    padding: "20px",
    width: "70vw",
  };

  return (
    <>
      <MDBContainer className="form-container" style={style}>
        <div className="mt-2 mb-4">
          <h1>
            Make <span style={{ color: "darkcyan" }}>Reservation</span>{" "}
          </h1>
        </div>
        <form name="myform" onSubmit={handleOnSubmit} method="POST">
          <MDBRow className=" mb-4 mt-4 gap-4 formUtility">
            <MDBCol>
              <MDBInput
                value={formValue.name}
                onChange={onChange}
                name="name"
                required
                type="text"
                label="Your Name"
              />
            </MDBCol>
            <MDBCol>
              <MDBInput
                name="numberOfRoom"
                required
                value={formValue.numberOfRoom}
                onChange={onChange}
                type="number"
                label="Number of rooms"
              />
            </MDBCol>
            <MDBCol>
              <MDBInput
                value={formValue.email}
                name="email"
                required
                onChange={onChange}
                type="email"
                label="Email"
              />
            </MDBCol>
            <MDBCol>
              <MDBInput
                name="numberOfPeople"
                required
                value={formValue.numberOfPeople}
                onChange={onChange}
                type="number"
                label="Number of people"
              />
            </MDBCol>
          </MDBRow>

          <MDBRow className=" mb-4  gap-4 formUtility">
            <MDBCol>
              <MDBInput
                name="phoneNumber"
                required
                value={formValue.phoneNumber}
                onChange={onChange}
                type="tel"
                label="Phone number"
              />
            </MDBCol>
            <MDBCol>
              <MDBInput
                
                value={formValue.checkIn}
                name="checkIn"
                required
                onChange={onChange}
                type="date"
                label="CheckIn date"
              />
            
            </MDBCol>
            <MDBCol>
              <MDBInput
              
                name="checkOut"
                required
                value={formValue.checkOut}
                onChange={onChange}
                type="date"
                label="CheckOut date"
              />
            </MDBCol>
            <MDBCol>
              <MDBBtn
                color="outline-primary"
                // disabled={limit >= 5}
                type="submit"
                block
              >
                {btnName}
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>
    </>
  );
}
