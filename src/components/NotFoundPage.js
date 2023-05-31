import React from 'react'
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <main>
      <div className="container">
        <div className="not-found-wrapper">
          <div>
            <h1 className="not-found-header">
              404: Page Not Found <i class="fas fa-exclamation"></i>
            </h1>
          </div>
          <h1 className="not-found-inner-header">
            Sorry, this page isn't available.
          </h1>
          <p style={{ marginBottom: "15px" }}>
            This link you follow may be broken, or the page may have been
            removed
          </p>
          <Link to="/">Go back home page</Link>
        </div>
      </div>
    </main>
  );
}

export default NotFoundPage
