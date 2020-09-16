---
title: "Framer Motion in React"
date: "2020-09-16"
---

In this post I'll include all of the key points from this [Framer Motion Tutorial by NetNinja ](https://www.youtube.com/watch?v=2V1WK-3HQNk&list=PL4cUxeGkcC9iHDnQfTHEVVceOEBsOf07i&index=1).

## Resources

* [Framer Motion Github](https://github.com/framer/motion)
* [Framer Motion API](https://www.framer.com/api/motion/)

## motion.x

The first step of using framer motion is to import motion from the framer motion package.

```javascript
import { motion } from 'framer-motion'
```

The second step is to modify our HTML element that we want to animate like so:

```javascript
// plain html
<h1> Title </h1>
// modified
<motion.h1> Title </motion.h1>
```

After we specfied the HTML element we want to animate, we can start animating the element by through props and some CSS.

```javascript
<motion.h1 animate={{fontSize: 50, color: '#fffff'}}>
  Title
</motion.h1>
```

## Framer Motion Convenience Properties

There's a special properties that can be included in the CSS object provided by framer motion for ease of development:

### X and Y

Property 'x' will animate the element horizontally while property 'y' will animate the element vertically. Positive value of property 'x' will animate to the right and left for negative value. Property 'y' also have the same behaviour, positive value will animate the element upwards and negative value will animate the element downwards.

```javascript
<motion.h1 animate={{fontSize: 50, color: '#fffff', x: 100, y: -100}}>
  Title
</motion.h1>
```

### Scale

Property 'scale' will scale the element just like `transform: scale(1.5)` would but, it came along with the animation which really speeds up the development and reduce the amount of code. 

```javascript
<motion.div animate={{scale: 1.5}}>
  <motion.h1 animate={{fontSize: 50, color: '#fffff', x: 100, y: -100}}>
    Title
  </motion.h1>
</motion.div>
```

## Initial State

We can define the initial state of the element that gives us the developer an easier way to describe the initial state of the animation. By passing a 'initial' property to motion HTML element.

```javascript
<motion.div
  initial={{scale: 0}}
  animate={{scale: 1.5}}>
  <motion.h1 animate={{fontSize: 50, color: '#fffff', x: 100, y: -100}}>
    Title
  </motion.h1>
</motion.div>
```

## Transition

We can also control how the animation by using the transition property, such as adding animation delay, duration, type, etc. ( basically properties that alter how to element is going to animate ). There's 3 main type of animation which are:

### Animation Types

* [Tween](https://www.framer.com/api/motion/types#tween) : An linear animation based on the duration of the animation.
* [Spring](https://www.framer.com/api/motion/types#spring) : An animation that simulates spring physics for realistic motion.
* [Inertia](https://www.framer.com/api/motion/types#inertia) : An animation that decelerates a value based on its initial velocity, usually used to implement inertial scrolling.

It is important to note that the default value of animation type changes depends on the properties that we want to animate. Framer motion will infer the animation type that best fit the CSS properties that will be animated. Every animation type has it owns specific properties that are used to modify its behaviour. 

```javascript
<motion.div
 initial={{scale: 0}}
 animate={{scale: 1.5}}
 transition={{ type: 'spring' }}>
 <motion.h1
 initial={{ opacity: 0 }}
 animate={{ fontSize: 50, color: '#fffff', opacity: 1}}
 transition={{ type: 'tween', delay: 0.5 }}>
  Title
 </motion.h1>
</motion.div>
```

## whileHover

'whileHover' property is provided by framer motion for the ease of development. It pretty much does what the name says, it allows the developer create good on hover animation with little effort. 

```javascript
<motion.div
 whileHover={{ scale: 1.1 }}
 initial={{scale: 0}}
 animate={{scale: 1.5}}
 transition={{ type: 'spring' }}>
 <motion.h1
 initial={{ opacity: 0 }}
 animate={{ fontSize: 50, color: '#fffff', opacity: 1}}
 transition={{ type: 'tween', delay: 0.5 }}>
  Title
 </motion.h1>
</motion.div>
```

This should pretty much covers framer motion basic usage. Thanks for reading. 
