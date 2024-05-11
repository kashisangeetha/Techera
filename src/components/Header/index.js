import {component} from 'react'
import {Link} from 'react-loader-spinner'
import './index.css'

class Header extends component {
  render() {
    return (
      <div className="container">
        <div>
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
              alt="website logo"
            />
          </Link>
        </div>
      </div>
    )
  }
}
export default Header
