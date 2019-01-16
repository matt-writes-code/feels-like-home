import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export class ExpSan extends Component {
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
It took me a long time to write this because...I was...well...procrastinating. As you can see, nothing much has changed from uni 😂. Matt had to send me a reminder to write this down. I should thank him for that. I am sure he is reading this as he is compiling it. So, thank you Matt 👍 But more than anything, I didn't want to remind myself that you ll be leaving to Canada. <br/><br/>

No words can express how much I will miss you, dude but I guess I ll be..."alright". Anyway, back to this message, always remember if you are struggling in life, "the rainbow only comes after a storm"...And your case, there is always a rainbow regardless of the weather...if you know what I mean 😉 <br/><br/>

I know how much you want us all in Canada and I am honestly sorry I cant join you just yet. But who knows what the future holds for us. Thank you for everything. Our Indonesia backpacking trip (I hope you still remember it 😑) will always hold a special place in my heart. All the best for your future. Go and conquer your dream. Canada awaits you for the second time! I love you, bro. <br/><br/>

Regards, <br/>
Your San <br/>
(Don't worry. I will not call you "daddy" 😂)
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}