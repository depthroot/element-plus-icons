import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M768 64a192 192 0 11-69.952 370.88L480 725.376V896h96a32 32 0 110 64H320a32 32 0 110-64h96V725.376L76.8 273.536a64 64 0 01-12.8-38.4v-10.688a32 32 0 0132-32h71.808l-65.536-83.84a32 32 0 0150.432-39.424l96.256 123.264h337.728A192.064 192.064 0 01768 64zM656.896 192.448H800a32 32 0 0132 32v10.624a64 64 0 01-12.8 38.4l-80.448 107.2a128 128 0 10-81.92-188.16v-.064zm-357.888 64l129.472 165.76a32 32 0 01-50.432 39.36l-160.256-205.12H144l304 404.928 304-404.928H299.008z'

const ColdDrink = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

ColdDrink.displayName = 'ColdDrink';

export default ColdDrink;

