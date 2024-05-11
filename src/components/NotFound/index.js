import {component} from 'react'
import Header from '../Header'
import './index.css'

class NotFound extends component {
  render() {
    return (
      <div>
        <Header />
        <div className="notFond">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
              alt="not found"
            />
          </div>
          <h1>Page Not Found</h1>
          <p>we are sorry</p>
        </div>
      </div>
    )
  }
}
export default NotFound
