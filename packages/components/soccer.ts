import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Soccer = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M418.496 871.04L152.256 604.8c-16.512 94.016-2.368 178.624 42.944 224 44.928 44.928 129.344 58.752 223.296 42.24zm72.32-18.176a573.056 573.056 0 00224.832-137.216 573.12 573.12 0 00137.216-224.832L533.888 171.84a578.56 578.56 0 00-227.52 138.496A567.68 567.68 0 00170.432 532.48l320.384 320.384zM871.04 418.496c16.512-93.952 2.688-178.368-42.24-223.296-44.544-44.544-128.704-58.048-222.592-41.536L871.04 418.496zM149.952 874.048c-112.96-112.96-88.832-408.96 111.168-608.96C461.056 65.152 760.96 36.928 874.048 149.952c113.024 113.024 86.784 411.008-113.152 610.944-199.936 199.936-497.92 226.112-610.944 113.152zm452.544-497.792l22.656-22.656a32 32 0 0145.248 45.248l-22.656 22.656 45.248 45.248A32 32 0 11647.744 512l-45.248-45.248L557.248 512l45.248 45.248a32 32 0 11-45.248 45.248L512 557.248l-45.248 45.248L512 647.744a32 32 0 11-45.248 45.248l-45.248-45.248-22.656 22.656a32 32 0 11-45.248-45.248l22.656-22.656-45.248-45.248A32 32 0 11376.256 512l45.248 45.248L466.752 512l-45.248-45.248a32 32 0 1145.248-45.248L512 466.752l45.248-45.248L512 376.256a32 32 0 0145.248-45.248l45.248 45.248z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Soccer.displayName = 'ElIconSoccer'

export default Soccer
