import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function User({
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
      <path
        fill="currentColor"
        d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm3-4.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 12c0 1.5-1.5 1.5-1.5 1.5h-15S3 21 3 19.5s1.5-6 9-6 9 4.5 9 6Zm-1.5-.006c-.002-.369-.231-1.479-1.248-2.496C17.274 16.02 15.434 15 12 15c-3.435 0-5.274 1.02-6.252 1.998-1.017 1.017-1.245 2.127-1.248 2.496h15Z"
      />
    </svg>
  )
}
export default User
