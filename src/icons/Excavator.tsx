import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Excavator({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
      viewBox="0 0 39 35"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path fill="url(#excavator_svg__a)" d="M0-5h40v40H0z" />
      <defs>
        <pattern
          id="excavator_svg__a"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox">
          <use
            xlinkHref="#excavator_svg__b"
            transform="matrix(.0005 0 0 .0005 .125 .334)"
          />
        </pattern>
        <image
          id="excavator_svg__b"
          width={1485}
          height={1200}
        />
      </defs>
    </svg>
  )
}
export default Excavator