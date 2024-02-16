import React, {useState} from 'react'
import { FaCaretDown, FaCheckSquare } from 'react-icons/fa'
import bloomberg from '../../Assets/images/bloomberg.svg'
import npr from '../../Assets/images/npr.svg'
import nbc from '../../Assets/images/nbc.svg'
import reuters from '../../Assets/images/reuters.svg'
import home_one from '../../Assets/images/home(1).svg'
import car from '../../Assets/images/car.svg'
import creditCard2 from '../../Assets/images/credit-card(2).svg'
import ritim from '../../Assets/images/ritim.jpg'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import {Link} from "react-router-dom"

const Loan = () => {
  const [amount, setAmount] = useState('');  
  return (
    <>
<Header />
{/* {% include 'pages/partials/header.html' %} */}
    <div className="container">
        <div className="baner">
           <div className="row">
               <div className="col-md-6 col-sm-6">
                    <div className="ban-txt">
                        <h1>Get personal loans of up to $50,000</h1>
                        <div className="lstban">
                            <ul>
                                <li><FaCheckSquare aria-hidden="true"/> Get low rates</li>
                                <li><FaCheckSquare aria-hidden="true" /> Apply online in minutes</li>
                                <li><FaCheckSquare aria-hidden="true" /> Convenient Payback</li>
                            </ul>
                        </div>
                    </div>
               </div>
               <div className="col-md-6 col-sm-6">
                   <div className="ban-frm">
                        <h2>How much do you need?</h2>
                       <div className="inp-sty">
                           <input type="text" placeholder="Earn upto $50,000" value={amount} onChange={((e) => {setAmount(e.target.value)})}/>
                       </div>
                       <div className="inp-sty">
                           <select name="" id="">
                            <option value="">What do you need it for?</option>
                            <option value="">Credit Cards</option>
                            <option value="">Debt Consolidation</option>
                            <option value="">Student Loans</option>
                            <option value="">Home Improvement</option>
                               <option value="">student loans</option>
                               <option value="">Medical/Dental</option>
                               <option value="">Busin</option>
                               <option value="">Large Purchase</option>
                               <option value="">Automobile</option>
                               <option value="">Special Occassion</option>
                               <option value="">Vacation</option>
                               <option value="">Baby or Adoption</option>
                               <option value="">Other</option>
                           </select>
                           <FaCaretDown aria-hidden="true"/>

                       </div>
                       <Link to ={`/borrower?amount=${amount}`}>
                            <button>Get a Quote</button>
                        </Link> 
                       {/* This Get a Quote button takes you to the borrow page */}
                   </div>
               </div>
           </div>

        </div>  {/* banner end */}
    </div>
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
            </div>  {/*client box end*/} 
        </div>
    </section>

<section className="main-goals">
    <div className="container">
        <h3>Get your own personalized loans to achieve your goals</h3>
        <p>Consolidating debt? Paying for a large expense like<br/> home improvement or a special occasion? We have you <br/>covered.</p>
        <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="bx1">
                    <div className="imbx">
                        <img src={home_one} alt=""/>
                    </div>
                    <h5>Home Improvement Loans</h5>
                    <p>Whether you want to remodel your<br/>kitchen or upgrade security. LendMe<br/>has you covered.</p>
                </div>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="bx1">
                    <div className="imbx">
                        <img src={car} alt=""/>
                    </div>
                    <h5>Auto Financing</h5>
                    <p>With LendMe you can get any kind of<br/> vehicle  you want in any condition<br/> you prefer.</p>
                </div>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="bx1">
                    <div className="imbx">
                        <img src={creditCard2} alt=""/>
                    </div>
                    <h5>Credit card Consolidation</h5>
                    <p>Refinance your credit cards with a <br/>personalized loan for LendMe and <br/>simplify your finances.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="main-getloan">
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


<section className="main-getstart">
    <div className="container">
        <div className="gtt-text">
            <h2>We want to help you succeed</h2>
            <h3>Get your rate in just 2 minutes — it won't affect your<br/>credit score!</h3>
            <a href="javascript:;">get started now</a>
        </div>
    </div>
</section>

{/* {% include 'pages/partials/footer.html' %} */}
<Footer />
</>
  )
}

export default Loan