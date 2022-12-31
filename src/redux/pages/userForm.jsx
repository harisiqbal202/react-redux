import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { fetchUser } from "../api/data";

function UserForm() {
  const [state, setState] = useState({
    id: 0,
    name: "",
    pass: "",
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    // console.log(fetchUser());
  }, []);

  function handleSubmit() {}
  return (
    <>
      <Form onSubmit={handleSubmit} className="">
        <Row className="row-cols-4 g-3 p-2 align-items-center">
          <Col>
            <Label className="visually-hidden" for="exampleEmail">
              Email
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="name"
              type="text"
              onChange={(e) => setState(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="row-cols-4 g-3 p-2 align-items-center">
          <Col>
            <Label className="visually-hidden" for="examplePassword">
              Password
            </Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="passsword  "
              type="password"
              onChange={(e) => setState(e.target.value)}
            />
          </Col>
        </Row>

        <Row className="p-2">
          <Col>
            <Button>Submit</Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default UserForm;
