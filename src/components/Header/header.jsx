import React from 'react'
import {Link} from 'react-router-dom'
import {MdTravelExplore} from 'react-icons/md'

const header = () => {
  return (
    <>
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="logo">
                        <a href="/">
                        <h1><MdTravelExplore className='header-icon'/>LendMe</h1>
                        </a>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="drplst">
                            <ul>
                                <li><Link to="/borrower">Borrow</Link>
                                    <ul>
                                        <li><a href="#how-it-works">how it work</a></li>
                                        <li><Link to="/loan">loan types</Link></li>
                                        <li><a href="/borrower">Get a Quote</a></li>
                                    </ul>
                                </li>
                                <li><Link to="/invest">Invest</Link>

                                    <ul>
                                        <li><Link to ="/invest">how it work</Link></li>
                                        <li><a href ="/invest#benefit">benefits</a></li>
                                        <li><Link to="/sign-up">Get started</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-12 text-right">


                            <div className="navi">
                                <ul>
                                    <li><Link to="/about-us">about us</Link></li>
                                    <li><Link to="/admin-sign-in">Admin </Link></li>
                                    <li><Link to="/sign-in">Sign in</Link></li>
                                </ul>
                            </div>

                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default header