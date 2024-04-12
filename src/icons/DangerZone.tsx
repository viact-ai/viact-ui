import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function DangerZone({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 42 42"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <rect
        width={41.008}
        height={41.105}
        x={0.806}
        y={0.884}
        fill="#EB5757"
        rx={8}
      />
      <g clipPath="url(#dangerZone_svg__a)">
        <path
          fill="#fff"
          d="M29.201 21.632c0-1.608-.433-3.08-1.3-4.419l-11.268 11.28c1.365.889 2.844 1.333 4.438 1.333 1.106 0 2.16-.217 3.161-.651a8.267 8.267 0 0 0 2.593-1.745 8.143 8.143 0 0 0 1.734-2.614 8.096 8.096 0 0 0 .642-3.184Zm-14.93 4.48 11.284-11.296a7.832 7.832 0 0 0-4.484-1.363 7.933 7.933 0 0 0-4.08 1.094 8.08 8.08 0 0 0-2.958 2.98 8.06 8.06 0 0 0-1.091 4.105c0 1.618.443 3.111 1.33 4.48Zm18.278-4.48a11.36 11.36 0 0 1-.912 4.494c-.608 1.428-1.422 2.657-2.443 3.685-1.021 1.03-2.242 1.848-3.662 2.457-1.42.61-2.906.914-4.46.914-1.555 0-3.042-.305-4.462-.914s-2.64-1.428-3.661-2.457c-1.021-1.028-1.836-2.256-2.443-3.685a11.36 11.36 0 0 1-.912-4.494c0-1.568.304-3.063.912-4.486.607-1.423 1.422-2.65 2.443-3.678 1.021-1.028 2.242-1.847 3.661-2.457a11.2 11.2 0 0 1 4.461-.913c1.555 0 3.042.304 4.461.913 1.42.61 2.64 1.429 3.662 2.457 1.021 1.029 1.835 2.255 2.443 3.678.608 1.423.912 2.918.912 4.486Z"
        />
      </g>
      <defs>
        <clipPath id="dangerZone_svg__a">
          <path fill="#fff" d="M9.594 9.692h22.955v23.49H9.594z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default DangerZone
