import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Bell({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 12 14"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="m11.913 9.893-1.32-2.52V4.75C10.593 2.13 8.533 0 6 0S1.407 2.13 1.407 4.75v2.623l-1.32 2.52a.77.77 0 0 0 .015.74.74.74 0 0 0 .265.27c.11.063.233.097.358.097h2.627a2.798 2.798 0 0 0 .768 2.194A2.62 2.62 0 0 0 6 14c.705 0 1.382-.29 1.88-.806A2.8 2.8 0 0 0 8.648 11h2.627c.125 0 .249-.034.358-.098.11-.064.2-.157.265-.268a.77.77 0 0 0 .014-.741m-4.22 1.357c0 .24-.048.478-.141.699a1.75 1.75 0 0 1-.399.583c-.17.164-.37.29-.59.37a1.64 1.64 0 0 1-1.348-.1 1.7 1.7 0 0 1-.533-.454A1.808 1.808 0 0 1 4.326 11h3.349q.017.124.017.25M1.13 10l1.243-2.373V4.75c0-.995.382-1.948 1.062-2.652A3.57 3.57 0 0 1 6 1c.962 0 1.884.395 2.564 1.098A3.82 3.82 0 0 1 9.626 4.75v2.877L10.87 10z"
      />
    </svg>
  )
}
export default Bell
