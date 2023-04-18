import { FareCalculatorHandler } from './fare-calculator-handler'
import { Segment } from './segment'

export class PeakTimeFareCalculatorHandler implements FareCalculatorHandler {
  private FARE = 6

  constructor(readonly next?: FareCalculatorHandler) {}

  calculate(segment: Segment): number {
    if (segment.isPeakTime()) {
      return segment.distance * this.FARE
    }
    if (!this.next) throw new Error()
    return this.next.calculate(segment)
  }
}
