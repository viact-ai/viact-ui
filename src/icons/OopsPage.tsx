import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function OopsPage({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 300 300"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fillRule="evenodd" clipPath="url(#oopsPage_svg__a)" clipRule="evenodd">
        <path
          fill="url(#oopsPage_svg__b)"
          d="M299.707 34.863V247.56q-2.534 5.897-8.789 7.91l-207.422.586-13.477 13.476q-13.958 7.819-24.902-3.808-3.117-4.519-3.222-9.961-16.702.147-33.399-.293-6.255-2.013-8.789-7.91V34.863q2.652-6.31 9.375-7.91 106.348-.585 212.695 0 4.438 1.26 4.102 5.86.265 4.158-3.516 5.859-105.468.439-210.937.293v34.57h276.562v-34.57q-11.722.146-23.437-.293-7.202-4.895-1.172-11.133a161 161 0 0 1 26.953-.586q6.723 1.6 9.375 7.91M11.426 85.84h276.562v157.617q-95.801.147-191.601-.293a943 943 0 0 1 19.922-19.629q36.476 18.687 71.484-2.637 32.991-24.249 29.004-65.332-7.494-42.359-48.34-55.957-42.172-10.062-71.191 21.973-20.278 26.079-13.477 58.594a176 176 0 0 0 6.445 18.75l-44.238 44.238q-17.283.44-34.57.293zm133.008 23.437q39.568-.953 56.543 34.571 13.914 43.472-23.731 68.847-40.2 19.382-70.605-13.183-19.239-25.5-8.204-55.664 13.617-29.89 45.997-34.571m-46.875 99.61a155 155 0 0 0 8.203 7.324l-43.36 43.359q-10.027 1.983-7.324-7.91a4377 4377 0 0 0 42.48-42.773"
          opacity={0.961}
        />
        <path
          fill="url(#oopsPage_svg__c)"
          d="M241.699 26.66q10.279.175 6.738 9.961-2.985 3.255-7.324 2.05-4.93-2.88-3.223-8.495 1.263-2.586 3.809-3.516"
          opacity={0.885}
        />
        <path
          fill="url(#oopsPage_svg__d)"
          d="M27.246 50.098q9.228-.291 7.324 8.789-2.565 4.856-7.91 3.222-4.93-2.88-3.223-8.496 1.262-2.585 3.809-3.515"
          opacity={0.878}
        />
        <path
          fill="url(#oopsPage_svg__e)"
          d="M50.683 50.098q29.592-.147 59.18.293 5.76 2.4 3.809 8.496-1.108 2.573-3.809 3.222-29.883.586-59.765 0-3.782-1.7-3.516-5.859-.183-4.638 4.101-6.152"
          opacity={0.944}
        />
        <path
          fill="url(#oopsPage_svg__f)"
          d="M130.371 140.918q3.19-.299 5.859 1.465 6.604 6.75 13.477 13.183a428 428 0 0 0 13.476-13.183q4.889-3.165 9.082.879 1.758 3.808 0 7.617l-13.769 13.77 13.769 13.769q3.231 11.709-8.496 9.082a467 467 0 0 0-14.062-13.769 467 467 0 0 0-14.063 13.769q-11.726 2.627-8.496-9.082l13.77-13.769a259 259 0 0 1-14.356-14.942q-1.876-6.196 3.809-8.789"
          opacity={0.941}
        />
      </g>
      <defs>
        <linearGradient
          id="oopsPage_svg__b"
          x1={299.707}
          x2={181.074}
          y1={26.643}
          y2={184.359}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#F1F1F5" />
          <stop offset={1} stopColor="#CFCED8" />
        </linearGradient>
        <linearGradient
          id="oopsPage_svg__c"
          x1={249.344}
          x2={243.161}
          y1={26.66}
          y2={33.16}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#F1F1F5" />
          <stop offset={1} stopColor="#CFCED8" />
        </linearGradient>
        <linearGradient
          id="oopsPage_svg__d"
          x1={34.895}
          x2={28.662}
          y1={50.089}
          y2={56.593}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#F1F1F5" />
          <stop offset={1} stopColor="#CFCED8" />
        </linearGradient>
        <linearGradient
          id="oopsPage_svg__e"
          x1={114.165}
          x2={112.148}
          y1={50.061}
          y2={62.111}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#F1F1F5" />
          <stop offset={1} stopColor="#CFCED8" />
        </linearGradient>
        <linearGradient
          id="oopsPage_svg__f"
          x1={173.144}
          x2={149.589}
          y1={140.875}
          y2={166.525}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#F1F1F5" />
          <stop offset={1} stopColor="#CFCED8" />
        </linearGradient>
        <clipPath id="oopsPage_svg__a">
          <path fill="#fff" d="M0 0h300v300H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default OopsPage
