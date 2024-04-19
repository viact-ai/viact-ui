import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function MapFill({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g clipPath="url(#mapFill_svg__a)">
        <path
          fill="currentColor"
          d="m22.207 4.9-5.54 1.727v2.707h-1.333V6.86l-6-3.073V6H8.001V3.514L1.554 6.18a.35.35 0 0 0-.22.32v13.8a.353.353 0 0 0 .493.327l6.174-2.547v-2.746h1.333v3.02l6 3.073v-2.76h1.333v2.527l5.754-1.8a.35.35 0 0 0 .246-.34V5.24a.353.353 0 0 0-.46-.34M9.334 14H8.001v-2.666h1.333zm0-4H8.001V7.334h1.333zm7.333 7.334h-1.333v-2.667h1.333zm0-4h-1.333v-2.667h1.333z"
        />
      </g>
      <defs>
        <clipPath id="mapFill_svg__a">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default MapFill
