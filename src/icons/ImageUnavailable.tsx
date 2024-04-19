import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function ImageUnavailable({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 100 100"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="url(#imageUnavailable_svg__a)"
        d="M0 18.75c0-6.895 5.605-12.5 12.5-12.5h75c6.894 0 12.5 5.605 12.5 12.5v62.5c0 6.894-5.606 12.5-12.5 12.5h-75C5.605 93.75 0 88.144 0 81.25zm63.242 20.8a4.68 4.68 0 0 0-3.867-2.05 4.65 4.65 0 0 0-3.867 2.05L38.516 64.474l-5.176-6.465a4.7 4.7 0 0 0-3.653-1.758 4.68 4.68 0 0 0-3.652 1.758l-12.5 15.625a4.68 4.68 0 0 0-.566 4.96 4.69 4.69 0 0 0 4.219 2.657h65.625c1.738 0 3.34-.957 4.14-2.5a4.7 4.7 0 0 0-.273-4.824zM21.875 37.5a9.375 9.375 0 1 0 0-18.75 9.375 9.375 0 0 0 0 18.75"
      />
      <defs>
        <linearGradient
          id="imageUnavailable_svg__a"
          x1={100}
          x2={57.128}
          y1={6.25}
          y2={59.67}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#F1F1F5" />
          <stop offset={1} stopColor="#CFCED8" />
        </linearGradient>
      </defs>
    </svg>
  )
}
export default ImageUnavailable
