import React from 'react'
import logo from "../../assets/images/logo/logo-footer.png"

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-content">
            <img src={logo} alt="Logo Kasa en blanc" className="logo-footer"/>
            <p className="copyright">© 2020 Kasa. All rights reserved</p>
        </div>
    </footer>
  )
}
