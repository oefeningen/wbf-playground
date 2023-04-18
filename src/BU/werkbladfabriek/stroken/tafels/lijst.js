export default [{
    component: () => import("components/werkbladfabriek/stroken/tafels/test_tafels"),
    id: "oefenvorm1",
    label: "losse oefeningen",
    value: "oefenvorm1"
  },

  // {
  //   component: () => import("components/stroken/tafels/test_tafels3"),
  //   id: "oefenvorm2",
  //   label: "oefenvorm2",
  //   value: "oefenvorm2"

  // },
  {
    component: () => import("components/werkbladfabriek/stroken/tafels/tafels_tafelspoor"),
    id: "Tafelspoor",
    label: "tafelspoor",
    value: "tafelspoor"

  },
  {
    component: () => import("components/werkbladfabriek/stroken/tafels/tafels_tafelrupsen"),
    id: "tafelrupsen",
    label: "tafelrupsen",
    value: "tafelrupsen"

  },
  {
    component: () => import("components/werkbladfabriek/stroken/tafels/tafels_rooster"),
    id: "rooster",
    label: "rooster",
    value: "rooster"

  }
]
