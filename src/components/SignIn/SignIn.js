import React from "react";

const SignIn = ({ onRouteChange}) => {
  return (
    <main className="pa4 black-80">
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5">
        <form className="measure pa3">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="">
            <input
              //   onClick={function(){onRouteChange("home")}}
              onClick={() => {
                onRouteChange("home");
              }}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
            />
          </div>
          <div className="lh-copy mt3">
            <p
              onClick={function() {
                onRouteChange("register");
              }}
              className="f6 link dim black db pointer"
            >
              Register
            </p>
          </div>
        </form>
      </article>
    </main>
  );
};

export default SignIn;
