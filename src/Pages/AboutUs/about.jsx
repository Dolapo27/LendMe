import React from 'react'
import { FaStar } from 'react-icons/fa'
import abbanner from '../../Assets/images/ab-banner.jpg'
import bloomberg from '../../Assets/images/bloomberg.svg'
import npr from '../../Assets/images/npr.svg'
import nbc from '../../Assets/images/nbc.svg'
import reuters from '../../Assets/images/reuters.svg'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'

const about = () => {
  return (
    <>
    <Header />

{/* {% include 'pages/partials/header.html' %} */}
<section className="abt-sec1">
    <div className="container">
        <div className="abt-txt">
            <h1>Your financial well-being is our<br/> mission at LendMe.</h1>
            <div className="abtlst">
                <ul>
                    <li><a href="javascript:;">about us</a></li>
                    <li><a href="javascript:;">team</a></li>
                    <li><a href="javascript:;">press</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="imabt"><img className="img-responsive" src={abbanner} alt=""/> </div>
</section> {/* About banner head End */}

<div className="clear"></div>
   <section className="main-goals abt">
    <div className="container">
        <h3>About Us</h3>
        <p>LendMe was founded in 2010 as the second peer-to-peer lending marketplace in<br/>the United States. Since then, LendMe has facilitated more<br/> than $3.5 billion in loans to more than 180,000 people.</p>

        <p>Through LendMe, people can invest in each other in a way that is financially and socially<br/>rewarding. Borrowers apply online for a fixed-rate, fixed-term loan between $2,000<br/>and $40,000. Individuals and institutions can invest in the loans and earn attractive<br/>returns. LendMe handles all loan servicing on behalf of the matched borrowers and<br/>investors.</p>

        <p>LendMe Marketplace is backed by leading investors including Sequoia Capital, Francisco<br/>Partners, Institutional Venture Partners, and Credit Suisse NEXT Fund.</p>

    </div>
</section> {/* main-goals End */}
<div className="clear"></div>

<section className="main-count abt">
  <div className="container">
      <div id="counter"><i className="count counterdigi" data-count="650"></i> <i>180,400</i> <p>Customers</p> </div>

      <div id="counter"><span className="count counterdigi" data-count="80"></span> <i>$3.5 Billion</i> <p>Borrowed</p> </div>

      <div id="counter"><span className="count counterdigi" data-count="84500"></span> <i><i className="fa fa-star" aria-hidden="true"></i>
<FaStar aria-hidden="true"/>
<FaStar aria-hidden="true"/>
<FaStar aria-hidden="true"/>
<FaStar aria-hidden="true"/>
</i> <p>Average Customer Rating</p></div>


  </div>
</section> {/* Counter End */}

    <div className="clear"></div>

<section className="main-team">
    <div className="container">
        <h3>Team</h3>
        <p>LendMe was founded by a well experienced team with a combined<br/>experience of over 25 years in the financial services industry.</p>

        <div className="row">
          {/* {% for team in team_members %} */}
            <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="team">
                    {/* <img src="{{team.photo.url}}" alt="{{team.name}}">
                    <h6>{{team.name}}</h6>
                    <p>{{team.designation}}</p> */}
                </div>
            </div>
          {/* {% endfor %} */}
        </div>
    </div>
</section>




    <section className="clientabt">
        <div className="container">

            <h3>Press Coverage</h3>
            <p>LendMe has been covered in by major news outlets and media companies</p>
            <div className="clientbx">
                <ul>
                    <li><img src={reuters} alt=""/>   </li>
                    <li><img src={bloomberg} alt=""/>   </li>
                    <li><img src={npr}  alt=""/>   </li>
                    <li><img src={nbc} alt=""/>   </li>
                </ul>
            </div>
        </div>
    </section>{/* client box end */}
<div className="clear"></div>

<section className="main-news">
    <div className="container">
        <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="news">
                    <h5>Forbes</h5>
                    <h6>May 29,2018</h6>
                    <p>CEO Alicia Goodwin Talks<br/> Borrowing and Investing with <br/>LendMe</p>
                    <a href="javascript:;">read more</a>
                </div>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="news">
                    <h5>Forbes</h5>
                    <h6>May 29,2018</h6>
                    <p>CEO Alicia Goodwin Talks<br/> Borrowing and Investing with <br/>LendMe</p>
                    <a href="javascript:;">read more</a>
                </div>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="news">
                    <h5>Forbes</h5>
                    <h6>May 29,2018</h6>
                    <p>CEO Alicia Goodwin Talks<br/> Borrowing and Investing with <br/>LendMe</p>
                    <a href="javascript:;">read more</a>
                </div>
            </div>
        </div>
    </div>
</section> {/* main news ENd */}
<Footer />
{/* {% include 'pages/partials/footer.html' %} */}
</>
  )
}

export default about