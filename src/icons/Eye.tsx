import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Eye({
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
      <g fill="currentColor" clipPath="url(#eye_svg__a)">
        <path
          stroke="currentColor"
          d="M9.922 4.246h-.047a9.345 9.345 0 0 0-3.671.97l-.012.006A16.764 16.764 0 0 0 .84 9.669l-.25.316.255.312a18.334 18.334 0 0 0 4.818 4.156l.01.006c2.895 1.634 5.818 1.62 8.699-.042l.01-.006a18.586 18.586 0 0 0 4.736-4.113l.258-.315-.256-.317a17.934 17.934 0 0 0-4.46-3.957 9.513 9.513 0 0 0-4.737-1.463Zm9.424 5.232.134.269V10.2c-.057.143-.133.28-.227.41a17.318 17.318 0 0 1-5.435 4.411c-2.566 1.257-5.108 1.257-7.675 0a17.318 17.318 0 0 1-5.432-4.407 2.812 2.812 0 0 1-.23-.392V9.747l.134-.269c3.202-3.719 6.323-5.482 9.363-5.482 3.04 0 6.162 1.763 9.368 5.482Z"
          opacity={0.962}
        />
        <path
          fillRule="evenodd"
          d="M9.628 5.645c1.994-.055 3.433.805 4.317 2.578.73 1.967.333 3.666-1.192 5.098-1.55 1.149-3.19 1.292-4.922.43-1.637-1.042-2.347-2.533-2.129-4.473.36-1.74 1.382-2.892 3.067-3.457.288-.077.575-.136.86-.176Zm-.117 1.29c-1.063.222-1.837.82-2.324 1.796-.578 1.653-.141 2.962 1.308 3.926 1.235.593 2.393.476 3.477-.352 1.191-1.19 1.38-2.525.566-4.004-.742-1.031-1.75-1.487-3.027-1.367Z"
          clipRule="evenodd"
          opacity={0.963}
        />
      </g>
      <defs>
        <clipPath id="eye_svg__a">
          <path fill="currentColor" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default Eye
