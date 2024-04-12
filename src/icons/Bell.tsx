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
        d="m11.912 9.893-1.319-2.52V4.75C10.593 2.13 8.533 0 6 0 3.468 0 1.407 2.13 1.407 4.75v2.623l-1.32 2.52a.77.77 0 0 0 .015.74.738.738 0 0 0 .265.27c.11.063.233.097.358.097h2.627a2.798 2.798 0 0 0 .768 2.194A2.615 2.615 0 0 0 6 14c.705 0 1.382-.29 1.88-.806A2.798 2.798 0 0 0 8.648 11h2.627c.125 0 .249-.034.358-.098.11-.064.2-.157.265-.268a.768.768 0 0 0 .014-.741Zm-4.22 1.357c0 .24-.047.478-.14.699a1.75 1.75 0 0 1-.399.583c-.17.164-.37.29-.59.37a1.638 1.638 0 0 1-1.348-.1 1.704 1.704 0 0 1-.533-.454A1.808 1.808 0 0 1 4.326 11h3.349c.011.083.017.166.017.25ZM1.131 10l1.243-2.373V4.75c0-.995.382-1.948 1.062-2.652A3.566 3.566 0 0 1 6 1c.962 0 1.884.395 2.564 1.098A3.816 3.816 0 0 1 9.626 4.75v2.877L10.87 10H1.131Z"
      />
    </svg>
  )
}
export default Bell
