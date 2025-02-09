'use client'

const HomeError = ({ error, reset }) => {
  return (
    <div>
      <h2>Uppps! something went wrong</h2>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  )
}

export default HomeError
