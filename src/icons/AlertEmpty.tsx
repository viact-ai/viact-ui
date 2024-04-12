import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function AlertEmpty({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 150 165"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M60 52.98a37.45 37.45 0 0 1 37.48 36.25l.02 1.25v20.485l6.9 15.78a6.242 6.242 0 0 1-.495 5.924 6.236 6.236 0 0 1-5.23 2.826L75 135.51a14.998 14.998 0 0 1-14.558 15.013 15.002 15.002 0 0 1-15.417-14.128l-.025-.9H21.375a6.259 6.259 0 0 1-5.222-2.822 6.257 6.257 0 0 1-.513-5.913l6.86-15.79V90.48c0-20.775 16.76-37.5 37.5-37.5Zm7.5 82.52-15 .01a7.499 7.499 0 0 0 12.405 5.675 7.5 7.5 0 0 0 2.56-4.95l.035-.735ZM60 60.48c-16.6 0-30 13.37-30 30v22.05L23.28 128h73.485L90 112.535v-21.99l-.015-1.125A29.94 29.94 0 0 0 60 60.48Z"
      />
      <g filter="url(#alertEmpty_svg__a)">
        <rect width={50} height={48} x={78} y={105} fill="#2B2C2E" rx={24} />
        <rect
          width={55}
          height={53}
          x={75.5}
          y={102.5}
          stroke="currentColor"
          strokeWidth={5}
          rx={26.5}
        />
      </g>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M94.532 136.611c.647.62 1.696.62 2.343 0l5.855-5.621 5.855 5.62a1.705 1.705 0 0 0 2.342 0 1.544 1.544 0 0 0 0-2.248l-5.855-5.621 5.856-5.622a1.546 1.546 0 0 0 0-2.249 1.705 1.705 0 0 0-2.342 0l-5.856 5.623-5.857-5.623a1.705 1.705 0 0 0-2.342 0 1.546 1.546 0 0 0 0 2.249l5.856 5.622-5.855 5.621a1.546 1.546 0 0 0 0 2.249Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m114.95 53.306-.765 4.684L95.9 55.003l.765-4.684 18.285 2.987Zm2.73-17.472L98.918 55.496l-4.406-.72.525-3.21 18.921-19.546 4.233.692-.511 3.122Zm-1.45-3.443-.768 4.702-17.678-2.889.768-4.701 17.678 2.888ZM146.661 28.568l.922 4.655-18.173 3.603-.923-4.656 18.174-3.602Zm-3.56-17.323L132.41 36.231l-4.38.868-.632-3.19 10.881-24.933 4.207-.834.615 3.104Zm-2.563-2.717.926 4.673-17.57 3.483-.926-4.673 17.57-3.483Z"
      />
      <defs>
        <filter
          id="alertEmpty_svg__a"
          width={188}
          height={186}
          x={9}
          y={60}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={24} />
          <feGaussianBlur stdDeviation={32} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.00784314 0 0 0 0 0.333333 0 0 0 0 0.533333 0 0 0 0.12 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3893_20037"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_3893_20037"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
export default AlertEmpty
