import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Duplicate({
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
      <g clipPath="url(#duplicate_svg__a)">
        <g
          fill="currentColor"
          fillRule="evenodd"
          clipPath="url(#duplicate_svg__b)"
          clipRule="evenodd">
          <path
            d="M8.797 2.64q3.515-.008 7.031.016 1.242.242 1.485 1.485.03 4.515 0 9.03-.272 1.266-1.547 1.485-.953.031-1.907 0-.688-.213-.515-.922a.6.6 0 0 1 .39-.39q.967-.06 1.938-.063a.5.5 0 0 0 .265-.234q.055-2.194.047-4.39l-.015-4.235q-.04-.383-.422-.422-3.235-.03-6.469 0a.7.7 0 0 0-.219.063 5 5 0 0 1-.406.5q-.59.283-.984-.235a.94.94 0 0 1 .187-1q.45-.553 1.14-.687"
            opacity={0.984}
          />
          <path
            d="M4.203 5.297q3.453-.008 6.906.016 1.305.242 1.547 1.546.031 4.454 0 8.907-.219 1.274-1.484 1.547-3.516.03-7.031 0-1.244-.245-1.485-1.485-.03-4.515 0-9.031.282-1.26 1.547-1.5m.094 1.375q3.36-.008 6.719.016.195.07.265.265.031 4.36 0 8.719a.425.425 0 0 1-.39.297q-3.25.03-6.5 0-.375-.045-.391-.422a574 574 0 0 1 0-8.469.48.48 0 0 1 .297-.406"
            opacity={0.979}
          />
        </g>
      </g>
      <defs>
        <clipPath id="duplicate_svg__a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
        <clipPath id="duplicate_svg__b">
          <path fill="#fff" d="M2 2h16v16H2z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default Duplicate
