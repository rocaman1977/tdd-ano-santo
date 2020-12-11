import { anoSanto } from './index';
import { strictEqual } from "assert";

describe(('Comprobación de año santo'), () => {
  it('test 2094 es santo', () => { strictEqual(anoSanto(2094), true) })

  it('test 2020 no es santo', () => { strictEqual(anoSanto(2020), false) })
  it('test 2021 es santo', () => { strictEqual(anoSanto(2021), true) })
  it('test 2027 es santo', () => { strictEqual(anoSanto(2027), true) })
  it('test 2032 es santo ', () => { strictEqual(anoSanto(2032), true) })
  it('test 2033 no es santo', () => { strictEqual(anoSanto(2033), false) })
  it('test 2038 es santo', () => { strictEqual(anoSanto(2038), true) })
  it('test 2049 es santo', () => { strictEqual(anoSanto(2049), true) })
  it('test 2094 es santo', () => { strictEqual(anoSanto(2094), true) })
  it('test 2105 no es santo', () => { strictEqual(anoSanto(2105), true) })
  it('test 2106 es santo', () => { strictEqual(anoSanto(2106), true) })


  








})