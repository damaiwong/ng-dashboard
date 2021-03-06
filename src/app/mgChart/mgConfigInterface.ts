// These are basic defaults values. For a full list of options see:
// https://github.com/mozilla/metrics-graphics/wiki/List-of-Options

export interface IMGConfig {
  title?: string,
  data_type?: string,
  data?: any,
  x_accessor?: string,
  y_accessor?: string,
  width?: number,
  height?: number
  target?: HTMLElement,
  animate_on_load?: boolean,
  [otherValues: string]: any
}
