import React, { Component } from "react";

import EmailSubscribe from "components/email-sub/email-sub";
import Typer from "components/animations/typer/typer";

class HeroBanner extends Component {
  state = {};

  render() {
    const { windowWidth, children } = this.props;

    let deviceType = windowWidth <= 850 ? "mobile" : "desktop";

    return (
      <section
        className="hero is-fullheight"
        id="home"
        ref={node => (this.home = node)}
      >
        <div className="hero-head">
          {children ? children : <div style={{ height: "96px" }} />}
        </div>

        <div className="hero-body">
          <div className="container is-inline-block">
            <div
              className="container is-flex noselect"
              style={{
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center"
              }}
            >
              <h1 className="title is-1">Hoplite</h1>
              <h2 className="subtitle is-3" style={{ minHeight: "80px" }}>
                <Typer />
              </h2>
            </div>
            <EmailSubscribe deviceType={deviceType} />
          </div>
        </div>

        <div className={`hero-foot ${deviceType}`}>
          <div className="container">
            <div className="columns is-variable">
              <div className="column is-flex" />
              <div className="column has-text-centered is-5">
                <b className="is-block">Meeting Times:</b>
                <span className="is-block">Thursday 7:30PM @ MQH 234</span>
                <span className="is-block">Friday 10:00AM @ MQH 226</span>
              </div>
              <div className="column is-flex" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroBanner;
