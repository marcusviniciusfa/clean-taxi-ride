import { FareCalculatorHandler } from './fare-calculator-handler'
import { Segment } from './segment'

export class TaxiRide {
  MIN_FARE = 10
  segments: Segment[]

  constructor(private readonly fareCalculatorhandler: FareCalculatorHandler) {
    this.segments = []
  }

  addSegment(distance: number, date: Date) {
    this.segments.push(new Segment(distance, date))
  }

  calculateFare() {
    let fare = 0
    for (const segment of this.segments) {
      fare = this.fareCalculatorhandler.calculate(segment)
    }
    return fare < this.MIN_FARE ? this.MIN_FARE : fare
  }
}
