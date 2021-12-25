import * as React from "react";
import "./TeacherRow.css";
import "react-bootstrap";
import { Button, Col, Container, Row } from "react-bootstrap";


function TeacherRow(props) {

  const row = props.teacher_row;

  return (  
  <Container className="main-container p-4 mt-lg-5 mt-sm-5">
  <Row>
    <Col md="3">
    
    <Row>
        <img
        src={row.imgUrl}
        alt="unable to download"
        style={{ width: "250px", height: "250px" }}
        />
     </Row>

                <Row className="ps-3 pt-3">
                  <Button
                    variant="dark"
                    style={{ width: "230px", height: "50px" }}
                  >
                    VIEW {row.name}
                  </Button>
                  {""}
                </Row>


    </Col>




    <Col>
           
      <Row>
        <h3 style={{fontFamily: "serif"}}>{row.name}
          <img className="i" src={"https://upload.wikimedia.org/wikipedia/commons/2/2c/Star-icon.png"} />
        {row.rating}</h3>
      </Row>

      <Row>
        <p>{row.dateDescription}
           <img className="i" src="https://media.istockphoto.com/vectors/map-pin-vector-glyph-icon-vector-id1193451471?k=20&m=1193451471&s=612x612&w=0&h=ve7JRaMvw6L1HBiDOTVwfbhHALPPH-nCMCgG0Z_z5NY="/>
   
        {row.years}</p>
      </Row>



      <Row>
       <Col style={{display:"inline"}}>
        <p>
        <img className="i" src="https://media.istockphoto.com/vectors/map-pin-vector-glyph-icon-vector-id1193451471?k=20&m=1193451471&s=612x612&w=0&h=ve7JRaMvw6L1HBiDOTVwfbhHALPPH-nCMCgG0Z_z5NY="/>

       
          {row.location}           
        </p>
        </Col>
        <Col style={{display:"inline"}}>
        <p> 
   <img className="i" src="data:image/png;base64,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"/>
  

     
      
          {row.languages}       
        </p>
        </Col>
        <Col style={{display:"inline"}}>
       <p>
          <img className="i" src="https://static.vecteezy.com/system/resources/thumbnails/000/441/750/small/Basic_Element_15-30__28586_29.jpg"/>
          {row.noOfProjectsCompleted}    
        </p>
        </Col>
        <Col style={{display:"inline"}}>
        <p>      
      
        
          <img className="i" src="https://cdn4.iconfinder.com/data/icons/business-office-17/512/10-512.png" alt="no image"/>
          {row.noOfClients}
        </p>
        </Col>
      </Row>




      <Row>
        <p>{row.description}</p>
      </Row>



      <Row>
        {row.tags.map((tag)=>{
          return <Col><a href="">{tag.title}</a></Col>
        })}
         <Col> <a  style={{paddingBottom: "2px"}} href="">Acessibilty</a> </Col>
      </Row>

    </Col>
  </Row>
  </Container>    
  );
}

export default TeacherRow;
