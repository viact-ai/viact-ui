import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Flag({
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
        d="M9.338 3.742a5.65 5.65 0 0 0 4.694.515l1.316-.44-1.09 3.275a1.25 1.25 0 0 0 .025.859l1.283 3.205-2.06.686a3.98 3.98 0 0 1-3.309-.363A5.65 5.65 0 0 0 5 11.16V4.151a.49.49 0 0 1 .272-.44c1.306-.652 2.777-.744 4.066.03M3.333 5.833V4.152c0-.817.462-1.565 1.193-1.93 1.813-.907 3.895-.975 5.67.09a3.98 3.98 0 0 0 3.308.364l2.741-.914a.917.917 0 0 1 1.16 1.159l-1.518 4.553 1.52 3.8a.917.917 0 0 1-.56 1.21l-2.815.94a5.65 5.65 0 0 1-4.694-.516 3.98 3.98 0 0 0-3.83-.147L5 13.015V17.5a.833.833 0 0 1-1.667 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default Flag
