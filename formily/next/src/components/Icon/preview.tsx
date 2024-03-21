import React from 'react'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@designable/react'
import { createVoidFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import { Icon as NextIcon } from '@alifd/next'
import './styles.less'

export interface IDesignableIconProps {
  size?:
    | number
    | 'xl'
    | 'small'
    | 'xxs'
    | 'xs'
    | 'medium'
    | 'large'
    | 'xxl'
    | 'xxxl'
    | 'inherit'
  type?: string
  style?: React.CSSProperties
  className?: string
}

export const Icon: DnFC<IDesignableIconProps> = (props) => {
  const { size, type, style, ...restProps } = props
  return (
    <div {...restProps}>
      <NextIcon size={size} type={type} style={style} />
    </div>
  )
}

Icon.Behavior = createBehavior({
  name: 'Icon',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'Icon',
  designerProps: {
    propsSchema: createVoidFieldSchema(AllSchemas.Icon),
  },
  designerLocales: AllLocales.Icon,
})

Icon.Resource = createResource({
  icon: 'RateSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'string',
        'x-component': 'Icon',
      },
    },
  ],
})

Icon.defaultProps = {
  type: 'picture',
  size: 'xl',
}
