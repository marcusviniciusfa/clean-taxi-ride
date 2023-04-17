import { describe, expect, it } from 'vitest'
import { calculateRide } from './main'

describe('', () => {
  it('deve fazer uma corrida em um dia de semana e em horário normal', () => {
    const segments = [{ distance: 10, date: new Date('2021-03-10T10:00:00') }]
    const fare = calculateRide(segments)
    expect(fare).toBe(21)
  })

  it('deve fazer uma corrida em um dia de semana e em horário noturno', () => {
    const segments = [{ distance: 10, date: new Date('2021-03-10T23:00:00') }]
    const fare = calculateRide(segments)
    expect(fare).toBe(39)
  })

  it('deve fazer uma corrida em um domingo e em horário normal', () => {
    const segments = [{ distance: 10, date: new Date('2021-03-07T10:00:00') }]
    const fare = calculateRide(segments)
    expect(fare).toBe(29)
  })

  it('deve fazer uma corrida em um domingo e em horário noturno', () => {
    const segments = [{ distance: 10, date: new Date('2021-03-07T23:00:00') }]
    const fare = calculateRide(segments)
    expect(fare).toBe(50)
  })

  it('deve lançar exceção para uma distância inválida', () => {
    const segments = [{ distance: -10, date: new Date('2021-03-07T23:00:00') }]
    expect(() => calculateRide(segments)).toThrowError('invalid distance')
  })

  it('deve lançar exceção para uma data inválida', () => {
    const segments = [{ distance: 10, date: new Date('a'.repeat(10)) }]
    expect(() => calculateRide(segments)).toThrowError('invalid date')
  })

  it('deve fazer uma corrida com o valor mínimo', () => {
    const segments = [{ distance: 1, date: new Date('2021-03-07T23:00:00') }]
    const fare = calculateRide(segments)
    expect(fare).toBe(10)
  })
})
