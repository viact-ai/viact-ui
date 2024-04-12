import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function ActiveScissorLift({
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
      <rect width={42} height={42} fill="#EB5757" rx={8} />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M12.103 8.103c-.077.077-.103 1.032-.103 3.77v3.668l.19.134c.17.119 1.148.134 8.81.134 7.662 0 8.64-.015 8.81-.134l.19-.134v-3.667c0-2.739-.026-3.694-.103-3.771C29.82 8.024 27.726 8 21 8c-6.726 0-8.819.024-8.897.103Zm16.783 1.613v.515H13.114v-1.03h15.772v.515Zm0 2.532v.815H13.114V11.432h15.772v.816ZM12.55 16.78c-.024.062-.006.213.04.334.053.14.188.254.368.31l1.27.39c.542.166 1.68.495 2.528.73.849.236 2.14.602 2.872.813l2.4.692c.589.17 1.736.491 2.549.715.812.224 1.477.426 1.477.45 0 .023-.723.242-1.606.486-.884.243-2.088.58-2.678.75l-1.071.307-1.157-.34a214.7 214.7 0 0 0-2.635-.751c-.813-.225-1.478-.429-1.479-.453 0-.023.466-.168 1.036-.321.57-.154 1.429-.401 1.907-.55.48-.15.832-.284.785-.298l-1.053-.329-.967-.3-.79.25c-.434.137-1.364.406-2.065.596-.7.19-1.365.406-1.477.479a.688.688 0 0 0-.256.346.555.555 0 0 0 .085.426c.1.154.328.267.845.421a255.3 255.3 0 0 0 2.121.612 6087.618 6087.618 0 0 0 7.8 2.215c1.25.354 2.38.686 2.513.737.137.052.832.093 1.607.093 1.108 0 1.366-.023 1.366-.12 0-.065-.068-.195-.15-.29-.083-.093-.497-.276-.922-.405-.424-.13-1.652-.479-2.73-.777-1.076-.298-1.979-.563-2.005-.588-.025-.026.007-.066.073-.088.066-.023.467-.143.89-.267.425-.123 1.637-.468 2.694-.765 1.3-.366 1.96-.59 2.036-.696a.79.79 0 0 0 .114-.397.646.646 0 0 0-.157-.398c-.086-.086-.616-.281-1.178-.434-.563-.152-1.659-.465-2.437-.695-.778-.23-1.582-.462-1.787-.515-.205-.054-.358-.113-.339-.132.019-.019.746-.227 1.616-.462.87-.236 2.141-.598 2.825-.804 1.032-.312 1.263-.412 1.364-.591.067-.119.097-.28.067-.358-.046-.121-.2-.142-1.028-.142-.828 0-1.108.038-1.867.258-.491.142-1.8.514-2.908.826-1.108.313-2.091.585-2.186.606-.095.02-.962-.181-1.929-.448-.966-.268-2.329-.656-3.029-.864-1.193-.355-1.336-.378-2.295-.378-.772 0-1.034.028-1.067.114Zm3.178 7.385c-.708.202-1.683.491-2.169.642-.691.216-.898.317-.954.465-.04.104-.054.218-.034.253.021.036.632.065 1.357.065 1.159 0 1.4-.026 1.988-.21.368-.115 1.035-.31 1.483-.432a210.3 210.3 0 0 0 1.264-.351c.248-.07.45-.157.45-.192s-.395-.17-.878-.3a39.34 39.34 0 0 0-1.05-.273c-.095-.02-.75.13-1.457.333Zm-3.579 2.461c-.138.08-.15.309-.15 2.826 0 2.62.007 2.743.166 2.828a.846.846 0 0 0 .335.089c.109 0 .247.134.39.38.123.208.368.499.545.645.177.146.525.342.774.435.25.093.657.17.906.17.25 0 .646-.058.883-.128s.583-.239.77-.375c.188-.136.469-.445.624-.687l.282-.44h6.65l.282.44c.155.242.436.551.623.687.188.136.534.305.771.375s.634.128.883.128.656-.077.906-.17c.249-.093.598-.29.774-.435.177-.146.422-.437.544-.646.162-.277.277-.38.423-.38.11 0 .26-.06.334-.134.117-.117.135-.494.135-2.829 0-2.575-.007-2.698-.166-2.782-.111-.06-3.023-.088-8.85-.087-5.739.002-8.735.033-8.834.09Zm3.707 3.383c.137.07.354.267.484.437.178.234.242.427.265.794.024.387-.01.553-.167.82-.108.185-.3.413-.428.508-.14.103-.417.187-.696.21-.329.028-.555-.005-.78-.111a1.665 1.665 0 0 1-.518-.418 2.14 2.14 0 0 1-.295-.62c-.075-.281-.067-.429.037-.725.072-.204.198-.447.279-.539.081-.091.263-.238.405-.325.165-.102.42-.16.711-.16.25 0 .566.058.703.129Zm11.657 0c.137.07.343.254.459.407.116.154.25.424.297.601.06.218.06.425 0 .644a2.155 2.155 0 0 1-.304.61c-.12.158-.356.345-.525.416-.196.082-.472.115-.764.09-.266-.021-.552-.107-.688-.206-.127-.093-.319-.34-.425-.547a1.886 1.886 0 0 1-.191-.725c0-.198.083-.492.194-.687.106-.187.323-.429.483-.536.213-.144.413-.196.753-.196.254 0 .575.058.711.129Zm-3.171.244c0 .017-.043.152-.094.3l-.094.271h-6.31l-.094-.27a2.951 2.951 0 0 1-.094-.3c0-.017 1.504-.03 3.343-.03s3.343.013 3.343.03Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default ActiveScissorLift
