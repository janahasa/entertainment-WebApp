import React from 'react'

const EmptyBookMarked = () => {
  return (
    <main>
      <div className="container">
        <div className="not-found-wrapper">
          <div className="empty-page">
            <i className="fas fa-bookmark" aria-hidden="true"></i>
          </div>
          <h1>BookMarked of you</h1>
          <p>
            When you add movie or tv series as a bookMark they'll appear here.
          </p>
        </div>
      </div>
    </main>
  );
}

export default EmptyBookMarked
