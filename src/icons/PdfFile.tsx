import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function PdfFile({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 36 37"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g clipPath="url(#pdf-file_svg__a)">
        <g
          fillRule="evenodd"
          clipPath="url(#pdf-file_svg__b)"
          clipRule="evenodd">
          <path
            fill="#F15642"
            d="M8.543.465h12.375q-.035 4.2.07 8.367.25 1.304 1.547 1.547 4.184.141 8.367 0 .07 5.484.07 11.004.017 5.785-.105 11.566-.705 2.796-3.48 3.516H8.543q-2.776-.72-3.48-3.516a761 761 0 0 1-.106-14.484q-.016-7.245.105-14.485.705-2.795 3.48-3.515"
            opacity={0.999}
          />
          <path
            fill="#F56956"
            d="M20.918.465h.14v.07q-.105 4.131-.07 8.297-.105-4.165-.07-8.367"
          />
          <path
            fill="#FE9486"
            d="M21.059.535a960 960 0 0 1 9.773 9.774q-4.131.105-8.297.07-1.297-.243-1.547-1.547-.035-4.166.07-8.297"
          />
          <path
            fill="#F66F5D"
            d="M30.832 10.309q.07 0 .07.07a125 125 0 0 1-8.367 0q4.166.035 8.297-.07"
          />
          <path
            fill="#FFFBFA"
            d="M11.215 17.55q1.342-.045 2.672.105 1.147.444 1.37 1.652.294 3.276-2.987 2.883v2.531h-1.055z"
          />
          <path
            fill="#FBD7D2"
            d="M18.457 17.622h-2.25v7.031h2.18q-1.107.105-2.25.07v-7.171q1.18-.035 2.32.07"
          />
          <path
            fill="#FEFDFD"
            d="M18.457 17.621q1.364.257 1.652 1.617a49 49 0 0 1 0 3.727q-.291 1.434-1.722 1.687h-2.18v-7.03z"
          />
          <path
            fill="#FBD0CA"
            d="M24.715 17.622H21.41v7.031h.985q-.507.105-1.055.07v-7.171a41 41 0 0 1 3.375.07"
          />
          <path
            fill="#FEFEFE"
            d="M24.715 17.621v.914h-2.32v2.11q1.035.105 2.109.07v.844q-1.075-.035-2.11.07v3.023h-.984v-7.03z"
          />
          <path
            fill="#F15743"
            d="M12.27 18.536q2.537-.258 1.793 2.18a.75.75 0 0 1-.668.457q-.562.053-1.125.035zM17.191 18.536q.529-.018 1.055.035.64.111.809.738.07 1.792 0 3.586a1.17 1.17 0 0 1-.809.809q-.525.052-1.055.035z"
          />
          <path
            fill="#F9BDB5"
            d="M22.395 20.645h2.18v.984h-2.18q1.035-.105 2.109-.07v-.844q-1.075.035-2.11-.07"
          />
        </g>
      </g>
      <defs>
        <clipPath id="pdf-file_svg__a">
          <path fill="#fff" d="M0 .5h36v36H0z" />
        </clipPath>
        <clipPath id="pdf-file_svg__b">
          <path fill="#fff" d="M0 .5h36v36H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default PdfFile
