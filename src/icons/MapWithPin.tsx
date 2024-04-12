import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function MapWithPin({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fillRule="evenodd" clipRule="evenodd">
        <path
          fill="#56CCF2"
          d="M15.059-.02h1.093c2.149.404 3.425 1.68 3.828 3.829v.976c-.179.738-.459 1.44-.84 2.11a27.197 27.197 0 0 1-3.144 4.238.83.83 0 0 1-.781 0 25.857 25.857 0 0 1-2.989-3.965 8.425 8.425 0 0 1-.976-2.383c-.125-1.88.61-3.305 2.207-4.277a5.51 5.51 0 0 1 1.601-.528Zm.078 1.29c1.553-.113 2.666.525 3.34 1.914.233.586.272 1.185.117 1.796a12.35 12.35 0 0 1-1.407 2.579 23.913 23.913 0 0 1-1.582 2.03 21.09 21.09 0 0 1-2.793-4.1c-.592-1.556-.208-2.812 1.153-3.77a4.3 4.3 0 0 1 1.172-.45Zm.273 2.5c.674-.01.902.303.684.937-.245.254-.525.3-.84.137-.255-.244-.3-.524-.137-.84a.838.838 0 0 1 .293-.234Z"
          opacity={0.964}
        />
        <path
          fill="#56CCF2"
          d="M15.214 2.481c1.16-.115 1.908.38 2.247 1.484.133 1.16-.355 1.908-1.465 2.246-1.16.134-1.908-.354-2.246-1.464-.13-1.164.36-1.919 1.464-2.266Z"
          opacity={0.965}
        />
        <path
          fill="#fff"
          d="M19.98 9.121v7.969a.776.776 0 0 1-.39.37c-2.092.83-4.175 1.67-6.25 2.52h-.469a308.76 308.76 0 0 0-6.016-2.421A308.75 308.75 0 0 0 .84 19.98H.37a.942.942 0 0 1-.39-.39V7.87A.776.776 0 0 1 .37 7.5L6.621 5c.156-.026.313-.026.469 0 1.234.502 2.47.997 3.71 1.484.429.2.552.519.372.957-.219.29-.498.375-.84.254-.947-.379-1.89-.763-2.832-1.152-.02 3.294-.026 6.589-.02 9.883 1.667.65 3.334 1.302 5 1.953-.006-2.253 0-4.505.02-6.758.24-.412.572-.51.996-.293a.603.603 0 0 1 .215.293c.02 2.253.026 4.505.02 6.758a289.786 289.786 0 0 0 4.96-1.953c.033-2.435.053-4.87.059-7.305.11-.273.311-.403.605-.39.298-.008.506.122.625.39ZM6.191 6.543c.04 3.288.052 6.582.04 9.883-1.667.65-3.334 1.302-5 1.953-.014-3.282 0-6.563.039-9.844A276 276 0 0 0 6.19 6.543Z"
          opacity={0.983}
        />
      </g>
    </svg>
  )
}
export default MapWithPin