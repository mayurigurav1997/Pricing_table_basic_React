import React from 'react'
import Button from './Button'

function Card(props) {
    return (
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{props.title}</h5>
                    <h6 className="card-price text-center">{props.price}<span className="period">/month</span></h6>
                    <hr />
                    <ul className="fa-ul">
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.user}</li>
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.storage} Storage</li>
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                        {/* Private Projects */}
                        {props.private_projects === "Free" ? (<li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Unlimited Private Projects</li>) :
                            (<li> <span className="fa-li"><i className="fa fa-check"></i></span>Unlimited Private Projects</li>)}

                        {/* Phone Support */}
                        {props.phone_support === "Free" ? (<li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Dedicated Phone Support</li>) :
                            (<li> <span className="fa-li"><i className="fa fa-check"></i></span>Dedicated Phone Support</li>)}

                        {/* SubDomain */}
                        {props.subdomain === "Free" ? (<li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Free Subdomain</li>) :
                            (<li> <span className="fa-li"><i className="fa fa-check"></i></span>Free Subdomain</li>)}

                        {/* Status Report */}
                        {props.status_report === "Pro" ? (<li> <span className="fa-li"><i className="fa fa-check"></i></span>Free Subdomain</li>) : (<li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Free Subdomain</li>)
                        }

                    </ul>
                    <Button />
                </div>
            </div>
        </div>
    )
}

export default Card