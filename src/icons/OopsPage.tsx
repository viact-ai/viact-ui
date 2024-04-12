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
          d="M299.707 34.863V247.56c-1.689 3.931-4.619 6.568-8.789 7.91l-207.422.586-13.477 13.476c-9.305 5.213-17.606 3.943-24.902-3.808-2.078-3.012-3.152-6.333-3.222-9.961-11.135.098-22.268 0-33.399-.293-4.17-1.342-7.1-3.979-8.789-7.91V34.863c1.768-4.206 4.893-6.843 9.375-7.91 70.898-.39 141.797-.39 212.695 0 2.959.84 4.326 2.793 4.102 5.86.177 2.772-.995 4.725-3.516 5.859-70.312.293-140.625.39-210.937.293v34.57h276.562v-34.57c-7.814.097-15.627 0-23.437-.293-4.801-3.263-5.192-6.974-1.172-11.133a160.993 160.993 0 0 1 26.953-.586c4.482 1.067 7.607 3.704 9.375 7.91ZM11.426 85.84h276.562v157.617c-63.867.098-127.735 0-191.601-.293a943.25 943.25 0 0 1 19.922-19.629c24.318 12.458 48.145 11.579 71.484-2.637 21.994-16.166 31.662-37.943 29.004-65.332-4.996-28.239-21.11-46.892-48.34-55.957-28.115-6.708-51.845.616-71.191 21.973-13.519 17.386-18.01 36.917-13.477 58.594a176.29 176.29 0 0 0 6.445 18.75l-44.238 44.238c-11.522.293-23.045.391-34.57.293V85.84Zm133.008 23.437c26.379-.635 45.226 10.888 56.543 34.571 9.276 28.981 1.366 51.931-23.731 68.847-26.8 12.921-50.335 8.527-70.605-13.183-12.826-17-15.56-35.554-8.204-55.664 9.078-19.926 24.41-31.45 45.997-34.571Zm-46.875 99.61a155.092 155.092 0 0 0 8.203 7.324l-43.36 43.359c-6.685 1.322-9.127-1.315-7.324-7.91a4377.278 4377.278 0 0 0 42.48-42.773Z"
          opacity={0.961}
        />
        <path
          fill="url(#oopsPage_svg__c)"
          d="M241.699 26.66c6.852.117 9.099 3.437 6.738 9.961-1.99 2.17-4.431 2.853-7.324 2.05-3.287-1.92-4.361-4.751-3.223-8.495.842-1.724 2.111-2.896 3.809-3.516Z"
          opacity={0.885}
        />
        <path
          fill="url(#oopsPage_svg__d)"
          d="M27.246 50.098c6.152-.194 8.593 2.735 7.324 8.789-1.71 3.237-4.347 4.311-7.91 3.222-3.287-1.92-4.36-4.752-3.223-8.496.842-1.724 2.111-2.895 3.809-3.515Z"
          opacity={0.878}
        />
        <path
          fill="url(#oopsPage_svg__e)"
          d="M50.683 50.098c19.728-.098 39.455 0 59.18.293 3.84 1.6 5.109 4.431 3.809 8.496-.739 1.715-2.008 2.79-3.809 3.222-19.922.391-39.844.391-59.766 0-2.52-1.133-3.692-3.086-3.515-5.859-.122-3.092 1.245-5.143 4.101-6.152Z"
          opacity={0.944}
        />
        <path
          fill="url(#oopsPage_svg__f)"
          d="M130.371 140.918c2.127-.199 4.08.289 5.859 1.465 4.403 4.5 8.895 8.895 13.477 13.183a428.157 428.157 0 0 0 13.476-13.183c3.259-2.11 6.287-1.817 9.082.879 1.172 2.539 1.172 5.078 0 7.617l-13.769 13.77 13.769 13.769c2.154 7.806-.678 10.833-8.496 9.082a466.612 466.612 0 0 0-14.062-13.769 466.644 466.644 0 0 0-14.063 13.769c-7.817 1.751-10.65-1.276-8.496-9.082l13.77-13.769a258.504 258.504 0 0 1-14.356-14.942c-1.251-4.131.019-7.06 3.809-8.789Z"
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
