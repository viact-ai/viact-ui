import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Document({
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
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.35 9.631c0-3.126 0-4.689.923-5.66C6.195 3 7.68 3 10.65 3h2.7c2.97 0 4.455 0 5.377.972.923.97.923 2.533.923 5.658v4.738c0 3.126 0 4.689-.922 5.66-.923.971-2.408.972-5.378.972h-2.7c-2.97 0-4.455 0-5.377-.972-.923-.97-.923-2.533-.923-5.658z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8.4 3 .074.444c.18 1.077.27 1.616.648 1.936.376.32.922.32 2.015.32h1.725c1.092 0 1.638 0 2.016-.32s.468-.859.647-1.936L15.6 3M8.4 15.6H12m-3.6-4.5h7.2"
      />
    </svg>
  )
}
export default Document
