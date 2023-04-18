import { FareCalculatorStrategy } from './fare-calculator-strategy'
import { Segment } from './segment'

export class OvernightFareCalculatorStrategy implements FareCalculatorStrategy {
  private FARE = 3.9

  calculate(segment: Segment): number {
    return segment.distance * this.FARE
  }
}
