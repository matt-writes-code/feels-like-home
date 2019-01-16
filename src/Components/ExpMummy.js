import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export class ExpMummy extends Component {
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
        <Button color="warning" size="lg" onClick={this.toggle} style={{ marginBottom: '1rem' }}></Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
Don't make light of oneself because everyone has limitless potentials. <br/><br/>
The more we give, the more we accomplish.
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}