import { FareCalculatorStrategy } from './fare-calculator-strategy'
import { Segment } from './segment'

export class PeakTimeFareCalculatorStrategy implements FareCalculatorStrategy {
  private FARE = 6

  calculate(segment: Segment): number {
    return segment.distance * this.FARE
  }
}
