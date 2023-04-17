import { describe, expect, it } from 'vitest'
import { calc } from './main'

describe('', () => {
  it('deve fazer uma corrida em um dia de semana e em horário normal', () => {
    const segments = [{ dist: 10, ds: new Date('2021-03-10T10:00:00') }]
    const fare = calc(segments)
    expect(fare).toBe(21)
  })

  it('deve fazer uma corrida em um dia de semana e em horário noturno', () => {
    const segments = [{ dist: 10, ds: new Date('2021-03-10T23:00:00') }]
    const fare = calc(segments)
    expect(fare).toBe(39)
  })

  it('deve fazer uma corrida em um domingo e em horário normal', () => {
    const segments = [{ dist: 10, ds: new Date('2021-03-07T10:00:00') }]
    const fare = calc(segments)
    expect(fare).toBe(29)
  })

  it('deve fazer uma corrida em um domingo e em horário noturno', () => {
    const segments = [{ dist: 10, ds: new Date('2021-03-07T23:00:00') }]
    const fare = calc(segments)
    expect(fare).toBe(50)
  })

  it('deve retornar -1 para uma distância inválida', () => {
    const segments = [{ dist: -10, ds: new Date('2021-03-07T23:00:00') }]
    const fare = calc(segments)
    expect(fare).toBe(-1)
  })

  it('deve retornar -2 para uma data inválida', () => {
    const segments = [{ dist: 10, ds: new Date('a'.repeat(10)) }]
    const fare = calc(segments)
    expect(fare).toBe(-2)
  })

  it('deve fazer uma corrida com o valor mínimo', () => {
    const segments = [{ dist: 1, ds: new Date('2021-03-07T23:00:00') }]
    const fare = calc(segments)
    expect(fare).toBe(10)
  })
})
