import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

const bioString = 
`Davey is very good at inspiring bored kids. 

Before raising $1.2m for his startup, coding at Apple, or studying artificial intelligence, he was a bored kid, too. 

Davey has the greatest impact on students who see no point in writing, reading, or math. He helps students find personal connections to these subjects so they excel.`
function App() {
  const formatBio = (bio: string)=> {
    return <Fragment>{bio.split('/n').map(bioPiece => <div> {bioPiece}<br></br><br></br></div>)}</Fragment>
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="title">        Morse Tutoring
</div>



        <br></br>
        <div className="bio">
          {/* {formatBio(bioString)} */}
        Davey helps
        <br></br><br></br>
        Before raising $1.2m for his startup, coding at Apple, or studying Symbolic Systems at Williams, he was a bored kid, too. 
  <br></br><br></br>
        Davey has the greatest impact on students who see no point in writing, literature, or math. He helps students find personal connections to their subjects, so they can excel.
<br></br><br></br>
Davey's rate is $290 per hour-session. <br></br>Sessions are in person in NYC, <br></br>at your home or a coffee shop.
<br></br><br></br>
For a consult, email Davey: <br></br>
<a href="mailto:davey@morsetutoring.com?subject=Morse%20Tutoring%20Inquiry" className='link'>davey@morsetutoring.com</a>
<br></br>
<br></br>

For more from Davey:<br></br>
<a href="https://daveymorse.gumroad.com/l/school-secrets" className='link'>Lessons</a>&emsp;
<a href="https://www.youtube.com/@morse-tutoring/shorts" className='link'>Videos</a>&emsp;
<a href="https://plexus.earth" className='link'>Plexus</a></div>

<br></br><br></br>

<div className="subtitle">        -- .. ... -.-. .... .. . ..-. <br></br> -- .- -. .- --. . -..
</div>



      </header>
    </div>
  );
}

export default App;
