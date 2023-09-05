import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div>
        <section className="footer">
            <div className="box-container">
                <div className="box">
                    <h3>quick links</h3>
                    <a href="">home</a>
                    <a href="">about</a>
                    <a href="">products</a>
                    <a href="">review</a>
                    <a href="">contact</a>
                </div>
                <div className="box">
                    <h3>extra links</h3>
                    <a href="">my account</a>
                    <a href="">my order</a>
                    <a href="">my favorite</a>
                </div>
                <div className="box">
                    <h3>locations</h3>
                    <a href="">india</a>
                    <a href="">USA</a>
                    <a href="">japan</a>
                    <a href="">france</a>
                </div>
                <div className="box">
                    <h3>contact info</h3>
                    <a href="">+123-456-7890</a>
                    <a href="">example@gmail.com</a>
                    <a href="">mumbai, india - 400104</a>
<img src="" alt="" />

                </div>
            </div>
            <div className="credit">
             BabyKu   | all rights reserved
            </div>
        </section>
    </div>
  )
}

export default Footer