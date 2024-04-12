import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Folder({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 48 48"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="#366CFB"
        fillRule="evenodd"
        d="M25.266 11.953H1.922c-.016-2.188 0-4.375.047-6.562.252-.815.799-1.299 1.64-1.454a742.62 742.62 0 0 1 16.688 0 2.011 2.011 0 0 1 1.453.985l3.516 7.031Z"
        clipRule="evenodd"
        opacity={0.991}
      />
      <path
        fill="#4294FE"
        fillRule="evenodd"
        d="M1.922 11.953h23.344c6.437-.015 12.875 0 19.312.047.74.212 1.193.696 1.36 1.453.062 9.688.062 19.375 0 29.063-.252.814-.8 1.298-1.641 1.453-13.563.062-27.125.062-40.688 0-.841-.155-1.388-.639-1.64-1.453a4981.692 4981.692 0 0 1-.047-30.563Z"
        clipRule="evenodd"
        opacity={0.997}
      />
    </svg>
  )
}
export default Folder
