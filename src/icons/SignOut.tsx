import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SignOut({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 19 18"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="m17.784 9.534-3.937 3.938a.78.78 0 0 1-.534.216.75.75 0 0 1-.526-1.285l2.654-2.653H6.75a.75.75 0 0 1 0-1.5h8.69l-2.652-2.653a.753.753 0 0 1 1.059-1.069l3.937 3.938a.76.76 0 0 1 0 1.068M6.75 16.5H1.5v-15h5.25a.75.75 0 0 0 0-1.5H1.5A1.5 1.5 0 0 0 0 1.5v15A1.5 1.5 0 0 0 1.5 18h5.25a.75.75 0 1 0 0-1.5"
      />
    </svg>
  )
}
export default SignOut
