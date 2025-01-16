import React from 'react'

type Props = {
    height?: string;
    width?: string;
    fill?: string
}

const HeartIcon = ({ height="1.2em", width="1.2em", fill="#000" }: Props) => {
  return (
    <svg viewBox="0 0 24 24" width={width} height={height} fill={fill} focusable="false">
    <path
        d="M17.488 1.11h-.146a6.55 6.55 0 0 0-5.35 2.81A6.57 6.57 0 0 0 6.62 1.116 6.406 6.406 0 0 0 .09 7.428c0 7.672 11.028 15.028 11.497 15.338a.75.75 0 0 0 .826 0c.47-.31 11.496-7.666 11.496-15.351a6.43 6.43 0 0 0-6.42-6.306M12 21.228C10.018 19.83 1.59 13.525 1.59 7.442c.05-2.68 2.246-4.826 4.934-4.826h.088c2.058-.005 3.93 1.251 4.684 3.155.226.572 1.168.572 1.394 0 .755-1.907 2.677-3.17 4.69-3.16h.02c2.7-.069 4.96 2.118 5.01 4.817 0 6.089-8.429 12.401-10.41 13.8" fill="#000000" >
    </path>
</svg>
  )
}

export default HeartIcon;