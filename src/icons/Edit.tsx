import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Edit({
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
      <g clipPath="url(#edit_svg__a)">
        <path
          fill="currentColor"
          d="M18.8 5.417a2.4 2.4 0 0 0-.776-.54 2.3 2.3 0 0 0-1.832 0c-.29.125-.554.308-.776.54l-9.243 9.629a2.2 2.2 0 0 0-.498.838l-1.142 3.572a.68.68 0 0 0 .15.665.602.602 0 0 0 .639.158l3.43-1.19c.303-.105.578-.283.804-.519L18.8 8.943c.222-.232.399-.507.52-.81a2.58 2.58 0 0 0 0-1.908 2.5 2.5 0 0 0-.52-.808m-2.5.921q.161-.17.37-.264a1.1 1.1 0 0 1 1.255.254q.162.168.25.389a1.23 1.23 0 0 1-.259 1.304L17 8.976l-1.616-1.683.917-.955zm-1.8 1.875 1.615 1.684-7.442 7.753a.8.8 0 0 1-.317.203l-2.242.778.747-2.334a.85.85 0 0 1 .195-.33z"
        />
      </g>
      <defs>
        <clipPath id="edit_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default Edit
