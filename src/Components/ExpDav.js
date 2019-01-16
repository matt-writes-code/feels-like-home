import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export class ExpDav extends Component {
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
I love you a whole lot sayang, and I feel so blessed to know you. You’re one of those people in my life who – even though I don’t see you half as often as I’d like – every time I think of you, I smile. <hr/>
Your optimism, romantic heart, dreamer’s soul, all around beautiful existence, make me happier. <hr/>
I’m very excited for your new stage in life, and I absolutely cannot wait for all of the amazing things you’re going to accomplish. Keep seeing the beauty in everything you do; those rose-coloured glasses are a blessing to everyone around you. I’m proud and honoured to call you my friend. Love you so so much.<br/><br/>
Davina.
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}