import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function LadderDetection({
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
      <rect width={42} height={42} fill="#F2994A" rx={8} />
      <path
        fill="#fff"
        d="M29.416 28.693 24.484 15.13l.743-2.05h.742a1.172 1.172 0 1 0 0-2.345h-9.375a1.172 1.172 0 0 0-.867 1.961c.197.216.468.349.76.373l-5.684 15.625a1.18 1.18 0 0 0 .703 1.504q.194.07.4.069a1.17 1.17 0 0 0 1.104-.772l.85-2.353h3.76l-.567 1.552a1.18 1.18 0 0 0 .703 1.504q.194.07.4.069a1.17 1.17 0 0 0 1.104-.772l1.709-4.697H25.5l1.709 4.697a1.17 1.17 0 0 0 1.104.772 1.15 1.15 0 0 0 1.06-.676c.132-.282.147-.604.043-.897m-9.238-8.584h-3.76l.86-2.343h3.75zm1.699-4.687h-3.75l.85-2.344h3.76zm-7.158 9.375.85-2.344h3.76l-.86 2.344zm7.1-2.344 1.415-3.896 1.416 3.896z"
      />
    </svg>
  )
}
export default LadderDetection
