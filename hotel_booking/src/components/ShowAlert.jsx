import React from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

export default function ShowAlert(props) {
  const toggleShow = () => props.setShowAlert(!props.showAlert);

  return (
    <>
      <MDBModal
        show={props.showAlert}
        setShow={props.setShowAlert}
        tabIndex="-1"
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle style={{ color: "#E4A11B" }}>
                Warning!
              </MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="warning"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              Daily booking limit reached, Please try another day!
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="warning" onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
