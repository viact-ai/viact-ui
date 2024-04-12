import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Resize({
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
      <circle cx={17.5} cy={7.5} r={1.5} fill="currentColor" />
      <circle cx={17.5} cy={17.5} r={1.5} fill="currentColor" />
      <circle cx={7.5} cy={17.5} r={1.5} fill="currentColor" />
      <circle cx={12.5} cy={12.5} r={1.5} fill="currentColor" />
      <circle cx={17.5} cy={12.5} r={1.5} fill="currentColor" />
      <circle cx={12.5} cy={17.5} r={1.5} fill="currentColor" />
    </svg>
  )
}
export default Resize
