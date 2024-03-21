import { ISchema } from '@formily/react'

export const Text: ISchema = {
  type: 'object',
  properties: {
    content: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: '',
      },
      enum: [
        'MACHINE WASH COLD',
        'DO NOT BLEACH',
        'IRON LOW HEAT',
        'DRY CLEAN ANY SOLVENT EXCEPT DICHLOROMETHANE',
        'DRY FLAT',
      ],
    },
    mode: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'normal',
      },
      enum: ['h1', 'h2', 'h3', 'p', 'normal'],
    },
  },
}

export const Icon: ISchema = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'smile',
      },
      enum: ['smile', 'success', 'help', 'email', 'atm', 'cry', 'chart-pie'],
    },
    size: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'medium',
      },
      enum: 'xxs, xs, small, medium, large, xl, xxl, xxxl, inherit'.split(
        /,\s*/g
      ),
    },
  },
}
