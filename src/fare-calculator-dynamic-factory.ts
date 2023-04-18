import { NormalFareCalculatorStrategy } from './normal-fare-calculator-strategy'
import { OvernightFareCalculatorStrategy } from './overnight-fare-calculator-strategy'
import { PeakTimeFareCalculatorStrategy } from './peak-time-fare-calculator-strategy'
import { Segment } from './segment'
import { SundayFareCalculatorStrategy } from './sunday-fare-calculator-strategy'
import { SundayOvernightFareCalculatorStrategy } from './sunday-overnight-fare-calculator-strategy'

export class FareCalculatorDynamicFactory {
  static create(segment: Segment) {
    if (segment.isPeakTime()) {
      return new PeakTimeFareCalculatorStrategy()
    }
    if (segment.isOvernight() && segment.isSunday()) {
      return new SundayOvernightFareCalculatorStrategy()
    }
    if (segment.isOvernight() && !segment.isSunday()) {
      return new OvernightFareCalculatorStrategy()
    }
    if (!segment.isOvernight() && segment.isSunday()) {
      return new SundayFareCalculatorStrategy()
    }
    if (!segment.isOvernight() && !segment.isSunday()) {
      return new NormalFareCalculatorStrategy()
    }
    throw new Error()
  }
}
