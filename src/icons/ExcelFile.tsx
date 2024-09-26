import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function ExcelFile({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 36 37"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g clipPath="url(#excel-file_svg__a)">
        <g
          fillRule="evenodd"
          clipPath="url(#excel-file_svg__b)"
          clipRule="evenodd">
          <path
            fill="#23A566"
            d="M6.926.465h14.203q-.035 3.956.07 7.875.254 1.49 1.688 1.969a547 547 0 0 0 8.086 6.539q.017 8.93-.035 17.859-.477 1.424-1.934 1.758H6.926q-1.458-.334-1.934-1.758a3752 3752 0 0 1 0-32.484Q5.468.799 6.926.465"
            opacity={0.997}
          />
          <path
            fill="#7AC8A3"
            d="M21.129.465h.07l3.727 3.797A88 88 0 0 1 21.234.676q-.053 3.831-.035 7.664-.105-3.92-.07-7.875"
          />
          <path
            fill="#8DD0B0"
            d="M24.926 4.262a359 359 0 0 1 5.976 5.976q-3.849.105-7.734.07h-.281q-1.434-.477-1.688-1.968-.018-3.833.035-7.664a88 88 0 0 0 3.692 3.586"
          />
          <path
            fill="#1C8653"
            d="M22.887 10.309h.281q3.885.105 7.805.07v6.469a547 547 0 0 1-8.086-6.54"
          />
          <path
            fill="#58AD84"
            d="M30.902 10.238q.09.036.07.14-3.92.035-7.804-.07 3.885.036 7.734-.07"
          />
          <path
            fill="#FDFEFD"
            d="M11.988 18.395q5.942-.018 11.883.035.326.083.457.387.07 5.273 0 10.547a.65.65 0 0 1-.527.386q-5.95.105-11.883-.07a1.3 1.3 0 0 1-.316-.386 390 390 0 0 1 0-10.477q.143-.266.386-.422"
          />
          <path
            fill="#91D2B2"
            d="M13.043 19.871v1.758h4.149V19.87q.105.895.07 1.828h-4.29q-.034-.933.071-1.828"
          />
          <path fill="#23A565" d="M13.043 19.871h4.148v1.758h-4.148z" />
          <path
            fill="#91D2B2"
            d="M18.739 19.871v1.758h4.148V19.87q.105.895.07 1.828h-4.289q-.035-.933.07-1.828"
          />
          <path fill="#23A565" d="M18.738 19.871h4.149v1.758h-4.149z" />
          <path
            fill="#26A567"
            d="M13.043 23.176h4.219v1.828h-4.219zM18.668 23.176h4.219v1.828h-4.219z"
          />
          <path
            fill="#7FCAA6"
            d="M17.192 28.309V26.55h-4.149v1.758a12 12 0 0 1-.07-1.829h4.289q.035.934-.07 1.829M22.887 28.309V26.55h-4.149v1.758a12 12 0 0 1-.07-1.829h4.29q.034.934-.071 1.829"
          />
          <path
            fill="#25A567"
            d="M17.191 28.309h-4.148V26.55h4.148zM22.887 28.309h-4.149V26.55h4.149z"
          />
        </g>
      </g>
      <defs>
        <clipPath id="excel-file_svg__a">
          <path fill="#fff" d="M0 .5h36v36H0z" />
        </clipPath>
        <clipPath id="excel-file_svg__b">
          <path fill="#fff" d="M0 .5h36v36H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default ExcelFile
