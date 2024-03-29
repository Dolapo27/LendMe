import React from 'react'

const footer = () => {
  return (
    <>
<footer class="main-footer">

  <div class="container">
      <div class="row">
      <div class="col-md-3 col-sm-3 col-xs-12">
          <div class="ft-lst">
              <h5>borrow</h5>
              <ul>
                  <li><a href="#">How it Work</a></li>
                  <li><a href="#">Loan Types</a></li>
                  <li><a href="#">Get a Quotes</a></li>

              </ul>
          </div>

      </div>
      <div class="col-md-2 col-sm-2 col-xs-12">
          <div class="ft-lst">
              <h5>invest</h5>
              <ul>
                  <li><a href="#">How it Work</a></li>
                  <li><a href="#">Benefits</a></li>
                  <li><a href="#">Get Started</a></li>

              </ul>
          </div>
      </div>
      <div class="col-md-2 col-sm-2 col-xs-12">
          <div class="ft-lst">
              <h5>company</h5>
              <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Team</a></li>
                  <li><a href="#">press</a></li>

              </ul>
          </div>
      </div>
      <div class="col-md-5 col-sm-5 col-xs-12">
          <div class="ft-abt">
              <div class="ftloga"><img src="Assets/images/ft-logo.svg"  alt=""/></div>
              <p>Since 2009, we've helped 180 thousand people achieve<br/> greater financial wellness, and that number is growing.</p>
              <div class="social-bx">
                  <ul>
                      <li><a href="javascript:;"><i class="fa fa-facebook-official" aria-hidden="true"></i></a></li>
                      <li><a href="javascript:;"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                      <li><a href="javascript:;"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                  </ul>
              </div>
          </div>
      </div>
  </div>

  <div class="copyrit">
      <div class="row">
          <div class="col-md-6 col-sm-6 col-xs-12">
              <p>Copyright © 2009 - 2020 LendMe, Inc. All rights reserved.</p>
          </div>
          <div class="col-md-6 col-sm-6 col-xs-12">
              <div class="trm-lst">
                  <ul>
                      <li><a href="javascript:;">Term of Use</a></li>
                      <li><a href="javascript:;">Privacy Policy</a></li>
                  </ul>
              </div>
          </div>
      </div>
  </div>

  <p class="ft-para">
        3.77% - 8.03% average historical returns for loan grades A through E originated from January 2010 through March 2017. Because the likelihood of a loan charging off increases over time, historical returns include only those loans that were issued 18 months or more before the last day of the most recently completed quarter. The range in returns represents 10th and 90th percentile performance as illustrated here, for the period January 2010 through September 2018. The return is weighted based on platform issuance by grade. Historical Returns are LendMe's adjusted net annualized returns ("ANAR"). ANAR is calculated using the formula described here.</p>
  </div> {/* container End */}


 {/* <script type="text/javascript" src="{% static "frontend/assets/js/lib.js" %}"></script>
 <script type="text/javascript" src="{% static "frontend/assets/js/functions.js" %}"></script>
 <script type="text/javascript" src="{% static "frontend/assets/js/wow.js" %}"></script> */}
</footer> {/* footer End */}
    </>
  )
}

export default footer

