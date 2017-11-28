import React from 'react'

const AuthFormPresenter = ({ displayName, handleSubmit, error, isSignup }) => (
  <div>
    <form
      onSubmit={ isSignup
        ? evt => {
            evt.preventDefault()
            handleSubmit(evt.target.name.value, evt.target.zipcode.value, evt.target.email.value, evt.target.password.value, evt.target.userType.value)
          }
        : evt => {
            evt.preventDefault()
            handleSubmit(evt.target.email.value, evt.target.password.value, evt.target.userType.value)
          }
      }
    >
      {isSignup &&
        <div>
          <div>
            <label htmlFor="name"><small>Name</small></label>
            <input name="name" type="text" />
          </div>
          <div>
            <label htmlFor="zipcode"><small>Zip Code</small></label>
            <input name="zipcode" type="text" />
          </div>
        </div>
      }
      <div>
        <label htmlFor="email"><small>Email</small></label>
        <input name="email" type="text" />
      </div>
      <div>
        <label htmlFor="password"><small>Password</small></label>
        <input name="password" type="password" />
      </div>
      {/* { isSignup &&
        <div>
          <label htmlFor="paymentInfo"><small>Payment Information</small></label>
          <input name="paymentInfo" type="paymentInfo" />
        </div>
      } */}
      <div>
        <label htmlFor="userType"><small>User Type</small></label>
          <select name="userType" type="userType">
            <option value="eater">Eater</option>
            <option value="owner">Restaurant</option>
          </select>
      </div>
      <div>
        <button type="submit">{displayName}</button>
      </div>
      {error && error.response && <div> {error.response.data} </div>}
    </form>
    <a href="/auth/google">{displayName} with Google</a>
  </div>
)

export default AuthFormPresenter
