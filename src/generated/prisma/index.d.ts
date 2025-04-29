
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model GameMove
 * 
 */
export type GameMove = $Result.DefaultSelection<Prisma.$GameMovePayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const GameType: {
  RANDOM: 'RANDOM',
  PRIVATE: 'PRIVATE',
  AI: 'AI'
};

export type GameType = (typeof GameType)[keyof typeof GameType]


export const AIDifficulty: {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

export type AIDifficulty = (typeof AIDifficulty)[keyof typeof AIDifficulty]


export const GameStatus: {
  PENDING: 'PENDING',
  ONGOING: 'ONGOING',
  COMPLETED: 'COMPLETED',
  ABANDONED: 'ABANDONED'
};

export type GameStatus = (typeof GameStatus)[keyof typeof GameStatus]


export const GameResult: {
  WIN: 'WIN',
  LOSS: 'LOSS',
  DRAW: 'DRAW',
  ABANDONED: 'ABANDONED'
};

export type GameResult = (typeof GameResult)[keyof typeof GameResult]


export const UserLevel: {
  NEW: 'NEW',
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED',
  EXPERT: 'EXPERT',
  MASTER: 'MASTER',
  GRANDMASTER: 'GRANDMASTER'
};

export type UserLevel = (typeof UserLevel)[keyof typeof UserLevel]

}

export type GameType = $Enums.GameType

export const GameType: typeof $Enums.GameType

export type AIDifficulty = $Enums.AIDifficulty

export const AIDifficulty: typeof $Enums.AIDifficulty

export type GameStatus = $Enums.GameStatus

export const GameStatus: typeof $Enums.GameStatus

export type GameResult = $Enums.GameResult

export const GameResult: typeof $Enums.GameResult

export type UserLevel = $Enums.UserLevel

export const UserLevel: typeof $Enums.UserLevel

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameMove`: Exposes CRUD operations for the **GameMove** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameMoves
    * const gameMoves = await prisma.gameMove.findMany()
    * ```
    */
  get gameMove(): Prisma.GameMoveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Game: 'Game',
    GameMove: 'GameMove',
    ChatMessage: 'ChatMessage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "game" | "gameMove" | "chatMessage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      GameMove: {
        payload: Prisma.$GameMovePayload<ExtArgs>
        fields: Prisma.GameMoveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameMoveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameMovePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameMoveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameMovePayload>
          }
          findFirst: {
            args: Prisma.GameMoveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameMovePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameMoveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameMovePayload>
          }
          findMany: {
            args: Prisma.GameMoveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameMovePayload>[]
          }
          create: {
            args: Prisma.GameMoveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameMovePayload>
          }
          createMany: {
            args: Prisma.GameMoveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameMoveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameMovePayload>[]
          }
          delete: {
            args: Prisma.GameMoveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameMovePayload>
          }
          update: {
            args: Prisma.GameMoveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameMovePayload>
          }
          deleteMany: {
            args: Prisma.GameMoveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameMoveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameMoveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameMovePayload>[]
          }
          upsert: {
            args: Prisma.GameMoveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameMovePayload>
          }
          aggregate: {
            args: Prisma.GameMoveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameMove>
          }
          groupBy: {
            args: Prisma.GameMoveGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameMoveGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameMoveCountArgs<ExtArgs>
            result: $Utils.Optional<GameMoveCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    game?: GameOmit
    gameMove?: GameMoveOmit
    chatMessage?: ChatMessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    gamesAsPlayer1: number
    gamesAsPlayer2: number
    chatMessages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gamesAsPlayer1?: boolean | UserCountOutputTypeCountGamesAsPlayer1Args
    gamesAsPlayer2?: boolean | UserCountOutputTypeCountGamesAsPlayer2Args
    chatMessages?: boolean | UserCountOutputTypeCountChatMessagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGamesAsPlayer1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGamesAsPlayer2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    moves: number
    chatMessages: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    moves?: boolean | GameCountOutputTypeCountMovesArgs
    chatMessages?: boolean | GameCountOutputTypeCountChatMessagesArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountMovesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameMoveWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    eloRating: number | null
    wins: number | null
    losses: number | null
    draws: number | null
    gamesPlayed: number | null
  }

  export type UserSumAggregateOutputType = {
    eloRating: number | null
    wins: number | null
    losses: number | null
    draws: number | null
    gamesPlayed: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    username: string | null
    fullName: string | null
    email: string | null
    avatarUrl: string | null
    eloRating: number | null
    wins: number | null
    losses: number | null
    draws: number | null
    gamesPlayed: number | null
    level: $Enums.UserLevel | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    username: string | null
    fullName: string | null
    email: string | null
    avatarUrl: string | null
    eloRating: number | null
    wins: number | null
    losses: number | null
    draws: number | null
    gamesPlayed: number | null
    level: $Enums.UserLevel | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    username: number
    fullName: number
    email: number
    avatarUrl: number
    eloRating: number
    wins: number
    losses: number
    draws: number
    gamesPlayed: number
    level: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    eloRating?: true
    wins?: true
    losses?: true
    draws?: true
    gamesPlayed?: true
  }

  export type UserSumAggregateInputType = {
    eloRating?: true
    wins?: true
    losses?: true
    draws?: true
    gamesPlayed?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    username?: true
    fullName?: true
    email?: true
    avatarUrl?: true
    eloRating?: true
    wins?: true
    losses?: true
    draws?: true
    gamesPlayed?: true
    level?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    username?: true
    fullName?: true
    email?: true
    avatarUrl?: true
    eloRating?: true
    wins?: true
    losses?: true
    draws?: true
    gamesPlayed?: true
    level?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    username?: true
    fullName?: true
    email?: true
    avatarUrl?: true
    eloRating?: true
    wins?: true
    losses?: true
    draws?: true
    gamesPlayed?: true
    level?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkId: string
    username: string | null
    fullName: string | null
    email: string | null
    avatarUrl: string | null
    eloRating: number
    wins: number
    losses: number
    draws: number
    gamesPlayed: number
    level: $Enums.UserLevel
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    username?: boolean
    fullName?: boolean
    email?: boolean
    avatarUrl?: boolean
    eloRating?: boolean
    wins?: boolean
    losses?: boolean
    draws?: boolean
    gamesPlayed?: boolean
    level?: boolean
    createdAt?: boolean
    gamesAsPlayer1?: boolean | User$gamesAsPlayer1Args<ExtArgs>
    gamesAsPlayer2?: boolean | User$gamesAsPlayer2Args<ExtArgs>
    chatMessages?: boolean | User$chatMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    username?: boolean
    fullName?: boolean
    email?: boolean
    avatarUrl?: boolean
    eloRating?: boolean
    wins?: boolean
    losses?: boolean
    draws?: boolean
    gamesPlayed?: boolean
    level?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    username?: boolean
    fullName?: boolean
    email?: boolean
    avatarUrl?: boolean
    eloRating?: boolean
    wins?: boolean
    losses?: boolean
    draws?: boolean
    gamesPlayed?: boolean
    level?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    username?: boolean
    fullName?: boolean
    email?: boolean
    avatarUrl?: boolean
    eloRating?: boolean
    wins?: boolean
    losses?: boolean
    draws?: boolean
    gamesPlayed?: boolean
    level?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "username" | "fullName" | "email" | "avatarUrl" | "eloRating" | "wins" | "losses" | "draws" | "gamesPlayed" | "level" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gamesAsPlayer1?: boolean | User$gamesAsPlayer1Args<ExtArgs>
    gamesAsPlayer2?: boolean | User$gamesAsPlayer2Args<ExtArgs>
    chatMessages?: boolean | User$chatMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      gamesAsPlayer1: Prisma.$GamePayload<ExtArgs>[]
      gamesAsPlayer2: Prisma.$GamePayload<ExtArgs>[]
      chatMessages: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      username: string | null
      fullName: string | null
      email: string | null
      avatarUrl: string | null
      eloRating: number
      wins: number
      losses: number
      draws: number
      gamesPlayed: number
      level: $Enums.UserLevel
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gamesAsPlayer1<T extends User$gamesAsPlayer1Args<ExtArgs> = {}>(args?: Subset<T, User$gamesAsPlayer1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gamesAsPlayer2<T extends User$gamesAsPlayer2Args<ExtArgs> = {}>(args?: Subset<T, User$gamesAsPlayer2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatMessages<T extends User$chatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$chatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly eloRating: FieldRef<"User", 'Int'>
    readonly wins: FieldRef<"User", 'Int'>
    readonly losses: FieldRef<"User", 'Int'>
    readonly draws: FieldRef<"User", 'Int'>
    readonly gamesPlayed: FieldRef<"User", 'Int'>
    readonly level: FieldRef<"User", 'UserLevel'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.gamesAsPlayer1
   */
  export type User$gamesAsPlayer1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * User.gamesAsPlayer2
   */
  export type User$gamesAsPlayer2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * User.chatMessages
   */
  export type User$chatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameMinAggregateOutputType = {
    id: string | null
    gameType: $Enums.GameType | null
    rated: boolean | null
    difficulty: $Enums.AIDifficulty | null
    status: $Enums.GameStatus | null
    result: $Enums.GameResult | null
    winnerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    player1UserId: string | null
    player2UserId: string | null
    player1GuestName: string | null
    player2GuestName: string | null
  }

  export type GameMaxAggregateOutputType = {
    id: string | null
    gameType: $Enums.GameType | null
    rated: boolean | null
    difficulty: $Enums.AIDifficulty | null
    status: $Enums.GameStatus | null
    result: $Enums.GameResult | null
    winnerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    player1UserId: string | null
    player2UserId: string | null
    player1GuestName: string | null
    player2GuestName: string | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    gameType: number
    rated: number
    difficulty: number
    status: number
    result: number
    winnerId: number
    createdAt: number
    updatedAt: number
    player1UserId: number
    player2UserId: number
    player1GuestName: number
    player2GuestName: number
    _all: number
  }


  export type GameMinAggregateInputType = {
    id?: true
    gameType?: true
    rated?: true
    difficulty?: true
    status?: true
    result?: true
    winnerId?: true
    createdAt?: true
    updatedAt?: true
    player1UserId?: true
    player2UserId?: true
    player1GuestName?: true
    player2GuestName?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    gameType?: true
    rated?: true
    difficulty?: true
    status?: true
    result?: true
    winnerId?: true
    createdAt?: true
    updatedAt?: true
    player1UserId?: true
    player2UserId?: true
    player1GuestName?: true
    player2GuestName?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    gameType?: true
    rated?: true
    difficulty?: true
    status?: true
    result?: true
    winnerId?: true
    createdAt?: true
    updatedAt?: true
    player1UserId?: true
    player2UserId?: true
    player1GuestName?: true
    player2GuestName?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: string
    gameType: $Enums.GameType
    rated: boolean
    difficulty: $Enums.AIDifficulty | null
    status: $Enums.GameStatus
    result: $Enums.GameResult | null
    winnerId: string | null
    createdAt: Date
    updatedAt: Date
    player1UserId: string | null
    player2UserId: string | null
    player1GuestName: string | null
    player2GuestName: string | null
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameType?: boolean
    rated?: boolean
    difficulty?: boolean
    status?: boolean
    result?: boolean
    winnerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    player1UserId?: boolean
    player2UserId?: boolean
    player1GuestName?: boolean
    player2GuestName?: boolean
    player1User?: boolean | Game$player1UserArgs<ExtArgs>
    player2User?: boolean | Game$player2UserArgs<ExtArgs>
    moves?: boolean | Game$movesArgs<ExtArgs>
    chatMessages?: boolean | Game$chatMessagesArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameType?: boolean
    rated?: boolean
    difficulty?: boolean
    status?: boolean
    result?: boolean
    winnerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    player1UserId?: boolean
    player2UserId?: boolean
    player1GuestName?: boolean
    player2GuestName?: boolean
    player1User?: boolean | Game$player1UserArgs<ExtArgs>
    player2User?: boolean | Game$player2UserArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameType?: boolean
    rated?: boolean
    difficulty?: boolean
    status?: boolean
    result?: boolean
    winnerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    player1UserId?: boolean
    player2UserId?: boolean
    player1GuestName?: boolean
    player2GuestName?: boolean
    player1User?: boolean | Game$player1UserArgs<ExtArgs>
    player2User?: boolean | Game$player2UserArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    gameType?: boolean
    rated?: boolean
    difficulty?: boolean
    status?: boolean
    result?: boolean
    winnerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    player1UserId?: boolean
    player2UserId?: boolean
    player1GuestName?: boolean
    player2GuestName?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameType" | "rated" | "difficulty" | "status" | "result" | "winnerId" | "createdAt" | "updatedAt" | "player1UserId" | "player2UserId" | "player1GuestName" | "player2GuestName", ExtArgs["result"]["game"]>
  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1User?: boolean | Game$player1UserArgs<ExtArgs>
    player2User?: boolean | Game$player2UserArgs<ExtArgs>
    moves?: boolean | Game$movesArgs<ExtArgs>
    chatMessages?: boolean | Game$chatMessagesArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1User?: boolean | Game$player1UserArgs<ExtArgs>
    player2User?: boolean | Game$player2UserArgs<ExtArgs>
  }
  export type GameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1User?: boolean | Game$player1UserArgs<ExtArgs>
    player2User?: boolean | Game$player2UserArgs<ExtArgs>
  }

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      player1User: Prisma.$UserPayload<ExtArgs> | null
      player2User: Prisma.$UserPayload<ExtArgs> | null
      moves: Prisma.$GameMovePayload<ExtArgs>[]
      chatMessages: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameType: $Enums.GameType
      rated: boolean
      difficulty: $Enums.AIDifficulty | null
      status: $Enums.GameStatus
      result: $Enums.GameResult | null
      winnerId: string | null
      createdAt: Date
      updatedAt: Date
      player1UserId: string | null
      player2UserId: string | null
      player1GuestName: string | null
      player2GuestName: string | null
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameUpdateManyAndReturnArgs>(args: SelectSubset<T, GameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player1User<T extends Game$player1UserArgs<ExtArgs> = {}>(args?: Subset<T, Game$player1UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    player2User<T extends Game$player2UserArgs<ExtArgs> = {}>(args?: Subset<T, Game$player2UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    moves<T extends Game$movesArgs<ExtArgs> = {}>(args?: Subset<T, Game$movesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameMovePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatMessages<T extends Game$chatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Game$chatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Game model
   */
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'String'>
    readonly gameType: FieldRef<"Game", 'GameType'>
    readonly rated: FieldRef<"Game", 'Boolean'>
    readonly difficulty: FieldRef<"Game", 'AIDifficulty'>
    readonly status: FieldRef<"Game", 'GameStatus'>
    readonly result: FieldRef<"Game", 'GameResult'>
    readonly winnerId: FieldRef<"Game", 'String'>
    readonly createdAt: FieldRef<"Game", 'DateTime'>
    readonly updatedAt: FieldRef<"Game", 'DateTime'>
    readonly player1UserId: FieldRef<"Game", 'String'>
    readonly player2UserId: FieldRef<"Game", 'String'>
    readonly player1GuestName: FieldRef<"Game", 'String'>
    readonly player2GuestName: FieldRef<"Game", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game updateManyAndReturn
   */
  export type GameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Game.player1User
   */
  export type Game$player1UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Game.player2User
   */
  export type Game$player2UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Game.moves
   */
  export type Game$movesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMove
     */
    select?: GameMoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMove
     */
    omit?: GameMoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameMoveInclude<ExtArgs> | null
    where?: GameMoveWhereInput
    orderBy?: GameMoveOrderByWithRelationInput | GameMoveOrderByWithRelationInput[]
    cursor?: GameMoveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameMoveScalarFieldEnum | GameMoveScalarFieldEnum[]
  }

  /**
   * Game.chatMessages
   */
  export type Game$chatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model GameMove
   */

  export type AggregateGameMove = {
    _count: GameMoveCountAggregateOutputType | null
    _avg: GameMoveAvgAggregateOutputType | null
    _sum: GameMoveSumAggregateOutputType | null
    _min: GameMoveMinAggregateOutputType | null
    _max: GameMoveMaxAggregateOutputType | null
  }

  export type GameMoveAvgAggregateOutputType = {
    moveNumber: number | null
  }

  export type GameMoveSumAggregateOutputType = {
    moveNumber: number | null
  }

  export type GameMoveMinAggregateOutputType = {
    id: string | null
    gameId: string | null
    move: string | null
    moveNumber: number | null
    createdAt: Date | null
  }

  export type GameMoveMaxAggregateOutputType = {
    id: string | null
    gameId: string | null
    move: string | null
    moveNumber: number | null
    createdAt: Date | null
  }

  export type GameMoveCountAggregateOutputType = {
    id: number
    gameId: number
    move: number
    moveNumber: number
    createdAt: number
    _all: number
  }


  export type GameMoveAvgAggregateInputType = {
    moveNumber?: true
  }

  export type GameMoveSumAggregateInputType = {
    moveNumber?: true
  }

  export type GameMoveMinAggregateInputType = {
    id?: true
    gameId?: true
    move?: true
    moveNumber?: true
    createdAt?: true
  }

  export type GameMoveMaxAggregateInputType = {
    id?: true
    gameId?: true
    move?: true
    moveNumber?: true
    createdAt?: true
  }

  export type GameMoveCountAggregateInputType = {
    id?: true
    gameId?: true
    move?: true
    moveNumber?: true
    createdAt?: true
    _all?: true
  }

  export type GameMoveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameMove to aggregate.
     */
    where?: GameMoveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameMoves to fetch.
     */
    orderBy?: GameMoveOrderByWithRelationInput | GameMoveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameMoveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameMoves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameMoves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameMoves
    **/
    _count?: true | GameMoveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameMoveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameMoveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMoveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMoveMaxAggregateInputType
  }

  export type GetGameMoveAggregateType<T extends GameMoveAggregateArgs> = {
        [P in keyof T & keyof AggregateGameMove]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameMove[P]>
      : GetScalarType<T[P], AggregateGameMove[P]>
  }




  export type GameMoveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameMoveWhereInput
    orderBy?: GameMoveOrderByWithAggregationInput | GameMoveOrderByWithAggregationInput[]
    by: GameMoveScalarFieldEnum[] | GameMoveScalarFieldEnum
    having?: GameMoveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameMoveCountAggregateInputType | true
    _avg?: GameMoveAvgAggregateInputType
    _sum?: GameMoveSumAggregateInputType
    _min?: GameMoveMinAggregateInputType
    _max?: GameMoveMaxAggregateInputType
  }

  export type GameMoveGroupByOutputType = {
    id: string
    gameId: string
    move: string
    moveNumber: number
    createdAt: Date
    _count: GameMoveCountAggregateOutputType | null
    _avg: GameMoveAvgAggregateOutputType | null
    _sum: GameMoveSumAggregateOutputType | null
    _min: GameMoveMinAggregateOutputType | null
    _max: GameMoveMaxAggregateOutputType | null
  }

  type GetGameMoveGroupByPayload<T extends GameMoveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameMoveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameMoveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameMoveGroupByOutputType[P]>
            : GetScalarType<T[P], GameMoveGroupByOutputType[P]>
        }
      >
    >


  export type GameMoveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    move?: boolean
    moveNumber?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameMove"]>

  export type GameMoveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    move?: boolean
    moveNumber?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameMove"]>

  export type GameMoveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    move?: boolean
    moveNumber?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameMove"]>

  export type GameMoveSelectScalar = {
    id?: boolean
    gameId?: boolean
    move?: boolean
    moveNumber?: boolean
    createdAt?: boolean
  }

  export type GameMoveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "move" | "moveNumber" | "createdAt", ExtArgs["result"]["gameMove"]>
  export type GameMoveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type GameMoveIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type GameMoveIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $GameMovePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameMove"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameId: string
      move: string
      moveNumber: number
      createdAt: Date
    }, ExtArgs["result"]["gameMove"]>
    composites: {}
  }

  type GameMoveGetPayload<S extends boolean | null | undefined | GameMoveDefaultArgs> = $Result.GetResult<Prisma.$GameMovePayload, S>

  type GameMoveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameMoveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameMoveCountAggregateInputType | true
    }

  export interface GameMoveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameMove'], meta: { name: 'GameMove' } }
    /**
     * Find zero or one GameMove that matches the filter.
     * @param {GameMoveFindUniqueArgs} args - Arguments to find a GameMove
     * @example
     * // Get one GameMove
     * const gameMove = await prisma.gameMove.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameMoveFindUniqueArgs>(args: SelectSubset<T, GameMoveFindUniqueArgs<ExtArgs>>): Prisma__GameMoveClient<$Result.GetResult<Prisma.$GameMovePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameMove that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameMoveFindUniqueOrThrowArgs} args - Arguments to find a GameMove
     * @example
     * // Get one GameMove
     * const gameMove = await prisma.gameMove.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameMoveFindUniqueOrThrowArgs>(args: SelectSubset<T, GameMoveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameMoveClient<$Result.GetResult<Prisma.$GameMovePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameMove that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameMoveFindFirstArgs} args - Arguments to find a GameMove
     * @example
     * // Get one GameMove
     * const gameMove = await prisma.gameMove.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameMoveFindFirstArgs>(args?: SelectSubset<T, GameMoveFindFirstArgs<ExtArgs>>): Prisma__GameMoveClient<$Result.GetResult<Prisma.$GameMovePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameMove that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameMoveFindFirstOrThrowArgs} args - Arguments to find a GameMove
     * @example
     * // Get one GameMove
     * const gameMove = await prisma.gameMove.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameMoveFindFirstOrThrowArgs>(args?: SelectSubset<T, GameMoveFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameMoveClient<$Result.GetResult<Prisma.$GameMovePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameMoves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameMoveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameMoves
     * const gameMoves = await prisma.gameMove.findMany()
     * 
     * // Get first 10 GameMoves
     * const gameMoves = await prisma.gameMove.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameMoveWithIdOnly = await prisma.gameMove.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameMoveFindManyArgs>(args?: SelectSubset<T, GameMoveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameMovePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameMove.
     * @param {GameMoveCreateArgs} args - Arguments to create a GameMove.
     * @example
     * // Create one GameMove
     * const GameMove = await prisma.gameMove.create({
     *   data: {
     *     // ... data to create a GameMove
     *   }
     * })
     * 
     */
    create<T extends GameMoveCreateArgs>(args: SelectSubset<T, GameMoveCreateArgs<ExtArgs>>): Prisma__GameMoveClient<$Result.GetResult<Prisma.$GameMovePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameMoves.
     * @param {GameMoveCreateManyArgs} args - Arguments to create many GameMoves.
     * @example
     * // Create many GameMoves
     * const gameMove = await prisma.gameMove.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameMoveCreateManyArgs>(args?: SelectSubset<T, GameMoveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameMoves and returns the data saved in the database.
     * @param {GameMoveCreateManyAndReturnArgs} args - Arguments to create many GameMoves.
     * @example
     * // Create many GameMoves
     * const gameMove = await prisma.gameMove.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameMoves and only return the `id`
     * const gameMoveWithIdOnly = await prisma.gameMove.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameMoveCreateManyAndReturnArgs>(args?: SelectSubset<T, GameMoveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameMovePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameMove.
     * @param {GameMoveDeleteArgs} args - Arguments to delete one GameMove.
     * @example
     * // Delete one GameMove
     * const GameMove = await prisma.gameMove.delete({
     *   where: {
     *     // ... filter to delete one GameMove
     *   }
     * })
     * 
     */
    delete<T extends GameMoveDeleteArgs>(args: SelectSubset<T, GameMoveDeleteArgs<ExtArgs>>): Prisma__GameMoveClient<$Result.GetResult<Prisma.$GameMovePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameMove.
     * @param {GameMoveUpdateArgs} args - Arguments to update one GameMove.
     * @example
     * // Update one GameMove
     * const gameMove = await prisma.gameMove.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameMoveUpdateArgs>(args: SelectSubset<T, GameMoveUpdateArgs<ExtArgs>>): Prisma__GameMoveClient<$Result.GetResult<Prisma.$GameMovePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameMoves.
     * @param {GameMoveDeleteManyArgs} args - Arguments to filter GameMoves to delete.
     * @example
     * // Delete a few GameMoves
     * const { count } = await prisma.gameMove.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameMoveDeleteManyArgs>(args?: SelectSubset<T, GameMoveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameMoves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameMoveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameMoves
     * const gameMove = await prisma.gameMove.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameMoveUpdateManyArgs>(args: SelectSubset<T, GameMoveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameMoves and returns the data updated in the database.
     * @param {GameMoveUpdateManyAndReturnArgs} args - Arguments to update many GameMoves.
     * @example
     * // Update many GameMoves
     * const gameMove = await prisma.gameMove.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameMoves and only return the `id`
     * const gameMoveWithIdOnly = await prisma.gameMove.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameMoveUpdateManyAndReturnArgs>(args: SelectSubset<T, GameMoveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameMovePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameMove.
     * @param {GameMoveUpsertArgs} args - Arguments to update or create a GameMove.
     * @example
     * // Update or create a GameMove
     * const gameMove = await prisma.gameMove.upsert({
     *   create: {
     *     // ... data to create a GameMove
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameMove we want to update
     *   }
     * })
     */
    upsert<T extends GameMoveUpsertArgs>(args: SelectSubset<T, GameMoveUpsertArgs<ExtArgs>>): Prisma__GameMoveClient<$Result.GetResult<Prisma.$GameMovePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameMoves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameMoveCountArgs} args - Arguments to filter GameMoves to count.
     * @example
     * // Count the number of GameMoves
     * const count = await prisma.gameMove.count({
     *   where: {
     *     // ... the filter for the GameMoves we want to count
     *   }
     * })
    **/
    count<T extends GameMoveCountArgs>(
      args?: Subset<T, GameMoveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameMoveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameMove.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameMoveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameMoveAggregateArgs>(args: Subset<T, GameMoveAggregateArgs>): Prisma.PrismaPromise<GetGameMoveAggregateType<T>>

    /**
     * Group by GameMove.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameMoveGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameMoveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameMoveGroupByArgs['orderBy'] }
        : { orderBy?: GameMoveGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameMoveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameMoveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameMove model
   */
  readonly fields: GameMoveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameMove.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameMoveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameMove model
   */
  interface GameMoveFieldRefs {
    readonly id: FieldRef<"GameMove", 'String'>
    readonly gameId: FieldRef<"GameMove", 'String'>
    readonly move: FieldRef<"GameMove", 'String'>
    readonly moveNumber: FieldRef<"GameMove", 'Int'>
    readonly createdAt: FieldRef<"GameMove", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameMove findUnique
   */
  export type GameMoveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMove
     */
    select?: GameMoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMove
     */
    omit?: GameMoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameMoveInclude<ExtArgs> | null
    /**
     * Filter, which GameMove to fetch.
     */
    where: GameMoveWhereUniqueInput
  }

  /**
   * GameMove findUniqueOrThrow
   */
  export type GameMoveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMove
     */
    select?: GameMoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMove
     */
    omit?: GameMoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameMoveInclude<ExtArgs> | null
    /**
     * Filter, which GameMove to fetch.
     */
    where: GameMoveWhereUniqueInput
  }

  /**
   * GameMove findFirst
   */
  export type GameMoveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMove
     */
    select?: GameMoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMove
     */
    omit?: GameMoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameMoveInclude<ExtArgs> | null
    /**
     * Filter, which GameMove to fetch.
     */
    where?: GameMoveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameMoves to fetch.
     */
    orderBy?: GameMoveOrderByWithRelationInput | GameMoveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameMoves.
     */
    cursor?: GameMoveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameMoves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameMoves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameMoves.
     */
    distinct?: GameMoveScalarFieldEnum | GameMoveScalarFieldEnum[]
  }

  /**
   * GameMove findFirstOrThrow
   */
  export type GameMoveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMove
     */
    select?: GameMoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMove
     */
    omit?: GameMoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameMoveInclude<ExtArgs> | null
    /**
     * Filter, which GameMove to fetch.
     */
    where?: GameMoveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameMoves to fetch.
     */
    orderBy?: GameMoveOrderByWithRelationInput | GameMoveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameMoves.
     */
    cursor?: GameMoveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameMoves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameMoves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameMoves.
     */
    distinct?: GameMoveScalarFieldEnum | GameMoveScalarFieldEnum[]
  }

  /**
   * GameMove findMany
   */
  export type GameMoveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMove
     */
    select?: GameMoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMove
     */
    omit?: GameMoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameMoveInclude<ExtArgs> | null
    /**
     * Filter, which GameMoves to fetch.
     */
    where?: GameMoveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameMoves to fetch.
     */
    orderBy?: GameMoveOrderByWithRelationInput | GameMoveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameMoves.
     */
    cursor?: GameMoveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameMoves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameMoves.
     */
    skip?: number
    distinct?: GameMoveScalarFieldEnum | GameMoveScalarFieldEnum[]
  }

  /**
   * GameMove create
   */
  export type GameMoveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMove
     */
    select?: GameMoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMove
     */
    omit?: GameMoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameMoveInclude<ExtArgs> | null
    /**
     * The data needed to create a GameMove.
     */
    data: XOR<GameMoveCreateInput, GameMoveUncheckedCreateInput>
  }

  /**
   * GameMove createMany
   */
  export type GameMoveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameMoves.
     */
    data: GameMoveCreateManyInput | GameMoveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameMove createManyAndReturn
   */
  export type GameMoveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMove
     */
    select?: GameMoveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameMove
     */
    omit?: GameMoveOmit<ExtArgs> | null
    /**
     * The data used to create many GameMoves.
     */
    data: GameMoveCreateManyInput | GameMoveCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameMoveIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameMove update
   */
  export type GameMoveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMove
     */
    select?: GameMoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMove
     */
    omit?: GameMoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameMoveInclude<ExtArgs> | null
    /**
     * The data needed to update a GameMove.
     */
    data: XOR<GameMoveUpdateInput, GameMoveUncheckedUpdateInput>
    /**
     * Choose, which GameMove to update.
     */
    where: GameMoveWhereUniqueInput
  }

  /**
   * GameMove updateMany
   */
  export type GameMoveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameMoves.
     */
    data: XOR<GameMoveUpdateManyMutationInput, GameMoveUncheckedUpdateManyInput>
    /**
     * Filter which GameMoves to update
     */
    where?: GameMoveWhereInput
    /**
     * Limit how many GameMoves to update.
     */
    limit?: number
  }

  /**
   * GameMove updateManyAndReturn
   */
  export type GameMoveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMove
     */
    select?: GameMoveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameMove
     */
    omit?: GameMoveOmit<ExtArgs> | null
    /**
     * The data used to update GameMoves.
     */
    data: XOR<GameMoveUpdateManyMutationInput, GameMoveUncheckedUpdateManyInput>
    /**
     * Filter which GameMoves to update
     */
    where?: GameMoveWhereInput
    /**
     * Limit how many GameMoves to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameMoveIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameMove upsert
   */
  export type GameMoveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMove
     */
    select?: GameMoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMove
     */
    omit?: GameMoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameMoveInclude<ExtArgs> | null
    /**
     * The filter to search for the GameMove to update in case it exists.
     */
    where: GameMoveWhereUniqueInput
    /**
     * In case the GameMove found by the `where` argument doesn't exist, create a new GameMove with this data.
     */
    create: XOR<GameMoveCreateInput, GameMoveUncheckedCreateInput>
    /**
     * In case the GameMove was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameMoveUpdateInput, GameMoveUncheckedUpdateInput>
  }

  /**
   * GameMove delete
   */
  export type GameMoveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMove
     */
    select?: GameMoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMove
     */
    omit?: GameMoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameMoveInclude<ExtArgs> | null
    /**
     * Filter which GameMove to delete.
     */
    where: GameMoveWhereUniqueInput
  }

  /**
   * GameMove deleteMany
   */
  export type GameMoveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameMoves to delete
     */
    where?: GameMoveWhereInput
    /**
     * Limit how many GameMoves to delete.
     */
    limit?: number
  }

  /**
   * GameMove without action
   */
  export type GameMoveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMove
     */
    select?: GameMoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMove
     */
    omit?: GameMoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameMoveInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    gameId: string | null
    senderId: string | null
    senderName: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    gameId: string | null
    senderId: string | null
    senderName: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    gameId: number
    senderId: number
    senderName: number
    message: number
    createdAt: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    gameId?: true
    senderId?: true
    senderName?: true
    message?: true
    createdAt?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    gameId?: true
    senderId?: true
    senderName?: true
    message?: true
    createdAt?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    gameId?: true
    senderId?: true
    senderName?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    gameId: string
    senderId: string | null
    senderName: string | null
    message: string
    createdAt: Date
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    senderId?: boolean
    senderName?: boolean
    message?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    sender?: boolean | ChatMessage$senderArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    senderId?: boolean
    senderName?: boolean
    message?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    sender?: boolean | ChatMessage$senderArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    senderId?: boolean
    senderName?: boolean
    message?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    sender?: boolean | ChatMessage$senderArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    gameId?: boolean
    senderId?: boolean
    senderName?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "senderId" | "senderName" | "message" | "createdAt", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    sender?: boolean | ChatMessage$senderArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    sender?: boolean | ChatMessage$senderArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    sender?: boolean | ChatMessage$senderArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameId: string
      senderId: string | null
      senderName: string | null
      message: string
      createdAt: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends ChatMessage$senderArgs<ExtArgs> = {}>(args?: Subset<T, ChatMessage$senderArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly gameId: FieldRef<"ChatMessage", 'String'>
    readonly senderId: FieldRef<"ChatMessage", 'String'>
    readonly senderName: FieldRef<"ChatMessage", 'String'>
    readonly message: FieldRef<"ChatMessage", 'String'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage.sender
   */
  export type ChatMessage$senderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    username: 'username',
    fullName: 'fullName',
    email: 'email',
    avatarUrl: 'avatarUrl',
    eloRating: 'eloRating',
    wins: 'wins',
    losses: 'losses',
    draws: 'draws',
    gamesPlayed: 'gamesPlayed',
    level: 'level',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    gameType: 'gameType',
    rated: 'rated',
    difficulty: 'difficulty',
    status: 'status',
    result: 'result',
    winnerId: 'winnerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    player1UserId: 'player1UserId',
    player2UserId: 'player2UserId',
    player1GuestName: 'player1GuestName',
    player2GuestName: 'player2GuestName'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const GameMoveScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    move: 'move',
    moveNumber: 'moveNumber',
    createdAt: 'createdAt'
  };

  export type GameMoveScalarFieldEnum = (typeof GameMoveScalarFieldEnum)[keyof typeof GameMoveScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    senderId: 'senderId',
    senderName: 'senderName',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'UserLevel'
   */
  export type EnumUserLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserLevel'>
    


  /**
   * Reference to a field of type 'UserLevel[]'
   */
  export type ListEnumUserLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserLevel[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'GameType'
   */
  export type EnumGameTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameType'>
    


  /**
   * Reference to a field of type 'GameType[]'
   */
  export type ListEnumGameTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AIDifficulty'
   */
  export type EnumAIDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AIDifficulty'>
    


  /**
   * Reference to a field of type 'AIDifficulty[]'
   */
  export type ListEnumAIDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AIDifficulty[]'>
    


  /**
   * Reference to a field of type 'GameStatus'
   */
  export type EnumGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameStatus'>
    


  /**
   * Reference to a field of type 'GameStatus[]'
   */
  export type ListEnumGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameStatus[]'>
    


  /**
   * Reference to a field of type 'GameResult'
   */
  export type EnumGameResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameResult'>
    


  /**
   * Reference to a field of type 'GameResult[]'
   */
  export type ListEnumGameResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameResult[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    fullName?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    eloRating?: IntFilter<"User"> | number
    wins?: IntFilter<"User"> | number
    losses?: IntFilter<"User"> | number
    draws?: IntFilter<"User"> | number
    gamesPlayed?: IntFilter<"User"> | number
    level?: EnumUserLevelFilter<"User"> | $Enums.UserLevel
    createdAt?: DateTimeFilter<"User"> | Date | string
    gamesAsPlayer1?: GameListRelationFilter
    gamesAsPlayer2?: GameListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    username?: SortOrderInput | SortOrder
    fullName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    eloRating?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    draws?: SortOrder
    gamesPlayed?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    gamesAsPlayer1?: GameOrderByRelationAggregateInput
    gamesAsPlayer2?: GameOrderByRelationAggregateInput
    chatMessages?: ChatMessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringNullableFilter<"User"> | string | null
    fullName?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    eloRating?: IntFilter<"User"> | number
    wins?: IntFilter<"User"> | number
    losses?: IntFilter<"User"> | number
    draws?: IntFilter<"User"> | number
    gamesPlayed?: IntFilter<"User"> | number
    level?: EnumUserLevelFilter<"User"> | $Enums.UserLevel
    createdAt?: DateTimeFilter<"User"> | Date | string
    gamesAsPlayer1?: GameListRelationFilter
    gamesAsPlayer2?: GameListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
  }, "id" | "clerkId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    username?: SortOrderInput | SortOrder
    fullName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    eloRating?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    draws?: SortOrder
    gamesPlayed?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    fullName?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    eloRating?: IntWithAggregatesFilter<"User"> | number
    wins?: IntWithAggregatesFilter<"User"> | number
    losses?: IntWithAggregatesFilter<"User"> | number
    draws?: IntWithAggregatesFilter<"User"> | number
    gamesPlayed?: IntWithAggregatesFilter<"User"> | number
    level?: EnumUserLevelWithAggregatesFilter<"User"> | $Enums.UserLevel
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: StringFilter<"Game"> | string
    gameType?: EnumGameTypeFilter<"Game"> | $Enums.GameType
    rated?: BoolFilter<"Game"> | boolean
    difficulty?: EnumAIDifficultyNullableFilter<"Game"> | $Enums.AIDifficulty | null
    status?: EnumGameStatusFilter<"Game"> | $Enums.GameStatus
    result?: EnumGameResultNullableFilter<"Game"> | $Enums.GameResult | null
    winnerId?: StringNullableFilter<"Game"> | string | null
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    player1UserId?: StringNullableFilter<"Game"> | string | null
    player2UserId?: StringNullableFilter<"Game"> | string | null
    player1GuestName?: StringNullableFilter<"Game"> | string | null
    player2GuestName?: StringNullableFilter<"Game"> | string | null
    player1User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    player2User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    moves?: GameMoveListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    gameType?: SortOrder
    rated?: SortOrder
    difficulty?: SortOrderInput | SortOrder
    status?: SortOrder
    result?: SortOrderInput | SortOrder
    winnerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    player1UserId?: SortOrderInput | SortOrder
    player2UserId?: SortOrderInput | SortOrder
    player1GuestName?: SortOrderInput | SortOrder
    player2GuestName?: SortOrderInput | SortOrder
    player1User?: UserOrderByWithRelationInput
    player2User?: UserOrderByWithRelationInput
    moves?: GameMoveOrderByRelationAggregateInput
    chatMessages?: ChatMessageOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    gameType?: EnumGameTypeFilter<"Game"> | $Enums.GameType
    rated?: BoolFilter<"Game"> | boolean
    difficulty?: EnumAIDifficultyNullableFilter<"Game"> | $Enums.AIDifficulty | null
    status?: EnumGameStatusFilter<"Game"> | $Enums.GameStatus
    result?: EnumGameResultNullableFilter<"Game"> | $Enums.GameResult | null
    winnerId?: StringNullableFilter<"Game"> | string | null
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    player1UserId?: StringNullableFilter<"Game"> | string | null
    player2UserId?: StringNullableFilter<"Game"> | string | null
    player1GuestName?: StringNullableFilter<"Game"> | string | null
    player2GuestName?: StringNullableFilter<"Game"> | string | null
    player1User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    player2User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    moves?: GameMoveListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
  }, "id">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    gameType?: SortOrder
    rated?: SortOrder
    difficulty?: SortOrderInput | SortOrder
    status?: SortOrder
    result?: SortOrderInput | SortOrder
    winnerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    player1UserId?: SortOrderInput | SortOrder
    player2UserId?: SortOrderInput | SortOrder
    player1GuestName?: SortOrderInput | SortOrder
    player2GuestName?: SortOrderInput | SortOrder
    _count?: GameCountOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Game"> | string
    gameType?: EnumGameTypeWithAggregatesFilter<"Game"> | $Enums.GameType
    rated?: BoolWithAggregatesFilter<"Game"> | boolean
    difficulty?: EnumAIDifficultyNullableWithAggregatesFilter<"Game"> | $Enums.AIDifficulty | null
    status?: EnumGameStatusWithAggregatesFilter<"Game"> | $Enums.GameStatus
    result?: EnumGameResultNullableWithAggregatesFilter<"Game"> | $Enums.GameResult | null
    winnerId?: StringNullableWithAggregatesFilter<"Game"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    player1UserId?: StringNullableWithAggregatesFilter<"Game"> | string | null
    player2UserId?: StringNullableWithAggregatesFilter<"Game"> | string | null
    player1GuestName?: StringNullableWithAggregatesFilter<"Game"> | string | null
    player2GuestName?: StringNullableWithAggregatesFilter<"Game"> | string | null
  }

  export type GameMoveWhereInput = {
    AND?: GameMoveWhereInput | GameMoveWhereInput[]
    OR?: GameMoveWhereInput[]
    NOT?: GameMoveWhereInput | GameMoveWhereInput[]
    id?: StringFilter<"GameMove"> | string
    gameId?: StringFilter<"GameMove"> | string
    move?: StringFilter<"GameMove"> | string
    moveNumber?: IntFilter<"GameMove"> | number
    createdAt?: DateTimeFilter<"GameMove"> | Date | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }

  export type GameMoveOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    move?: SortOrder
    moveNumber?: SortOrder
    createdAt?: SortOrder
    game?: GameOrderByWithRelationInput
  }

  export type GameMoveWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameMoveWhereInput | GameMoveWhereInput[]
    OR?: GameMoveWhereInput[]
    NOT?: GameMoveWhereInput | GameMoveWhereInput[]
    gameId?: StringFilter<"GameMove"> | string
    move?: StringFilter<"GameMove"> | string
    moveNumber?: IntFilter<"GameMove"> | number
    createdAt?: DateTimeFilter<"GameMove"> | Date | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }, "id">

  export type GameMoveOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    move?: SortOrder
    moveNumber?: SortOrder
    createdAt?: SortOrder
    _count?: GameMoveCountOrderByAggregateInput
    _avg?: GameMoveAvgOrderByAggregateInput
    _max?: GameMoveMaxOrderByAggregateInput
    _min?: GameMoveMinOrderByAggregateInput
    _sum?: GameMoveSumOrderByAggregateInput
  }

  export type GameMoveScalarWhereWithAggregatesInput = {
    AND?: GameMoveScalarWhereWithAggregatesInput | GameMoveScalarWhereWithAggregatesInput[]
    OR?: GameMoveScalarWhereWithAggregatesInput[]
    NOT?: GameMoveScalarWhereWithAggregatesInput | GameMoveScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameMove"> | string
    gameId?: StringWithAggregatesFilter<"GameMove"> | string
    move?: StringWithAggregatesFilter<"GameMove"> | string
    moveNumber?: IntWithAggregatesFilter<"GameMove"> | number
    createdAt?: DateTimeWithAggregatesFilter<"GameMove"> | Date | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    gameId?: StringFilter<"ChatMessage"> | string
    senderId?: StringNullableFilter<"ChatMessage"> | string | null
    senderName?: StringNullableFilter<"ChatMessage"> | string | null
    message?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    sender?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    senderId?: SortOrderInput | SortOrder
    senderName?: SortOrderInput | SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    game?: GameOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    gameId?: StringFilter<"ChatMessage"> | string
    senderId?: StringNullableFilter<"ChatMessage"> | string | null
    senderName?: StringNullableFilter<"ChatMessage"> | string | null
    message?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    sender?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    senderId?: SortOrderInput | SortOrder
    senderName?: SortOrderInput | SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    gameId?: StringWithAggregatesFilter<"ChatMessage"> | string
    senderId?: StringNullableWithAggregatesFilter<"ChatMessage"> | string | null
    senderName?: StringNullableWithAggregatesFilter<"ChatMessage"> | string | null
    message?: StringWithAggregatesFilter<"ChatMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    username?: string | null
    fullName?: string | null
    email?: string | null
    avatarUrl?: string | null
    eloRating?: number
    wins?: number
    losses?: number
    draws?: number
    gamesPlayed?: number
    level?: $Enums.UserLevel
    createdAt?: Date | string
    gamesAsPlayer1?: GameCreateNestedManyWithoutPlayer1UserInput
    gamesAsPlayer2?: GameCreateNestedManyWithoutPlayer2UserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    username?: string | null
    fullName?: string | null
    email?: string | null
    avatarUrl?: string | null
    eloRating?: number
    wins?: number
    losses?: number
    draws?: number
    gamesPlayed?: number
    level?: $Enums.UserLevel
    createdAt?: Date | string
    gamesAsPlayer1?: GameUncheckedCreateNestedManyWithoutPlayer1UserInput
    gamesAsPlayer2?: GameUncheckedCreateNestedManyWithoutPlayer2UserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eloRating?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    level?: EnumUserLevelFieldUpdateOperationsInput | $Enums.UserLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesAsPlayer1?: GameUpdateManyWithoutPlayer1UserNestedInput
    gamesAsPlayer2?: GameUpdateManyWithoutPlayer2UserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eloRating?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    level?: EnumUserLevelFieldUpdateOperationsInput | $Enums.UserLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesAsPlayer1?: GameUncheckedUpdateManyWithoutPlayer1UserNestedInput
    gamesAsPlayer2?: GameUncheckedUpdateManyWithoutPlayer2UserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    username?: string | null
    fullName?: string | null
    email?: string | null
    avatarUrl?: string | null
    eloRating?: number
    wins?: number
    losses?: number
    draws?: number
    gamesPlayed?: number
    level?: $Enums.UserLevel
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eloRating?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    level?: EnumUserLevelFieldUpdateOperationsInput | $Enums.UserLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eloRating?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    level?: EnumUserLevelFieldUpdateOperationsInput | $Enums.UserLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameCreateInput = {
    id?: string
    gameType?: $Enums.GameType
    rated?: boolean
    difficulty?: $Enums.AIDifficulty | null
    status?: $Enums.GameStatus
    result?: $Enums.GameResult | null
    winnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    player1GuestName?: string | null
    player2GuestName?: string | null
    player1User?: UserCreateNestedOneWithoutGamesAsPlayer1Input
    player2User?: UserCreateNestedOneWithoutGamesAsPlayer2Input
    moves?: GameMoveCreateNestedManyWithoutGameInput
    chatMessages?: ChatMessageCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: string
    gameType?: $Enums.GameType
    rated?: boolean
    difficulty?: $Enums.AIDifficulty | null
    status?: $Enums.GameStatus
    result?: $Enums.GameResult | null
    winnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    player1UserId?: string | null
    player2UserId?: string | null
    player1GuestName?: string | null
    player2GuestName?: string | null
    moves?: GameMoveUncheckedCreateNestedManyWithoutGameInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: EnumGameTypeFieldUpdateOperationsInput | $Enums.GameType
    rated?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: NullableEnumAIDifficultyFieldUpdateOperationsInput | $Enums.AIDifficulty | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    result?: NullableEnumGameResultFieldUpdateOperationsInput | $Enums.GameResult | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1GuestName?: NullableStringFieldUpdateOperationsInput | string | null
    player2GuestName?: NullableStringFieldUpdateOperationsInput | string | null
    player1User?: UserUpdateOneWithoutGamesAsPlayer1NestedInput
    player2User?: UserUpdateOneWithoutGamesAsPlayer2NestedInput
    moves?: GameMoveUpdateManyWithoutGameNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: EnumGameTypeFieldUpdateOperationsInput | $Enums.GameType
    rated?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: NullableEnumAIDifficultyFieldUpdateOperationsInput | $Enums.AIDifficulty | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    result?: NullableEnumGameResultFieldUpdateOperationsInput | $Enums.GameResult | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1UserId?: NullableStringFieldUpdateOperationsInput | string | null
    player2UserId?: NullableStringFieldUpdateOperationsInput | string | null
    player1GuestName?: NullableStringFieldUpdateOperationsInput | string | null
    player2GuestName?: NullableStringFieldUpdateOperationsInput | string | null
    moves?: GameMoveUncheckedUpdateManyWithoutGameNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    id?: string
    gameType?: $Enums.GameType
    rated?: boolean
    difficulty?: $Enums.AIDifficulty | null
    status?: $Enums.GameStatus
    result?: $Enums.GameResult | null
    winnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    player1UserId?: string | null
    player2UserId?: string | null
    player1GuestName?: string | null
    player2GuestName?: string | null
  }

  export type GameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: EnumGameTypeFieldUpdateOperationsInput | $Enums.GameType
    rated?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: NullableEnumAIDifficultyFieldUpdateOperationsInput | $Enums.AIDifficulty | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    result?: NullableEnumGameResultFieldUpdateOperationsInput | $Enums.GameResult | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1GuestName?: NullableStringFieldUpdateOperationsInput | string | null
    player2GuestName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: EnumGameTypeFieldUpdateOperationsInput | $Enums.GameType
    rated?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: NullableEnumAIDifficultyFieldUpdateOperationsInput | $Enums.AIDifficulty | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    result?: NullableEnumGameResultFieldUpdateOperationsInput | $Enums.GameResult | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1UserId?: NullableStringFieldUpdateOperationsInput | string | null
    player2UserId?: NullableStringFieldUpdateOperationsInput | string | null
    player1GuestName?: NullableStringFieldUpdateOperationsInput | string | null
    player2GuestName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameMoveCreateInput = {
    id?: string
    move: string
    moveNumber: number
    createdAt?: Date | string
    game: GameCreateNestedOneWithoutMovesInput
  }

  export type GameMoveUncheckedCreateInput = {
    id?: string
    gameId: string
    move: string
    moveNumber: number
    createdAt?: Date | string
  }

  export type GameMoveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    move?: StringFieldUpdateOperationsInput | string
    moveNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutMovesNestedInput
  }

  export type GameMoveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    move?: StringFieldUpdateOperationsInput | string
    moveNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameMoveCreateManyInput = {
    id?: string
    gameId: string
    move: string
    moveNumber: number
    createdAt?: Date | string
  }

  export type GameMoveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    move?: StringFieldUpdateOperationsInput | string
    moveNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameMoveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    move?: StringFieldUpdateOperationsInput | string
    moveNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateInput = {
    id?: string
    senderName?: string | null
    message: string
    createdAt?: Date | string
    game: GameCreateNestedOneWithoutChatMessagesInput
    sender?: UserCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    gameId: string
    senderId?: string | null
    senderName?: string | null
    message: string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutChatMessagesNestedInput
    sender?: UserUpdateOneWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    gameId: string
    senderId?: string | null
    senderName?: string | null
    message: string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumUserLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.UserLevel | EnumUserLevelFieldRefInput<$PrismaModel>
    in?: $Enums.UserLevel[] | ListEnumUserLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserLevel[] | ListEnumUserLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumUserLevelFilter<$PrismaModel> | $Enums.UserLevel
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GameListRelationFilter = {
    every?: GameWhereInput
    some?: GameWhereInput
    none?: GameWhereInput
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    avatarUrl?: SortOrder
    eloRating?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    draws?: SortOrder
    gamesPlayed?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    eloRating?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    draws?: SortOrder
    gamesPlayed?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    avatarUrl?: SortOrder
    eloRating?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    draws?: SortOrder
    gamesPlayed?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    avatarUrl?: SortOrder
    eloRating?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    draws?: SortOrder
    gamesPlayed?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    eloRating?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    draws?: SortOrder
    gamesPlayed?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumUserLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserLevel | EnumUserLevelFieldRefInput<$PrismaModel>
    in?: $Enums.UserLevel[] | ListEnumUserLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserLevel[] | ListEnumUserLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumUserLevelWithAggregatesFilter<$PrismaModel> | $Enums.UserLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserLevelFilter<$PrismaModel>
    _max?: NestedEnumUserLevelFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumGameTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GameType | EnumGameTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GameType[] | ListEnumGameTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameType[] | ListEnumGameTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGameTypeFilter<$PrismaModel> | $Enums.GameType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumAIDifficultyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AIDifficulty | EnumAIDifficultyFieldRefInput<$PrismaModel> | null
    in?: $Enums.AIDifficulty[] | ListEnumAIDifficultyFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AIDifficulty[] | ListEnumAIDifficultyFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAIDifficultyNullableFilter<$PrismaModel> | $Enums.AIDifficulty | null
  }

  export type EnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
  }

  export type EnumGameResultNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.GameResult | EnumGameResultFieldRefInput<$PrismaModel> | null
    in?: $Enums.GameResult[] | ListEnumGameResultFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.GameResult[] | ListEnumGameResultFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGameResultNullableFilter<$PrismaModel> | $Enums.GameResult | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type GameMoveListRelationFilter = {
    every?: GameMoveWhereInput
    some?: GameMoveWhereInput
    none?: GameMoveWhereInput
  }

  export type GameMoveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    gameType?: SortOrder
    rated?: SortOrder
    difficulty?: SortOrder
    status?: SortOrder
    result?: SortOrder
    winnerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    player1UserId?: SortOrder
    player2UserId?: SortOrder
    player1GuestName?: SortOrder
    player2GuestName?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    gameType?: SortOrder
    rated?: SortOrder
    difficulty?: SortOrder
    status?: SortOrder
    result?: SortOrder
    winnerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    player1UserId?: SortOrder
    player2UserId?: SortOrder
    player1GuestName?: SortOrder
    player2GuestName?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    gameType?: SortOrder
    rated?: SortOrder
    difficulty?: SortOrder
    status?: SortOrder
    result?: SortOrder
    winnerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    player1UserId?: SortOrder
    player2UserId?: SortOrder
    player1GuestName?: SortOrder
    player2GuestName?: SortOrder
  }

  export type EnumGameTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameType | EnumGameTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GameType[] | ListEnumGameTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameType[] | ListEnumGameTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGameTypeWithAggregatesFilter<$PrismaModel> | $Enums.GameType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameTypeFilter<$PrismaModel>
    _max?: NestedEnumGameTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumAIDifficultyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AIDifficulty | EnumAIDifficultyFieldRefInput<$PrismaModel> | null
    in?: $Enums.AIDifficulty[] | ListEnumAIDifficultyFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AIDifficulty[] | ListEnumAIDifficultyFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAIDifficultyNullableWithAggregatesFilter<$PrismaModel> | $Enums.AIDifficulty | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAIDifficultyNullableFilter<$PrismaModel>
    _max?: NestedEnumAIDifficultyNullableFilter<$PrismaModel>
  }

  export type EnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
  }

  export type EnumGameResultNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameResult | EnumGameResultFieldRefInput<$PrismaModel> | null
    in?: $Enums.GameResult[] | ListEnumGameResultFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.GameResult[] | ListEnumGameResultFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGameResultNullableWithAggregatesFilter<$PrismaModel> | $Enums.GameResult | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGameResultNullableFilter<$PrismaModel>
    _max?: NestedEnumGameResultNullableFilter<$PrismaModel>
  }

  export type GameScalarRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type GameMoveCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    move?: SortOrder
    moveNumber?: SortOrder
    createdAt?: SortOrder
  }

  export type GameMoveAvgOrderByAggregateInput = {
    moveNumber?: SortOrder
  }

  export type GameMoveMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    move?: SortOrder
    moveNumber?: SortOrder
    createdAt?: SortOrder
  }

  export type GameMoveMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    move?: SortOrder
    moveNumber?: SortOrder
    createdAt?: SortOrder
  }

  export type GameMoveSumOrderByAggregateInput = {
    moveNumber?: SortOrder
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    senderId?: SortOrder
    senderName?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    senderId?: SortOrder
    senderName?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    senderId?: SortOrder
    senderName?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type GameCreateNestedManyWithoutPlayer1UserInput = {
    create?: XOR<GameCreateWithoutPlayer1UserInput, GameUncheckedCreateWithoutPlayer1UserInput> | GameCreateWithoutPlayer1UserInput[] | GameUncheckedCreateWithoutPlayer1UserInput[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer1UserInput | GameCreateOrConnectWithoutPlayer1UserInput[]
    createMany?: GameCreateManyPlayer1UserInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameCreateNestedManyWithoutPlayer2UserInput = {
    create?: XOR<GameCreateWithoutPlayer2UserInput, GameUncheckedCreateWithoutPlayer2UserInput> | GameCreateWithoutPlayer2UserInput[] | GameUncheckedCreateWithoutPlayer2UserInput[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer2UserInput | GameCreateOrConnectWithoutPlayer2UserInput[]
    createMany?: GameCreateManyPlayer2UserInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutPlayer1UserInput = {
    create?: XOR<GameCreateWithoutPlayer1UserInput, GameUncheckedCreateWithoutPlayer1UserInput> | GameCreateWithoutPlayer1UserInput[] | GameUncheckedCreateWithoutPlayer1UserInput[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer1UserInput | GameCreateOrConnectWithoutPlayer1UserInput[]
    createMany?: GameCreateManyPlayer1UserInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutPlayer2UserInput = {
    create?: XOR<GameCreateWithoutPlayer2UserInput, GameUncheckedCreateWithoutPlayer2UserInput> | GameCreateWithoutPlayer2UserInput[] | GameUncheckedCreateWithoutPlayer2UserInput[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer2UserInput | GameCreateOrConnectWithoutPlayer2UserInput[]
    createMany?: GameCreateManyPlayer2UserInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumUserLevelFieldUpdateOperationsInput = {
    set?: $Enums.UserLevel
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GameUpdateManyWithoutPlayer1UserNestedInput = {
    create?: XOR<GameCreateWithoutPlayer1UserInput, GameUncheckedCreateWithoutPlayer1UserInput> | GameCreateWithoutPlayer1UserInput[] | GameUncheckedCreateWithoutPlayer1UserInput[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer1UserInput | GameCreateOrConnectWithoutPlayer1UserInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutPlayer1UserInput | GameUpsertWithWhereUniqueWithoutPlayer1UserInput[]
    createMany?: GameCreateManyPlayer1UserInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutPlayer1UserInput | GameUpdateWithWhereUniqueWithoutPlayer1UserInput[]
    updateMany?: GameUpdateManyWithWhereWithoutPlayer1UserInput | GameUpdateManyWithWhereWithoutPlayer1UserInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUpdateManyWithoutPlayer2UserNestedInput = {
    create?: XOR<GameCreateWithoutPlayer2UserInput, GameUncheckedCreateWithoutPlayer2UserInput> | GameCreateWithoutPlayer2UserInput[] | GameUncheckedCreateWithoutPlayer2UserInput[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer2UserInput | GameCreateOrConnectWithoutPlayer2UserInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutPlayer2UserInput | GameUpsertWithWhereUniqueWithoutPlayer2UserInput[]
    createMany?: GameCreateManyPlayer2UserInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutPlayer2UserInput | GameUpdateWithWhereUniqueWithoutPlayer2UserInput[]
    updateMany?: GameUpdateManyWithWhereWithoutPlayer2UserInput | GameUpdateManyWithWhereWithoutPlayer2UserInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSenderInput | ChatMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSenderInput | ChatMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSenderInput | ChatMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutPlayer1UserNestedInput = {
    create?: XOR<GameCreateWithoutPlayer1UserInput, GameUncheckedCreateWithoutPlayer1UserInput> | GameCreateWithoutPlayer1UserInput[] | GameUncheckedCreateWithoutPlayer1UserInput[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer1UserInput | GameCreateOrConnectWithoutPlayer1UserInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutPlayer1UserInput | GameUpsertWithWhereUniqueWithoutPlayer1UserInput[]
    createMany?: GameCreateManyPlayer1UserInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutPlayer1UserInput | GameUpdateWithWhereUniqueWithoutPlayer1UserInput[]
    updateMany?: GameUpdateManyWithWhereWithoutPlayer1UserInput | GameUpdateManyWithWhereWithoutPlayer1UserInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutPlayer2UserNestedInput = {
    create?: XOR<GameCreateWithoutPlayer2UserInput, GameUncheckedCreateWithoutPlayer2UserInput> | GameCreateWithoutPlayer2UserInput[] | GameUncheckedCreateWithoutPlayer2UserInput[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer2UserInput | GameCreateOrConnectWithoutPlayer2UserInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutPlayer2UserInput | GameUpsertWithWhereUniqueWithoutPlayer2UserInput[]
    createMany?: GameCreateManyPlayer2UserInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutPlayer2UserInput | GameUpdateWithWhereUniqueWithoutPlayer2UserInput[]
    updateMany?: GameUpdateManyWithWhereWithoutPlayer2UserInput | GameUpdateManyWithWhereWithoutPlayer2UserInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSenderInput | ChatMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSenderInput | ChatMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSenderInput | ChatMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGamesAsPlayer1Input = {
    create?: XOR<UserCreateWithoutGamesAsPlayer1Input, UserUncheckedCreateWithoutGamesAsPlayer1Input>
    connectOrCreate?: UserCreateOrConnectWithoutGamesAsPlayer1Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGamesAsPlayer2Input = {
    create?: XOR<UserCreateWithoutGamesAsPlayer2Input, UserUncheckedCreateWithoutGamesAsPlayer2Input>
    connectOrCreate?: UserCreateOrConnectWithoutGamesAsPlayer2Input
    connect?: UserWhereUniqueInput
  }

  export type GameMoveCreateNestedManyWithoutGameInput = {
    create?: XOR<GameMoveCreateWithoutGameInput, GameMoveUncheckedCreateWithoutGameInput> | GameMoveCreateWithoutGameInput[] | GameMoveUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameMoveCreateOrConnectWithoutGameInput | GameMoveCreateOrConnectWithoutGameInput[]
    createMany?: GameMoveCreateManyGameInputEnvelope
    connect?: GameMoveWhereUniqueInput | GameMoveWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutGameInput = {
    create?: XOR<ChatMessageCreateWithoutGameInput, ChatMessageUncheckedCreateWithoutGameInput> | ChatMessageCreateWithoutGameInput[] | ChatMessageUncheckedCreateWithoutGameInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutGameInput | ChatMessageCreateOrConnectWithoutGameInput[]
    createMany?: ChatMessageCreateManyGameInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type GameMoveUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<GameMoveCreateWithoutGameInput, GameMoveUncheckedCreateWithoutGameInput> | GameMoveCreateWithoutGameInput[] | GameMoveUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameMoveCreateOrConnectWithoutGameInput | GameMoveCreateOrConnectWithoutGameInput[]
    createMany?: GameMoveCreateManyGameInputEnvelope
    connect?: GameMoveWhereUniqueInput | GameMoveWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<ChatMessageCreateWithoutGameInput, ChatMessageUncheckedCreateWithoutGameInput> | ChatMessageCreateWithoutGameInput[] | ChatMessageUncheckedCreateWithoutGameInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutGameInput | ChatMessageCreateOrConnectWithoutGameInput[]
    createMany?: ChatMessageCreateManyGameInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type EnumGameTypeFieldUpdateOperationsInput = {
    set?: $Enums.GameType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableEnumAIDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.AIDifficulty | null
  }

  export type EnumGameStatusFieldUpdateOperationsInput = {
    set?: $Enums.GameStatus
  }

  export type NullableEnumGameResultFieldUpdateOperationsInput = {
    set?: $Enums.GameResult | null
  }

  export type UserUpdateOneWithoutGamesAsPlayer1NestedInput = {
    create?: XOR<UserCreateWithoutGamesAsPlayer1Input, UserUncheckedCreateWithoutGamesAsPlayer1Input>
    connectOrCreate?: UserCreateOrConnectWithoutGamesAsPlayer1Input
    upsert?: UserUpsertWithoutGamesAsPlayer1Input
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGamesAsPlayer1Input, UserUpdateWithoutGamesAsPlayer1Input>, UserUncheckedUpdateWithoutGamesAsPlayer1Input>
  }

  export type UserUpdateOneWithoutGamesAsPlayer2NestedInput = {
    create?: XOR<UserCreateWithoutGamesAsPlayer2Input, UserUncheckedCreateWithoutGamesAsPlayer2Input>
    connectOrCreate?: UserCreateOrConnectWithoutGamesAsPlayer2Input
    upsert?: UserUpsertWithoutGamesAsPlayer2Input
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGamesAsPlayer2Input, UserUpdateWithoutGamesAsPlayer2Input>, UserUncheckedUpdateWithoutGamesAsPlayer2Input>
  }

  export type GameMoveUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameMoveCreateWithoutGameInput, GameMoveUncheckedCreateWithoutGameInput> | GameMoveCreateWithoutGameInput[] | GameMoveUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameMoveCreateOrConnectWithoutGameInput | GameMoveCreateOrConnectWithoutGameInput[]
    upsert?: GameMoveUpsertWithWhereUniqueWithoutGameInput | GameMoveUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameMoveCreateManyGameInputEnvelope
    set?: GameMoveWhereUniqueInput | GameMoveWhereUniqueInput[]
    disconnect?: GameMoveWhereUniqueInput | GameMoveWhereUniqueInput[]
    delete?: GameMoveWhereUniqueInput | GameMoveWhereUniqueInput[]
    connect?: GameMoveWhereUniqueInput | GameMoveWhereUniqueInput[]
    update?: GameMoveUpdateWithWhereUniqueWithoutGameInput | GameMoveUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameMoveUpdateManyWithWhereWithoutGameInput | GameMoveUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameMoveScalarWhereInput | GameMoveScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutGameNestedInput = {
    create?: XOR<ChatMessageCreateWithoutGameInput, ChatMessageUncheckedCreateWithoutGameInput> | ChatMessageCreateWithoutGameInput[] | ChatMessageUncheckedCreateWithoutGameInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutGameInput | ChatMessageCreateOrConnectWithoutGameInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutGameInput | ChatMessageUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: ChatMessageCreateManyGameInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutGameInput | ChatMessageUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutGameInput | ChatMessageUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type GameMoveUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameMoveCreateWithoutGameInput, GameMoveUncheckedCreateWithoutGameInput> | GameMoveCreateWithoutGameInput[] | GameMoveUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameMoveCreateOrConnectWithoutGameInput | GameMoveCreateOrConnectWithoutGameInput[]
    upsert?: GameMoveUpsertWithWhereUniqueWithoutGameInput | GameMoveUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameMoveCreateManyGameInputEnvelope
    set?: GameMoveWhereUniqueInput | GameMoveWhereUniqueInput[]
    disconnect?: GameMoveWhereUniqueInput | GameMoveWhereUniqueInput[]
    delete?: GameMoveWhereUniqueInput | GameMoveWhereUniqueInput[]
    connect?: GameMoveWhereUniqueInput | GameMoveWhereUniqueInput[]
    update?: GameMoveUpdateWithWhereUniqueWithoutGameInput | GameMoveUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameMoveUpdateManyWithWhereWithoutGameInput | GameMoveUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameMoveScalarWhereInput | GameMoveScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<ChatMessageCreateWithoutGameInput, ChatMessageUncheckedCreateWithoutGameInput> | ChatMessageCreateWithoutGameInput[] | ChatMessageUncheckedCreateWithoutGameInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutGameInput | ChatMessageCreateOrConnectWithoutGameInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutGameInput | ChatMessageUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: ChatMessageCreateManyGameInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutGameInput | ChatMessageUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutGameInput | ChatMessageUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type GameCreateNestedOneWithoutMovesInput = {
    create?: XOR<GameCreateWithoutMovesInput, GameUncheckedCreateWithoutMovesInput>
    connectOrCreate?: GameCreateOrConnectWithoutMovesInput
    connect?: GameWhereUniqueInput
  }

  export type GameUpdateOneRequiredWithoutMovesNestedInput = {
    create?: XOR<GameCreateWithoutMovesInput, GameUncheckedCreateWithoutMovesInput>
    connectOrCreate?: GameCreateOrConnectWithoutMovesInput
    upsert?: GameUpsertWithoutMovesInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutMovesInput, GameUpdateWithoutMovesInput>, GameUncheckedUpdateWithoutMovesInput>
  }

  export type GameCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<GameCreateWithoutChatMessagesInput, GameUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: GameCreateOrConnectWithoutChatMessagesInput
    connect?: GameWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type GameUpdateOneRequiredWithoutChatMessagesNestedInput = {
    create?: XOR<GameCreateWithoutChatMessagesInput, GameUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: GameCreateOrConnectWithoutChatMessagesInput
    upsert?: GameUpsertWithoutChatMessagesInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutChatMessagesInput, GameUpdateWithoutChatMessagesInput>, GameUncheckedUpdateWithoutChatMessagesInput>
  }

  export type UserUpdateOneWithoutChatMessagesNestedInput = {
    create?: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesInput
    upsert?: UserUpsertWithoutChatMessagesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatMessagesInput, UserUpdateWithoutChatMessagesInput>, UserUncheckedUpdateWithoutChatMessagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.UserLevel | EnumUserLevelFieldRefInput<$PrismaModel>
    in?: $Enums.UserLevel[] | ListEnumUserLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserLevel[] | ListEnumUserLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumUserLevelFilter<$PrismaModel> | $Enums.UserLevel
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumUserLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserLevel | EnumUserLevelFieldRefInput<$PrismaModel>
    in?: $Enums.UserLevel[] | ListEnumUserLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserLevel[] | ListEnumUserLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumUserLevelWithAggregatesFilter<$PrismaModel> | $Enums.UserLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserLevelFilter<$PrismaModel>
    _max?: NestedEnumUserLevelFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumGameTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GameType | EnumGameTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GameType[] | ListEnumGameTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameType[] | ListEnumGameTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGameTypeFilter<$PrismaModel> | $Enums.GameType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAIDifficultyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AIDifficulty | EnumAIDifficultyFieldRefInput<$PrismaModel> | null
    in?: $Enums.AIDifficulty[] | ListEnumAIDifficultyFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AIDifficulty[] | ListEnumAIDifficultyFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAIDifficultyNullableFilter<$PrismaModel> | $Enums.AIDifficulty | null
  }

  export type NestedEnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
  }

  export type NestedEnumGameResultNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.GameResult | EnumGameResultFieldRefInput<$PrismaModel> | null
    in?: $Enums.GameResult[] | ListEnumGameResultFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.GameResult[] | ListEnumGameResultFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGameResultNullableFilter<$PrismaModel> | $Enums.GameResult | null
  }

  export type NestedEnumGameTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameType | EnumGameTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GameType[] | ListEnumGameTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameType[] | ListEnumGameTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGameTypeWithAggregatesFilter<$PrismaModel> | $Enums.GameType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameTypeFilter<$PrismaModel>
    _max?: NestedEnumGameTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAIDifficultyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AIDifficulty | EnumAIDifficultyFieldRefInput<$PrismaModel> | null
    in?: $Enums.AIDifficulty[] | ListEnumAIDifficultyFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AIDifficulty[] | ListEnumAIDifficultyFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAIDifficultyNullableWithAggregatesFilter<$PrismaModel> | $Enums.AIDifficulty | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAIDifficultyNullableFilter<$PrismaModel>
    _max?: NestedEnumAIDifficultyNullableFilter<$PrismaModel>
  }

  export type NestedEnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
  }

  export type NestedEnumGameResultNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameResult | EnumGameResultFieldRefInput<$PrismaModel> | null
    in?: $Enums.GameResult[] | ListEnumGameResultFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.GameResult[] | ListEnumGameResultFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGameResultNullableWithAggregatesFilter<$PrismaModel> | $Enums.GameResult | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGameResultNullableFilter<$PrismaModel>
    _max?: NestedEnumGameResultNullableFilter<$PrismaModel>
  }

  export type GameCreateWithoutPlayer1UserInput = {
    id?: string
    gameType?: $Enums.GameType
    rated?: boolean
    difficulty?: $Enums.AIDifficulty | null
    status?: $Enums.GameStatus
    result?: $Enums.GameResult | null
    winnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    player1GuestName?: string | null
    player2GuestName?: string | null
    player2User?: UserCreateNestedOneWithoutGamesAsPlayer2Input
    moves?: GameMoveCreateNestedManyWithoutGameInput
    chatMessages?: ChatMessageCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutPlayer1UserInput = {
    id?: string
    gameType?: $Enums.GameType
    rated?: boolean
    difficulty?: $Enums.AIDifficulty | null
    status?: $Enums.GameStatus
    result?: $Enums.GameResult | null
    winnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    player2UserId?: string | null
    player1GuestName?: string | null
    player2GuestName?: string | null
    moves?: GameMoveUncheckedCreateNestedManyWithoutGameInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutPlayer1UserInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutPlayer1UserInput, GameUncheckedCreateWithoutPlayer1UserInput>
  }

  export type GameCreateManyPlayer1UserInputEnvelope = {
    data: GameCreateManyPlayer1UserInput | GameCreateManyPlayer1UserInput[]
    skipDuplicates?: boolean
  }

  export type GameCreateWithoutPlayer2UserInput = {
    id?: string
    gameType?: $Enums.GameType
    rated?: boolean
    difficulty?: $Enums.AIDifficulty | null
    status?: $Enums.GameStatus
    result?: $Enums.GameResult | null
    winnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    player1GuestName?: string | null
    player2GuestName?: string | null
    player1User?: UserCreateNestedOneWithoutGamesAsPlayer1Input
    moves?: GameMoveCreateNestedManyWithoutGameInput
    chatMessages?: ChatMessageCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutPlayer2UserInput = {
    id?: string
    gameType?: $Enums.GameType
    rated?: boolean
    difficulty?: $Enums.AIDifficulty | null
    status?: $Enums.GameStatus
    result?: $Enums.GameResult | null
    winnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    player1UserId?: string | null
    player1GuestName?: string | null
    player2GuestName?: string | null
    moves?: GameMoveUncheckedCreateNestedManyWithoutGameInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutPlayer2UserInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutPlayer2UserInput, GameUncheckedCreateWithoutPlayer2UserInput>
  }

  export type GameCreateManyPlayer2UserInputEnvelope = {
    data: GameCreateManyPlayer2UserInput | GameCreateManyPlayer2UserInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageCreateWithoutSenderInput = {
    id?: string
    senderName?: string | null
    message: string
    createdAt?: Date | string
    game: GameCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutSenderInput = {
    id?: string
    gameId: string
    senderName?: string | null
    message: string
    createdAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput>
  }

  export type ChatMessageCreateManySenderInputEnvelope = {
    data: ChatMessageCreateManySenderInput | ChatMessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type GameUpsertWithWhereUniqueWithoutPlayer1UserInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutPlayer1UserInput, GameUncheckedUpdateWithoutPlayer1UserInput>
    create: XOR<GameCreateWithoutPlayer1UserInput, GameUncheckedCreateWithoutPlayer1UserInput>
  }

  export type GameUpdateWithWhereUniqueWithoutPlayer1UserInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutPlayer1UserInput, GameUncheckedUpdateWithoutPlayer1UserInput>
  }

  export type GameUpdateManyWithWhereWithoutPlayer1UserInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutPlayer1UserInput>
  }

  export type GameScalarWhereInput = {
    AND?: GameScalarWhereInput | GameScalarWhereInput[]
    OR?: GameScalarWhereInput[]
    NOT?: GameScalarWhereInput | GameScalarWhereInput[]
    id?: StringFilter<"Game"> | string
    gameType?: EnumGameTypeFilter<"Game"> | $Enums.GameType
    rated?: BoolFilter<"Game"> | boolean
    difficulty?: EnumAIDifficultyNullableFilter<"Game"> | $Enums.AIDifficulty | null
    status?: EnumGameStatusFilter<"Game"> | $Enums.GameStatus
    result?: EnumGameResultNullableFilter<"Game"> | $Enums.GameResult | null
    winnerId?: StringNullableFilter<"Game"> | string | null
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    player1UserId?: StringNullableFilter<"Game"> | string | null
    player2UserId?: StringNullableFilter<"Game"> | string | null
    player1GuestName?: StringNullableFilter<"Game"> | string | null
    player2GuestName?: StringNullableFilter<"Game"> | string | null
  }

  export type GameUpsertWithWhereUniqueWithoutPlayer2UserInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutPlayer2UserInput, GameUncheckedUpdateWithoutPlayer2UserInput>
    create: XOR<GameCreateWithoutPlayer2UserInput, GameUncheckedCreateWithoutPlayer2UserInput>
  }

  export type GameUpdateWithWhereUniqueWithoutPlayer2UserInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutPlayer2UserInput, GameUncheckedUpdateWithoutPlayer2UserInput>
  }

  export type GameUpdateManyWithWhereWithoutPlayer2UserInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutPlayer2UserInput>
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutSenderInput, ChatMessageUncheckedUpdateWithoutSenderInput>
    create: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutSenderInput, ChatMessageUncheckedUpdateWithoutSenderInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutSenderInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    gameId?: StringFilter<"ChatMessage"> | string
    senderId?: StringNullableFilter<"ChatMessage"> | string | null
    senderName?: StringNullableFilter<"ChatMessage"> | string | null
    message?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type UserCreateWithoutGamesAsPlayer1Input = {
    id?: string
    clerkId: string
    username?: string | null
    fullName?: string | null
    email?: string | null
    avatarUrl?: string | null
    eloRating?: number
    wins?: number
    losses?: number
    draws?: number
    gamesPlayed?: number
    level?: $Enums.UserLevel
    createdAt?: Date | string
    gamesAsPlayer2?: GameCreateNestedManyWithoutPlayer2UserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutGamesAsPlayer1Input = {
    id?: string
    clerkId: string
    username?: string | null
    fullName?: string | null
    email?: string | null
    avatarUrl?: string | null
    eloRating?: number
    wins?: number
    losses?: number
    draws?: number
    gamesPlayed?: number
    level?: $Enums.UserLevel
    createdAt?: Date | string
    gamesAsPlayer2?: GameUncheckedCreateNestedManyWithoutPlayer2UserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutGamesAsPlayer1Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGamesAsPlayer1Input, UserUncheckedCreateWithoutGamesAsPlayer1Input>
  }

  export type UserCreateWithoutGamesAsPlayer2Input = {
    id?: string
    clerkId: string
    username?: string | null
    fullName?: string | null
    email?: string | null
    avatarUrl?: string | null
    eloRating?: number
    wins?: number
    losses?: number
    draws?: number
    gamesPlayed?: number
    level?: $Enums.UserLevel
    createdAt?: Date | string
    gamesAsPlayer1?: GameCreateNestedManyWithoutPlayer1UserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutGamesAsPlayer2Input = {
    id?: string
    clerkId: string
    username?: string | null
    fullName?: string | null
    email?: string | null
    avatarUrl?: string | null
    eloRating?: number
    wins?: number
    losses?: number
    draws?: number
    gamesPlayed?: number
    level?: $Enums.UserLevel
    createdAt?: Date | string
    gamesAsPlayer1?: GameUncheckedCreateNestedManyWithoutPlayer1UserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutGamesAsPlayer2Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGamesAsPlayer2Input, UserUncheckedCreateWithoutGamesAsPlayer2Input>
  }

  export type GameMoveCreateWithoutGameInput = {
    id?: string
    move: string
    moveNumber: number
    createdAt?: Date | string
  }

  export type GameMoveUncheckedCreateWithoutGameInput = {
    id?: string
    move: string
    moveNumber: number
    createdAt?: Date | string
  }

  export type GameMoveCreateOrConnectWithoutGameInput = {
    where: GameMoveWhereUniqueInput
    create: XOR<GameMoveCreateWithoutGameInput, GameMoveUncheckedCreateWithoutGameInput>
  }

  export type GameMoveCreateManyGameInputEnvelope = {
    data: GameMoveCreateManyGameInput | GameMoveCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageCreateWithoutGameInput = {
    id?: string
    senderName?: string | null
    message: string
    createdAt?: Date | string
    sender?: UserCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutGameInput = {
    id?: string
    senderId?: string | null
    senderName?: string | null
    message: string
    createdAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutGameInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutGameInput, ChatMessageUncheckedCreateWithoutGameInput>
  }

  export type ChatMessageCreateManyGameInputEnvelope = {
    data: ChatMessageCreateManyGameInput | ChatMessageCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGamesAsPlayer1Input = {
    update: XOR<UserUpdateWithoutGamesAsPlayer1Input, UserUncheckedUpdateWithoutGamesAsPlayer1Input>
    create: XOR<UserCreateWithoutGamesAsPlayer1Input, UserUncheckedCreateWithoutGamesAsPlayer1Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGamesAsPlayer1Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGamesAsPlayer1Input, UserUncheckedUpdateWithoutGamesAsPlayer1Input>
  }

  export type UserUpdateWithoutGamesAsPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eloRating?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    level?: EnumUserLevelFieldUpdateOperationsInput | $Enums.UserLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesAsPlayer2?: GameUpdateManyWithoutPlayer2UserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutGamesAsPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eloRating?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    level?: EnumUserLevelFieldUpdateOperationsInput | $Enums.UserLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesAsPlayer2?: GameUncheckedUpdateManyWithoutPlayer2UserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserUpsertWithoutGamesAsPlayer2Input = {
    update: XOR<UserUpdateWithoutGamesAsPlayer2Input, UserUncheckedUpdateWithoutGamesAsPlayer2Input>
    create: XOR<UserCreateWithoutGamesAsPlayer2Input, UserUncheckedCreateWithoutGamesAsPlayer2Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGamesAsPlayer2Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGamesAsPlayer2Input, UserUncheckedUpdateWithoutGamesAsPlayer2Input>
  }

  export type UserUpdateWithoutGamesAsPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eloRating?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    level?: EnumUserLevelFieldUpdateOperationsInput | $Enums.UserLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesAsPlayer1?: GameUpdateManyWithoutPlayer1UserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutGamesAsPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eloRating?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    level?: EnumUserLevelFieldUpdateOperationsInput | $Enums.UserLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesAsPlayer1?: GameUncheckedUpdateManyWithoutPlayer1UserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type GameMoveUpsertWithWhereUniqueWithoutGameInput = {
    where: GameMoveWhereUniqueInput
    update: XOR<GameMoveUpdateWithoutGameInput, GameMoveUncheckedUpdateWithoutGameInput>
    create: XOR<GameMoveCreateWithoutGameInput, GameMoveUncheckedCreateWithoutGameInput>
  }

  export type GameMoveUpdateWithWhereUniqueWithoutGameInput = {
    where: GameMoveWhereUniqueInput
    data: XOR<GameMoveUpdateWithoutGameInput, GameMoveUncheckedUpdateWithoutGameInput>
  }

  export type GameMoveUpdateManyWithWhereWithoutGameInput = {
    where: GameMoveScalarWhereInput
    data: XOR<GameMoveUpdateManyMutationInput, GameMoveUncheckedUpdateManyWithoutGameInput>
  }

  export type GameMoveScalarWhereInput = {
    AND?: GameMoveScalarWhereInput | GameMoveScalarWhereInput[]
    OR?: GameMoveScalarWhereInput[]
    NOT?: GameMoveScalarWhereInput | GameMoveScalarWhereInput[]
    id?: StringFilter<"GameMove"> | string
    gameId?: StringFilter<"GameMove"> | string
    move?: StringFilter<"GameMove"> | string
    moveNumber?: IntFilter<"GameMove"> | number
    createdAt?: DateTimeFilter<"GameMove"> | Date | string
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutGameInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutGameInput, ChatMessageUncheckedUpdateWithoutGameInput>
    create: XOR<ChatMessageCreateWithoutGameInput, ChatMessageUncheckedCreateWithoutGameInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutGameInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutGameInput, ChatMessageUncheckedUpdateWithoutGameInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutGameInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutGameInput>
  }

  export type GameCreateWithoutMovesInput = {
    id?: string
    gameType?: $Enums.GameType
    rated?: boolean
    difficulty?: $Enums.AIDifficulty | null
    status?: $Enums.GameStatus
    result?: $Enums.GameResult | null
    winnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    player1GuestName?: string | null
    player2GuestName?: string | null
    player1User?: UserCreateNestedOneWithoutGamesAsPlayer1Input
    player2User?: UserCreateNestedOneWithoutGamesAsPlayer2Input
    chatMessages?: ChatMessageCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutMovesInput = {
    id?: string
    gameType?: $Enums.GameType
    rated?: boolean
    difficulty?: $Enums.AIDifficulty | null
    status?: $Enums.GameStatus
    result?: $Enums.GameResult | null
    winnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    player1UserId?: string | null
    player2UserId?: string | null
    player1GuestName?: string | null
    player2GuestName?: string | null
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutMovesInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutMovesInput, GameUncheckedCreateWithoutMovesInput>
  }

  export type GameUpsertWithoutMovesInput = {
    update: XOR<GameUpdateWithoutMovesInput, GameUncheckedUpdateWithoutMovesInput>
    create: XOR<GameCreateWithoutMovesInput, GameUncheckedCreateWithoutMovesInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutMovesInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutMovesInput, GameUncheckedUpdateWithoutMovesInput>
  }

  export type GameUpdateWithoutMovesInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: EnumGameTypeFieldUpdateOperationsInput | $Enums.GameType
    rated?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: NullableEnumAIDifficultyFieldUpdateOperationsInput | $Enums.AIDifficulty | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    result?: NullableEnumGameResultFieldUpdateOperationsInput | $Enums.GameResult | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1GuestName?: NullableStringFieldUpdateOperationsInput | string | null
    player2GuestName?: NullableStringFieldUpdateOperationsInput | string | null
    player1User?: UserUpdateOneWithoutGamesAsPlayer1NestedInput
    player2User?: UserUpdateOneWithoutGamesAsPlayer2NestedInput
    chatMessages?: ChatMessageUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutMovesInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: EnumGameTypeFieldUpdateOperationsInput | $Enums.GameType
    rated?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: NullableEnumAIDifficultyFieldUpdateOperationsInput | $Enums.AIDifficulty | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    result?: NullableEnumGameResultFieldUpdateOperationsInput | $Enums.GameResult | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1UserId?: NullableStringFieldUpdateOperationsInput | string | null
    player2UserId?: NullableStringFieldUpdateOperationsInput | string | null
    player1GuestName?: NullableStringFieldUpdateOperationsInput | string | null
    player2GuestName?: NullableStringFieldUpdateOperationsInput | string | null
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateWithoutChatMessagesInput = {
    id?: string
    gameType?: $Enums.GameType
    rated?: boolean
    difficulty?: $Enums.AIDifficulty | null
    status?: $Enums.GameStatus
    result?: $Enums.GameResult | null
    winnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    player1GuestName?: string | null
    player2GuestName?: string | null
    player1User?: UserCreateNestedOneWithoutGamesAsPlayer1Input
    player2User?: UserCreateNestedOneWithoutGamesAsPlayer2Input
    moves?: GameMoveCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutChatMessagesInput = {
    id?: string
    gameType?: $Enums.GameType
    rated?: boolean
    difficulty?: $Enums.AIDifficulty | null
    status?: $Enums.GameStatus
    result?: $Enums.GameResult | null
    winnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    player1UserId?: string | null
    player2UserId?: string | null
    player1GuestName?: string | null
    player2GuestName?: string | null
    moves?: GameMoveUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutChatMessagesInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutChatMessagesInput, GameUncheckedCreateWithoutChatMessagesInput>
  }

  export type UserCreateWithoutChatMessagesInput = {
    id?: string
    clerkId: string
    username?: string | null
    fullName?: string | null
    email?: string | null
    avatarUrl?: string | null
    eloRating?: number
    wins?: number
    losses?: number
    draws?: number
    gamesPlayed?: number
    level?: $Enums.UserLevel
    createdAt?: Date | string
    gamesAsPlayer1?: GameCreateNestedManyWithoutPlayer1UserInput
    gamesAsPlayer2?: GameCreateNestedManyWithoutPlayer2UserInput
  }

  export type UserUncheckedCreateWithoutChatMessagesInput = {
    id?: string
    clerkId: string
    username?: string | null
    fullName?: string | null
    email?: string | null
    avatarUrl?: string | null
    eloRating?: number
    wins?: number
    losses?: number
    draws?: number
    gamesPlayed?: number
    level?: $Enums.UserLevel
    createdAt?: Date | string
    gamesAsPlayer1?: GameUncheckedCreateNestedManyWithoutPlayer1UserInput
    gamesAsPlayer2?: GameUncheckedCreateNestedManyWithoutPlayer2UserInput
  }

  export type UserCreateOrConnectWithoutChatMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
  }

  export type GameUpsertWithoutChatMessagesInput = {
    update: XOR<GameUpdateWithoutChatMessagesInput, GameUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<GameCreateWithoutChatMessagesInput, GameUncheckedCreateWithoutChatMessagesInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutChatMessagesInput, GameUncheckedUpdateWithoutChatMessagesInput>
  }

  export type GameUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: EnumGameTypeFieldUpdateOperationsInput | $Enums.GameType
    rated?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: NullableEnumAIDifficultyFieldUpdateOperationsInput | $Enums.AIDifficulty | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    result?: NullableEnumGameResultFieldUpdateOperationsInput | $Enums.GameResult | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1GuestName?: NullableStringFieldUpdateOperationsInput | string | null
    player2GuestName?: NullableStringFieldUpdateOperationsInput | string | null
    player1User?: UserUpdateOneWithoutGamesAsPlayer1NestedInput
    player2User?: UserUpdateOneWithoutGamesAsPlayer2NestedInput
    moves?: GameMoveUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: EnumGameTypeFieldUpdateOperationsInput | $Enums.GameType
    rated?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: NullableEnumAIDifficultyFieldUpdateOperationsInput | $Enums.AIDifficulty | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    result?: NullableEnumGameResultFieldUpdateOperationsInput | $Enums.GameResult | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1UserId?: NullableStringFieldUpdateOperationsInput | string | null
    player2UserId?: NullableStringFieldUpdateOperationsInput | string | null
    player1GuestName?: NullableStringFieldUpdateOperationsInput | string | null
    player2GuestName?: NullableStringFieldUpdateOperationsInput | string | null
    moves?: GameMoveUncheckedUpdateManyWithoutGameNestedInput
  }

  export type UserUpsertWithoutChatMessagesInput = {
    update: XOR<UserUpdateWithoutChatMessagesInput, UserUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatMessagesInput, UserUncheckedUpdateWithoutChatMessagesInput>
  }

  export type UserUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eloRating?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    level?: EnumUserLevelFieldUpdateOperationsInput | $Enums.UserLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesAsPlayer1?: GameUpdateManyWithoutPlayer1UserNestedInput
    gamesAsPlayer2?: GameUpdateManyWithoutPlayer2UserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eloRating?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    level?: EnumUserLevelFieldUpdateOperationsInput | $Enums.UserLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesAsPlayer1?: GameUncheckedUpdateManyWithoutPlayer1UserNestedInput
    gamesAsPlayer2?: GameUncheckedUpdateManyWithoutPlayer2UserNestedInput
  }

  export type GameCreateManyPlayer1UserInput = {
    id?: string
    gameType?: $Enums.GameType
    rated?: boolean
    difficulty?: $Enums.AIDifficulty | null
    status?: $Enums.GameStatus
    result?: $Enums.GameResult | null
    winnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    player2UserId?: string | null
    player1GuestName?: string | null
    player2GuestName?: string | null
  }

  export type GameCreateManyPlayer2UserInput = {
    id?: string
    gameType?: $Enums.GameType
    rated?: boolean
    difficulty?: $Enums.AIDifficulty | null
    status?: $Enums.GameStatus
    result?: $Enums.GameResult | null
    winnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    player1UserId?: string | null
    player1GuestName?: string | null
    player2GuestName?: string | null
  }

  export type ChatMessageCreateManySenderInput = {
    id?: string
    gameId: string
    senderName?: string | null
    message: string
    createdAt?: Date | string
  }

  export type GameUpdateWithoutPlayer1UserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: EnumGameTypeFieldUpdateOperationsInput | $Enums.GameType
    rated?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: NullableEnumAIDifficultyFieldUpdateOperationsInput | $Enums.AIDifficulty | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    result?: NullableEnumGameResultFieldUpdateOperationsInput | $Enums.GameResult | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1GuestName?: NullableStringFieldUpdateOperationsInput | string | null
    player2GuestName?: NullableStringFieldUpdateOperationsInput | string | null
    player2User?: UserUpdateOneWithoutGamesAsPlayer2NestedInput
    moves?: GameMoveUpdateManyWithoutGameNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutPlayer1UserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: EnumGameTypeFieldUpdateOperationsInput | $Enums.GameType
    rated?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: NullableEnumAIDifficultyFieldUpdateOperationsInput | $Enums.AIDifficulty | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    result?: NullableEnumGameResultFieldUpdateOperationsInput | $Enums.GameResult | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player2UserId?: NullableStringFieldUpdateOperationsInput | string | null
    player1GuestName?: NullableStringFieldUpdateOperationsInput | string | null
    player2GuestName?: NullableStringFieldUpdateOperationsInput | string | null
    moves?: GameMoveUncheckedUpdateManyWithoutGameNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutPlayer1UserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: EnumGameTypeFieldUpdateOperationsInput | $Enums.GameType
    rated?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: NullableEnumAIDifficultyFieldUpdateOperationsInput | $Enums.AIDifficulty | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    result?: NullableEnumGameResultFieldUpdateOperationsInput | $Enums.GameResult | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player2UserId?: NullableStringFieldUpdateOperationsInput | string | null
    player1GuestName?: NullableStringFieldUpdateOperationsInput | string | null
    player2GuestName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameUpdateWithoutPlayer2UserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: EnumGameTypeFieldUpdateOperationsInput | $Enums.GameType
    rated?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: NullableEnumAIDifficultyFieldUpdateOperationsInput | $Enums.AIDifficulty | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    result?: NullableEnumGameResultFieldUpdateOperationsInput | $Enums.GameResult | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1GuestName?: NullableStringFieldUpdateOperationsInput | string | null
    player2GuestName?: NullableStringFieldUpdateOperationsInput | string | null
    player1User?: UserUpdateOneWithoutGamesAsPlayer1NestedInput
    moves?: GameMoveUpdateManyWithoutGameNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutPlayer2UserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: EnumGameTypeFieldUpdateOperationsInput | $Enums.GameType
    rated?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: NullableEnumAIDifficultyFieldUpdateOperationsInput | $Enums.AIDifficulty | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    result?: NullableEnumGameResultFieldUpdateOperationsInput | $Enums.GameResult | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1UserId?: NullableStringFieldUpdateOperationsInput | string | null
    player1GuestName?: NullableStringFieldUpdateOperationsInput | string | null
    player2GuestName?: NullableStringFieldUpdateOperationsInput | string | null
    moves?: GameMoveUncheckedUpdateManyWithoutGameNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutPlayer2UserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: EnumGameTypeFieldUpdateOperationsInput | $Enums.GameType
    rated?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: NullableEnumAIDifficultyFieldUpdateOperationsInput | $Enums.AIDifficulty | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    result?: NullableEnumGameResultFieldUpdateOperationsInput | $Enums.GameResult | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1UserId?: NullableStringFieldUpdateOperationsInput | string | null
    player1GuestName?: NullableStringFieldUpdateOperationsInput | string | null
    player2GuestName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatMessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameMoveCreateManyGameInput = {
    id?: string
    move: string
    moveNumber: number
    createdAt?: Date | string
  }

  export type ChatMessageCreateManyGameInput = {
    id?: string
    senderId?: string | null
    senderName?: string | null
    message: string
    createdAt?: Date | string
  }

  export type GameMoveUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    move?: StringFieldUpdateOperationsInput | string
    moveNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameMoveUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    move?: StringFieldUpdateOperationsInput | string
    moveNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameMoveUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    move?: StringFieldUpdateOperationsInput | string
    moveNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}