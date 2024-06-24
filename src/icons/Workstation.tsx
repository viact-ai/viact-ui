import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Workstation({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
      viewBox="0 0 28 28"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path fill="url(#workstation_svg__a)" d="M0 0h28v28H0z" />
      <defs>
        <pattern
          id="workstation_svg__a"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox">
          <use xlinkHref="#workstation_svg__b" transform="scale(.00083)" />
        </pattern>
        <image
          id="workstation_svg__b"
          width={1200}
          height={1200}
        />
      </defs>
    </svg>
  )
}
export default Workstation