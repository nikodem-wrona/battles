import "leaflet/dist/leaflet.css";

import "./style.scss";

import { BattleMap, Sidebar } from "./components";
import { battles } from "./battles";
import { Battle } from "./shared/types";

const handleMarkerClick = (battle: Battle) => {
  const sidebar = new Sidebar({ battle });

  sidebar.render();
  sidebar.open();
};

const battleMap = new BattleMap({ battles, handleMarkerClick });

battleMap.render();
