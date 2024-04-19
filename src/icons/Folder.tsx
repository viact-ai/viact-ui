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
        d="M25.266 11.953H1.922q-.024-3.282.047-6.562.378-1.222 1.64-1.453a743 743 0 0 1 16.688 0 2.01 2.01 0 0 1 1.453.984z"
        clipRule="evenodd"
        opacity={0.991}
      />
      <path
        fill="#4294FE"
        fillRule="evenodd"
        d="M1.922 11.953h23.344q9.656-.023 19.312.047 1.11.318 1.36 1.453.093 14.532 0 29.063-.379 1.22-1.641 1.453-20.344.093-40.688 0-1.262-.232-1.64-1.453a4982 4982 0 0 1-.047-30.563"
        clipRule="evenodd"
        opacity={0.997}
      />
    </svg>
  )
}
export default Folder
