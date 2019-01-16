import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card, CardImg } from 'reactstrap';
import memory07 from "../img/memory07.jpg";

export class Exp extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Button color="success" size="lg" onClick={this.toggle} style={{ marginTop: '1rem', marginBottom: '1rem' }}></Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
			        <CardImg top width="100%" src={memory07} alt="Card image cap" />
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}