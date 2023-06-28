import React from 'react';
import "./assets/Questions.css";

function Questions() {
  return (
    <div className="faq">
      <h2 > Frequently Asked Questions</h2>
      <ul className='accoedion'>
        <li>
            <input type='radio' name='accordion' id='first'></input>
            <label for="first">What is Netflix?</label>
            <div className='content'>
                <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

                You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
            </div>
        </li>
        <li>
            <input type='radio' name='accordion' id='second'></input>
            <label for="second">How much does Netflix cost?</label>
            <div className='content'>
                <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>
            </div>
        </li>
        <li>
            <input type='radio' name='accordion' id='third'></input>
            <label for="third">Where can i Watch?</label>
            <div className='content'>
                <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
            </div>
        </li>
        <li>
            <input type='radio' name='accordion' id='forth'></input>
            <label for="forth">How do i cancel?</label>
            <div className='content'>
                <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
            </div>
        </li>
        <li>
            <input type='radio' name='accordion' id='fifth'></input>
            <label for="fifth">What can I watch on Netflix?</label>
            <div className='content'>
                <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
            </div>
        </li>
        <li>
            <input type='radio' name='accordion' id='sixth'></input>
            <label for="sixth">Is Netflix good for kids?</label>
            <div className='content'>
                <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
            </div>
        </li>
      </ul>
      <small>
      Ready to watch? Enter your email to create or restart your membership.</small>
      <form className='email_signup'>
         <input type="email" placeholder="Email Address" required></input>
         <button type="submited">Get started</button>
      </form>
    </div>
  )
};

export default Questions;
