import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function ImageCount({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 30 30"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="#56CCF2"
        fillRule="evenodd"
        d="M9.111 2.432a457 457 0 0 1 12.422.088q5.587.928 5.947 6.591.06 5.86 0 11.72-.102 3.413-2.783 5.478a7.7 7.7 0 0 1-3.867 1.171q-5.859.06-11.719 0-3.415-.103-5.478-2.783A7.7 7.7 0 0 1 2.46 20.83q-.06-5.859 0-11.719.528-6.138 6.65-6.68m0 1.933q5.86-.015 11.72.03 4.391.378 4.716 4.775.073 3.223-.03 6.445-1.662-1.22-3.456-.205a346 346 0 0 1-5.801 4.922q-2.003.865-3.516-.703-1.053-.761-2.344-.527a3.7 3.7 0 0 0-.996.41 286 286 0 0 1-4.57 3.076 5.2 5.2 0 0 1-.44-1.875q-.058-5.771 0-11.543.341-4.398 4.717-4.805"
        clipRule="evenodd"
        opacity={0.982}
      />
      <path
        fill="#56CCF2"
        fillRule="evenodd"
        d="M11.104 6.943q2.887.169 3.105 3.047-.23 2.75-2.988 2.989-3.15-.352-2.96-3.516.56-2.245 2.843-2.52"
        clipRule="evenodd"
        opacity={0.977}
      />
    </svg>
  )
}
export default ImageCount
