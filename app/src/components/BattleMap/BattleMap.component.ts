import L from "leaflet";

import { Battle } from "../../shared/types";
import { Component } from "../../shared/Component";

import styles from "./BattleMap.module.scss";

type BattleMapProps = {
  battles: Battle[];
  handleMarkerClick: (battle: Battle) => void;
};

class BattleMap extends Component<BattleMapProps> {
  private readonly map: L.Map;

  constructor(props: BattleMapProps) {
    super(props);

    this.element.classList.add(styles.map);
    this.element.id = "map";

    this.appendToApp();

    const map = L.map("map", {
      center: L.latLng(54.4249794, 18.581202),
      zoom: 20,
    });

    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    this.map = map;
  }

  render(): void {
    this.props.battles.forEach((battle) => {
      const popupContent = `
         <div>
          <h3>${battle.name}</h3>
          <p><strong>Campaign:</strong> ${battle.campaign}</p>
          <p><strong>Theater:</strong> ${battle.theater}</p>
         </div>
      `;

      const marker = L.marker(battle.coordinates, { title: battle.name })
        .bindPopup(popupContent)
        .addTo(this.map);

      marker.on("click", () => {
        this.props.handleMarkerClick(battle);
      });
    });
  }
}

export { BattleMap };
