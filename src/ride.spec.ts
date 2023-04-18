import { beforeEach, describe, expect, it } from 'vitest'
import { TaxiRide } from './ride'

describe.only('', () => {
  let ride: TaxiRide

  beforeEach(() => {
    ride = new TaxiRide()
  })

  it('deve fazer uma corrida em um dia de semana e em horário normal', () => {
    ride.addSegment(10, new Date('2021-03-10T10:00:00'))
    const fare = ride.calculateFare()
    expect(fare).toBe(21)
  })

  it('deve fazer uma corrida em um dia de semana e em horário noturno', () => {
    ride.addSegment(10, new Date('2021-03-10T23:00:00'))
    const fare = ride.calculateFare()
    expect(fare).toBe(39)
  })

  it('deve fazer uma corrida em um domingo e em horário normal', () => {
    ride.addSegment(10, new Date('2021-03-07T10:00:00'))
    const fare = ride.calculateFare()
    expect(fare).toBe(29)
  })

  it('deve fazer uma corrida em um domingo e em horário noturno', () => {
    ride.addSegment(10, new Date('2021-03-07T23:00:00'))
    const fare = ride.calculateFare()
    expect(fare).toBe(50)
  })

  it('deve lançar exceção para uma distância inválida', () => {
    expect(() => ride.addSegment(-10, new Date('2021-03-07T23:00:00'))).toThrowError('invalid distance')
  })

  it('deve lançar exceção para uma data inválida', () => {
    expect(() => ride.addSegment(10, new Date('q'))).toThrowError('invalid date')
  })

  it('deve fazer uma corrida com o valor mínimo', () => {
    ride.addSegment(1, new Date('2021-03-07T23:00:00'))
    const fare = ride.calculateFare()
    expect(fare).toBe(10)
  })

  it.each(['2021-03-10T07:00:00', '2021-03-10T07:30:00', '2021-03-10T18:30:00', '2021-03-10T19:00:00'])(
    'deve fazer uma corrida em horário de pico %s',
    (date) => {
      ride.addSegment(10, new Date(date))
      const fare = ride.calculateFare()
      expect(fare).toBe(60)
    },
  )
})
