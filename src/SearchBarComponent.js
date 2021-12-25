import * as React from "react";
import "./SearchBarComponent.css";
import { Form } from "react-bootstrap";

function SearchBarComponent(props) {
  return (
    <div>
      <div className="text_banner">
        <p className="text_banner_1">Our community of elite WordPress</p>
        <p className="text_banner_2">development experts</p>
        <p className="text_banner_3">
          We've designed a rigorous vetting process that ensures you only work
          with
        </p>
        <p className="text_banner_4">the best possible WordPress talent.</p>
      </div>

      <Form
        className="row row-cols-lg-auto
        g-3
        align-items-center
        mt-lg-5
        ms-lg-5
        ps-lg-4
        me-sm-4
        mt-sm-5
        ms-sm-4"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ display: "block", fontFamily: "monospace" }}>
            Email address
          </Form.Label>
          <Form.Control
            className="search_bar"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default SearchBarComponent;
