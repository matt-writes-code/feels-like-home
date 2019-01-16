import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardColumns,
 CardSubtitle, CardBody } from 'reactstrap';
import {ExpNic} from './ExpNic';
import {ExpKat} from './ExpKat';
import {ExpDav} from './ExpDav';
import {ExpMummy} from './ExpMummy';
import {ExpSan} from './ExpSan';

import kat from "../img/kat.jpg";
import gabe from "../img/gabe.jpg";
import shandel from "../img/shandel.jpg";
import san from "../img/san.jpg";
import ross from "../img/ross.jpg";
import nic from "../img/nic.jpg";
import dav from "../img/dav.jpg";
import sm from "../img/sm.jpg";
import eunice from "../img/eunice.jpg";
import hy from "../img/hy.jpg";
import hy2 from "../img/hy2.jpg";
import anderson from "../img/anderson.jpg";
import zl from "../img/zl.jpg";
import lx from "../img/lx.jpg";
import matt from "../img/matt.jpg";
import kelsey from "../img/kelsey.jpg";
import fam from "../img/fam.jpg";
import fami from "../img/fami.jpg";
import lq from "../img/lq.jpg";

import memory01 from "../img/memory01.jpg";
import memory02 from "../img/memory02.jpg";
import memory03 from "../img/memory03.jpg";
import memory04 from "../img/memory04.jpg";
import memory05 from "../img/memory05.jpg";
import memory06 from "../img/memory06.jpg";

{/*images*/}

export const Cards = (props) => {
  return (
    <CardColumns>
{/*Family*/}
<Card>
        <CardImg top width="100%" src={fam}  alt="Card image cap" />
        <CardBody>
          <CardTitle>Pa</CardTitle>
          <CardText>We will always be proud of and supportive of whatever  you do n wish to achieve in life.</CardText>
        </CardBody>
      </Card>
	  
<Card>
        <CardImg top width="100%" src={fami}  alt="Card image cap" />
        <CardBody>
          <CardTitle>Mummy</CardTitle>
          <CardText>累了，记得转换环境。遇到挫折，<br/>记得多看静思语，你一定能从中找到解决问题的好方法。<br/><br/>
		  尽多少本分，就得多少本事。</CardText>
        </CardBody>
		<ExpMummy/>
      </Card>
	  
{/*memory05*/}
	  <Card>
        <CardImg top width="100%" src={memory05} alt="Card image cap" />
      </Card>
	  
{/*Li Qun*/}
<Card>
    <CardImg top width="100%" src={lq}  alt="Card image cap" />
        <CardBody>	
          <CardTitle>Ge Ge</CardTitle>
          <CardText>
Go enjoy your oyster.
</CardText>
        </CardBody>
      </Card>	  

{/*memory06*/}
	  <Card>
        <CardImg top width="100%" src={memory06} alt="Card image cap" />
      </Card>
	  
{/*Li Xuan*/}
<Card>
    <CardImg top width="100%" src={lx}  alt="Card image cap" />
        <CardBody>	
          <CardTitle>Li Xuan</CardTitle>
          <CardText>
Erge, haiz why do you have to go... Why Canada !! So far...Anyway you better be happy when you get there. Go chase your dreams and hopefully get the PR there and then bring me over hahaha. It's glad to have a brother around to brag about I don't say it out loud but you are a great brother, just don't always nag around, you sound like a mother when you do that. Don't miss me. Call back often and post more photos on instagram (don't get too hard on the photos). <br/><br/> By your one and only, beautiful little sister.
</CardText>
        </CardBody>
      </Card>

{/*hy*/}
	  <Card>
        <CardImg top width="100%" src={hy} alt="Card image cap" />
      </Card>
	  
{/*Heng Yao*/}
<Card>
        <CardImg top width="100%" src={hy2}  alt="Card image cap" />
        <CardBody>	
          <CardTitle>Heng Yao</CardTitle>
          <CardText>
bye
</CardText>
        </CardBody>
      </Card>

{/*Collections
<Card>
	<Exp/>
      </Card>  
*/}

{/*Kat*/}
	  <Card>
        <CardImg top width="100%" src={kat} alt="Card image cap" />
        <CardBody>
          <CardTitle>Kat</CardTitle>
          <CardSubtitle>Remember that time we went to Sekinchan together!? Yeah, me neither.</CardSubtitle>
        </CardBody>
		<ExpKat/>
      </Card>

{/*memory03*/}
	  <Card>
        <CardImg top width="100%" src={memory03} alt="Card image cap" />
      </Card>
	  
{/*Gab*/}
<Card>
        <CardImg top width="100%" src={gabe} alt="Card image cap" />
        <CardBody>
          <CardTitle>Gabe</CardTitle>
          <CardText>Hey Li Huan, thank you for being a supportive friend! All the best with your future endeavors!!!</CardText>
        </CardBody>
      </Card>

{/*memory01*/}
	  <Card>
        <CardImg top width="100%" src={memory01} alt="Card image cap" />
      </Card>
	  
{/*Shandel*/}
<Card>
        <CardImg top width="100%" src={shandel} alt="Card image cap" />
        <CardBody>
          <CardTitle>Shandel</CardTitle>
          <CardText>Dearest Li Juan, <br/><br/>

5 years come and go in the blink of an eye, in a heartbeat, in one breath. And a thousand moments therein. I am not exactly a master of words, nor am I particularly very good at expressing my feelings, but perhaps less is sometimes more. In short, thank you, you wonderful person, for sharing a lot of moments with me, thank you for being my friend and a great source of support. I am eternally grateful for your friendship, honesty, your sense of humour, your steadfastness, and you! May your heart always be full in whatever you choose to do. Stay you, stay gold. <br/><br/>

Je t’aime pour toujours, mon amie,<br/>
Shandel Candle.</CardText>
        </CardBody>
      </Card>

{/*memory02*/}
	  <Card>
        <CardImg top width="100%" src={memory02} alt="Card image cap" />
      </Card>
	  
{/*San*/}
<Card>
        <CardImg top width="100%" src={san} alt="Card image cap" />
        <CardBody>
          <CardTitle>San</CardTitle>
          <CardText>Hi Li Huan aka Liam</CardText>
        </CardBody>
		<ExpSan/>
      </Card>

{/*memory04*/}
	  <Card>
        <CardImg top width="100%" src={memory04} alt="Card image cap" />
      </Card>
	  
{/*Ross*/}
<Card>
        <CardImg top width="100%" src={ross} alt="Card image cap" />
        <CardBody>
          <CardTitle>Ross</CardTitle>
          <CardText>Hey Li Huan, <br/>
You have a beautiful soul and you never fail to touch the hearts and lives of people around you. <br/><br/>
Gonna miss you. But at the same time wishing you all the best in Canada. <br/><br/>
Go be a blessing :)</CardText>
        </CardBody>
      </Card>
	  
{/*Davina*/}
<Card>
        <CardImg top width="100%" src={dav} alt="Card image cap" />
        <CardBody>
          <CardTitle>Davina</CardTitle>
          <CardText>Li Huan
</CardText>
        </CardBody>
		<ExpDav/>
      </Card>
	  
{/*Suet Meng*/}
<Card>
        <CardImg top width="100%" src={sm}  alt="Card image cap" />
        <CardBody>
          <CardTitle>Suet Meng</CardTitle>
          <CardText>All the best in Canada, you chosen Huan!</CardText>
        </CardBody>
      </Card>
	  
{/*Nic*/}
<Card>
        <CardImg top width="100%" src={nic}  alt="Card image cap" />
        <CardBody>
          <CardTitle>Nic</CardTitle>
          <CardText>Lihuan!
</CardText>
        </CardBody>
		<ExpNic/>
      </Card>
	  
{/*Eunice*/}
<Card>
        <CardImg top width="100%" src={eunice}  alt="Card image cap" />
        <CardBody>
          <CardTitle>Eunice</CardTitle>
          <CardText>Dear Liam, <br/>
It's been a pleasure knowing you in the short time we met. Thanks for being a friend, I appreciate and cherish your friendship, time and ALL your puns! Will miss you (again), hope to see you on the other side in Canada someday. Best Wishes in your endeavours; present & future. Have a fruitful journey ahead! Remember us ya. <br/> <br/>
-Eunice Cheng <br/><br/>

*No one can make you feel inferior without your consent. -Eleanor Roosevelt</CardText>
        </CardBody>
      </Card>
	  
{/*Zhuo Liang*/}
<Card>
        <CardImg top width="100%" src={zl}  alt="Card image cap" />
        <CardBody>
          <CardTitle>Zhuo Liang</CardTitle>
          <CardText>Take care! And don't forget to have fun while doing what you always Huan-ted to do.</CardText>
        </CardBody>
      </Card>
	  
{/*Kelsey*/}
<Card>
        <CardImg top width="100%" src={kelsey}  alt="Card image cap" />
        <CardBody>
          <CardTitle>Kelsey</CardTitle>
          <CardText>Hope you're doing awesome and praying for things to only get better for you, tall one. <br/><br/>
:))))</CardText>
        </CardBody>
      </Card>
	  
{/*Anderson*/}
<Card>
        <CardImg top width="100%" src={anderson}  alt="Card image cap" />
        <CardBody>
          <CardTitle>Anderson</CardTitle>
          <CardText>Hey dude, you're the bravest adventurer I know, a great friend and a beautiful soul~ You just keep on being you!!! Lots of love!!!</CardText>
        </CardBody>
      </Card>

{/*Matthew*/}
<Card>
        <CardImg top width="100%" src={matt}  alt="Card image cap" />
        <CardBody>
          <CardTitle>Matthew</CardTitle>
		  <CardText>- cya -</CardText>
        </CardBody>
      </Card>
    </CardColumns>
  );
};