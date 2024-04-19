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
          d="M15.059-.02h1.093q3.224.606 3.828 3.829v.976q-.268 1.106-.84 2.11a27 27 0 0 1-3.144 4.238.83.83 0 0 1-.781 0 26 26 0 0 1-2.988-3.965 8.4 8.4 0 0 1-.977-2.383q-.188-2.82 2.207-4.277a5.5 5.5 0 0 1 1.601-.528m.078 1.29q2.33-.17 3.34 1.914.35.88.117 1.796a12.4 12.4 0 0 1-1.407 2.579 24 24 0 0 1-1.582 2.03 21 21 0 0 1-2.793-4.1q-.888-2.333 1.153-3.77a4.3 4.3 0 0 1 1.172-.45m.273 2.5q1.011-.014.684.937-.367.381-.84.137-.382-.366-.137-.84a.84.84 0 0 1 .293-.234"
          opacity={0.964}
        />
        <path
          fill="#56CCF2"
          d="M15.215 2.481q1.737-.172 2.246 1.484.2 1.74-1.465 2.246-1.74.201-2.246-1.464Q13.556 3 15.214 2.48"
          opacity={0.965}
        />
        <path
          fill="#fff"
          d="M19.98 9.121v7.969a.78.78 0 0 1-.39.37q-3.138 1.245-6.25 2.52h-.469a309 309 0 0 0-6.016-2.421A309 309 0 0 0 .84 19.98H.37a.94.94 0 0 1-.39-.39V7.87A.78.78 0 0 1 .37 7.5L6.621 5q.234-.039.469 0 1.85.753 3.71 1.484.643.3.372.957-.328.435-.84.254-1.42-.568-2.832-1.152-.03 4.942-.02 9.883 2.5.976 5 1.953-.01-3.379.02-6.758.36-.618.996-.293a.6.6 0 0 1 .215.293q.03 3.379.02 6.758a290 290 0 0 0 4.96-1.953q.05-3.653.059-7.305.165-.41.605-.39.447-.012.625.39M6.192 6.543q.059 4.932.04 9.883-2.5.976-5 1.953-.02-4.923.039-9.844A276 276 0 0 0 6.19 6.543"
          opacity={0.983}
        />
      </g>
    </svg>
  )
}
export default MapWithPin
