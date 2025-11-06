(function(){
    var script = {
 "mouseWheelEnabled": true,
 "definitions": [{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 26.66,
  "pitch": -0.59
 },
 "id": "panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_5E66F663_5596_11BA_41A8_0022998A6103_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 163.06,
  "pitch": 0
 },
 "id": "camera_44BB1068_569E_71B6_41C9_89B296E1911A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 65.79,
   "backwardYaw": 25.5,
   "distance": 1,
   "panorama": "this.panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 18.76,
   "backwardYaw": -99.66,
   "distance": 1,
   "panorama": "this.panorama_5E66F663_5596_11BA_41A8_0022998A6103"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "demi-su\u00edte casal",
 "id": "panorama_59824AA9_5596_16B6_41C7_E66B37432B10",
 "thumbnailUrl": "media/panorama_59824AA9_5596_16B6_41C7_E66B37432B10_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59824AA9_5596_16B6_41C7_E66B37432B10_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_59824AA9_5596_16B6_41C7_E66B37432B10_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59824AA9_5596_16B6_41C7_E66B37432B10_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_59824AA9_5596_16B6_41C7_E66B37432B10_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59824AA9_5596_16B6_41C7_E66B37432B10_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_59824AA9_5596_16B6_41C7_E66B37432B10_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59824AA9_5596_16B6_41C7_E66B37432B10_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_59824AA9_5596_16B6_41C7_E66B37432B10_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59824AA9_5596_16B6_41C7_E66B37432B10_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_59824AA9_5596_16B6_41C7_E66B37432B10_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59824AA9_5596_16B6_41C7_E66B37432B10_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_59824AA9_5596_16B6_41C7_E66B37432B10_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_59824AA9_5596_16B6_41C7_E66B37432B10_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_59825AA9_5596_16B6_41CA_56DEA9A1EDC2",
  "this.overlay_59827AA9_5596_16B6_41BC_366A044B01BA",
  "this.overlay_59828AA9_5596_16B6_41BC_B1AD6E5E4A57"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 20.08,
  "pitch": 0
 },
 "id": "camera_463E60CD_569E_728E_4189_3BAD15E3FE99",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 169.42,
   "backwardYaw": -2.96,
   "distance": 1,
   "panorama": "this.panorama_5F42F7EE_5596_3E8A_418F_846057276B55"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 52.19,
   "backwardYaw": -173.65,
   "distance": 1,
   "panorama": "this.panorama_58F83434_5597_F19D_41AC_40633474F19A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -18.26,
   "backwardYaw": 173.86,
   "distance": 1,
   "panorama": "this.panorama_5E9BB63D_5596_118F_41AB_988A3F684B9C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 65.53,
   "backwardYaw": -53.39,
   "distance": 1,
   "panorama": "this.panorama_59924EC1_5596_2EF6_41CE_43720572E86B"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "sala de estar",
 "id": "panorama_594780B8_5596_3295_41D0_5F45E6568C64",
 "thumbnailUrl": "media/panorama_594780B8_5596_3295_41D0_5F45E6568C64_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_594780B8_5596_3295_41D0_5F45E6568C64_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_594780B8_5596_3295_41D0_5F45E6568C64_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_594780B8_5596_3295_41D0_5F45E6568C64_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_594780B8_5596_3295_41D0_5F45E6568C64_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_594780B8_5596_3295_41D0_5F45E6568C64_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_594780B8_5596_3295_41D0_5F45E6568C64_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_594780B8_5596_3295_41D0_5F45E6568C64_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_594780B8_5596_3295_41D0_5F45E6568C64_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_594780B8_5596_3295_41D0_5F45E6568C64_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_594780B8_5596_3295_41D0_5F45E6568C64_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_594780B8_5596_3295_41D0_5F45E6568C64_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_594780B8_5596_3295_41D0_5F45E6568C64_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_594780B8_5596_3295_41D0_5F45E6568C64_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_5947A0B8_5596_3295_41B9_A8635576F383",
  "this.overlay_594740B8_5596_3295_4134_D5042651B320",
  "this.overlay_594760B8_5596_3295_41D1_09657FAE78B8",
  "this.overlay_594710B8_5596_3295_419E_356A872C56F6",
  "this.overlay_594730B8_5596_3295_4195_8EF98699AA72"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 161.74,
  "pitch": 0
 },
 "id": "camera_46DD20F4_569E_729E_41B2_70E2D0F60DB4",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -90.6,
  "pitch": 0
 },
 "id": "camera_46C87102_569E_737A_41C4_3206EE506887",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_44F5F04B_569E_718A_41D3_0792ECCD05CF",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -6.14,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.29,
  "pitch": 0
 },
 "id": "camera_44B4A068_569E_71B6_4161_1F6B91696BCC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5E9BB63D_5596_118F_41AB_988A3F684B9C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_5E9BB63D_5596_118F_41AB_988A3F684B9C",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_594780B8_5596_3295_41D0_5F45E6568C64_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_594780B8_5596_3295_41D0_5F45E6568C64",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5F42F7EE_5596_3E8A_418F_846057276B55_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_5F42F7EE_5596_3E8A_418F_846057276B55",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5990833B_5596_178A_41C8_5FDBEA62B10D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_5990833B_5596_178A_41C8_5FDBEA62B10D",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5ED407FE_5596_1E8A_41D4_EB72E62D2A91_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_5ED407FE_5596_1E8A_41D4_EB72E62D2A91",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_58EB4C45_5596_11FE_41D3_E266CEC72634_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_58EB4C45_5596_11FE_41D3_E266CEC72634",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_58F83434_5597_F19D_41AC_40633474F19A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_58F83434_5597_F19D_41AC_40633474F19A",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5EEDA85A_5597_F18A_4188_E142E5EABA00_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_5EEDA85A_5597_F18A_4188_E142E5EABA00",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5E255C7F_5597_F18A_41D3_5C06D9EEC24E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_5E255C7F_5597_F18A_41D3_5C06D9EEC24E",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5906823E_5596_118A_41CA_C61017BCC430_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_5906823E_5596_118A_41CA_C61017BCC430",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5E66F663_5596_11BA_41A8_0022998A6103_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_5E66F663_5596_11BA_41A8_0022998A6103",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_59824AA9_5596_16B6_41C7_E66B37432B10_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_59824AA9_5596_16B6_41C7_E66B37432B10",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_59924EC1_5596_2EF6_41CE_43720572E86B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_59924EC1_5596_2EF6_41CE_43720572E86B",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_599DF2FB_5596_368A_41B9_D5AD4DE0BB19_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.panorama_599DF2FB_5596_368A_41B9_D5AD4DE0BB19",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5BE866F2_5596_3E9A_41A1_D78F42B0BE46_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "media": "this.panorama_5BE866F2_5596_3E9A_41A1_D78F42B0BE46",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_59DBFB73_5596_379A_41B9_1A3280E24806_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.panorama_59DBFB73_5596_379A_41B9_1A3280E24806",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_5BDFA053_5596_119A_4176_9A4A5B04B80C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 0)",
   "media": "this.panorama_5BDFA053_5596_119A_4176_9A4A5B04B80C",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList",
 "changing": "var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -24.3,
  "pitch": 0
 },
 "id": "camera_462EC0D5_569E_729E_41C4_32D6AF37D29D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_58F83434_5597_F19D_41AC_40633474F19A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -114.21,
  "pitch": 0
 },
 "id": "camera_468A7129_569E_73B6_419C_10F05E458BCA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 8.18,
  "pitch": 0
 },
 "id": "camera_44CB903B_569E_718A_41D2_6ACCDB45FF05",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 31.98,
  "pitch": 0
 },
 "id": "camera_46D7C0F4_569E_729E_41D0_23BF7A6D0D5C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_5E9BB63D_5596_118F_41AB_988A3F684B9C_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -161.78,
  "pitch": 5.31
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -166.34,
   "backwardYaw": 67.49,
   "distance": 1,
   "panorama": "this.panorama_5990833B_5596_178A_41C8_5FDBEA62B10D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 9.32,
   "backwardYaw": -171.82,
   "distance": 1,
   "panorama": "this.panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "churrasqueira e cozinha",
 "id": "panorama_5ED407FE_5596_1E8A_41D4_EB72E62D2A91",
 "thumbnailUrl": "media/panorama_5ED407FE_5596_1E8A_41D4_EB72E62D2A91_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5ED407FE_5596_1E8A_41D4_EB72E62D2A91_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5ED407FE_5596_1E8A_41D4_EB72E62D2A91_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5ED407FE_5596_1E8A_41D4_EB72E62D2A91_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5ED407FE_5596_1E8A_41D4_EB72E62D2A91_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5ED407FE_5596_1E8A_41D4_EB72E62D2A91_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5ED407FE_5596_1E8A_41D4_EB72E62D2A91_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5ED407FE_5596_1E8A_41D4_EB72E62D2A91_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5ED407FE_5596_1E8A_41D4_EB72E62D2A91_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5ED407FE_5596_1E8A_41D4_EB72E62D2A91_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5ED407FE_5596_1E8A_41D4_EB72E62D2A91_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5ED407FE_5596_1E8A_41D4_EB72E62D2A91_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5ED407FE_5596_1E8A_41D4_EB72E62D2A91_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5ED407FE_5596_1E8A_41D4_EB72E62D2A91_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_5ED417FE_5596_1E8A_41B0_0E74C6D7C042",
  "this.overlay_5ED5E7FE_5596_1E8A_41D1_34A127B5F650",
  "this.overlay_5ED5F7FE_5596_1E8A_41B9_9E8C20D1ECDC"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -154.5,
  "pitch": 0
 },
 "id": "camera_46C67109_569E_7376_41CB_B80FECB166DF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -144.81,
   "backwardYaw": 85.81,
   "distance": 1,
   "panorama": "this.panorama_599DF2FB_5596_368A_41B9_D5AD4DE0BB19"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 173.86,
   "backwardYaw": -18.26,
   "distance": 1,
   "panorama": "this.panorama_594780B8_5596_3295_41D0_5F45E6568C64"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "hall do Pr\u00e9dio",
 "id": "panorama_5E9BB63D_5596_118F_41AB_988A3F684B9C",
 "thumbnailUrl": "media/panorama_5E9BB63D_5596_118F_41AB_988A3F684B9C_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9BB63D_5596_118F_41AB_988A3F684B9C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5E9BB63D_5596_118F_41AB_988A3F684B9C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9BB63D_5596_118F_41AB_988A3F684B9C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5E9BB63D_5596_118F_41AB_988A3F684B9C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9BB63D_5596_118F_41AB_988A3F684B9C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5E9BB63D_5596_118F_41AB_988A3F684B9C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9BB63D_5596_118F_41AB_988A3F684B9C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5E9BB63D_5596_118F_41AB_988A3F684B9C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9BB63D_5596_118F_41AB_988A3F684B9C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5E9BB63D_5596_118F_41AB_988A3F684B9C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9BB63D_5596_118F_41AB_988A3F684B9C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5E9BB63D_5596_118F_41AB_988A3F684B9C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5E9BB63D_5596_118F_41AB_988A3F684B9C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_5E9B463D_5596_118F_41C3_191F629CCF2A",
  "this.overlay_5E9B563D_5596_118F_41B2_0D01386F2777",
  "this.overlay_5E9B763D_5596_118F_41D0_1095F6FE56B1"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -159.92,
   "backwardYaw": 17.44,
   "distance": 1,
   "panorama": "this.panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "lavanderia",
 "id": "panorama_58EB4C45_5596_11FE_41D3_E266CEC72634",
 "thumbnailUrl": "media/panorama_58EB4C45_5596_11FE_41D3_E266CEC72634_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58EB4C45_5596_11FE_41D3_E266CEC72634_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_58EB4C45_5596_11FE_41D3_E266CEC72634_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58EB4C45_5596_11FE_41D3_E266CEC72634_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_58EB4C45_5596_11FE_41D3_E266CEC72634_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58EB4C45_5596_11FE_41D3_E266CEC72634_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_58EB4C45_5596_11FE_41D3_E266CEC72634_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58EB4C45_5596_11FE_41D3_E266CEC72634_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_58EB4C45_5596_11FE_41D3_E266CEC72634_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58EB4C45_5596_11FE_41D3_E266CEC72634_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_58EB4C45_5596_11FE_41D3_E266CEC72634_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58EB4C45_5596_11FE_41D3_E266CEC72634_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_58EB4C45_5596_11FE_41D3_E266CEC72634_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_58EB4C45_5596_11FE_41D3_E266CEC72634_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_58EB2C45_5596_11FE_41CB_13C49C45953E",
  "this.overlay_58EB3C45_5596_11FE_41D0_194459AE945B"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -70.9,
  "pitch": -2.31
 },
 "id": "panorama_59924EC1_5596_2EF6_41CE_43720572E86B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -17.38,
  "pitch": 0
 },
 "id": "camera_463280D4_569E_729E_41A4_4B2BD4EC9A94",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "gyroscopeEnabled": true,
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_rotation"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -127.81,
  "pitch": 0
 },
 "id": "camera_44328026_569E_71BD_41D2_19FAEBAE5D84",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -173.65,
   "backwardYaw": 52.19,
   "distance": 1,
   "panorama": "this.panorama_594780B8_5596_3295_41D0_5F45E6568C64"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 2.9,
   "backwardYaw": -176.57,
   "distance": 1,
   "panorama": "this.panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5906823E_5596_118A_41CA_C61017BCC430"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "corredor",
 "id": "panorama_58F83434_5597_F19D_41AC_40633474F19A",
 "thumbnailUrl": "media/panorama_58F83434_5597_F19D_41AC_40633474F19A_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58F83434_5597_F19D_41AC_40633474F19A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_58F83434_5597_F19D_41AC_40633474F19A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58F83434_5597_F19D_41AC_40633474F19A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_58F83434_5597_F19D_41AC_40633474F19A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58F83434_5597_F19D_41AC_40633474F19A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_58F83434_5597_F19D_41AC_40633474F19A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58F83434_5597_F19D_41AC_40633474F19A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_58F83434_5597_F19D_41AC_40633474F19A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58F83434_5597_F19D_41AC_40633474F19A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_58F83434_5597_F19D_41AC_40633474F19A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58F83434_5597_F19D_41AC_40633474F19A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_58F83434_5597_F19D_41AC_40633474F19A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_58F83434_5597_F19D_41AC_40633474F19A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_58F81434_5597_F19D_418B_DF3E0C3BF4B8",
  "this.overlay_58F80434_5597_F19D_41C1_BA09B2952DFC",
  "this.overlay_58F9D434_5597_F19D_41CD_3C95F84CD70A",
  "this.overlay_58F9C434_5597_F19D_41D0_1C400461518B"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 169.3,
  "pitch": 0
 },
 "id": "camera_460DA0B9_569E_7296_41B9_8B6334B3ED5F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 26.94,
  "pitch": 1.5
 },
 "id": "panorama_5990833B_5596_178A_41C8_5FDBEA62B10D_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 6.68,
  "pitch": -4.49
 },
 "id": "panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5E9BB63D_5596_118F_41AB_988A3F684B9C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_745CDF6A_5588_6292_4193_D718721EA514_playlist, 0, 1)",
   "media": "this.panorama_5E9BB63D_5596_118F_41AB_988A3F684B9C",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_594780B8_5596_3295_41D0_5F45E6568C64_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_745CDF6A_5588_6292_4193_D718721EA514_playlist, 1, 2)",
   "media": "this.panorama_594780B8_5596_3295_41D0_5F45E6568C64",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5F42F7EE_5596_3E8A_418F_846057276B55_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_745CDF6A_5588_6292_4193_D718721EA514_playlist, 2, 3)",
   "media": "this.panorama_5F42F7EE_5596_3E8A_418F_846057276B55",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_745CDF6A_5588_6292_4193_D718721EA514_playlist, 3, 4)",
   "media": "this.panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5990833B_5596_178A_41C8_5FDBEA62B10D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_745CDF6A_5588_6292_4193_D718721EA514_playlist, 4, 5)",
   "media": "this.panorama_5990833B_5596_178A_41C8_5FDBEA62B10D",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5ED407FE_5596_1E8A_41D4_EB72E62D2A91_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_745CDF6A_5588_6292_4193_D718721EA514_playlist, 5, 6)",
   "media": "this.panorama_5ED407FE_5596_1E8A_41D4_EB72E62D2A91",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_58EB4C45_5596_11FE_41D3_E266CEC72634_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_745CDF6A_5588_6292_4193_D718721EA514_playlist, 6, 7)",
   "media": "this.panorama_58EB4C45_5596_11FE_41D3_E266CEC72634",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_745CDF6A_5588_6292_4193_D718721EA514_playlist, 7, 8)",
   "media": "this.panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_58F83434_5597_F19D_41AC_40633474F19A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_745CDF6A_5588_6292_4193_D718721EA514_playlist, 8, 9)",
   "media": "this.panorama_58F83434_5597_F19D_41AC_40633474F19A",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5EEDA85A_5597_F18A_4188_E142E5EABA00_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_745CDF6A_5588_6292_4193_D718721EA514_playlist, 9, 10)",
   "media": "this.panorama_5EEDA85A_5597_F18A_4188_E142E5EABA00",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5E255C7F_5597_F18A_41D3_5C06D9EEC24E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_745CDF6A_5588_6292_4193_D718721EA514_playlist, 10, 11)",
   "media": "this.panorama_5E255C7F_5597_F18A_41D3_5C06D9EEC24E",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5906823E_5596_118A_41CA_C61017BCC430_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_745CDF6A_5588_6292_4193_D718721EA514_playlist, 11, 12)",
   "media": "this.panorama_5906823E_5596_118A_41CA_C61017BCC430",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5E66F663_5596_11BA_41A8_0022998A6103_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_745CDF6A_5588_6292_4193_D718721EA514_playlist, 12, 13)",
   "media": "this.panorama_5E66F663_5596_11BA_41A8_0022998A6103",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_59824AA9_5596_16B6_41C7_E66B37432B10_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_745CDF6A_5588_6292_4193_D718721EA514_playlist, 13, 14)",
   "media": "this.panorama_59824AA9_5596_16B6_41C7_E66B37432B10",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_59924EC1_5596_2EF6_41CE_43720572E86B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_745CDF6A_5588_6292_4193_D718721EA514_playlist, 14, 15)",
   "media": "this.panorama_59924EC1_5596_2EF6_41CE_43720572E86B",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_599DF2FB_5596_368A_41B9_D5AD4DE0BB19_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_745CDF6A_5588_6292_4193_D718721EA514_playlist, 15, 16)",
   "media": "this.panorama_599DF2FB_5596_368A_41B9_D5AD4DE0BB19",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5BE866F2_5596_3E9A_41A1_D78F42B0BE46_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_745CDF6A_5588_6292_4193_D718721EA514_playlist, 16, 17)",
   "media": "this.panorama_5BE866F2_5596_3E9A_41A1_D78F42B0BE46",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_59DBFB73_5596_379A_41B9_1A3280E24806_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_745CDF6A_5588_6292_4193_D718721EA514_playlist, 17, 18)",
   "media": "this.panorama_59DBFB73_5596_379A_41B9_1A3280E24806",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5BDFA053_5596_119A_4176_9A4A5B04B80C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_745CDF6A_5588_6292_4193_D718721EA514_playlist, 18, 0)",
   "media": "this.panorama_5BDFA053_5596_119A_4176_9A4A5B04B80C",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_745CDF6A_5588_6292_4193_D718721EA514_playlist"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -3.71,
   "backwardYaw": -30.35,
   "distance": 1,
   "panorama": "this.panorama_5EEDA85A_5597_F18A_4188_E142E5EABA00"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -176.57,
   "backwardYaw": 2.9,
   "distance": 1,
   "panorama": "this.panorama_58F83434_5597_F19D_41AC_40633474F19A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 25.5,
   "backwardYaw": 65.79,
   "distance": 1,
   "panorama": "this.panorama_59824AA9_5596_16B6_41C7_E66B37432B10"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 162.62,
   "backwardYaw": -67.93,
   "distance": 1,
   "panorama": "this.panorama_5906823E_5596_118A_41CA_C61017BCC430"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "corredor quartos",
 "id": "panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07",
 "thumbnailUrl": "media/panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_5E277E6B_5596_318A_417B_7F1D6971080A",
  "this.overlay_5E276E6B_5596_318A_41D1_4DFD02EF35B2",
  "this.overlay_5E270E6B_5596_318A_41D3_CC2E571E18D0",
  "this.overlay_5E273E6B_5596_318A_41B0_EC97EEC0BDDC",
  "this.overlay_5E24DE6B_5596_318A_41CA_26864007F4F4"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -4.09,
   "backwardYaw": -148.02,
   "distance": 1,
   "panorama": "this.panorama_5EEDA85A_5597_F18A_4188_E142E5EABA00"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "banheiro su\u00edte",
 "id": "panorama_5E255C7F_5597_F18A_41D3_5C06D9EEC24E",
 "thumbnailUrl": "media/panorama_5E255C7F_5597_F18A_41D3_5C06D9EEC24E_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E255C7F_5597_F18A_41D3_5C06D9EEC24E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5E255C7F_5597_F18A_41D3_5C06D9EEC24E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E255C7F_5597_F18A_41D3_5C06D9EEC24E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5E255C7F_5597_F18A_41D3_5C06D9EEC24E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E255C7F_5597_F18A_41D3_5C06D9EEC24E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5E255C7F_5597_F18A_41D3_5C06D9EEC24E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E255C7F_5597_F18A_41D3_5C06D9EEC24E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5E255C7F_5597_F18A_41D3_5C06D9EEC24E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E255C7F_5597_F18A_41D3_5C06D9EEC24E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5E255C7F_5597_F18A_41D3_5C06D9EEC24E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E255C7F_5597_F18A_41D3_5C06D9EEC24E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5E255C7F_5597_F18A_41D3_5C06D9EEC24E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5E255C7F_5597_F18A_41D3_5C06D9EEC24E_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_5E254C7F_5597_F18A_41D0_4DD40CBEA4CF",
  "this.overlay_5E253C7F_5597_F18A_41C7_D1833F217CB3"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -161.24,
  "pitch": 0
 },
 "id": "camera_44896068_569E_71B6_41D4_9C4D1A25BB0B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 24.99,
  "pitch": 3.34
 },
 "id": "panorama_59824AA9_5596_16B6_41C7_E66B37432B10_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -10.58,
  "pitch": 0
 },
 "id": "camera_45565078_569E_7196_41CF_F6AE73C32809",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -162.56,
  "pitch": 0
 },
 "id": "camera_46EA9113_569E_739A_41D2_3009B86C04B4",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.91,
  "pitch": 0
 },
 "id": "camera_44A6C078_569E_7196_41C3_76F5ECFF916A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -41.79,
  "pitch": 5.19
 },
 "id": "panorama_5906823E_5596_118A_41CA_C61017BCC430_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -99.66,
   "backwardYaw": 18.76,
   "distance": 1,
   "panorama": "this.panorama_59824AA9_5596_16B6_41C7_E66B37432B10"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 103.19,
   "backwardYaw": -16.94,
   "distance": 1,
   "panorama": "this.panorama_5906823E_5596_118A_41CA_C61017BCC430"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "banheiro e lavabo demi-su\u00edtes",
 "id": "panorama_5E66F663_5596_11BA_41A8_0022998A6103",
 "thumbnailUrl": "media/panorama_5E66F663_5596_11BA_41A8_0022998A6103_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E66F663_5596_11BA_41A8_0022998A6103_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5E66F663_5596_11BA_41A8_0022998A6103_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E66F663_5596_11BA_41A8_0022998A6103_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5E66F663_5596_11BA_41A8_0022998A6103_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E66F663_5596_11BA_41A8_0022998A6103_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5E66F663_5596_11BA_41A8_0022998A6103_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E66F663_5596_11BA_41A8_0022998A6103_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5E66F663_5596_11BA_41A8_0022998A6103_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E66F663_5596_11BA_41A8_0022998A6103_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5E66F663_5596_11BA_41A8_0022998A6103_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E66F663_5596_11BA_41A8_0022998A6103_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5E66F663_5596_11BA_41A8_0022998A6103_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5E66F663_5596_11BA_41A8_0022998A6103_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_5E651663_5596_11BA_41CC_3BF5E1DE07CA",
  "this.overlay_5E652663_5596_11BA_41C5_9C389F92E1A0",
  "this.overlay_5E654663_5596_11BA_41D3_7171942C07CD"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -170.68,
  "pitch": 0
 },
 "id": "camera_4604F0C6_569E_72FA_41CE_1447F04B03BC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -94.19,
  "pitch": 0
 },
 "id": "camera_46DA30E4_569E_72BE_41C5_E7805AA4C90F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 3.43,
  "pitch": 0
 },
 "id": "camera_4428D02B_569E_718A_41D1_09AEDFD6BAD2",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -65.99,
  "pitch": -12.13
 },
 "id": "panorama_5BDFA053_5596_119A_4176_9A4A5B04B80C_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 158.09,
  "pitch": -2.83
 },
 "id": "panorama_594780B8_5596_3295_41D0_5F45E6568C64_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 89.4,
   "backwardYaw": 168.1,
   "distance": 1,
   "panorama": "this.panorama_59DBFB73_5596_379A_41B9_1A3280E24806"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "dupla vaga garagem 601",
 "id": "panorama_5BE866F2_5596_3E9A_41A1_D78F42B0BE46",
 "thumbnailUrl": "media/panorama_5BE866F2_5596_3E9A_41A1_D78F42B0BE46_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BE866F2_5596_3E9A_41A1_D78F42B0BE46_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BE866F2_5596_3E9A_41A1_D78F42B0BE46_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BE866F2_5596_3E9A_41A1_D78F42B0BE46_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BE866F2_5596_3E9A_41A1_D78F42B0BE46_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BE866F2_5596_3E9A_41A1_D78F42B0BE46_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BE866F2_5596_3E9A_41A1_D78F42B0BE46_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BE866F2_5596_3E9A_41A1_D78F42B0BE46_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BE866F2_5596_3E9A_41A1_D78F42B0BE46_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BE866F2_5596_3E9A_41A1_D78F42B0BE46_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BE866F2_5596_3E9A_41A1_D78F42B0BE46_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BE866F2_5596_3E9A_41A1_D78F42B0BE46_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BE866F2_5596_3E9A_41A1_D78F42B0BE46_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5BE866F2_5596_3E9A_41A1_D78F42B0BE46_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_5BE896F2_5596_3E9A_41C7_B799E4E1C5BB",
  "this.overlay_5BE886F2_5596_3E9A_418C_DEFB9364F4E1",
  "this.overlay_5BE8B6F2_5596_3E9A_41D0_B431F589EFF4",
  "this.overlay_5BE8D6F2_5596_3E9A_418C_7DD127D05967"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -67.93,
   "backwardYaw": 162.62,
   "distance": 1,
   "panorama": "this.panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -16.94,
   "backwardYaw": 103.19,
   "distance": 1,
   "panorama": "this.panorama_5E66F663_5596_11BA_41A8_0022998A6103"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "demi-su\u00edte 4 camas",
 "id": "panorama_5906823E_5596_118A_41CA_C61017BCC430",
 "thumbnailUrl": "media/panorama_5906823E_5596_118A_41CA_C61017BCC430_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5906823E_5596_118A_41CA_C61017BCC430_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5906823E_5596_118A_41CA_C61017BCC430_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5906823E_5596_118A_41CA_C61017BCC430_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5906823E_5596_118A_41CA_C61017BCC430_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5906823E_5596_118A_41CA_C61017BCC430_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5906823E_5596_118A_41CA_C61017BCC430_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5906823E_5596_118A_41CA_C61017BCC430_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5906823E_5596_118A_41CA_C61017BCC430_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5906823E_5596_118A_41CA_C61017BCC430_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5906823E_5596_118A_41CA_C61017BCC430_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5906823E_5596_118A_41CA_C61017BCC430_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5906823E_5596_118A_41CA_C61017BCC430_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5906823E_5596_118A_41CA_C61017BCC430_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_5906B23E_5596_118A_41C5_D02E0D5E4C2E",
  "this.overlay_5906C23E_5596_118A_41D2_0858C20849E3",
  "this.overlay_5906F23E_5596_118A_41BC_FDFB00B50608"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 168.1,
   "backwardYaw": 89.4,
   "distance": 1,
   "panorama": "this.panorama_5BE866F2_5596_3E9A_41A1_D78F42B0BE46"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_594780B8_5596_3295_41D0_5F45E6568C64"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "corredor garagem 2",
 "id": "panorama_59DBFB73_5596_379A_41B9_1A3280E24806",
 "thumbnailUrl": "media/panorama_59DBFB73_5596_379A_41B9_1A3280E24806_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59DBFB73_5596_379A_41B9_1A3280E24806_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_59DBFB73_5596_379A_41B9_1A3280E24806_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59DBFB73_5596_379A_41B9_1A3280E24806_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_59DBFB73_5596_379A_41B9_1A3280E24806_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59DBFB73_5596_379A_41B9_1A3280E24806_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_59DBFB73_5596_379A_41B9_1A3280E24806_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59DBFB73_5596_379A_41B9_1A3280E24806_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_59DBFB73_5596_379A_41B9_1A3280E24806_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59DBFB73_5596_379A_41B9_1A3280E24806_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_59DBFB73_5596_379A_41B9_1A3280E24806_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59DBFB73_5596_379A_41B9_1A3280E24806_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_59DBFB73_5596_379A_41B9_1A3280E24806_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_59DBFB73_5596_379A_41B9_1A3280E24806_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_59DA1B73_5596_379A_41D4_10AF9AD6C2B9",
  "this.overlay_59DA0B73_5596_379A_41C9_0457F5F4EC7D",
  "this.overlay_59DA3B73_5596_379A_41D1_77B8E174B854"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 13.66,
  "pitch": 0
 },
 "id": "camera_4621F0E4_569E_72BE_41D1_A1A097A72BDC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 6.35,
  "pitch": 0
 },
 "id": "camera_44FFF04B_569E_718A_41BE_C6D3E72B4F48",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_5ED407FE_5596_1E8A_41D4_EB72E62D2A91_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 112.07,
  "pitch": 0
 },
 "id": "camera_4681B12E_569E_738A_41AE_3C9FF58237D7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -112.51,
  "pitch": 0
 },
 "id": "camera_44DD303B_569E_718A_41D5_495D880F0BF3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 140.12,
  "pitch": -11.46
 },
 "id": "panorama_5F42F7EE_5596_3E8A_418F_846057276B55_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -2.96,
   "backwardYaw": 169.42,
   "distance": 1,
   "panorama": "this.panorama_594780B8_5596_3295_41D0_5F45E6568C64"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 155.7,
   "backwardYaw": -10.7,
   "distance": 1,
   "panorama": "this.panorama_5990833B_5596_178A_41C8_5FDBEA62B10D"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "sala tv",
 "id": "panorama_5F42F7EE_5596_3E8A_418F_846057276B55",
 "thumbnailUrl": "media/panorama_5F42F7EE_5596_3E8A_418F_846057276B55_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F42F7EE_5596_3E8A_418F_846057276B55_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5F42F7EE_5596_3E8A_418F_846057276B55_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F42F7EE_5596_3E8A_418F_846057276B55_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5F42F7EE_5596_3E8A_418F_846057276B55_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F42F7EE_5596_3E8A_418F_846057276B55_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5F42F7EE_5596_3E8A_418F_846057276B55_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F42F7EE_5596_3E8A_418F_846057276B55_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5F42F7EE_5596_3E8A_418F_846057276B55_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F42F7EE_5596_3E8A_418F_846057276B55_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5F42F7EE_5596_3E8A_418F_846057276B55_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F42F7EE_5596_3E8A_418F_846057276B55_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5F42F7EE_5596_3E8A_418F_846057276B55_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F42F7EE_5596_3E8A_418F_846057276B55_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_5F42E7EE_5596_3E8A_41C6_717BAC36F118",
  "this.overlay_5F4297EE_5596_3E8A_4190_3F4C308B1EB5",
  "this.overlay_5F4287EE_5596_3E8A_4188_44D2A369B6A4"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 154.97,
  "pitch": 6.87
 },
 "id": "panorama_5BE866F2_5596_3E9A_41A1_D78F42B0BE46_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 85.81,
   "backwardYaw": -144.81,
   "distance": 1,
   "panorama": "this.panorama_5E9BB63D_5596_118F_41AB_988A3F684B9C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BDFA053_5596_119A_4176_9A4A5B04B80C"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "entrada garagem",
 "id": "panorama_599DF2FB_5596_368A_41B9_D5AD4DE0BB19",
 "thumbnailUrl": "media/panorama_599DF2FB_5596_368A_41B9_D5AD4DE0BB19_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_599DF2FB_5596_368A_41B9_D5AD4DE0BB19_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_599DF2FB_5596_368A_41B9_D5AD4DE0BB19_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_599DF2FB_5596_368A_41B9_D5AD4DE0BB19_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_599DF2FB_5596_368A_41B9_D5AD4DE0BB19_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_599DF2FB_5596_368A_41B9_D5AD4DE0BB19_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_599DF2FB_5596_368A_41B9_D5AD4DE0BB19_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_599DF2FB_5596_368A_41B9_D5AD4DE0BB19_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_599DF2FB_5596_368A_41B9_D5AD4DE0BB19_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_599DF2FB_5596_368A_41B9_D5AD4DE0BB19_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_599DF2FB_5596_368A_41B9_D5AD4DE0BB19_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_599DF2FB_5596_368A_41B9_D5AD4DE0BB19_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_599DF2FB_5596_368A_41B9_D5AD4DE0BB19_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_599DF2FB_5596_368A_41B9_D5AD4DE0BB19_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_599DE2FB_5596_368A_41BF_6AA93C02AE3E",
  "this.overlay_599E72FB_5596_368A_41AE_92F051B6BAC0",
  "this.overlay_599E62FB_5596_368A_41C4_CEE150CB251B"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -30.35,
   "backwardYaw": -3.71,
   "distance": 1,
   "panorama": "this.panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -148.02,
   "backwardYaw": -4.09,
   "distance": 1,
   "panorama": "this.panorama_5E255C7F_5597_F18A_41D3_5C06D9EEC24E"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "su\u00edte ",
 "id": "panorama_5EEDA85A_5597_F18A_4188_E142E5EABA00",
 "thumbnailUrl": "media/panorama_5EEDA85A_5597_F18A_4188_E142E5EABA00_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EEDA85A_5597_F18A_4188_E142E5EABA00_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5EEDA85A_5597_F18A_4188_E142E5EABA00_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EEDA85A_5597_F18A_4188_E142E5EABA00_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5EEDA85A_5597_F18A_4188_E142E5EABA00_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EEDA85A_5597_F18A_4188_E142E5EABA00_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5EEDA85A_5597_F18A_4188_E142E5EABA00_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EEDA85A_5597_F18A_4188_E142E5EABA00_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5EEDA85A_5597_F18A_4188_E142E5EABA00_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EEDA85A_5597_F18A_4188_E142E5EABA00_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5EEDA85A_5597_F18A_4188_E142E5EABA00_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EEDA85A_5597_F18A_4188_E142E5EABA00_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5EEDA85A_5597_F18A_4188_E142E5EABA00_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5EEDA85A_5597_F18A_4188_E142E5EABA00_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_5EED985A_5597_F18A_41A4_C4D432855F38",
  "this.overlay_5EED885A_5597_F18A_41AE_D9C7A2C58C75",
  "this.overlay_5EED785A_5597_F18A_41C3_97A34B8C3678"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_5E255C7F_5597_F18A_41D3_5C06D9EEC24E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -10.7,
   "backwardYaw": 155.7,
   "distance": 1,
   "panorama": "this.panorama_5F42F7EE_5596_3E8A_418F_846057276B55"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 67.49,
   "backwardYaw": -166.34,
   "distance": 1,
   "panorama": "this.panorama_5ED407FE_5596_1E8A_41D4_EB72E62D2A91"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "vista janelas e salas",
 "id": "panorama_5990833B_5596_178A_41C8_5FDBEA62B10D",
 "thumbnailUrl": "media/panorama_5990833B_5596_178A_41C8_5FDBEA62B10D_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5990833B_5596_178A_41C8_5FDBEA62B10D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5990833B_5596_178A_41C8_5FDBEA62B10D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5990833B_5596_178A_41C8_5FDBEA62B10D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5990833B_5596_178A_41C8_5FDBEA62B10D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5990833B_5596_178A_41C8_5FDBEA62B10D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5990833B_5596_178A_41C8_5FDBEA62B10D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5990833B_5596_178A_41C8_5FDBEA62B10D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5990833B_5596_178A_41C8_5FDBEA62B10D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5990833B_5596_178A_41C8_5FDBEA62B10D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5990833B_5596_178A_41C8_5FDBEA62B10D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5990833B_5596_178A_41C8_5FDBEA62B10D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5990833B_5596_178A_41C8_5FDBEA62B10D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5990833B_5596_178A_41C8_5FDBEA62B10D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_5990933B_5596_178A_41CA_C9AF9DCFC5F9",
  "this.overlay_5990733B_5596_178A_41CB_3BC35A155FB7",
  "this.overlay_5990433B_5596_178A_41D5_584A572C635E"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -174.61,
  "pitch": 2.44
 },
 "id": "panorama_58EB4C45_5596_11FE_41D3_E266CEC72634_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -76.81,
  "pitch": 0
 },
 "id": "camera_4634C0D5_569E_729E_41AB_158AC57B83EC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 177.04,
  "pitch": 0
 },
 "id": "camera_44C1303B_569E_718A_41D4_96E3BB63969B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 134.68,
  "pitch": 1.64
 },
 "id": "panorama_599DF2FB_5596_368A_41B9_D5AD4DE0BB19_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 80.34,
  "pitch": 0
 },
 "id": "camera_46F3610D_569E_738E_41D0_CC1B4A172A1D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 149.65,
  "pitch": 0
 },
 "id": "camera_46E7F11C_569E_738D_41D2_75C77880182D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -114.47,
  "pitch": 0
 },
 "id": "camera_460080BF_569E_728A_41D3_8BBDCFEAD04F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.1,
  "pitch": 0
 },
 "id": "camera_469D011E_569E_738D_41C2_17ACE5954E0B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "yaw": -160.61,
  "pitch": -0.79
 },
 "id": "panorama_59DBFB73_5596_379A_41B9_1A3280E24806_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -171.82,
   "backwardYaw": 9.32,
   "distance": 1,
   "panorama": "this.panorama_5ED407FE_5596_1E8A_41D4_EB72E62D2A91"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 17.44,
   "backwardYaw": -159.92,
   "distance": 1,
   "panorama": "this.panorama_58EB4C45_5596_11FE_41D3_E266CEC72634"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_594780B8_5596_3295_41D0_5F45E6568C64"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "cozinha",
 "id": "panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC",
 "thumbnailUrl": "media/panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_5EF6806B_5597_F18A_41BF_ABEA943DEB2E",
  "this.overlay_5EC9F06B_5597_F18A_41BA_0B4D8C189A48",
  "this.overlay_5EC9E06B_5597_F18A_419E_37CEF9915E57",
  "this.overlay_5EC9D06B_5597_F18A_41A4_AC422C6CDCE1"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "yaw": -11.9,
  "pitch": 0
 },
 "id": "camera_449F5062_569E_71BA_41C9_334E4CD1252B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_4427E033_569E_719A_41BE_DCE23B37A4F0",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 35.19,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 126.61,
  "pitch": 0
 },
 "id": "camera_44E3905C_569E_718E_41CA_B4B3811963E2",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -53.39,
   "backwardYaw": 65.53,
   "distance": 1,
   "panorama": "this.panorama_594780B8_5596_3295_41D0_5F45E6568C64"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "lavabo",
 "id": "panorama_59924EC1_5596_2EF6_41CE_43720572E86B",
 "thumbnailUrl": "media/panorama_59924EC1_5596_2EF6_41CE_43720572E86B_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59924EC1_5596_2EF6_41CE_43720572E86B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_59924EC1_5596_2EF6_41CE_43720572E86B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59924EC1_5596_2EF6_41CE_43720572E86B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_59924EC1_5596_2EF6_41CE_43720572E86B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59924EC1_5596_2EF6_41CE_43720572E86B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_59924EC1_5596_2EF6_41CE_43720572E86B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59924EC1_5596_2EF6_41CE_43720572E86B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_59924EC1_5596_2EF6_41CE_43720572E86B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59924EC1_5596_2EF6_41CE_43720572E86B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_59924EC1_5596_2EF6_41CE_43720572E86B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59924EC1_5596_2EF6_41CE_43720572E86B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_59924EC1_5596_2EF6_41CE_43720572E86B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_59924EC1_5596_2EF6_41CE_43720572E86B_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_59925EC1_5596_2EF6_41C2_77BB2C9E3C96",
  "this.overlay_59927EC1_5596_2EF6_41CD_B7948E3AE7C2"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -92.74,
  "pitch": 0.18
 },
 "id": "panorama_5EEDA85A_5597_F18A_4188_E142E5EABA00_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_59DBFB73_5596_379A_41B9_1A3280E24806"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "corredor garagem 1",
 "id": "panorama_5BDFA053_5596_119A_4176_9A4A5B04B80C",
 "thumbnailUrl": "media/panorama_5BDFA053_5596_119A_4176_9A4A5B04B80C_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BDFA053_5596_119A_4176_9A4A5B04B80C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BDFA053_5596_119A_4176_9A4A5B04B80C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BDFA053_5596_119A_4176_9A4A5B04B80C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BDFA053_5596_119A_4176_9A4A5B04B80C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BDFA053_5596_119A_4176_9A4A5B04B80C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BDFA053_5596_119A_4176_9A4A5B04B80C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BDFA053_5596_119A_4176_9A4A5B04B80C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BDFA053_5596_119A_4176_9A4A5B04B80C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BDFA053_5596_119A_4176_9A4A5B04B80C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BDFA053_5596_119A_4176_9A4A5B04B80C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BDFA053_5596_119A_4176_9A4A5B04B80C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BDFA053_5596_119A_4176_9A4A5B04B80C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5BDFA053_5596_119A_4176_9A4A5B04B80C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_5BDFB053_5596_119A_41CB_D447B77E7919",
  "this.overlay_5BDF8053_5596_119A_41D4_71DA52CA9090"
 ]
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "playbackBarHeadShadowHorizontalLength": 0,
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "minWidth": 100,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "shadow": false,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "ThumbnailList1355"
 },
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "itemLabelFontStyle": "normal",
 "paddingLeft": 20,
 "scrollBarColor": "#FFFFFF",
 "id": "ThumbnailList_745CDF6A_5588_6292_4193_D718721EA514",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "itemLabelHorizontalAlign": "center",
 "paddingRight": 20,
 "backgroundColorDirection": "vertical",
 "itemThumbnailOpacity": 1,
 "itemThumbnailShadowHorizontalLength": 3,
 "itemLabelFontFamily": "Arial",
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "width": "99.915%",
 "minHeight": 1,
 "borderSize": 0,
 "itemThumbnailShadowOpacity": 0.8,
 "playList": "this.ThumbnailList_745CDF6A_5588_6292_4193_D718721EA514_playlist",
 "itemLabelTextDecoration": "none",
 "verticalAlign": "top",
 "itemThumbnailShadowBlurRadius": 4,
 "scrollBarMargin": 2,
 "itemLabelFontSize": 14,
 "itemVerticalAlign": "middle",
 "itemThumbnailScaleMode": "fit_outside",
 "itemBorderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "itemPaddingLeft": 3,
 "itemLabelFontColor": "#FFFFFF",
 "itemMode": "normal",
 "itemHorizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "minWidth": 1,
 "itemOpacity": 1,
 "itemBackgroundOpacity": 0,
 "itemThumbnailHeight": 75,
 "itemPaddingRight": 3,
 "backgroundOpacity": 0.2,
 "height": 129,
 "paddingTop": 10,
 "layout": "horizontal",
 "gap": 10,
 "itemThumbnailShadowSpread": 1,
 "class": "ThumbnailList",
 "borderRadius": 5,
 "shadow": false,
 "paddingBottom": 10,
 "itemThumbnailBorderRadius": 26,
 "itemPaddingTop": 3,
 "itemLabelGap": 5,
 "itemBackgroundColor": [],
 "itemPaddingBottom": 3,
 "itemBackgroundColorDirection": "vertical",
 "propagateClick": false,
 "itemThumbnailShadowColor": "#000000",
 "itemThumbnailShadow": true,
 "itemThumbnailShadowVerticalLength": 3,
 "itemBackgroundColorRatios": [],
 "backgroundColorRatios": [
  0
 ],
 "itemThumbnailWidth": 75
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5E9B463D_5596_118F_41C3_191F629CCF2A.jpg",
    "class": "ImageResourceLevel",
    "width": 702,
    "height": 702
   }
  ]
 },
 "hfov": 19.5,
 "id": "panorama_59825AA9_5596_16B6_41CA_56DEA9A1EDC2",
 "distance": 5.05,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E66F663_5596_11BA_41A8_0022998A6103, this.camera_46F3610D_569E_738E_41D0_CC1B4A172A1D); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.54,
   "image": "this.AnimatedImageResource_4549E148_55FF_F3F6_4164_8DF74B56C41E",
   "pitch": -5.01,
   "yaw": 18.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_59827AA9_5596_16B6_41BC_366A044B01BA",
 "maps": [
  {
   "hfov": 12.54,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 18.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59824AA9_5596_16B6_41C7_E66B37432B10_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -5.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07, this.camera_46C67109_569E_7376_41CB_B80FECB166DF); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.55,
   "image": "this.AnimatedImageResource_45498148_55FF_F3F6_41D2_AEA35A63759E",
   "pitch": -4.44,
   "yaw": 65.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_59828AA9_5596_16B6_41BC_B1AD6E5E4A57",
 "maps": [
  {
   "hfov": 12.55,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 65.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59824AA9_5596_16B6_41C7_E66B37432B10_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -4.44
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5E9B463D_5596_118F_41C3_191F629CCF2A.jpg",
    "class": "ImageResourceLevel",
    "width": 702,
    "height": 702
   }
  ]
 },
 "hfov": 19.5,
 "id": "panorama_5947A0B8_5596_3295_41B9_A8635576F383",
 "distance": 5.05,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5F42F7EE_5596_3E8A_418F_846057276B55, this.camera_44C1303B_569E_718A_41D4_96E3BB63969B); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.51,
   "image": "this.AnimatedImageResource_45B35148_55FF_F3F6_41D2_19F44835F603",
   "pitch": -6.43,
   "yaw": 169.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_594740B8_5596_3295_4134_D5042651B320",
 "maps": [
  {
   "hfov": 13.51,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 169.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_594780B8_5596_3295_41D0_5F45E6568C64_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -6.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_58F83434_5597_F19D_41AC_40633474F19A, this.camera_44FFF04B_569E_718A_41BE_C6D3E72B4F48); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.55,
   "image": "this.AnimatedImageResource_45B0F148_55FF_F3F6_41B9_5F716422B939",
   "pitch": -4.44,
   "yaw": 52.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_594760B8_5596_3295_41D1_09657FAE78B8",
 "maps": [
  {
   "hfov": 12.55,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 52.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_594780B8_5596_3295_41D0_5F45E6568C64_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -4.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_59924EC1_5596_2EF6_41CE_43720572E86B, this.camera_44E3905C_569E_718E_41CA_B4B3811963E2); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.23,
   "image": "this.AnimatedImageResource_45B09148_55FF_F3F6_41C6_A245353FC506",
   "pitch": -5.04,
   "yaw": 65.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_594710B8_5596_3295_419E_356A872C56F6",
 "maps": [
  {
   "hfov": 8.23,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 65.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_594780B8_5596_3295_41D0_5F45E6568C64_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -5.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E9BB63D_5596_118F_41AB_988A3F684B9C, this.camera_44F5F04B_569E_718A_41D3_0792ECCD05CF); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.57,
   "image": "this.AnimatedImageResource_45B04148_55FF_F3F6_41D0_C8ECB2D23066",
   "pitch": -3.31,
   "yaw": -18.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_594730B8_5596_3295_4195_8EF98699AA72",
 "maps": [
  {
   "hfov": 12.57,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -18.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_594780B8_5596_3295_41D0_5F45E6568C64_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -3.31
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5E9B463D_5596_118F_41C3_191F629CCF2A.jpg",
    "class": "ImageResourceLevel",
    "width": 702,
    "height": 702
   }
  ]
 },
 "hfov": 19.5,
 "id": "panorama_5ED417FE_5596_1E8A_41B0_0E74C6D7C042",
 "distance": 5.05,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC, this.camera_44CB903B_569E_718A_41D2_6ACCDB45FF05); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.49,
   "image": "this.AnimatedImageResource_45B4B148_55FF_F3F6_41AA_C856A980F719",
   "pitch": -7.46,
   "yaw": 9.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5ED5E7FE_5596_1E8A_41D1_34A127B5F650",
 "maps": [
  {
   "hfov": 12.49,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5ED407FE_5596_1E8A_41D4_EB72E62D2A91_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -7.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5990833B_5596_178A_41C8_5FDBEA62B10D, this.camera_44DD303B_569E_718A_41D5_495D880F0BF3); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.55,
   "image": "this.AnimatedImageResource_45B46148_55FF_F3F6_41D0_E286E6A9F826",
   "pitch": -4.82,
   "yaw": -166.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5ED5F7FE_5596_1E8A_41B9_9E8C20D1ECDC",
 "maps": [
  {
   "hfov": 12.55,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -166.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5ED407FE_5596_1E8A_41D4_EB72E62D2A91_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -4.82
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5E9B463D_5596_118F_41C3_191F629CCF2A.jpg",
    "class": "ImageResourceLevel",
    "width": 702,
    "height": 702
   }
  ]
 },
 "hfov": 19.5,
 "id": "panorama_5E9B463D_5596_118F_41C3_191F629CCF2A",
 "distance": 5.05,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_594780B8_5596_3295_41D0_5F45E6568C64, this.camera_46DD20F4_569E_729E_41B2_70E2D0F60DB4); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.44,
   "image": "this.AnimatedImageResource_45BDF148_55FF_F3F6_41CF_50169C4CA1FE",
   "pitch": -6.78,
   "yaw": 173.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5E9B563D_5596_118F_41B2_0D01386F2777",
 "maps": [
  {
   "hfov": 11.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9BB63D_5596_118F_41AB_988A3F684B9C_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -6.78
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_599DF2FB_5596_368A_41B9_D5AD4DE0BB19, this.camera_46DA30E4_569E_72BE_41C5_E7805AA4C90F); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.59,
   "image": "this.AnimatedImageResource_45B3C148_55FF_F3F6_41B5_B60039469552",
   "pitch": -0.85,
   "yaw": -144.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5E9B763D_5596_118F_41D0_1095F6FE56B1",
 "maps": [
  {
   "hfov": 12.59,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -144.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E9BB63D_5596_118F_41AB_988A3F684B9C_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -0.85
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5E9B463D_5596_118F_41C3_191F629CCF2A.jpg",
    "class": "ImageResourceLevel",
    "width": 702,
    "height": 702
   }
  ]
 },
 "hfov": 19.5,
 "id": "panorama_58EB2C45_5596_11FE_41CB_13C49C45953E",
 "distance": 5.05,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC, this.camera_46EA9113_569E_739A_41D2_3009B86C04B4); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.43,
   "image": "this.AnimatedImageResource_45B5E148_55FF_F3F6_41D3_ABEE0AA15656",
   "pitch": -9.16,
   "yaw": -159.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_58EB3C45_5596_11FE_41D0_194459AE945B",
 "maps": [
  {
   "hfov": 12.43,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -159.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58EB4C45_5596_11FE_41D3_E266CEC72634_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -9.16
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5E9B463D_5596_118F_41C3_191F629CCF2A.jpg",
    "class": "ImageResourceLevel",
    "width": 702,
    "height": 702
   }
  ]
 },
 "hfov": 19.5,
 "id": "panorama_58F81434_5597_F19D_418B_DF3E0C3BF4B8",
 "distance": 5.05,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07, this.camera_4428D02B_569E_718A_41D1_09AEDFD6BAD2); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.55,
   "image": "this.AnimatedImageResource_45B5F148_55FF_F3F6_41C3_35925636A740",
   "pitch": -4.44,
   "yaw": 2.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_58F80434_5597_F19D_41C1_BA09B2952DFC",
 "maps": [
  {
   "hfov": 12.55,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58F83434_5597_F19D_41AC_40633474F19A_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -4.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.48,
   "image": "this.AnimatedImageResource_45B5A148_55FF_F3F6_4184_BF719F00359A",
   "pitch": -6.49,
   "yaw": 16.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_58F9D434_5597_F19D_41CD_3C95F84CD70A",
 "maps": [
  {
   "hfov": 5.48,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 16.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58F83434_5597_F19D_41AC_40633474F19A_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_594780B8_5596_3295_41D0_5F45E6568C64, this.camera_44328026_569E_71BD_41D2_19FAEBAE5D84); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.48,
   "image": "this.AnimatedImageResource_45B54148_55FF_F3F6_41D1_7BB30C0DC09C",
   "pitch": -6.48,
   "yaw": -173.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_58F9C434_5597_F19D_41D0_1C400461518B",
 "maps": [
  {
   "hfov": 5.48,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -173.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58F83434_5597_F19D_41AC_40633474F19A_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -6.48
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5E9B463D_5596_118F_41C3_191F629CCF2A.jpg",
    "class": "ImageResourceLevel",
    "width": 702,
    "height": 702
   }
  ]
 },
 "hfov": 19.5,
 "id": "panorama_5E277E6B_5596_318A_417B_7F1D6971080A",
 "distance": 5.05,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5EEDA85A_5597_F18A_4188_E142E5EABA00, this.camera_46E7F11C_569E_738D_41D2_75C77880182D); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.58,
   "image": "this.AnimatedImageResource_45B11148_55FF_F3F6_41D4_FB77202B77BE",
   "pitch": -2.93,
   "yaw": -3.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5E276E6B_5596_318A_41D1_4DFD02EF35B2",
 "maps": [
  {
   "hfov": 12.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -2.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_58F83434_5597_F19D_41AC_40633474F19A, this.camera_469D011E_569E_738D_41C2_17ACE5954E0B); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.59,
   "image": "this.AnimatedImageResource_45B6C148_55FF_F3F6_41D3_041F60A6C62F",
   "pitch": -3.17,
   "yaw": -176.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5E270E6B_5596_318A_41D3_CC2E571E18D0",
 "maps": [
  {
   "hfov": 6.59,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -176.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -3.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5906823E_5596_118A_41CA_C61017BCC430, this.camera_4681B12E_569E_738A_41AE_3C9FF58237D7); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "data": {
  "label": "Arrow 01 Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.31,
   "image": "this.AnimatedImageResource_45B66148_55FF_F3F6_41D3_518F474A1F75",
   "pitch": -3.49,
   "yaw": 162.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_5E273E6B_5596_318A_41B0_EC97EEC0BDDC",
 "maps": [
  {
   "hfov": 11.31,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 162.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_59824AA9_5596_16B6_41C7_E66B37432B10, this.camera_468A7129_569E_73B6_419C_10F05E458BCA); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.3,
   "image": "this.AnimatedImageResource_45B7F148_55FF_F3F6_41C2_4BF824E9CB79",
   "pitch": -4.06,
   "yaw": 25.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_5E24DE6B_5596_318A_41CA_26864007F4F4",
 "maps": [
  {
   "hfov": 11.3,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 25.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07_1_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.06
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5E9B463D_5596_118F_41C3_191F629CCF2A.jpg",
    "class": "ImageResourceLevel",
    "width": 702,
    "height": 702
   }
  ]
 },
 "hfov": 19.5,
 "id": "panorama_5E254C7F_5597_F18A_41D0_4DD40CBEA4CF",
 "distance": 5.05,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5EEDA85A_5597_F18A_4188_E142E5EABA00, this.camera_46D7C0F4_569E_729E_41D0_23BF7A6D0D5C); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.59,
   "image": "this.AnimatedImageResource_454BF148_55FF_F3F6_41D1_44EA5AC5F2C6",
   "pitch": 1.79,
   "yaw": -4.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5E253C7F_5597_F18A_41C7_D1833F217CB3",
 "maps": [
  {
   "hfov": 12.59,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E255C7F_5597_F18A_41D3_5C06D9EEC24E_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 1.79
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5E9B463D_5596_118F_41C3_191F629CCF2A.jpg",
    "class": "ImageResourceLevel",
    "width": 702,
    "height": 702
   }
  ]
 },
 "hfov": 19.5,
 "id": "panorama_5E651663_5596_11BA_41CC_3BF5E1DE07CA",
 "distance": 5.05,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5906823E_5596_118A_41CA_C61017BCC430, this.camera_44BB1068_569E_71B6_41C9_89B296E1911A); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.57,
   "image": "this.AnimatedImageResource_4548B148_55FF_F3F6_41AB_9AD0CF4C220E",
   "pitch": -3.12,
   "yaw": 103.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5E652663_5596_11BA_41C5_9C389F92E1A0",
 "maps": [
  {
   "hfov": 12.57,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 103.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E66F663_5596_11BA_41A8_0022998A6103_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -3.12
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_59824AA9_5596_16B6_41C7_E66B37432B10, this.camera_44896068_569E_71B6_41D4_9C4D1A25BB0B); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.58,
   "image": "this.AnimatedImageResource_45485148_55FF_F3F6_41D0_578588B80948",
   "pitch": -2.93,
   "yaw": -99.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5E654663_5596_11BA_41D3_7171942C07CD",
 "maps": [
  {
   "hfov": 12.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -99.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5E66F663_5596_11BA_41A8_0022998A6103_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -2.93
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5E9B463D_5596_118F_41C3_191F629CCF2A.jpg",
    "class": "ImageResourceLevel",
    "width": 702,
    "height": 702
   }
  ]
 },
 "hfov": 19.5,
 "id": "panorama_5BE896F2_5596_3E9A_41C7_B799E4E1C5BB",
 "distance": 5.05,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 46.21,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BE866F2_5596_3E9A_41A1_D78F42B0BE46_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 284,
      "height": 141
     }
    ]
   },
   "pitch": -15.2,
   "yaw": -150.17
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5BE886F2_5596_3E9A_418C_DEFB9364F4E1",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 46.21,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -150.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BE866F2_5596_3E9A_41A1_D78F42B0BE46_1_HS_1_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 142,
      "height": 70
     }
    ]
   },
   "pitch": -15.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 90,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BE866F2_5596_3E9A_41A1_D78F42B0BE46_1_HS_2_00000.png",
      "class": "ImageResourceLevel",
      "width": 332,
      "height": 332
     }
    ]
   },
   "pitch": 0,
   "yaw": 0
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5BE8B6F2_5596_3E9A_41D0_B431F589EFF4",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BE866F2_5596_3E9A_41A1_D78F42B0BE46_1_HS_2_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 166,
      "height": 166
     }
    ]
   },
   "pitch": 0
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_59DBFB73_5596_379A_41B9_1A3280E24806, this.camera_449F5062_569E_71BA_41C9_334E4CD1252B); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.52,
   "image": "this.AnimatedImageResource_454F9148_55FF_F3F6_41CF_AFE8CCE5B102",
   "pitch": -6.14,
   "yaw": 89.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5BE8D6F2_5596_3E9A_418C_7DD127D05967",
 "maps": [
  {
   "hfov": 12.52,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 89.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BE866F2_5596_3E9A_41A1_D78F42B0BE46_1_HS_3_0_6_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -6.14
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5E9B463D_5596_118F_41C3_191F629CCF2A.jpg",
    "class": "ImageResourceLevel",
    "width": 702,
    "height": 702
   }
  ]
 },
 "hfov": 19.5,
 "id": "panorama_5906B23E_5596_118A_41C5_D02E0D5E4C2E",
 "distance": 5.05,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E66F663_5596_11BA_41A8_0022998A6103, this.camera_4634C0D5_569E_729E_41AB_158AC57B83EC); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.56,
   "image": "this.AnimatedImageResource_454B9148_55FF_F3F6_41D5_193E7678B6D1",
   "pitch": -4.06,
   "yaw": -16.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5906C23E_5596_118A_41D2_0858C20849E3",
 "maps": [
  {
   "hfov": 12.56,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5906823E_5596_118A_41CA_C61017BCC430_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -4.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07, this.camera_463280D4_569E_729E_41A4_4B2BD4EC9A94); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.56,
   "image": "this.AnimatedImageResource_454B3148_55FF_F3F6_41C6_1D60D0A6F0D0",
   "pitch": -4.25,
   "yaw": -67.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5906F23E_5596_118A_41BC_FDFB00B50608",
 "maps": [
  {
   "hfov": 12.56,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -67.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5906823E_5596_118A_41CA_C61017BCC430_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -4.25
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5E9B463D_5596_118F_41C3_191F629CCF2A.jpg",
    "class": "ImageResourceLevel",
    "width": 702,
    "height": 702
   }
  ]
 },
 "hfov": 19.5,
 "id": "panorama_59DA1B73_5596_379A_41D4_10AF9AD6C2B9",
 "distance": 5.05,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BE866F2_5596_3E9A_41A1_D78F42B0BE46, this.camera_46C87102_569E_737A_41C4_3206EE506887); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.82,
   "image": "this.AnimatedImageResource_454F1148_55FF_F3F6_41D0_B559453A284F",
   "pitch": -8.89,
   "yaw": 168.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_59DA0B73_5596_379A_41C9_0457F5F4EC7D",
 "maps": [
  {
   "hfov": 10.82,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 168.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59DBFB73_5596_379A_41B9_1A3280E24806_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -8.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.54,
   "image": "this.AnimatedImageResource_454C9148_55FF_F3F6_4186_AC6FC0F461BE",
   "pitch": -5.01,
   "yaw": 138.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_59DA3B73_5596_379A_41D1_77B8E174B854",
 "maps": [
  {
   "hfov": 12.54,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 138.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59DBFB73_5596_379A_41B9_1A3280E24806_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -5.01
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5E9B463D_5596_118F_41C3_191F629CCF2A.jpg",
    "class": "ImageResourceLevel",
    "width": 702,
    "height": 702
   }
  ]
 },
 "hfov": 19.5,
 "id": "panorama_5F42E7EE_5596_3E8A_41C6_717BAC36F118",
 "distance": 5.05,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5990833B_5596_178A_41C8_5FDBEA62B10D, this.camera_460DA0B9_569E_7296_41B9_8B6334B3ED5F); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.27,
   "image": "this.AnimatedImageResource_45B1D148_55FF_F3F6_41D2_F2D291687E9A",
   "pitch": -12.94,
   "yaw": 155.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5F4297EE_5596_3E8A_4190_3F4C308B1EB5",
 "maps": [
  {
   "hfov": 12.27,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 155.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F42F7EE_5596_3E8A_418F_846057276B55_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -12.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_594780B8_5596_3295_41D0_5F45E6568C64, this.camera_45565078_569E_7196_41CF_F6AE73C32809); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.59,
   "image": "this.AnimatedImageResource_45B18148_55FF_F3F6_41B8_AAD21F99C886",
   "pitch": -1.79,
   "yaw": -2.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5F4287EE_5596_3E8A_4188_44D2A369B6A4",
 "maps": [
  {
   "hfov": 12.59,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F42F7EE_5596_3E8A_418F_846057276B55_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -1.79
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5E9B463D_5596_118F_41C3_191F629CCF2A.jpg",
    "class": "ImageResourceLevel",
    "width": 702,
    "height": 702
   }
  ]
 },
 "hfov": 19.5,
 "id": "panorama_599DE2FB_5596_368A_41BF_6AA93C02AE3E",
 "distance": 5.05,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.57,
   "image": "this.AnimatedImageResource_454EB148_55FF_F3F6_41D4_8D92490985E9",
   "pitch": -3.31,
   "yaw": 167.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_599E72FB_5596_368A_41AE_92F051B6BAC0",
 "maps": [
  {
   "hfov": 12.57,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 167.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_599DF2FB_5596_368A_41B9_D5AD4DE0BB19_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -3.31
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E9BB63D_5596_118F_41AB_988A3F684B9C, this.camera_4427E033_569E_719A_41BE_DCE23B37A4F0); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.58,
   "image": "this.AnimatedImageResource_454E5148_55FF_F3F6_41AC_7B361C50680A",
   "pitch": -1.98,
   "yaw": 85.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_599E62FB_5596_368A_41C4_CEE150CB251B",
 "maps": [
  {
   "hfov": 12.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_599DF2FB_5596_368A_41B9_D5AD4DE0BB19_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -1.98
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5E9B463D_5596_118F_41C3_191F629CCF2A.jpg",
    "class": "ImageResourceLevel",
    "width": 702,
    "height": 702
   }
  ]
 },
 "hfov": 19.5,
 "id": "panorama_5EED985A_5597_F18A_41A4_C4D432855F38",
 "distance": 5.05,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E255C7F_5597_F18A_41D3_5C06D9EEC24E, this.camera_44A6C078_569E_7196_41C3_76F5ECFF916A); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.58,
   "image": "this.AnimatedImageResource_454AE148_55FF_F3F6_41BE_B7CD108B7C4C",
   "pitch": -2.55,
   "yaw": -148.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5EED885A_5597_F18A_41AE_D9C7A2C58C75",
 "maps": [
  {
   "hfov": 12.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -148.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EEDA85A_5597_F18A_4188_E142E5EABA00_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -2.55
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07, this.camera_44B4A068_569E_71B6_4161_1F6B91696BCC); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.5,
   "image": "this.AnimatedImageResource_454A8148_55FF_F3F6_41AC_E6F90F46EECF",
   "pitch": -7.08,
   "yaw": -30.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5EED785A_5597_F18A_41C3_97A34B8C3678",
 "maps": [
  {
   "hfov": 12.5,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -30.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EEDA85A_5597_F18A_4188_E142E5EABA00_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -7.08
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5E9B463D_5596_118F_41C3_191F629CCF2A.jpg",
    "class": "ImageResourceLevel",
    "width": 702,
    "height": 702
   }
  ]
 },
 "hfov": 19.5,
 "id": "panorama_5990933B_5596_178A_41CA_C9AF9DCFC5F9",
 "distance": 5.05,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5ED407FE_5596_1E8A_41D4_EB72E62D2A91, this.camera_4621F0E4_569E_72BE_41D1_A1A097A72BDC); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.5,
   "image": "this.AnimatedImageResource_45B76148_55FF_F3F6_4186_5C20089E047E",
   "pitch": -6.89,
   "yaw": 67.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5990733B_5596_178A_41CB_3BC35A155FB7",
 "maps": [
  {
   "hfov": 12.5,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 67.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5990833B_5596_178A_41C8_5FDBEA62B10D_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -6.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5F42F7EE_5596_3E8A_418F_846057276B55, this.camera_462EC0D5_569E_729E_41C4_32D6AF37D29D); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.51,
   "image": "this.AnimatedImageResource_45B72148_55FF_F3F6_41AD_C9D83D3F70F8",
   "pitch": -6.52,
   "yaw": -10.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5990433B_5596_178A_41D5_584A572C635E",
 "maps": [
  {
   "hfov": 12.51,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5990833B_5596_178A_41C8_5FDBEA62B10D_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -6.52
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5E9B463D_5596_118F_41C3_191F629CCF2A.jpg",
    "class": "ImageResourceLevel",
    "width": 702,
    "height": 702
   }
  ]
 },
 "hfov": 19.5,
 "id": "panorama_5EF6806B_5597_F18A_41BF_ABEA943DEB2E",
 "distance": 5.05,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_58EB4C45_5596_11FE_41D3_E266CEC72634, this.camera_463E60CD_569E_728E_4189_3BAD15E3FE99); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.45,
   "image": "this.AnimatedImageResource_45B57148_55FF_F3F6_41C4_EEC8F6289A9E",
   "pitch": -8.59,
   "yaw": 17.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5EC9F06B_5597_F18A_41BA_0B4D8C189A48",
 "maps": [
  {
   "hfov": 12.45,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 17.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -8.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.42,
   "image": "this.AnimatedImageResource_45B51148_55FF_F3F6_41C9_ABEFC6B0E8D4",
   "pitch": -9.54,
   "yaw": -97.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5EC9E06B_5597_F18A_419E_37CEF9915E57",
 "maps": [
  {
   "hfov": 12.42,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -97.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -9.54
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5ED407FE_5596_1E8A_41D4_EB72E62D2A91, this.camera_4604F0C6_569E_72FA_41CE_1447F04B03BC); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.46,
   "image": "this.AnimatedImageResource_454AD148_55FF_F3F6_41CF_ED439897B1B7",
   "pitch": -8.22,
   "yaw": -171.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5EC9D06B_5597_F18A_41A4_AC422C6CDCE1",
 "maps": [
  {
   "hfov": 12.46,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -8.22
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5E9B463D_5596_118F_41C3_191F629CCF2A.jpg",
    "class": "ImageResourceLevel",
    "width": 702,
    "height": 702
   }
  ]
 },
 "hfov": 19.5,
 "id": "panorama_59925EC1_5596_2EF6_41C2_77BB2C9E3C96",
 "distance": 5.05,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_594780B8_5596_3295_41D0_5F45E6568C64, this.camera_460080BF_569E_728A_41D3_8BBDCFEAD04F); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.52,
   "image": "this.AnimatedImageResource_45492148_55FF_F3F6_41CA_6B092FB6AF5F",
   "pitch": -6.14,
   "yaw": -53.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_59927EC1_5596_2EF6_41CD_B7948E3AE7C2",
 "maps": [
  {
   "hfov": 12.52,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -53.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59924EC1_5596_2EF6_41CE_43720572E86B_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -6.14
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5E9B463D_5596_118F_41C3_191F629CCF2A.jpg",
    "class": "ImageResourceLevel",
    "width": 702,
    "height": 702
   }
  ]
 },
 "hfov": 19.5,
 "id": "panorama_5BDFB053_5596_119A_41CB_D447B77E7919",
 "distance": 5.05,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.38,
   "image": "this.AnimatedImageResource_454C415A_55FF_F38A_41AC_29EECD1CC565",
   "pitch": -10.48,
   "yaw": -80.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5BDF8053_5596_119A_41D4_71DA52CA9090",
 "maps": [
  {
   "hfov": 12.38,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -80.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BDFA053_5596_119A_4176_9A4A5B04B80C_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -10.48
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_4549E148_55FF_F3F6_4164_8DF74B56C41E",
 "levels": [
  {
   "url": "media/panorama_59824AA9_5596_16B6_41C7_E66B37432B10_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_45498148_55FF_F3F6_41D2_AEA35A63759E",
 "levels": [
  {
   "url": "media/panorama_59824AA9_5596_16B6_41C7_E66B37432B10_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_45B35148_55FF_F3F6_41D2_19F44835F603",
 "levels": [
  {
   "url": "media/panorama_594780B8_5596_3295_41D0_5F45E6568C64_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_45B0F148_55FF_F3F6_41B9_5F716422B939",
 "levels": [
  {
   "url": "media/panorama_594780B8_5596_3295_41D0_5F45E6568C64_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_45B09148_55FF_F3F6_41C6_A245353FC506",
 "levels": [
  {
   "url": "media/panorama_594780B8_5596_3295_41D0_5F45E6568C64_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_45B04148_55FF_F3F6_41D0_C8ECB2D23066",
 "levels": [
  {
   "url": "media/panorama_594780B8_5596_3295_41D0_5F45E6568C64_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_45B4B148_55FF_F3F6_41AA_C856A980F719",
 "levels": [
  {
   "url": "media/panorama_5ED407FE_5596_1E8A_41D4_EB72E62D2A91_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_45B46148_55FF_F3F6_41D0_E286E6A9F826",
 "levels": [
  {
   "url": "media/panorama_5ED407FE_5596_1E8A_41D4_EB72E62D2A91_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_45BDF148_55FF_F3F6_41CF_50169C4CA1FE",
 "levels": [
  {
   "url": "media/panorama_5E9BB63D_5596_118F_41AB_988A3F684B9C_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_45B3C148_55FF_F3F6_41B5_B60039469552",
 "levels": [
  {
   "url": "media/panorama_5E9BB63D_5596_118F_41AB_988A3F684B9C_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_45B5E148_55FF_F3F6_41D3_ABEE0AA15656",
 "levels": [
  {
   "url": "media/panorama_58EB4C45_5596_11FE_41D3_E266CEC72634_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_45B5F148_55FF_F3F6_41C3_35925636A740",
 "levels": [
  {
   "url": "media/panorama_58F83434_5597_F19D_41AC_40633474F19A_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_45B5A148_55FF_F3F6_4184_BF719F00359A",
 "levels": [
  {
   "url": "media/panorama_58F83434_5597_F19D_41AC_40633474F19A_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 300
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_45B54148_55FF_F3F6_41D1_7BB30C0DC09C",
 "levels": [
  {
   "url": "media/panorama_58F83434_5597_F19D_41AC_40633474F19A_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_45B11148_55FF_F3F6_41D4_FB77202B77BE",
 "levels": [
  {
   "url": "media/panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_45B6C148_55FF_F3F6_41D3_041F60A6C62F",
 "levels": [
  {
   "url": "media/panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_45B66148_55FF_F3F6_41D3_518F474A1F75",
 "levels": [
  {
   "url": "media/panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 300
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_45B7F148_55FF_F3F6_41C2_4BF824E9CB79",
 "levels": [
  {
   "url": "media/panorama_5E275E6B_5596_318A_41CC_3FC9E2B49A07_1_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 300
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_454BF148_55FF_F3F6_41D1_44EA5AC5F2C6",
 "levels": [
  {
   "url": "media/panorama_5E255C7F_5597_F18A_41D3_5C06D9EEC24E_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_4548B148_55FF_F3F6_41AB_9AD0CF4C220E",
 "levels": [
  {
   "url": "media/panorama_5E66F663_5596_11BA_41A8_0022998A6103_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_45485148_55FF_F3F6_41D0_578588B80948",
 "levels": [
  {
   "url": "media/panorama_5E66F663_5596_11BA_41A8_0022998A6103_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_454F9148_55FF_F3F6_41CF_AFE8CCE5B102",
 "levels": [
  {
   "url": "media/panorama_5BE866F2_5596_3E9A_41A1_D78F42B0BE46_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_454B9148_55FF_F3F6_41D5_193E7678B6D1",
 "levels": [
  {
   "url": "media/panorama_5906823E_5596_118A_41CA_C61017BCC430_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_454B3148_55FF_F3F6_41C6_1D60D0A6F0D0",
 "levels": [
  {
   "url": "media/panorama_5906823E_5596_118A_41CA_C61017BCC430_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_454F1148_55FF_F3F6_41D0_B559453A284F",
 "levels": [
  {
   "url": "media/panorama_59DBFB73_5596_379A_41B9_1A3280E24806_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_454C9148_55FF_F3F6_4186_AC6FC0F461BE",
 "levels": [
  {
   "url": "media/panorama_59DBFB73_5596_379A_41B9_1A3280E24806_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_45B1D148_55FF_F3F6_41D2_F2D291687E9A",
 "levels": [
  {
   "url": "media/panorama_5F42F7EE_5596_3E8A_418F_846057276B55_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_45B18148_55FF_F3F6_41B8_AAD21F99C886",
 "levels": [
  {
   "url": "media/panorama_5F42F7EE_5596_3E8A_418F_846057276B55_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_454EB148_55FF_F3F6_41D4_8D92490985E9",
 "levels": [
  {
   "url": "media/panorama_599DF2FB_5596_368A_41B9_D5AD4DE0BB19_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_454E5148_55FF_F3F6_41AC_7B361C50680A",
 "levels": [
  {
   "url": "media/panorama_599DF2FB_5596_368A_41B9_D5AD4DE0BB19_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_454AE148_55FF_F3F6_41BE_B7CD108B7C4C",
 "levels": [
  {
   "url": "media/panorama_5EEDA85A_5597_F18A_4188_E142E5EABA00_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_454A8148_55FF_F3F6_41AC_E6F90F46EECF",
 "levels": [
  {
   "url": "media/panorama_5EEDA85A_5597_F18A_4188_E142E5EABA00_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_45B76148_55FF_F3F6_4186_5C20089E047E",
 "levels": [
  {
   "url": "media/panorama_5990833B_5596_178A_41C8_5FDBEA62B10D_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_45B72148_55FF_F3F6_41AD_C9D83D3F70F8",
 "levels": [
  {
   "url": "media/panorama_5990833B_5596_178A_41C8_5FDBEA62B10D_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_45B57148_55FF_F3F6_41C4_EEC8F6289A9E",
 "levels": [
  {
   "url": "media/panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_45B51148_55FF_F3F6_41C9_ABEFC6B0E8D4",
 "levels": [
  {
   "url": "media/panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_454AD148_55FF_F3F6_41CF_ED439897B1B7",
 "levels": [
  {
   "url": "media/panorama_5EF6906B_5597_F18A_41C9_615F7109A0EC_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_45492148_55FF_F3F6_41CA_6B092FB6AF5F",
 "levels": [
  {
   "url": "media/panorama_59924EC1_5596_2EF6_41CE_43720572E86B_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_454C415A_55FF_F38A_41AC_29EECD1CC565",
 "levels": [
  {
   "url": "media/panorama_5BDFA053_5596_119A_4176_9A4A5B04B80C_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
}],
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_745CDF6A_5588_6292_4193_D718721EA514_playlist,this.mainPlayList])",
 "data": {
  "name": "Player451"
 },
 "children": [
  "this.MainViewer",
  {
   "data": {
    "name": "Container453"
   },
   "children": [
    "this.ThumbnailList_745CDF6A_5588_6292_4193_D718721EA514"
   ],
   "left": 0,
   "paddingLeft": 0,
   "scrollBarColor": "#000000",
   "paddingRight": 0,
   "scrollBarVisible": "rollOver",
   "right": 0,
   "scrollBarOpacity": 0.5,
   "borderSize": 0,
   "minHeight": 20,
   "horizontalAlign": "center",
   "bottom": 0,
   "contentOpaque": false,
   "minWidth": 20,
   "scrollBarMargin": 2,
   "verticalAlign": "bottom",
   "height": 200,
   "layout": "horizontal",
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "class": "Container",
   "borderRadius": 0,
   "gap": 10,
   "paddingBottom": 0,
   "shadow": false,
   "scrollBarWidth": 10,
   "propagateClick": false,
   "overflow": "visible"
  }
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "borderSize": 0,
 "scripts": {
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "unregisterKey": function(key){  delete window[key]; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "existsKey": function(key){  return key in window; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getKey": function(key){  return window[key]; }
 },
 "horizontalAlign": "left",
 "defaultVRPointer": "laser",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "downloadEnabled": false,
 "verticalAlign": "top",
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "class": "Player",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
