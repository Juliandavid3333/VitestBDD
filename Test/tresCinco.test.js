import { describe, expect, it, test } from 'vitest';

const multiplicacion = (number) => {
    if (typeof number !== 'number') throw new Error('el numero no es valido')
    if (Number.isNaN(number)) throw new Error('el valor ingresado no es un numero' + number)
    if (number % 5 == 0 && number % 3 == 0 ) return 'tresCinco'
    if (number % 3 == 0 ) return 'tres'
    if (number % 5 == 0 ) return 'cinco'

        return number
    
}

describe('multiplicacion', ()=> {
    // it('deberia ser una funcion', () => {
    //     expect(typeof multiplicacion).toBe('function')
    // })

test('deberia fallar si no proporciona numero como parametro', () => { 
    expect(()=> multiplicacion()).toThrow()
 }) 

 test('deberia fallar si no proporciona numero muestra mas errores', () => { 
    expect(()=> multiplicacion()).toThrow('el numero no es valido')
 }) 
 test('deberia fallar si no proporciona numero muestra mas errores y el tipo de variable', () => { 
    expect(()=> multiplicacion(NaN)).toThrow('el valor ingresado no es un numero' + NaN)
 })
 test('deberia deberia devolver 1 si el numero proporcionado es 1', () => { 
    expect(multiplicacion(1)).toBe(1)
 })  
 it('deberia deberia devolver 1 si el numero proporcionado es 2', () => { 
    expect(multiplicacion(2)).toBe(2)
 })
//  test('deberia deberia devolver "tres" si el numero proporcionado es 3', () => { 
//     expect(multiplicacion(3)).toBe("tres")
//  })
 test('deberia deberia devolver "tres" si el numero proporcionado es multiplo de 3', () => { 
    expect(multiplicacion(6)).toBe("tres")
    expect(multiplicacion(9)).toBe("tres")
    expect(multiplicacion(12)).toBe("tres")
 }) 
 test('deberia deberia devolver "cinco" si el numero proporcionado es multiplo de 5', () => { 
    expect(multiplicacion(5)).toBe("cinco")
    expect(multiplicacion(10)).toBe("cinco")
    expect(multiplicacion(20)).toBe("cinco")
 })   
 
 test('deberia deberia devolver "tresCinco" si el numero proporcionado es multiplo de 3 y 5', () => { 
    expect(multiplicacion(15)).toBe("tresCinco")
    expect(multiplicacion(30)).toBe("tresCinco")
    expect(multiplicacion(45)).toBe("tresCinco")
 })
});
