var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.049592909436544375,
          "pitch": 0.38050707991112986,
          "rotation": 0,
          "target": "1-hall"
        },
        {
          "yaw": -1.5767123170406148,
          "pitch": 0.29659987097883445,
          "rotation": 0,
          "target": "3-bathroom"
        },
        {
          "yaw": -1.2666567052782582,
          "pitch": 0.4531189721575277,
          "rotation": 0.7853981633974483,
          "target": "4-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.015750303024724,
          "pitch": 0.26818768248789837,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": -0.31746804344521706,
          "pitch": 0.3368401726601462,
          "rotation": 0,
          "target": "2-balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-balcony",
      "name": "balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7084932516248923,
          "pitch": 0.3642269034708594,
          "rotation": 0,
          "target": "5-balcony"
        },
        {
          "yaw": 2.9461469562559603,
          "pitch": 0.20709822088124064,
          "rotation": 0,
          "target": "1-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bathroom",
      "name": "bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9936934124705115,
          "pitch": 0.26354406297997457,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": 2.2927503337213206,
          "pitch": 0.6873985349303844,
          "rotation": 4.71238898038469,
          "target": "4-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-room",
      "name": "room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7083405890156627,
          "pitch": 0.32362771280460656,
          "rotation": 5.497787143782138,
          "target": "0-entrance"
        },
        {
          "yaw": 0.11015764579476262,
          "pitch": 0.3446485450209842,
          "rotation": 0,
          "target": "5-balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-balcony",
      "name": "balcony.",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7891729409871795,
          "pitch": 0.3369414674506732,
          "rotation": 0,
          "target": "2-balcony"
        },
        {
          "yaw": 2.965905764432909,
          "pitch": 0.4583114237826571,
          "rotation": 0.7853981633974483,
          "target": "4-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "A10",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
