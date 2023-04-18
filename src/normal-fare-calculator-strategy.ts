import { FareCalculatorStrategy } from './fare-calculator-strategy'
import { Segment } from './segment'

export class NormalFareCalculatorStrategy implements FareCalculatorStrategy {
  private FARE = 2.1

  calculate(segment: Segment): number {
    return segment.distance * this.FARE
  }
}
