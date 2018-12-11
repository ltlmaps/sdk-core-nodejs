/*
 * @Author: XY | The Findables Company <ryanxyo>
 * @Date:   Wednesday, 5th December 2018 10:30:22 am
 * @Email:  developer@xyfindables.com
 * @Filename: base-serializable.ts
 * @Last modified by: ryanxyo
 * @Last modified time: Monday, 10th December 2018 5:10:28 pm
 * @License: All Rights Reserved
 * @Copyright: Copyright XY | The Findables Company
 */

import { IXyoSerializableObject, IXyoSerializationService, IXyoObjectSchema } from "../@types"
import { XyoBase } from "@xyo-network/base"
import { resolveSerializablesToBuffer } from "./resolveSerializablesToBuffer"
import { serialize } from "./serialize"
import { findSchemaById } from "./findSchemaById"
import { XyoError, XyoErrors } from "@xyo-network/errors"

export abstract class XyoBaseSerializable extends XyoBase implements IXyoSerializableObject {

  public get schema(): IXyoObjectSchema {
    return (XyoBaseSerializable.serializationService && XyoBaseSerializable.serializationService.schema) || undefined
  }

  public static serializationService: IXyoSerializationService

  public abstract schemaObjectId: number

  public srcBuffer: Buffer | null = null

  // tslint:disable-next-line:max-line-length
  public abstract getData(): Buffer | IXyoSerializableObject | IXyoSerializableObject[]

  public serialize(): Buffer {
    if (this.srcBuffer) {
      return this.srcBuffer
    }

    const serialized = (() => {
      const result = this.getData()

      if (result instanceof Buffer) {
        return serialize(
          result,
          findSchemaById(this.schemaObjectId, this.schema)
        )
      }

      if (Array.isArray(result)) {
        const serializationResult = this.serializablesToBuffer(result)
        return serialize(serializationResult, findSchemaById(this.schemaObjectId, this.schema))
      }

      return serialize(
        result.serialize(),
        findSchemaById(this.schemaObjectId, this.schema)
      )
    })()

    this.srcBuffer = serialized
    return serialized
  }

  public serializeHex(): string {
    return this.serialize().toString('hex')
  }

  protected serializablesToBuffer(serializables: IXyoSerializableObject[]) {
    if (!this.schema) {
      throw new XyoError(`Serialization service not set`, XyoErrors.CRITICAL)
    }

    return resolveSerializablesToBuffer(
      this.schemaObjectId,
      this.schema,
      serializables
    )
  }
}