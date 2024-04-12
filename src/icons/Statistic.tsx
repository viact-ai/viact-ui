import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Statistic({
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
        d="M3.145 1.621c.488-.033.82.176.996.625.02 4.518.026 9.036.02 13.555 4.517-.007 9.036 0 13.554.02.402.132.61.412.625.84-.029.388-.224.655-.586.8-4.896.026-9.792.026-14.688 0a.781.781 0 0 1-.566-.567C2.474 12 2.474 7.103 2.5 2.207a.964.964 0 0 1 .645-.586Z"
        clipRule="evenodd"
        opacity={0.99}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.504 1.62c.464-.037.783.158.957.587.026 3.789.026 7.578 0 11.367-.191.457-.537.646-1.035.566a.885.885 0 0 1-.606-.605 816.956 816.956 0 0 1 0-11.29.881.881 0 0 1 .684-.624Z"
        clipRule="evenodd"
        opacity={0.987}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.824 4.121c.524-.029.856.206.996.703.026 2.878.026 5.755 0 8.633-.154.544-.512.772-1.074.683a.823.823 0 0 1-.605-.683 476.816 476.816 0 0 1 0-8.633c.078-.384.306-.619.683-.703Z"
        clipRule="evenodd"
        opacity={0.966}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.105 5.8c.515-.065.86.144 1.036.626.026 2.37.026 4.74 0 7.11-.21.537-.594.726-1.153.566a.789.789 0 0 1-.488-.528 331.166 331.166 0 0 1 0-7.187c.098-.306.3-.501.605-.586Z"
        clipRule="evenodd"
        opacity={0.985}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.426 8.3c.498-.06.843.136 1.035.587a140.59 140.59 0 0 1 0 4.687c-.192.457-.537.646-1.035.567a.885.885 0 0 1-.606-.606 135.94 135.94 0 0 1 0-4.61.966.966 0 0 1 .606-.624Z"
        clipRule="evenodd"
        opacity={0.981}
      />
    </svg>
  )
}
export default Statistic
