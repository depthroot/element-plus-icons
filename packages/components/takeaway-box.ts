import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const TakeawayBox = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M832 384H192v448h640V384zM96 320h832V128H96v192zm800 64v480a32 32 0 01-32 32H160a32 32 0 01-32-32V384H64a32 32 0 01-32-32V96a32 32 0 0132-32h896a32 32 0 0132 32v256a32 32 0 01-32 32h-64zM416 512h192a32 32 0 010 64H416a32 32 0 010-64z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

TakeawayBox.displayName = 'TakeawayBox'

export default TakeawayBox
