import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M864 409.6a192 192 0 01-37.888 349.44A256.064 256.064 0 01576 960h-96a32 32 0 110-64h96a192.064 192.064 0 00181.12-128H736a32 32 0 01-32-32V416a32 32 0 0132-32h32c10.368 0 20.544.832 30.528 2.432a288 288 0 00-573.056 0A193.235 193.235 0 01256 384h32a32 32 0 0132 32v320a32 32 0 01-32 32h-32a192 192 0 01-96-358.4 352 352 0 01704 0zM256 448a128 128 0 100 256V448zm640 128a128 128 0 00-128-128v256a128 128 0 00128-128z'

const Service = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Service.displayName = 'Service';

export default Service;

