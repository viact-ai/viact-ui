import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function LinkRectangle({
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
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 3.818A1.818 1.818 0 0 1 3.818 2h5.91a1.818 1.818 0 0 1 1.818 1.818v5.91a1.818 1.818 0 0 1-1.819 1.818H7.455v3.693c0 .72.585 1.306 1.307 1.306h3.692v-2.272a1.818 1.818 0 0 1 1.819-1.819h5.909A1.818 1.818 0 0 1 22 14.273v5.909A1.819 1.819 0 0 1 20.182 22h-5.91a1.818 1.818 0 0 1-1.818-1.818v-2.273H8.761a2.671 2.671 0 0 1-2.67-2.67v-3.694H3.818A1.818 1.818 0 0 1 2 9.728V3.818Zm1.818-.454a.455.455 0 0 0-.454.454v5.91a.455.455 0 0 0 .454.454h5.91a.455.455 0 0 0 .454-.455V3.818a.455.455 0 0 0-.455-.454H3.818Zm10.455 10.454a.455.455 0 0 0-.455.455v5.909a.455.455 0 0 0 .455.454h5.909a.454.454 0 0 0 .454-.454v-5.91a.455.455 0 0 0-.454-.454h-5.91Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default LinkRectangle
