const Custom404 = () => (
  <>
    <style jsx>{`
      .error-wrapper {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .error-code {
        color: #ff2700;
        font-size: 64px;
        font-weight: 400;
        padding: 10px 23px 10px 0;
        margin-right: 20px;
        border-right: 1px solid #fff;
      }

      .error-message {
        font-size: 20px;
      }
    `}</style>
    <div className="error-wrapper">
      <h1 className="error-code" color='danger'>
        404
      </h1>
      <div className="error-message">
        This page could not be found.
      </div>
    </div>
  </>
)

export default Custom404
