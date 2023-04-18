import { Segment } from './segment'

export interface FareCalculatorStrategy {
  calculate(segment: Segment): number
}
