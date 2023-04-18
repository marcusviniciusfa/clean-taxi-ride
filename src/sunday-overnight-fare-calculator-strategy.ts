import { FareCalculatorStrategy } from './fare-calculator-strategy'
import { Segment } from './segment'

export class SundayOvernightFareCalculatorStrategy implements FareCalculatorStrategy {
  private FARE = 5

  calculate(segment: Segment): number {
    return segment.distance * this.FARE
  }
}
