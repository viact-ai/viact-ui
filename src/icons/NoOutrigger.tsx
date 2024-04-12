import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function NoOutrigger({
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
      <rect width={42} height={42} fill="#9B51E0" rx={8} />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M18.32 4.505c.024.826.07 2.256.103 3.18.034.922.08 2.03.104 2.461.04.747.037.786-.085.825-.07.023-.27.18-.444.348-.174.169-.39.436-.482.595a3.52 3.52 0 0 0-.266.64 3.71 3.71 0 0 0-.006 1.702c.053.203.166.51.252.681.085.171.282.443.437.604.157.164.474.387.722.508.412.202.489.217 1.175.232l.734.015.155.374c.118.283.156.492.157.858 0 .266-.034.586-.076.71-.042.124-.164.32-.271.436-.108.115-.28.254-.385.309-.105.055-.371.116-.592.137-.308.03-.457.012-.634-.073a1.3 1.3 0 0 1-.396-.33 7.48 7.48 0 0 1-.41-.656c-.135-.24-.284-.436-.332-.436-.048 0-.13.087-.183.193-.065.13-.097.384-.097.775 0 .496.025.635.172.952.095.204.319.528.498.72l.326.348-1.637 2.54c-.9 1.397-1.67 2.575-1.71 2.618-.041.043-.39.107-.777.142-.386.035-1.075.094-1.532.13-.456.038-1.222.101-1.701.142l-.872.075-.04.459c-.021.252-.055.622-.075.821l-.035.363.516.03c.284.017.527.042.54.057.014.015.037.368.052.785l.028.759h-.323c-.178 0-.428.019-.555.04l-.23.038-.073.641c-.04.353-.072.754-.072.893s.024.267.053.285c.028.018.222.061.43.096l1.528.262c.632.11 1.45.256 1.819.326a219.941 219.941 0 0 0 3.67.648c.21.032.627.103.925.156.299.054.579.099.623.1.044 0 .08.042.08.093 0 .05.045.137.1.193a.404.404 0 0 0 .271.093l.171-.009-.16-.03a.635.635 0 0 1-.239-.096c-.044-.036-.08-.158-.08-.27 0-.114.035-.24.077-.284.042-.042.107-.076.144-.075.037.001.017.032-.045.068-.067.04-.112.143-.112.26 0 .114.027.177.065.154.035-.022.122-.022.192 0 .074.024.11.074.086.118-.032.058-.023.058.039 0 .044-.041.12-.06.169-.041.056.022.088-.012.088-.094 0-.07.047-.168.106-.217.096-.08.098-.076.021.048-.046.075-.066.184-.044.241.022.058.08.088.131.069.05-.02.11-.005.134.033.024.04-.009.07-.076.07a.34.34 0 0 1-.204-.082c-.068-.065-.079-.062-.055.017.015.053.093.106.17.117a.338.338 0 0 0 .235-.056c.066-.056.115-.058.175-.008.046.038.197.067.335.063.139-.003 1.05.131 2.025.3l1.772.306 1.196-.199 3.142-.522c1.071-.178 1.969-.324 1.995-.324.026 0 .048-.556.048-1.235v-1.235l-.303.039c-.167.021-.605.043-.974.05-.466.006-.668-.013-.663-.063.003-.04.01-.52.016-1.067l.01-.994.76-.023c.418-.012.78-.043.805-.068.025-.025.069-.403.098-.84.029-.436.07-.975.093-1.196.03-.308.02-.41-.044-.429a77.439 77.439 0 0 0-1.968-.264l-1.883-.24-2.562-2.623-2.562-2.623.176-.26a5.01 5.01 0 0 0 .311-.544 4.26 4.26 0 0 0 .238-.775c.07-.335.088-.63.06-.94a6.668 6.668 0 0 0-.139-.84 7.658 7.658 0 0 0-.288-.851l-.19-.465.254-.342c.14-.188.296-.448.35-.578.052-.13.128-.447.167-.705.054-.349.054-.561 0-.83a4.15 4.15 0 0 0-.263-.768 2.847 2.847 0 0 0-.573-.785l-.38-.376.07-1.28.131-2.379c.034-.603.09-1.634.125-2.291s.081-1.406.104-1.665l.04-.47-.662.019-.662.018-.045.84-.11 2.065c-.037.674-.097 1.85-.135 2.614-.038.763-.083 1.54-.101 1.726-.034.338-.034.338-.247.323l-.214-.016-.038-.484a84.21 84.21 0 0 1-.102-1.872c-.034-.763-.091-1.983-.125-2.71-.035-.729-.081-1.593-.103-1.921l-.04-.597H18.277l.043 1.5Zm.855 8.373c.044.07.173.177.287.237.116.06.363.11.56.114.24.003.44-.04.635-.138.215-.108.296-.124.334-.064.027.044.05.24.05.436.001.223-.037.412-.1.504-.056.08-.245.26-.42.401-.242.193-.376.255-.553.254a1.252 1.252 0 0 1-.89-.414 1.59 1.59 0 0 1-.21-.404 1.336 1.336 0 0 1 .082-.922c.044-.072.096-.13.114-.13.018 0 .068.057.111.127Zm1.067 8.259c.017.056.176.858.353 1.78.177.924.35 1.8.385 1.95.034.148.063.33.063.403 0 .11-.04.133-.24.132-.131 0-.75.047-1.375.105-.624.058-1.152.088-1.174.067-.021-.022.107-.454.284-.96a441.225 441.225 0 0 0 1.039-3.001l.203-.595.216.008c.135.005.226.046.246.11Zm3.186 2.356c.768.84 1.385 1.54 1.372 1.553-.013.013-.426.055-.918.094a45.07 45.07 0 0 0-1.228.109c-.283.033-.335.023-.335-.066 0-.058-.244-.977-.542-2.043-.299-1.066-.543-1.967-.543-2.002 0-.035.18.136.399.381.22.245 1.027 1.133 1.795 1.974Zm-5.194-.704a.032.032 0 0 1-.032.032.032.032 0 0 1 0-.065c.018 0 .032.015.032.032Zm-.55 1.42a39.321 39.321 0 0 1-.542 1.4c-.045.085-.137.116-.341.116h-.28l.804-1.419c.443-.78.813-1.41.823-1.4.01.01-.2.596-.464 1.303Zm8.806 1.55 2.132.323c.588.089 1.163.18 1.277.2.165.031.207.07.207.193 0 .085-.036.154-.08.154-.043 0-.453-.055-.909-.122a124.404 124.404 0 0 0-2.649-.358c-.369-.048-.689-.068-.712-.045-.023.023-.062.32-.087.661l-.044.62.31.04c.17.022.542.06.826.082l.517.043.042 1.97c.024 1.084.034 1.98.022 1.991-.011.012-.363.067-.782.122-.42.055-.87.117-1.002.138l-.239.038v.483c0 .469.004.482.144.447.079-.02.517-.095.973-.167a398.515 398.515 0 0 0 3.4-.555c.185-.033.207-.059.207-.255 0-.21-.008-.218-.208-.188-.114.018-.58.086-1.037.152-.456.066-.84.11-.85.1-.012-.012-.052-1.048-.088-2.303-.038-1.314-.093-2.297-.128-2.32-.034-.022-.404-.076-.822-.12-.738-.078-.761-.085-.761-.235 0-.085.015-.154.033-.154.018 0 .714.088 1.548.195l1.77.23c.14.02.32.048.399.064.084.017.144.077.144.145 0 .103-.043.11-.431.066a9.399 9.399 0 0 0-.788-.052l-.358-.003-.045 1.969c-.025 1.082-.026 2-.003 2.038.025.041.128.056.244.034.11-.02.487-.067.838-.104.351-.037.703-.081.782-.099.14-.031.143-.02.143.549 0 .55-.007.583-.143.615-.08.02-.847.166-1.707.327l-2.195.412c-.346.065-.654.158-.685.207-.036.058-.055.006-.056-.155 0-.189-.025-.24-.112-.237-.067.003-.08.018-.032.038.044.018.08.087.08.154s-.058.152-.128.19c-.117.064-.128.05-.128-.159 0-.176-.025-.227-.112-.223-.066.003-.08.018-.032.038.044.018.08.1.08.181 0 .09-.046.16-.12.18-.103.028-.124-.019-.159-.357-.022-.214-.04-.687-.04-1.053v-.664l.271-.037c.15-.02.57-.065.933-.1.363-.036.686-.065.718-.065.032 0 .057-.682.057-1.55 0-1.184-.02-1.559-.08-1.58a9.095 9.095 0 0 0-.799-.085c-.395-.03-.735-.074-.756-.095-.02-.02-.017-.504.009-1.075.026-.57.067-1.037.092-1.037.026 0 .524.073 1.109.162Zm-3.988.596c.032.133.178.808.324 1.5.146.693.363 1.71.482 2.26.12.55.279 1.29.354 1.646.075.355.163.753.196.884.034.135.095.231.138.22.043-.01.057-.006.03.009-.026.015-.047.11-.047.21 0 .1.03.197.065.216.036.018.029.025-.016.016-.045-.01-.1-.102-.121-.205-.036-.168-.042-.171-.048-.032-.005.086.04.21.098.274.07.078.079.118.027.118a.615.615 0 0 1-.217-.076.818.818 0 0 0-.373-.06c-.17.012-.253-.016-.303-.101-.066-.112-.073-.112-.137-.005-.037.062-.137.113-.223.113s-.157-.025-.157-.056c0-.03.072-.041.16-.024.143.027.16.01.16-.17 0-.111-.028-.202-.062-.202s-.046.044-.025.097c.02.053.005.097-.034.097-.04 0-.07-.045-.07-.1 0-.061-.03-.083-.076-.055-.05.032-.06.011-.032-.065.024-.061.001-.32-.05-.575-.05-.255-.18-.943-.288-1.529-.108-.586-.238-1.268-.288-1.517-.05-.248-.138-.698-.194-1l-.226-1.226c-.068-.372-.14-.728-.16-.79-.032-.103.018-.114.509-.114h.544l.06.242Zm-7 .133.237.044-1.211 2.258c-.667 1.241-1.237 2.282-1.267 2.313-.03.03-.27.031-.537.002l-.483-.054 1.321-2.308c1.279-2.233 1.327-2.307 1.513-2.304.105.002.298.024.428.049Zm4.838 1.706c0 .045-.018.142-.037.217-.033.122-.087.137-.526.148-.27.007-1.165.04-1.99.072-.825.033-1.594.061-1.71.062-.182.001-.2-.013-.144-.111a2.43 2.43 0 0 1 .155-.23c.078-.1.244-.124 1.198-.168.61-.028 1.546-.055 2.081-.06.742-.008.973.009.973.07Zm-2.106 2.085c1.07.09 2.147.185 2.393.21l.446.045.042.258c.023.142.032.269.021.281-.011.012-1.02-.112-2.243-.276a1197.105 1197.105 0 0 1-3.252-.44c-.114-.014-.127-.04-.08-.169.053-.141.082-.15.392-.114.184.022 1.21.114 2.281.205Zm1.503 2.422c.023.038.032.079.02.091-.013.013-.079-.018-.147-.068-.104-.077-.107-.092-.02-.092.058 0 .124.031.147.069Zm1.416.462c-.015.116-.026.037-.027-.176 0-.213.011-.308.026-.21.015.096.015.27 0 .386Zm.329-.409c-.129.106-.14.149-.086.307.046.132.113.19.238.205.096.01.174-.01.174-.049a.07.07 0 0 1 .072-.069c.05 0 .047.03-.008.097a.33.33 0 0 1-.226.097.4.4 0 0 1-.248-.101.382.382 0 0 1-.1-.23c0-.071.03-.185.066-.254.036-.069.111-.125.167-.125.074 0 .061.032-.05.122Zm.361-.053c.023.038.032.078.02.09-.012.012-.06-.019-.105-.069s-.054-.09-.02-.09c.035 0 .082.031.105.069Zm.267.462c-.014.116-.026.037-.026-.176s.01-.308.026-.21c.014.096.014.27 0 .386Zm.273-.499a.032.032 0 0 1-.032.033.032.032 0 0 1 0-.065c.018 0 .032.015.032.032Zm-2.072.23c.023.038.032.079.02.09-.012.013-.06-.018-.105-.068s-.054-.09-.02-.09c.035 0 .082.03.105.069Zm.275.052c-.04.067-.056.168-.034.226.022.058.096.106.164.106.069 0 .139-.03.157-.067.018-.036.025-.029.016.017-.01.045-.066.091-.126.103a.277.277 0 0 1-.202-.056.28.28 0 0 1-.093-.186c0-.06.035-.143.077-.186a.341.341 0 0 1 .096-.077c.01 0-.014.054-.055.12Zm.3-.051c.023.037.032.078.02.09-.013.012-.06-.02-.105-.069-.046-.05-.054-.09-.02-.09s.082.03.105.069Zm1.478.334c-.015.08-.027.015-.027-.145 0-.16.012-.225.027-.145.015.08.015.21 0 .29Zm1.902-.339c.022.036.025.065.008.065-.018 0-.05-.03-.072-.065-.022-.035-.025-.064-.007-.064.017 0 .05.029.071.064Zm.303-.022c-.044.018-.08.115-.08.216 0 .1.03.197.066.216.036.018.029.025-.016.016-.045-.009-.091-.082-.103-.161a.58.58 0 0 1 .014-.237c.02-.05.072-.09.117-.087.064.004.065.012.002.037Zm.271.216c0 .121-.037.227-.084.243-.07.024-.07.006 0-.107.069-.113.069-.16 0-.272-.07-.113-.07-.132 0-.108.047.016.084.122.084.244Zm-1.814-.15c-.002.042.081.139.187.214.105.076.191.106.191.068 0-.039-.069-.097-.153-.13-.084-.032-.168-.096-.186-.143-.022-.056-.035-.059-.039-.009Zm.123-.011c0 .017.014.032.032.032a.032.032 0 0 0 0-.065.032.032 0 0 0-.032.032Zm.149.01a.06.06 0 0 0 .085 0c.023-.023.004-.043-.043-.043-.046 0-.066.02-.042.043Zm-.745.194c-.023.024-.042.004-.042-.043s.019-.067.042-.043a.062.062 0 0 1 0 .086Zm-2.234.129c-.023.024-.042.004-.042-.043s.019-.067.042-.043a.062.062 0 0 1 0 .086Zm2.83-.01c0 .017.014.032.032.032a.032.032 0 0 0 0-.065.032.032 0 0 0-.032.032Zm1.149-.005c0 .016-.033.05-.074.075-.046.028-.056.018-.028-.029.025-.04.058-.074.074-.074.015 0 .028.013.028.028Zm-1.723.262a.032.032 0 0 1-.032.033.032.032 0 0 1 0-.065c.017 0 .032.015.032.032Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default NoOutrigger
