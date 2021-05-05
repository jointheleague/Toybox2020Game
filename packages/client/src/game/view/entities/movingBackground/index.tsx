import React, {useMemo} from 'react';
import * as PIXI from 'pixi.js';
import {AnimatedSprite} from '../../entities/AnimatedSprite';
import TileImage1 from './sprites/tile1.png';
import TileImage2 from './sprites/tile2.png';
import TileImage3 from './sprites/tile3.png';
import TileImage4 from './sprites/tile4.png';
import TileImage5 from './sprites/tile5.png';
import TileImage6 from './sprites/tile6.png';

interface IProps {
    x: number;
    y: number;
}


let ANIMATION_SPEED = 0;
export const movingBackground = (props: IProps) => {
  ANIMATION_SPEED = Math.random()/10;
  const tileTextures = useMemo(() => {
    //Create textures from spites
    let tileImages = [TileImage1,TileImage2,TileImage3,TileImage4,TileImage5,TileImage6];
    let textures: PIXI.AnimatedSprite["textures"] = [];
    tileImages.forEach(image =>{
      let texture = PIXI.Texture.from(image);
       textures.push(texture);
    });
    return textures;
  }, []);

  return (
    <AnimatedSprite
    anchor={new PIXI.Point(0.5, 0.5)}
    width ={100}
    height = {100}
    textures = {tileTextures}
    x={props.x}
    animationSpeed = {ANIMATION_SPEED}
    loop= {true}
    y={props.y}
    />
    )
 
}
