import { FareCalculatorStrategy } from './fare-calculator-strategy'
import { Segment } from './segment'

export class SundayFareCalculatorStrategy implements FareCalculatorStrategy {
  private FARE = 2.9

  calculate(segment: Segment): number {
    return segment.distance * this.FARE
  }
}
