import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Workflow({
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
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M0 1.818A1.818 1.818 0 0 1 1.818 0h5.91a1.818 1.818 0 0 1 1.817 1.818v5.91a1.818 1.818 0 0 1-1.818 1.817H5.455v3.694c0 .72.585 1.306 1.307 1.306h3.692v-2.272a1.818 1.818 0 0 1 1.819-1.819h5.909A1.818 1.818 0 0 1 20 12.273v5.909A1.819 1.819 0 0 1 18.182 20h-5.91a1.818 1.818 0 0 1-1.818-1.818v-2.273H6.761a2.671 2.671 0 0 1-2.67-2.67V9.544H1.818A1.818 1.818 0 0 1 0 7.727V1.818Zm1.818-.454a.455.455 0 0 0-.454.454v5.91a.455.455 0 0 0 .454.454h5.91a.455.455 0 0 0 .454-.455V1.818a.455.455 0 0 0-.455-.454H1.818Zm10.455 10.454a.455.455 0 0 0-.455.455v5.909a.455.455 0 0 0 .455.454h5.909a.454.454 0 0 0 .454-.454v-5.91a.455.455 0 0 0-.454-.454h-5.91Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default Workflow
