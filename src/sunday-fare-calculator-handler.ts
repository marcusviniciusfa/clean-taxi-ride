import { FareCalculatorHandler } from './fare-calculator-handler'
import { Segment } from './segment'

export class SundayFareCalculatorHandler implements FareCalculatorHandler {
  private FARE = 2.9

  constructor(readonly next?: FareCalculatorHandler) {}

  calculate(segment: Segment): number {
    if (!segment.isOvernight() && segment.isSunday()) {
      return segment.distance * this.FARE
    }
    if (!this.next) throw new Error()
    return this.next.calculate(segment)
  }
}
