import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div className='container'>
        {/* image */}
        <div className='topContainer'>
          <div className='image'>
            <img src="/image/bolu.jpg" alt='profile' id='profile_img'></img>
          </div>

          {/* twitter name */}
          <div id="twitter">Iyundara</div>
          {/* slack name */}
          <div id="slack">Iyundara</div>
        </div>

        {/* links */}
        <div>
          <div className="link">
            <button className='button'>
              <a href='https://mobile.twitter.com/Iyundara' className='linkTag'>Twitter Link</a>
            </button>
          </div>

          <div className="link1">
            <button className='button'>
              <a href='https://training.zuri.team/' className='linkTag' id='btn__zuri'>Zuri Team</a>
            </button>
          </div>

          <div className="link1">
            <button className='button'>
              <a href='http://books.zuri.team ' className='linkTag' id="books">Zuri Books</a>
            </button>
          </div>

          <div className="link1">
            <button className='button'>
              <a href='https://books.zuri.team/python-for-beginners?ref_id=<darasimi>' className='linkTag' id="book__python">Python Books</a>
            </button>
          </div>

          <div className="link1">
            <button className='button'>
              <a href='https://background.zuri.team' className='linkTag' id="pitch">Background Check for Coders</a>
            </button>
          </div>

          <div className="link1">
            <button className='button'>
              <a href='https://books.zuri.team/design-rules' className='linkTag' id="book__design">Design Books</a>
            </button>
          </div>
        </div>

      </div>


      <div className='icon'>
        <div className='img'>
          <a href='https://zuriteam-0uq6766.slack.com'>
            <img src='/image/slack.jpg' alt=''></img>
          </a>
        </div>
        <div className='img'>
          <a href='https://github.com/Iyundara'>
            <img src='/image/Social icon.jpg' alt=''></img>
          </a>
        </div>
      </div>


      <div className='logo'>
        <div>
          <a href='/#'>
            <img src='/image/zuri-logo.jpg' alt=''></img>
          </a>
        </div>
        <div className='space'>
          <div className='text'>HNG Internship 9 Frontend Task</div>
        </div>
        <div className='space'>
          <a href='/#'>
            <img src='/image/I4G.jpg' alt=''></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
