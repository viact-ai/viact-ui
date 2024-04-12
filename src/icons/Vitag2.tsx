import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Vitag2({
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
      <rect
        width={20}
        height={13.75}
        x={2}
        y={5.499}
        fill="currentColor"
        rx={2}
      />
      <ellipse cx={4.94} cy={4.875} fill="currentColor" rx={1.765} ry={1.875} />
      <ellipse
        cx={4.94}
        cy={18.625}
        fill="currentColor"
        rx={1.765}
        ry={1.875}
      />
      <ellipse cx={12} cy={4.875} fill="currentColor" rx={1.765} ry={1.875} />
      <ellipse cx={12} cy={18.625} fill="currentColor" rx={1.765} ry={1.875} />
      <ellipse
        cx={19.058}
        cy={4.875}
        fill="currentColor"
        rx={1.765}
        ry={1.875}
      />
      <ellipse
        cx={19.058}
        cy={18.625}
        fill="currentColor"
        rx={1.765}
        ry={1.875}
      />
    </svg>
  )
}
export default Vitag2
