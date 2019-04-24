import { XyoBoundWitness } from '../xyo-bound-witness'
import { XyoStructure, XyoBuffer, XyoIterableStructure } from '@xyo-network/object-model'

describe('XyoBoundWitness', () => {

  it('Not completed', () => {
    // tslint:disable-next-line:max-line-length
    const bytes = Buffer.from('2002DE201547201944000C41B76AE59BB079817B8735E3E216D68E991F2B4F86E982C2DA635B779265E904E5D8E26756E67B72077F510AFF37F5C9EC04F9A1B16C73B07E1F1CA299BA9CFAF4201547201944000C41B946583242B36DDB3650FED6617A12E68DE7D80A686DF84F5FD268122502AA8FC3B873B38B6F4637009593BB9DC32AF2EC88DBC7841DF18EEB540FE21E4969BC201749201A46000943203AC4736260B427B2895250E15BC73B27AD2B3EE78460172F7CD856CFD15AE67D205911C0CDD962616BAC95D9AB4DCE689AF0826A0D92FB4980F2ADBB089844340A', 'hex')
    const buffer = new XyoBuffer(bytes)
    const boundWitness = new XyoBoundWitness(buffer)

    expect(boundWitness.getIsCompleted()).toBe(false)
  })

  it('Is completed', () => {
    // tslint:disable-next-line:max-line-length
    const bytes = Buffer.from('6002012B201547201944000C4192BAF8FBA41F6B5CA997DF7634F1F33176E0DDA8F7B485C6CD2EBC3BA06D4EEC8BB98284DB33761BA8A7668D1A5C140384968A0BE3436067F10A0D6B7F5AAFFF201547201944000C41ED1512DA596726D8E19A592BBA5573D31174C424FDFD7A0D14B3088BD22F0EB520F99E19D78DBBD613B79277FEB2BD0911C4C379E69B8688CC744B5B5ACF928F20174A201A470009442100CAC1C5F12BCCEA80C176FCCEEFEC616E86A9F208F43E45D49E8F32F76278B9F8202ABFC11D935F56D5CFECFDC66D4CA37D67C69AE6CD3C1DB41794C3C7FF41FE90201749201A4600094320656984EF23EAD4304E4A1AB3321F64BF9629FFE0E3A4097B181C2295892578D2205B90DAD8607D3BE600209771E2A19EC9EA3BB7BEE9D44A99395E85577FBCDBB7', 'hex')
    const buffer = new XyoBuffer(bytes)
    const boundWitness = new XyoBoundWitness(buffer)

    expect(boundWitness.getIsCompleted()).toBe(true)
  })

  it('Number of parties', () => {
    // tslint:disable-next-line:max-line-length
    const bytes = Buffer.from('6002012B201547201944000C4192BAF8FBA41F6B5CA997DF7634F1F33176E0DDA8F7B485C6CD2EBC3BA06D4EEC8BB98284DB33761BA8A7668D1A5C140384968A0BE3436067F10A0D6B7F5AAFFF201547201944000C41ED1512DA596726D8E19A592BBA5573D31174C424FDFD7A0D14B3088BD22F0EB520F99E19D78DBBD613B79277FEB2BD0911C4C379E69B8688CC744B5B5ACF928F20174A201A470009442100CAC1C5F12BCCEA80C176FCCEEFEC616E86A9F208F43E45D49E8F32F76278B9F8202ABFC11D935F56D5CFECFDC66D4CA37D67C69AE6CD3C1DB41794C3C7FF41FE90201749201A4600094320656984EF23EAD4304E4A1AB3321F64BF9629FFE0E3A4097B181C2295892578D2205B90DAD8607D3BE600209771E2A19EC9EA3BB7BEE9D44A99395E85577FBCDBB7', 'hex')
    const buffer = new XyoBuffer(bytes)
    const boundWitness = new XyoBoundWitness(buffer)

    expect(boundWitness.getNumberOfFetters()).toBe(2)
    expect(boundWitness.getNumberOfWitnesses()).toBe(2)
    expect(boundWitness.getNumberOfParties()).toBe(2)
  })

  it('Get fetter', () => {
    // tslint:disable-next-line:max-line-length
    const fetter0Bytes = Buffer.from('201547201944000C4192BAF8FBA41F6B5CA997DF7634F1F33176E0DDA8F7B485C6CD2EBC3BA06D4EEC8BB98284DB33761BA8A7668D1A5C140384968A0BE3436067F10A0D6B7F5AAFFF', 'hex')
    // tslint:disable-next-line:max-line-length
    const fetter1Bytes = Buffer.from('201547201944000C41ED1512DA596726D8E19A592BBA5573D31174C424FDFD7A0D14B3088BD22F0EB520F99E19D78DBBD613B79277FEB2BD0911C4C379E69B8688CC744B5B5ACF928F', 'hex')
    // tslint:disable-next-line:max-line-length
    const bytes = Buffer.from('6002012B201547201944000C4192BAF8FBA41F6B5CA997DF7634F1F33176E0DDA8F7B485C6CD2EBC3BA06D4EEC8BB98284DB33761BA8A7668D1A5C140384968A0BE3436067F10A0D6B7F5AAFFF201547201944000C41ED1512DA596726D8E19A592BBA5573D31174C424FDFD7A0D14B3088BD22F0EB520F99E19D78DBBD613B79277FEB2BD0911C4C379E69B8688CC744B5B5ACF928F20174A201A470009442100CAC1C5F12BCCEA80C176FCCEEFEC616E86A9F208F43E45D49E8F32F76278B9F8202ABFC11D935F56D5CFECFDC66D4CA37D67C69AE6CD3C1DB41794C3C7FF41FE90201749201A4600094320656984EF23EAD4304E4A1AB3321F64BF9629FFE0E3A4097B181C2295892578D2205B90DAD8607D3BE600209771E2A19EC9EA3BB7BEE9D44A99395E85577FBCDBB7', 'hex')
    const buffer = new XyoBuffer(bytes)
    const boundWitness = new XyoBoundWitness(buffer)

    const fetter0 = boundWitness.getFetterOfParty(0)!.getContents().getContentsCopy().toString('hex')
    const fetter1 = boundWitness.getFetterOfParty(1)!.getContents().getContentsCopy().toString('hex')

    expect(fetter0).toBe(fetter0Bytes.toString('hex'))
    expect(fetter1).toBe(fetter1Bytes.toString('hex'))
  })

  it('Get signing data', () => {
     // tslint:disable-next-line:max-line-length
    const signingData = Buffer.from('201547201944000C4192BAF8FBA41F6B5CA997DF7634F1F33176E0DDA8F7B485C6CD2EBC3BA06D4EEC8BB98284DB33761BA8A7668D1A5C140384968A0BE3436067F10A0D6B7F5AAFFF201547201944000C41ED1512DA596726D8E19A592BBA5573D31174C424FDFD7A0D14B3088BD22F0EB520F99E19D78DBBD613B79277FEB2BD0911C4C379E69B8688CC744B5B5ACF928F', 'hex')
    // tslint:disable-next-line:max-line-length
    const bytes = Buffer.from('6002012B201547201944000C4192BAF8FBA41F6B5CA997DF7634F1F33176E0DDA8F7B485C6CD2EBC3BA06D4EEC8BB98284DB33761BA8A7668D1A5C140384968A0BE3436067F10A0D6B7F5AAFFF201547201944000C41ED1512DA596726D8E19A592BBA5573D31174C424FDFD7A0D14B3088BD22F0EB520F99E19D78DBBD613B79277FEB2BD0911C4C379E69B8688CC744B5B5ACF928F20174A201A470009442100CAC1C5F12BCCEA80C176FCCEEFEC616E86A9F208F43E45D49E8F32F76278B9F8202ABFC11D935F56D5CFECFDC66D4CA37D67C69AE6CD3C1DB41794C3C7FF41FE90201749201A4600094320656984EF23EAD4304E4A1AB3321F64BF9629FFE0E3A4097B181C2295892578D2205B90DAD8607D3BE600209771E2A19EC9EA3BB7BEE9D44A99395E85577FBCDBB7', 'hex')
    const buffer = new XyoBuffer(bytes)
    const boundWitness = new XyoBoundWitness(buffer)

    const madeSigningData = boundWitness.getSigningData().toString('hex')

    expect(madeSigningData).toBe(signingData.toString('hex'))
  })
})
