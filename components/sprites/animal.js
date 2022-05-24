import Sprite from "./sprite"

const animalsObj = {
  "bunny": {
    "filename": "bunny_animations.png",
    "animations": {
      "down": 0,
      "up": 1,
      "left": 3,
      "right": 2,
      "idle": 4
    }
  },
  "bunny baby grey": {
    "filename": "bunny_baby_grey_animation.png",
    "animations": {
      "down": 0,
      "up": 1,
      "left": 2,
      "right": 3,
      "idle": 4
    }
  },
  "bunny grey": {
    "filename": "bunny_grey_animation.png",
    "animations": {
      "down": 0,
      "up": 1,
      "left": 3,
      "right": 2,
      "idle": 4
    }
  },
  "chicken": {
    "filename": "chicken_animation.png",
    "animations": {
      "down": 0,
      "up": 1,
      "left": 3,
      "right": 2,
      "idle": 4
    }
  },
  "chicken baby": {
    "filename": "chicken_baby_animation.png",
    "animations": {
      "down": 0,
      "up": 1,
      "left": 2,
      "right": 3,
      "idle": 4
    }
  },
  "chicken brown": {
    "filename": "chicken_brown_animation.png",
    "animations": {
      "down": 0,
      "up": 1,
      "left": 3,
      "right": 2,
      "idle": 4
    }
  },
  "cow": {
    "filename": "cow_animation.png",
    "animations": {
      "down": 0,
      "up": 1,
      "left": 2,
      "right": 3,
      "idle": 4
    }
  },
  "cow baby black": {
    "filename": "cow_baby_black_animation.png",
    "animations": {
      "down": 0,
      "up": 1,
      "left": 2,
      "right": 3,
      "idle": 4
    }
  },
  "cow baby brown": {
    "filename": "cow_baby_brown_animation.png",
    "animations": {
      "down": 0,
      "up": 1,
      "left": 2,
      "right": 3,
      "idle": 4
    }
  },
  "cow black": {
    "filename": "cow_black_animation.png",
    "animations": {
      "down": 0,
      "up": 1,
      "left": 2,
      "right": 3,
      "idle": 4
    }
  },
  "cow brown": {
    "filename": "cow_brown_animation.png",
    "animations": {
      "down": 0,
      "up": 1,
      "left": 2,
      "right": 3,
      "idle": 4
    }
  },
  "goat": {
    "filename": "goat_animation.png",
    "animations": {
      "down": 0,
      "up": 1,
      "left": 2,
      "right": 3,
      "idle": 4
    }
  },
  "goat baby": {
    "filename": "goat_baby_animation.png",
    "animations": {
      "down": 0,
      "up": 1,
      "left": 2,
      "right": 3,
      "idle": 4
    }
  },
  "goat baby stripe": {
    "filename": "goat_baby_stripe_animation.png",
    "animations": {
      "down": 0,
      "up": 1,
      "left": 2,
      "right": 3,
      "idle": 4
    }
  },
  "goat stripe": {
    "filename": "goat_stripe_animation.png",
    "animations": {
      "down": 0,
      "up": 1,
      "left": 2,
      "right": 3,
      "idle": 4
    }
  },
  "pig": {
    "filename": "pig_animation.png",
    "animations": {
      "down": 0,
      "up": 1,
      "left": 3,
      "right": 2,
      "idle": 4
    }
  },
  "pig baby": {
    "filename": "pig_baby_animation.png",
    "animations": {
      "down": 0,
      "up": 1,
      "left": 2,
      "right": 3,
      "idle": 4
    }
  },
  "pig baby stripe": {
    "filename": "pig_baby_stripe_animation.png",
    "animations": {
      "down": 0,
      "up": 1,
      "left": 2,
      "right": 3,
      "idle": 4
    }
  },
  "sheep": {
    "filename": "sheep_animation.png",
    "animations": {
      "down": 0,
      "up": 1,
      "left": 3,
      "right": 2,
      "idle": 4
    }
  },
  "sheep baby": {
    "filename": "sheep_baby_animation.png",
    "animations": {
      "down": 0,
      "up": 1,
      "left": 2,
      "right": 3,
      "idle": 4
    }
  },
  "turkey": {
    "filename": "turkey_animation.png",
    "animations": {
      "down": 0,
      "up": 1,
      "left": 2,
      "right": 3,
      "idle": 4
    }
  }
}

export default function AnimalSprite({
  animal,
  filename,
  animated = false,
  animation = 0,
}){
  return <div
    className="w-8 min-w-8 h-8 min-h-8 relative overflow-hidden"
  >
    <Sprite
      spritesheetURL={'/sprites/animals/' + animalsObj[animal].filename ||  filename} 
      spritesheetDimensionsTiles={{w: 4, h: 5}}
      animation={animation}
      animated={animated}
    />
  </div>
}