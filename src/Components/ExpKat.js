import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export class ExpKat extends Component {
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
Hey there buckaroo. You're always a ray of sunshine with a sprinkle of overthinking gloominess but that's what makes you unique and I wouldn't trade you for anything in the world. Not even the actual Ronald Weasley. Now, here's a little pantun I composed just for you:<hr/>

Li Huan <br/>
the only one <br/>
that I know called Li Huan <br/>
(that's a lie, I know another Li Huan) <br/>
May the Canadian winters <br/>
Be kind to your beanpole body, eh.<br/><br/>

LOL (lots of love), Kat
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}