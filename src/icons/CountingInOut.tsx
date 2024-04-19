import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function CountingInOut({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 60 40"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <circle
        cx={19.648}
        cy={19.648}
        r={14.809}
        fill="#fff"
        stroke="#EB5757"
        strokeWidth={3}
        transform="rotate(85.079 19.648 19.648)"
      />
      <path
        fill="#333"
        d="M16.57 14.559v9.953h-1.319v-9.953zm3.473 4.135v5.818h-1.265v-7.397h1.197zm-.3 1.84-.527-.021q.007-.759.225-1.402.219-.65.616-1.128a2.74 2.74 0 0 1 2.167-1.005q.546 0 .984.15.438.145.745.466.315.321.479.834.164.506.164 1.237v4.847h-1.272v-4.86q0-.582-.17-.93a1.05 1.05 0 0 0-.5-.513q-.327-.165-.806-.164-.472 0-.862.198a2.1 2.1 0 0 0-.663.547q-.273.35-.43.8-.15.444-.15.943"
      />
      <circle
        cx={40.388}
        cy={20.388}
        r={14.568}
        fill="#fff"
        stroke="#EB5757"
        strokeWidth={3}
        transform="rotate(85.079 40.388 20.388)"
      />
      <path
        fill="#333"
        d="M37.854 19.256v.629q0 1.12-.28 2.01a4.3 4.3 0 0 1-.807 1.51 3.5 3.5 0 0 1-1.265.95 4 4 0 0 1-1.64.329q-.882 0-1.62-.329a3.64 3.64 0 0 1-1.272-.95 4.4 4.4 0 0 1-.827-1.51q-.294-.89-.294-2.01v-.63q0-1.12.287-2.002a4.4 4.4 0 0 1 .827-1.51q.534-.63 1.265-.958a3.94 3.94 0 0 1 1.62-.328q.91 0 1.64.328.74.329 1.265.957.534.622.814 1.51.287.884.287 2.004m-1.306.629v-.643q0-.888-.184-1.572a3.3 3.3 0 0 0-.527-1.149 2.3 2.3 0 0 0-.854-.704q-.5-.24-1.135-.239-.615 0-1.114.24a2.36 2.36 0 0 0-.848.704q-.348.465-.54 1.148-.19.684-.191 1.572v.643q0 .895.191 1.586.192.682.547 1.155.362.465.855.704.498.24 1.114.24.642 0 1.141-.24.5-.24.841-.704.349-.473.527-1.155.177-.691.177-1.586m7.616 2.953V17.15h1.271v7.397h-1.21zm.239-1.559.526-.013q0 .738-.157 1.367-.15.622-.492 1.08a2.3 2.3 0 0 1-.896.718q-.554.252-1.346.253-.54 0-.992-.158a2 2 0 0 1-.765-.485 2.2 2.2 0 0 1-.5-.855q-.17-.526-.17-1.264V17.15h1.265v4.786q0 .498.109.827.116.321.307.512.2.185.438.26.246.075.506.075.807 0 1.278-.307.472-.315.677-.841.212-.534.212-1.183m6.057-4.129v.971h-4v-.97zm-2.646-1.797h1.265v7.362q0 .376.116.567a.56.56 0 0 0 .3.253q.186.062.397.062.157 0 .328-.028.178-.033.267-.054l.007 1.032q-.15.047-.397.089-.24.048-.58.048a2 2 0 0 1-.855-.185 1.37 1.37 0 0 1-.622-.615q-.226-.438-.226-1.176z"
      />
    </svg>
  )
}
export default CountingInOut
