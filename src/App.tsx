import { useState } from 'react';
import './App.css'
import './css/About.css'
import { About } from './ts/About'
import { Projects } from './ts/Projects'
import { Skills } from './ts/Skills';
import { Contact } from './ts/Contact';

function App() {
  const [contentState, setContentState] = useState<string>();
  const onSwitchContent = (link: string) => {
    setContentState(link);
  }

  let contentHeaders = ["About Me", "Projects", "Skills", "Contact"];

  return (
    <>
      <div id="header">
        <div id="header__left">
          <h1>Jed Powell</h1>
          <h2 id="tagline">Software Engineer/Developer</h2>
        </div>
        <nav className='navbar'>
          {contentHeaders.map((header) => {
            return (
              <a className="navbar__button" onClick={() => onSwitchContent(header)}>
                {header}
              </a>
            )
          })}
        </nav>
      </div>
      <div id="content">
        <h2 id='content__header'>{contentState}</h2>
        {(() => {
          switch (contentState) {
            case 'About Me':
              return <About />
            case 'Projects':
              return <Projects />
            case 'Skills':
              return <Skills />
            case 'Contact':
              return <Contact />
          }
        })()}

      </div>
      <div id="footer">

      </div>
    </>
  )
}

export default App
