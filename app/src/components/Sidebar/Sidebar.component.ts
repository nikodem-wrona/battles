import { Component } from "../../shared/Component";
import { Battle } from "../../shared/types";

import styles from "./Sidebar.module.scss";

type SidebarProps = {
  battle: Battle;
};

class Sidebar extends Component<SidebarProps> {
  render(): void {
    const { battle } = this.props;

    const sidebarContent = document.createElement("div");

    this.element.classList.add(styles.sidebar);

    this.appendToApp();

    sidebarContent.innerHTML = `
      <h3>${battle.name}</h3>
      <p><strong>Campaign:</strong> ${battle.campaign}</p>
      <p><strong>Start Date:</strong> ${battle.startDate}</p>
      <p><strong>End Date:</strong> ${battle.endDate}</p>
      <p><strong>Allies:</strong> ${battle.allies.join(", ")}</p>
      <p><strong>Axis:</strong> ${battle.axis.join(", ")}</p>
      <p><strong>Outcome:</strong> ${battle.whoWon}</p>
    `;

    this.element.appendChild(sidebarContent);
  }

  public open(): void {
    this.element.classList.add(styles.open);
  }
}

export { Sidebar };
