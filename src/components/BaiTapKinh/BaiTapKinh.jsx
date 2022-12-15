import React, { Component } from "react";

import "./style.css";

export default class BaiTapKinh extends Component {
  render() {
    return (
      <div>
        <h1>TRY GLASSES APP ONLINE</h1>
        <div className="container mt-5">
          <div class="row justify-content-between">
            <div class="col-6 glass__left">
              <div class="row"></div>
            </div>
            <div class="col-5 glass__right p-0">
              <div className="model__card">
                <div className="model__avatar"></div>
                <div className="model__info"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
