import { Segment } from './segment'

export interface FareCalculatorHandler {
  next?: FareCalculatorHandler
  calculate(segment: Segment): number
}
