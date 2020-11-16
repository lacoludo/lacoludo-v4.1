const Form = () => (
  <>
    <div className='section padding-top-from-nav background-black'>
      <div className='container'>
        <div className='six columns fade-elements'>
          <div className='title'>
            <h3>say hello</h3>
          </div>
        </div>
      </div>
    </div>
    <div className='section padding-top-bottom background-black'>
      <div className='container'>
        <div className='three columns'>
          <div className='title'>
            <h6>
              <span>-</span> drop me a line
            </h6>
          </div>
        </div>
        <div className='three columns'>
          <div className='subtitle-small'>
            I'm always ready to work with exciting clients.
          </div>
        </div>
        <form
          name='ajax-form'
          id='ajax-form'
          action='mail-it.php'
          method='post'
        >
          <div className='three columns'>
            <label htmlFor='name'>
              <span className='error' id='err-name'>
                please enter name
              </span>
            </label>
            <input
              name='name'
              id='name'
              type='text'
              placeholder='Your Name: *'
            />
          </div>
          <div className='three columns'>
            <label htmlFor='email'>
              <span className='error' id='err-email'>
                please enter e-mail
              </span>
              <span className='error' id='err-emailvld'>
                e-mail is not a valid format
              </span>
            </label>
            <input
              name='email'
              id='email'
              type='text'
              placeholder='E-Mail: *'
            />
          </div>
          <div className='clear'></div>
          <div className='six columns offset-by-six remove-top'>
            <label htmlFor='message'></label>
            <textarea
              name='message'
              id='message'
              placeholder='Tell Me Everything'
            ></textarea>
          </div>
          <div className='clear'></div>
          <div className='six columns offset-by-six remove-top'>
            <div id='button-con'>
              <button
                className='send_message button-effect button--moema button--text-thick button--text-upper button--size-s'
                id='send'
              >
                submit
              </button>
            </div>
          </div>
          <div className='clear'></div>
          <div className='six columns offset-by-six remove-top'>
            <div className='error text-align-left' id='err-form'>
              There was a problem validating the form please check!
            </div>
            <div className='error text-align-left' id='err-timedout'>
              The connection to the server timed out!
            </div>
            <div className='error' id='err-state'></div>
          </div>
        </form>
        <div className='clear'></div>
        <div id='ajaxsuccess'>Successfully sent!!</div>
        <div className='clear'></div>
      </div>
    </div>
  </>
)

export default Form
