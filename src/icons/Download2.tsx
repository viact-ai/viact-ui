import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Download2({
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
      <g clipPath="url(#download2_svg__a)">
        <path
          fill="currentColor"
          d="M12 15.575q-.2 0-.375-.062a.9.9 0 0 1-.325-.213l-3.6-3.6a.95.95 0 0 1-.275-.7q0-.425.275-.7t.713-.287q.439-.011.712.262L11 12.15V5q0-.425.288-.713A.96.96 0 0 1 12 4q.425 0 .713.288.288.289.287.712v7.15l1.875-1.875q.275-.275.713-.263a1 1 0 0 1 .712.288.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7l-3.6 3.6q-.15.15-.325.213a1.1 1.1 0 0 1-.375.062M6 20q-.825 0-1.413-.588A1.92 1.92 0 0 1 4 18v-2q0-.425.288-.713A.96.96 0 0 1 5 15q.425 0 .713.288T6 16v2h12v-2q0-.425.288-.713A.96.96 0 0 1 19 15q.425 0 .713.288T20 16v2q0 .825-.588 1.413A1.92 1.92 0 0 1 18 20z"
        />
      </g>
      <defs>
        <clipPath id="download2_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default Download2
