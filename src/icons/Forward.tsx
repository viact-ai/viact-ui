import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Forward({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        fill="currentColor"
        fillRule="evenodd"
        clipPath="url(#forward_svg__a)"
        clipRule="evenodd">
        <path
          d="M11.082 1.98h1.797q5.91.754 8.379 6.172.556 1.425.723 2.93v1.758a10.5 10.5 0 0 1-1.192 3.945 4.3 4.3 0 0 1-.488.723q-.574.3-1.094-.078a.94.94 0 0 1-.176-.801q2.305-3.788.703-7.93-1.895-4.12-6.347-5.02-5.123-.656-8.262 3.419-2.566 3.843-.898 8.164 1.536 3.45 5.097 4.707 3.976 1.212 7.461-1.055.704-.201 1.035.45a.88.88 0 0 1-.117.82 9.8 9.8 0 0 1-4.863 1.796h-1.758q-5.211-.613-7.871-5.117a10.6 10.6 0 0 1-1.23-3.984v-1.797Q2.706 5.36 7.878 2.82q1.546-.66 3.203-.84"
          opacity={0.971}
        />
        <path
          d="M11.707 7.41q.447-.06.82.176l2.989 3.066q.402.65-.137 1.192-.522.288-1.016-.04a46 46 0 0 0-1.582-1.62l-.039 5.859q-.398.75-1.191.41a.88.88 0 0 1-.332-.41l-.04-5.86a56 56 0 0 1-1.777 1.739q-.988.258-1.132-.742a.8.8 0 0 1 .175-.528l2.989-3.066z"
          opacity={0.979}
        />
      </g>
      <defs>
        <clipPath id="forward_svg__a">
          <path fill="#fff" d="M2 2h20v20H2z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default Forward
