import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export class ExpNic extends Component {
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
I've never formally written one of these for anyone before so I think you're the first proud recipient of a written farewell/good luck wish from me! <br/><br/>
and since I did not get the chance to do so before you left Canada for the first time last year, consider this a double package LOL. 
I don't know what to say actually except the usual "good luck" and "all the best" so I shall go ahead and wish you the both of that hahahaha! <hr/>
You have us on "The Revival" so we are just one text away if you miss us :P <hr/>
I've never realised this, but we've never had a picture of the both of us together. Which is quite surprising really. If you're reading this and you've already gotten a picture of the both of us together, please ignore the previous sentence HAHAHAHA. <br/><br/>
Jokes aside I sincerely wish you all the best and may your passion and motivation guide you to wherever you want to be, Lihuan. <br/><br/>
Have a great time in Canada, please take good care of yourself when you're there and we will see you soon! <br/><br/>

Love, <br/>
Nick. <br/><br/>

P.S. drinks lots of water! <br/>
P.P.S. Asian parent joke
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}