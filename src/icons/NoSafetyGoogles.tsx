import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function NoSafetyGoogles({
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
      <rect width={42} height={42} fill="#F2C94C" rx={8} />
      <path
        fill="#fff"
        d="M12.948 21.709a.906.906 0 0 1 .906-.907h13.292a.906.906 0 0 1 .906.907v1.812a2.719 2.719 0 0 1-5.32.794c-.26-.853-1.063-1.7-2.232-1.7s-1.972.847-2.232 1.7a2.719 2.719 0 0 1-5.32-.794z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M16.27 11.438a7.854 7.854 0 0 0-7.853 7.854 3.02 3.02 0 0 0 2.416 2.96v1.269a4.833 4.833 0 0 0 9.457 1.411.34.34 0 0 1 .103-.16.17.17 0 0 1 .107-.043c.03 0 .066.01.107.044.042.035.082.09.103.16a4.834 4.834 0 0 0 9.457-1.412v-1.269a3.02 3.02 0 0 0 2.416-2.96 7.854 7.854 0 0 0-7.854-7.855zm13.82 9.588a1.81 1.81 0 0 0 1.285-1.734 6.646 6.646 0 0 0-6.646-6.646h-8.458a6.646 6.646 0 0 0-6.646 6.646 1.81 1.81 0 0 0 1.286 1.734 3.02 3.02 0 0 1 2.943-2.338h13.292a3.02 3.02 0 0 1 2.943 2.338m-16.236-1.13a1.813 1.813 0 0 0-1.812 1.812v1.813a3.625 3.625 0 0 0 7.093 1.059c.169-.556.676-1.06 1.365-1.06.69 0 1.196.505 1.365 1.06a3.625 3.625 0 0 0 7.093-1.06v-1.812a1.81 1.81 0 0 0-1.812-1.812z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default NoSafetyGoogles
