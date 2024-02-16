
// {% include 'pages/partials/header.html' %}

import React from 'react'
// import '../../Assets/css/__style.css'
// import '../../Assets/css/os-lib.css'
// import '../../Assets/css/animate.css'
// import '../../Assets/css/style.css'
import homban from '../../Assets/images/homban.jpg'
import bloomberg from '../../Assets/images/bloomberg.svg'
import npr from '../../Assets/images/npr.svg'
import nbc from '../../Assets/images/nbc.svg'
import reuters from '../../Assets/images/reuters.svg'
import percent from '../../Assets/images/percent.svg'
import money from '../../Assets/images/money.svg'
import calendar from '../../Assets/images/calendar.svg'
import ritim from '../../Assets/images/ritim.jpg'
import user from '../../Assets/images/user.jpg'
import { FaStar } from 'react-icons/fa'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'

const home = () => {
  return (
    <>
    <Header />
<section className="hom-baner">
      <div className="container">
          <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="hom-txt">
                  <h1>Hello Financial Well-Being</h1>
                  <p>Get low Interest, fixed-term personal loans at the best rates with our inclusive scoring system</p>
                  <a href="/borrower">Get a Quote</a>
              </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="hom-im"><img className="img-responsive" src={homban} alt="Banner" /></div>
          </div>
      </div>
      </div>
  </section>
  <div className="clear"></div>
  <section>
      <div className="container">
          <div className="clientbx">
              <ul>
                  <li><img src={bloomberg} alt=""/>   </li>
                  <li><img src={npr} alt=""/>   </li>
                  <li><img src={nbc} alt=""/>   </li>
                  <li><img src={reuters} alt=""/>   </li>
              </ul>
          </div>
      </div>
  </section> {/* client box end */}

<section className="main-goals">
  <div className="container">
      <h3>Get your own personalized loans</h3>
      <p>Consolidating debt? Paying for a large expense like<br/> home improvement or a special occasion? We have you<br/> covered.</p>
      <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="bx1">
                  <div className="imbx">
                      <img src={percent} alt=""/>
                  </div>
                  <h5>Get low rates</h5>
                  <p>Get a loan with a low, fixed rate that never goes up. Get a Quote online instantly.</p>
              </div>
          </div>

          <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="bx1">
                  <div className="imbx">
                      <img src={calendar} alt=""/>
                  </div>
                  <h5>Convenient Payback</h5>
                  <p>Pay off your loan with fixed 3 or 5-year* terms, and a budget-friendly, single monthly payment.</p>
              </div>
          </div>

          <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="bx1">
                  <div className="imbx">
                      <img src={money} alt=""/>
                  </div>
                  <h5>Save money</h5>
                  <p>Pay your loan off at any time with no pre-payment penalties.</p>
              </div>
          </div>
      </div>
  </div>
</section> {/* main-goals End */}

<section className="main-getloan" id="how-it-works">
    <div className="container">
        <div className="col-md-6 col-sm-6 col-xs-12">

            <div className="gtl-text">
                <h3>Get a loan in 3 simple steps</h3>
                <div className="gtl-lst">
                    <div className="media">
                      <div className="media-left">
                        <h4>1</h4>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">Get a Quote</h4>
                        <p>Select your loan amount, answer a few questions and get your <br/>lowest eligible rates instantly.</p>
                      </div>
                    </div>
                </div>

                <div className="gtl-lst">
                    <div className="media">
                      <div className="media-left">
                        <h4>2</h4>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">Choose your loan</h4>
                        <p>Choose the offer with the terms that work best for you.</p>
                      </div>
                    </div>
                </div>

                <div className="gtl-lst">
                    <div className="media">
                      <div className="media-left">
                        <h4>3</h4>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">Get your funds</h4>
                        <p>Your money goes straight to your bank account via direct deposit.</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="gtl-imbx">
         <img className="img-responsive" src={ritim} alt=""/>
    </div>
</section>


<section className="main-count abt">
<div className="container">
    <div id="counter"><i className="count counterdigi" data-count="650"></i> <i>180,400</i> <p>Customers</p> </div>

    <div id="counter"><span className="count counterdigi" data-count="80"></span> <i>$3.5 Billion</i> <p>Borrowed</p> </div>

    <div id="counter"><span className="count counterdigi" data-count="84500"></span> 
<i>
  <FaStar aria-hidden="true"/>
  <FaStar aria-hidden="true"/>
  <FaStar aria-hidden="true"/>
  <FaStar aria-hidden="true"/>
  <FaStar aria-hidden="true"/>
</i> <p>Average Customer Rating</p></div>


</div>
</section>


<section className="main-usersay">
  <div className="container">
      <h2>What our users are saying about us</h2>
      <p>Don't take our word for it. Read testimonials from actual investors on LendMe</p>
      <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="testimo">
                  <p>LendMe is by far the easiest way to invest I have found online and I have not had a problem since I started investing with them in 2016</p>
                  <div className="user">
                  <div className="media">
                    <div className="media-left">
                      <img src={user} alt=""/>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">Hannah Maxwell</h4>
                      <p>VP at Facebook</p>
                    </div>
                  </div>
              </div>
              </div>
          </div>

          <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="testimo">
                  <p>LendMe is by far the easiest way to invest I have found online and I have not had a problem since I started investing with them in 2016</p>
                  <div className="user">
                  <div className="media">
                    <div className="media-left">
                      <img src={user} alt=""/>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">Hannah Maxwell</h4>
                      <p>VP at Facebook</p>
                    </div>
                  </div>
              </div>
              </div>
          </div>

          <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="testimo">
                  <p>LendMe is by far the easiest way to invest I have found online and I have not had a problem since I started investing with them in 2016</p>
                  <div className="user">
                  <div className="media">
                    <div className="media-left">
                      <img src={user} alt=""/>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">Hannah Maxwell</h4>
                      <p>VP at Facebook</p>
                    </div>
                  </div>
              </div>
              </div>
          </div>
      </div>
  </div>
</section>


<section className="main-getstart">
  <div className="container">
      <div className="gtt-text">
          <h2>We want to help you succeed</h2>
          <h3>Get your rate in just 2 minutes — it won't affect your<br/>credit score!</h3>
          <a href="javascript:;">get started now</a>
      </div>
  </div>
</section> {/* main-getstart End */}
<Footer />
    </>
  )
}

export default home

{/* {% include 'pages/partials/footer.html' %}

{% endblock %} */}