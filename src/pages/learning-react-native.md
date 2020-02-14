---
title: "Learning React Native with an understanding of React"
date: "2020-02-14"
---


![react-native-banner](https://hackernoon.com/drafts/ro2832a9.png)


## Intro

In this post I want to share my personal experience of learning React Native as a developer with working understanding of React. I want to address the barrier that I have to go through and the lesson that I have learned by learning React Native. I will points out the shared concept of React and React Native that I have noticed throughout my learning process. 

## Disclaimer 

I haven't considered myself as an expert in React Native nor React, please let me know if you spot anything wrong with this article. (I'll fix it posthaste!) 😁. 

## Resources 
These are some of the resources that I really like and used to learn React Native in sequence: 
* [What is React Native? by LevelUpTuts ( Scott Tolinski )](https://www.youtube.com/watch?v=JKCgwL-IfgM)
* [React Native Tutorial for Beginner by NetNinja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ)
* [Official React Native tutorial by Facebook](https://facebook.github.io/react-native/docs/getting-started)
* [Expo CLI comparison to React Native CLI by Ben Awad](https://www.youtube.com/watch?v=uHlAM4ICi1s)

## Reseach & Opinion 

### My personal questions regarding React Native : 
* What is it React Native? 

  I won't be able to explain what React Native better than Scott because he explained it perfectly in his [video](https://www.youtube.com/watch?v=JKCgwL-IfgM).

  Watch it !(it's really good) 😅

* Is there any existing product that used React Native? 

  Application such as FaceBook and Instagram is created with React Native. It is important to note that Facebook owns instagram, so ... The decision of using React Native might be a bit biased, but personally I think Facebook and Instragram works perfectly in my aged Android phone. Other notable applications in production will be Walmart and Tesla. 

* Is there other hybrid framework competing with React Native? 
  
  Based on my research, Flutter is the biggest competitor to React Native. I haven't learned nor work on Flutter at all, so I can't provide any insight on that. It is kind of a hot topic now, some developer says that Flutter will end React Native while some developer says that Flutter and React Native will coexist. I think a competition will turn both product for the better, so I am happy to know that there's a competition within the hybrid mobile framework market. 

* What is the benefit of using React Native ? 

  1. One repo for both platform
  2. Huge community support
  3. A lot of reusable codes 
  4. Cost Efficient

* What are the downsides that comes with React Native ?

   Mainly related to React Native being a new framework, having a weird issue is to be expected. 

* Is it worth it to learn React Native ?

  Personally, I utterly enjoyed React Native and highly recommend anyone with an understanding of React to give React Native a shot. There's so much shared concept from React in React Native to skip out, with a little effort in reading the documentation a React developer should be able to start coding in React Native.

## Learning Process

Referring back to the resources that I provided above, I followed the playlist created by NetNinja while following through the official 'Getting started' by Facebook. During the whole process I also read through to the official documentation based on the topic that discussed on the video by NetNinja. By the end of the playlist, I have created two basic React Native application and quite understand the basic of React Native. 

# Notes 

## React Native component instead of HTML elements 

In React, the way that developer creates a custom component is by manipulating HTML element in JSX. In React Native we also get to write something in JSX, but instead of HTML elements we have to work around React Native component. For example, [Text](https://facebook.github.io/react-native/docs/text) is a a React native component that works similar to a ```<p>``` and [View](https://facebook.github.io/react-native/docs/view) is a React native component that kinda of works like a ```<div>``` the HTML element.

### Example

```javascript
import React from 'react'
import { View , Text } from 'react-native'

const HelloWorld = () => {
  return(
    <View>
      <Text>Hello World!</Text>
    </View>
  )
}
  
```

## Styling a component 

Just like React, there's multiple ways to style a component in React Native. As for this article, I am talking about injecting styles to the component by using ```StyleSheet``` from React Native. 

```javascript
import React from 'react'
import { View , Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  //class name 
  container: {
    //CSS-like property
    width: 50,
    height: 100
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
})

const HelloWorld = () => {
  return(
    <View style={styles.container}>
      <Text style={[styles.title}>
        Hello World!
      </Text>
    </View>
  )
}
```

```StyleSheet.create()``` is a function that abstract the React way of styling a component, we just need to provide it with an object that contains camel cased CSS-like property into the function. I found that ```StyleSheet.create()``` supports some property that does not exist in CSS like ```marginHorizontal``` and ```marginVertical```. I tried to find a documentation to see all of the supported properties but I couldn't find one, I will probably use styled-components to style my React Native project in the future due to the fact that I can't find a documentation for this way of styling a component. 

If you look at the CSS-like property of width, it holds the value of 50. In React this will automatically translate to 50px, but React Native does not use pixel, em, rem, vh, vw, nor persentage. The official React Native [docs](https://facebook.github.io/react-native/docs/height-and-width) explains it really well, it is a unitless measurement that ensures the component looks consistent regardless of the screen size of the device. The concept of ```flex-grow``` is also often used in React native by using the CSS-like property of ```flex```.

## Hooks! 

Yes, hooks works in react native and works exactly like in React

👏👏👏👏

```javascript
import React, { useState } from 'react'
import { View , Text, StyleSheet } from 'react-native'

const HelloWorld = () => {
  const [ name, setName ] = useState('Suki')
  return(
    <View style={styles.container}>
      <Text style={[styles.title}>
        Hello World! - {name}
      </Text>
    </View>
  )
}
```

# Barriers 

There isn't a lot of barrier that I have to pass to learn React Native and mainly it is not related to React Native. 

### Expo

Initially I thought Expo is super awesome, being able to scan a QR code and run the project on my own device seemlessly with hot reload seems awesome. But sadly it does not perform as well as I initially thought. The compilation process often crashes and there's a weird issue with Expo I ran into when I running it on the Expo application from Google Play, such as:

  *  Glitchy header, the header overlap with my device's notification bar ( that bar that shows battery persentage and notification from local application and the last character of header title turns into ellipsis.( High key triggered me 🤬 )
  *  Gimmicks, just like other technology Expo comes with their weird traits that we developer have to learn and work around. such as: close down modal before triggering the hot reload and restart expo after installing a new package... etc.


### StyleSheet.create()

There isn't a really about it's functionality, this is just personally about me not being able to find any documentation on all of the property that are supported by  ```StyleSheet.create()```. Knowing that it supports something that does not exist in original CSS, I will feel a bit more assured if I have access to all of the supported property. 

# That's all

Thank you for reading this article, I really hope you gain something out of this article. I thoroughly enjoyed writing this article, it really ingrained  my current understanding of React Native and if you any feedback or spot any mistake regarding this article do let me know. 

Cheers!

Suki
