import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    this.toggleButton = toggleButton;
    this.toggleButton.addEventHandler("click", this.handleClick.bind(this));
  }

  async handleClick(event) {
    event.preventDefault;
    if (this.followState === "followed") {
      this.unfollow.bind(this);
    } else {
      this.follow.bind(this);
    }
  }

  async follow() {
    this.followState = "Follow";
  }

  async unfollow() {
    this.followState = "Unfollow";
  }

  render() {
    switch (
      this.followState
      // Your code here
    ) {
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}
