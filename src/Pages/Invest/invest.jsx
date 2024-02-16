import React from 'react'
import { FaCaretDown, FaCheckSquare } from 'react-icons/fa'
import bloomberg from '../../Assets/images/bloomberg.svg'
import npr from '../../Assets/images/npr.svg'
import nbc from '../../Assets/images/nbc.svg'
import reuters from '../../Assets/images/reuters.svg'
import approval from '../../Assets/images/approval.svg'
import wallet from '../../Assets/images/wallet.svg'
import dollar from '../../Assets/images/dollar.svg'
import ritim from '../../Assets/images/ritim.jpg'
import user from '../../Assets/images/user.jpg'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'

const invest = () => {
  return (
    <>
    <Header />
{/* {% include 'pages/partials/header.html' %} */}
    <section className="main-baner">
        <div className="container">
        <div className="baner banr2">
           <div className="row">
               <div className="col-md-6 col-sm-6">
                    <div className="ban-txt">
                        <h1>Invest in P2P loans on LendMe</h1>
                        <div className="lstban">
                            <ul>
                                <li><FaCheckSquare aria-hidden="true"/> Simple</li>
                                <li><FaCheckSquare aria-hidden="true" /> Rewarding</li>
                            </ul>
                        </div>
                        <div className="hom-txt"><a  href="/sign-in">Start Investing</a></div>
                        
                    </div>
               </div>

           </div>

        </div>  {/* banner end */}
    </div>
    </section> {/* Banner End */}
    <div className="clear"></div>
    <section>
        <div className="container">
            <div className="clientbx">
                <ul>
                     <li><img src={reuters}alt=""/>   </li>
                    <li><img src={bloomberg} alt=""/>   </li>
                    <li><img src={npr} alt=""/>   </li>
                    <li><img src={nbc} alt=""/>   </li>
                </ul>
            </div>
        </div>
    </section>{/* client box end */}

<section className="main-goals" id='benefit'>
    <div className="container">
        <h3>Don't miss out on a new way to invest</h3>
        <p>Peer-to-peer lending allows you to lend your money to<br/> people online. It's a type of investment that we make<br/> as easy and rewarding as possible.</p>
        <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="bx1">
                    <div className="imbx">
                        <img src={approval}  alt=""/>
                    </div>
                    <h5>Creditworthy Borrowers</h5>
                    <p>Browse several loan listings from approved creditworthy borrowers on LendMe</p>
                </div>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="bx1">
                    <div className="imbx">
                        <img src={wallet} alt=""/>
                    </div>
                    <h5>Earn up to 6.5% p.a</h5>
                    <p>Earn 4% - 6.5% per annum over 5 years and 3% - 5.0% per annum over 3 years with LendMe</p>
                </div>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="bx1">
                    <div className="imbx">
                        <img src={dollar} alt=""/>
                    </div>
                    <h5>Diversify your portfolio</h5>
                    <p>Diversify your LendMe portfolio by investing in different loans and borrowers</p>
                </div>
            </div>
        </div>
    </div>
</section> {/* main-goals End */}

<section className="main-getloan">
    <div className="container">
        <div className="col-md-6 col-sm-6 col-xs-12">

            <div className="gtl-text">
                <h3>Invest in 3 simple steps</h3>
                <div className="gtl-lst">
                    <div className="media">
                      <div className="media-left">
                        <h4>1</h4>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">Discover</h4>
                        <p>Browse loan applications from credit-checked borrowers with various ratings and terms</p>
                      </div>
                    </div>
                </div>

                <div className="gtl-lst">
                    <div className="media">
                      <div className="media-left">
                        <h4>2</h4>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">Invest</h4>
                        <p>Choose and fund the loans you wish to invest in with various amounts</p>
                      </div>
                    </div>
                </div>

                <div className="gtl-lst">
                    <div className="media">
                      <div className="media-left">
                        <h4>3</h4>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">Earn</h4>
                        <p>Receive your monthly returns in your LendMe account and reinvest or withdraw</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="gtl-imbx">
         <img className="img-responsive" src={ritim} alt=""/>
    </div>
</section> {/* main-getloan End */}


 <section className="main-count counterbox">
  <div className="container">
      <div id="counter"><i className="count counterdigi" data-count="650"></i> <i>+</i> <p>Average Credit Score</p> </div>

      <div id="counter"><span className="count counterdigi" data-count="80"></span> <i>%</i> <p>College Educated Borrowers</p> </div>

      <div id="counter"><span className="count counterdigi" data-count="84500"></span> <i>$</i> <p>Average Borrower Income</p></div>


  </div>
</section> {/* Counter End */}

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
{/* {% include 'pages/partials/footer.html' %} */}

</>
  )
}

export default invest