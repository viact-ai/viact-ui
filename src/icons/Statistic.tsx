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
        d="M3.145 1.621q.732-.049.996.625.03 6.777.02 13.555 6.776-.01 13.554.02.603.198.625.84-.043.582-.586.8-7.344.039-14.688 0a.78.78 0 0 1-.566-.567q-.039-7.343 0-14.687a.96.96 0 0 1 .645-.586"
        clipRule="evenodd"
        opacity={0.99}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.504 1.62q.696-.056.957.587.039 5.684 0 11.367-.287.686-1.035.566a.89.89 0 0 1-.606-.605 817 817 0 0 1 0-11.29.88.88 0 0 1 .684-.624"
        clipRule="evenodd"
        opacity={0.987}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.824 4.121q.786-.043.996.703.039 4.316 0 8.633-.231.816-1.074.683a.82.82 0 0 1-.605-.683 477 477 0 0 1 0-8.633q.117-.577.683-.703"
        clipRule="evenodd"
        opacity={0.966}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.106 5.8q.771-.097 1.035.626.039 3.555 0 7.11-.315.806-1.153.566a.79.79 0 0 1-.488-.528 331 331 0 0 1 0-7.187q.147-.459.605-.586"
        clipRule="evenodd"
        opacity={0.985}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.426 8.3q.747-.09 1.035.587a141 141 0 0 1 0 4.687q-.288.686-1.035.567a.89.89 0 0 1-.606-.606 136 136 0 0 1 0-4.61.97.97 0 0 1 .606-.624"
        clipRule="evenodd"
        opacity={0.981}
      />
    </svg>
  )
}
export default Statistic
