import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const MuteNotification = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M241.216 832l63.616-64H768V448c0-42.368-10.24-82.304-28.48-117.504l46.912-47.232C815.36 331.392 832 387.84 832 448v320h96a32 32 0 110 64H241.216zm-90.24 0H96a32 32 0 110-64h96V448a320.128 320.128 0 01256-313.6V128a64 64 0 11128 0v6.4a319.552 319.552 0 01171.648 97.088l-45.184 45.44A256 256 0 00256 448v278.336L151.04 832zM448 896h128a64 64 0 01-128 0z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M150.72 859.072a32 32 0 01-45.44-45.056l704-708.544a32 32 0 0145.44 45.056l-704 708.544z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

MuteNotification.displayName = 'ElIconMuteNotification'

export default MuteNotification
