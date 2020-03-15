import React from 'react'
import Loader from 'react-loader-spinner'

type Types =
  | 'Audio'
  | 'BallTriangle'
  | 'Bars'
  | 'Circles'
  | 'Grid'
  | 'Hearts'
  | 'Oval'
  | 'Puff'
  | 'Rings'
  | 'TailSpin'
  | 'ThreeDots'
  | 'Watch'
  | 'RevolvingDot'
  | 'Triangle'
  | 'Plane'
  | 'MutatingDots'
  | 'None'
  | 'NotSpecified'

type LoadingType = {
  type?: Types
  color?: string
  height?: number
  width?: number
  visible: boolean
}

const Loading: React.FC<LoadingType> = ({
  type = 'ThreeDots',
  color = '#0092fc',
  height = 100,
  width = 100,
  visible = false,
}) => <Loader type={type} color={color} height={height} width={width} visible={visible} />

export default Loading
