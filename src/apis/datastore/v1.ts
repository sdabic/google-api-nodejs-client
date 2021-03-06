/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {AxiosPromise} from 'axios';
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace datastore_v1 {
  export interface Options extends GlobalOptions { version: 'v1'; }

  /**
   * Cloud Datastore API
   *
   * Accesses the schemaless NoSQL database to provide fully managed, robust,
   * scalable storage for your application.
   *
   * @example
   * const google = require('googleapis');
   * const datastore = google.datastore('v1');
   *
   * @namespace datastore
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Datastore
   */
  export class Datastore {
    _options: GlobalOptions;
    google: GoogleApis;
    root = this;

    projects: Resource$Projects;

    constructor(options: GlobalOptions, google: GoogleApis) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.projects = new Resource$Projects(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * The request for Datastore.AllocateIds.
   */
  export interface Schema$AllocateIdsRequest {
    /**
     * A list of keys with incomplete key paths for which to allocate IDs. No
     * key may be reserved/read-only.
     */
    keys?: Schema$Key[];
  }
  /**
   * The response for Datastore.AllocateIds.
   */
  export interface Schema$AllocateIdsResponse {
    /**
     * The keys specified in the request (in the same order), each with its key
     * path completed with a newly allocated ID.
     */
    keys?: Schema$Key[];
  }
  /**
   * An array value.
   */
  export interface Schema$ArrayValue {
    /**
     * Values in the array. The order of this array may not be preserved if it
     * contains a mix of indexed and unindexed values.
     */
    values?: Schema$Value[];
  }
  /**
   * The request for Datastore.BeginTransaction.
   */
  export interface Schema$BeginTransactionRequest {
    /**
     * Options for a new transaction.
     */
    transactionOptions?: Schema$TransactionOptions;
  }
  /**
   * The response for Datastore.BeginTransaction.
   */
  export interface Schema$BeginTransactionResponse {
    /**
     * The transaction identifier (always present).
     */
    transaction?: string;
  }
  /**
   * The request for Datastore.Commit.
   */
  export interface Schema$CommitRequest {
    /**
     * The type of commit to perform. Defaults to `TRANSACTIONAL`.
     */
    mode?: string;
    /**
     * The mutations to perform.  When mode is `TRANSACTIONAL`, mutations
     * affecting a single entity are applied in order. The following sequences
     * of mutations affecting a single entity are not permitted in a single
     * `Commit` request:  - `insert` followed by `insert` - `update` followed by
     * `insert` - `upsert` followed by `insert` - `delete` followed by `update`
     * When mode is `NON_TRANSACTIONAL`, no two mutations may affect a single
     * entity.
     */
    mutations?: Schema$Mutation[];
    /**
     * The identifier of the transaction associated with the commit. A
     * transaction identifier is returned by a call to
     * Datastore.BeginTransaction.
     */
    transaction?: string;
  }
  /**
   * The response for Datastore.Commit.
   */
  export interface Schema$CommitResponse {
    /**
     * The number of index entries updated during the commit, or zero if none
     * were updated.
     */
    indexUpdates?: number;
    /**
     * The result of performing the mutations. The i-th mutation result
     * corresponds to the i-th mutation in the request.
     */
    mutationResults?: Schema$MutationResult[];
  }
  /**
   * A filter that merges multiple other filters using the given operator.
   */
  export interface Schema$CompositeFilter {
    /**
     * The list of filters to combine. Must contain at least one filter.
     */
    filters?: Schema$Filter[];
    /**
     * The operator for combining multiple filters.
     */
    op?: string;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated
   * empty messages in your APIs. A typical example is to use it as the request
   * or the response type of an API method. For instance:      service Foo { rpc
   * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
   * representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * A Datastore data object.  An entity is limited to 1 megabyte when stored.
   * That _roughly_ corresponds to a limit of 1 megabyte for the serialized form
   * of this message.
   */
  export interface Schema$Entity {
    /**
     * The entity&#39;s key.  An entity must have a key, unless otherwise
     * documented (for example, an entity in `Value.entity_value` may have no
     * key). An entity&#39;s kind is its key path&#39;s last element&#39;s kind,
     * or null if it has no key.
     */
    key?: Schema$Key;
    /**
     * The entity&#39;s properties. The map&#39;s keys are property names. A
     * property name matching regex `__.*__` is reserved. A reserved property
     * name is forbidden in certain documented contexts. The name must not
     * contain more than 500 characters. The name cannot be `&quot;&quot;`.
     */
    properties?: any;
  }
  /**
   * The result of fetching an entity from Datastore.
   */
  export interface Schema$EntityResult {
    /**
     * A cursor that points to the position after the result entity. Set only
     * when the `EntityResult` is part of a `QueryResultBatch` message.
     */
    cursor?: string;
    /**
     * The resulting entity.
     */
    entity?: Schema$Entity;
    /**
     * The version of the entity, a strictly positive number that monotonically
     * increases with changes to the entity.  This field is set for `FULL`
     * entity results.  For missing entities in `LookupResponse`, this is the
     * version of the snapshot that was used to look up the entity, and it is
     * always set except for eventually consistent reads.
     */
    version?: string;
  }
  /**
   * A holder for any type of filter.
   */
  export interface Schema$Filter {
    /**
     * A composite filter.
     */
    compositeFilter?: Schema$CompositeFilter;
    /**
     * A filter on a property.
     */
    propertyFilter?: Schema$PropertyFilter;
  }
  /**
   * Metadata common to all Datastore Admin operations.
   */
  export interface Schema$GoogleDatastoreAdminV1beta1CommonMetadata {
    /**
     * The time the operation ended, either successfully or otherwise.
     */
    endTime?: string;
    /**
     * The client-assigned labels which were provided when the operation was
     * created. May also include additional labels.
     */
    labels?: any;
    /**
     * The type of the operation. Can be used as a filter in
     * ListOperationsRequest.
     */
    operationType?: string;
    /**
     * The time that work began on the operation.
     */
    startTime?: string;
    /**
     * The current state of the Operation.
     */
    state?: string;
  }
  /**
   * Identifies a subset of entities in a project. This is specified as
   * combinations of kinds and namespaces (either or both of which may be all,
   * as described in the following examples). Example usage:  Entire project:
   * kinds=[], namespace_ids=[]  Kinds Foo and Bar in all namespaces:
   * kinds=[&#39;Foo&#39;, &#39;Bar&#39;], namespace_ids=[]  Kinds Foo and Bar
   * only in the default namespace:   kinds=[&#39;Foo&#39;, &#39;Bar&#39;],
   * namespace_ids=[&#39;&#39;]  Kinds Foo and Bar in both the default and Baz
   * namespaces:   kinds=[&#39;Foo&#39;, &#39;Bar&#39;],
   * namespace_ids=[&#39;&#39;, &#39;Baz&#39;]  The entire Baz namespace:
   * kinds=[], namespace_ids=[&#39;Baz&#39;]
   */
  export interface Schema$GoogleDatastoreAdminV1beta1EntityFilter {
    /**
     * If empty, then this represents all kinds.
     */
    kinds?: string[];
    /**
     * An empty list represents all namespaces. This is the preferred usage for
     * projects that don&#39;t use namespaces.  An empty string element
     * represents the default namespace. This should be used if the project has
     * data in non-default namespaces, but doesn&#39;t want to include them.
     * Each namespace in this list must be unique.
     */
    namespaceIds?: string[];
  }
  /**
   * Metadata for ExportEntities operations.
   */
  export interface Schema$GoogleDatastoreAdminV1beta1ExportEntitiesMetadata {
    /**
     * Metadata common to all Datastore Admin operations.
     */
    common?: Schema$GoogleDatastoreAdminV1beta1CommonMetadata;
    /**
     * Description of which entities are being exported.
     */
    entityFilter?: Schema$GoogleDatastoreAdminV1beta1EntityFilter;
    /**
     * Location for the export metadata and data files. This will be the same
     * value as the
     * google.datastore.admin.v1beta1.ExportEntitiesRequest.output_url_prefix
     * field. The final output location is provided in
     * google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url.
     */
    outputUrlPrefix?: string;
    /**
     * An estimate of the number of bytes processed.
     */
    progressBytes?: Schema$GoogleDatastoreAdminV1beta1Progress;
    /**
     * An estimate of the number of entities processed.
     */
    progressEntities?: Schema$GoogleDatastoreAdminV1beta1Progress;
  }
  /**
   * The response for
   * google.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities.
   */
  export interface Schema$GoogleDatastoreAdminV1beta1ExportEntitiesResponse {
    /**
     * Location of the output metadata file. This can be used to begin an import
     * into Cloud Datastore (this project or another project). See
     * google.datastore.admin.v1beta1.ImportEntitiesRequest.input_url. Only
     * present if the operation completed successfully.
     */
    outputUrl?: string;
  }
  /**
   * Metadata for ImportEntities operations.
   */
  export interface Schema$GoogleDatastoreAdminV1beta1ImportEntitiesMetadata {
    /**
     * Metadata common to all Datastore Admin operations.
     */
    common?: Schema$GoogleDatastoreAdminV1beta1CommonMetadata;
    /**
     * Description of which entities are being imported.
     */
    entityFilter?: Schema$GoogleDatastoreAdminV1beta1EntityFilter;
    /**
     * The location of the import metadata file. This will be the same value as
     * the google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url
     * field.
     */
    inputUrl?: string;
    /**
     * An estimate of the number of bytes processed.
     */
    progressBytes?: Schema$GoogleDatastoreAdminV1beta1Progress;
    /**
     * An estimate of the number of entities processed.
     */
    progressEntities?: Schema$GoogleDatastoreAdminV1beta1Progress;
  }
  /**
   * Measures the progress of a particular metric.
   */
  export interface Schema$GoogleDatastoreAdminV1beta1Progress {
    /**
     * The amount of work that has been completed. Note that this may be greater
     * than work_estimated.
     */
    workCompleted?: string;
    /**
     * An estimate of how much work needs to be performed. May be zero if the
     * work estimate is unavailable.
     */
    workEstimated?: string;
  }
  /**
   * Metadata common to all Datastore Admin operations.
   */
  export interface Schema$GoogleDatastoreAdminV1CommonMetadata {
    /**
     * The time the operation ended, either successfully or otherwise.
     */
    endTime?: string;
    /**
     * The client-assigned labels which were provided when the operation was
     * created. May also include additional labels.
     */
    labels?: any;
    /**
     * The type of the operation. Can be used as a filter in
     * ListOperationsRequest.
     */
    operationType?: string;
    /**
     * The time that work began on the operation.
     */
    startTime?: string;
    /**
     * The current state of the Operation.
     */
    state?: string;
  }
  /**
   * Identifies a subset of entities in a project. This is specified as
   * combinations of kinds and namespaces (either or both of which may be all,
   * as described in the following examples). Example usage:  Entire project:
   * kinds=[], namespace_ids=[]  Kinds Foo and Bar in all namespaces:
   * kinds=[&#39;Foo&#39;, &#39;Bar&#39;], namespace_ids=[]  Kinds Foo and Bar
   * only in the default namespace:   kinds=[&#39;Foo&#39;, &#39;Bar&#39;],
   * namespace_ids=[&#39;&#39;]  Kinds Foo and Bar in both the default and Baz
   * namespaces:   kinds=[&#39;Foo&#39;, &#39;Bar&#39;],
   * namespace_ids=[&#39;&#39;, &#39;Baz&#39;]  The entire Baz namespace:
   * kinds=[], namespace_ids=[&#39;Baz&#39;]
   */
  export interface Schema$GoogleDatastoreAdminV1EntityFilter {
    /**
     * If empty, then this represents all kinds.
     */
    kinds?: string[];
    /**
     * An empty list represents all namespaces. This is the preferred usage for
     * projects that don&#39;t use namespaces.  An empty string element
     * represents the default namespace. This should be used if the project has
     * data in non-default namespaces, but doesn&#39;t want to include them.
     * Each namespace in this list must be unique.
     */
    namespaceIds?: string[];
  }
  /**
   * Metadata for ExportEntities operations.
   */
  export interface Schema$GoogleDatastoreAdminV1ExportEntitiesMetadata {
    /**
     * Metadata common to all Datastore Admin operations.
     */
    common?: Schema$GoogleDatastoreAdminV1CommonMetadata;
    /**
     * Description of which entities are being exported.
     */
    entityFilter?: Schema$GoogleDatastoreAdminV1EntityFilter;
    /**
     * Location for the export metadata and data files. This will be the same
     * value as the
     * google.datastore.admin.v1.ExportEntitiesRequest.output_url_prefix field.
     * The final output location is provided in
     * google.datastore.admin.v1.ExportEntitiesResponse.output_url.
     */
    outputUrlPrefix?: string;
    /**
     * An estimate of the number of bytes processed.
     */
    progressBytes?: Schema$GoogleDatastoreAdminV1Progress;
    /**
     * An estimate of the number of entities processed.
     */
    progressEntities?: Schema$GoogleDatastoreAdminV1Progress;
  }
  /**
   * The request for google.datastore.admin.v1.DatastoreAdmin.ExportEntities.
   */
  export interface Schema$GoogleDatastoreAdminV1ExportEntitiesRequest {
    /**
     * Description of what data from the project is included in the export.
     */
    entityFilter?: Schema$GoogleDatastoreAdminV1EntityFilter;
    /**
     * Client-assigned labels.
     */
    labels?: any;
    /**
     * Location for the export metadata and data files.  The full resource URL
     * of the external storage location. Currently, only Google Cloud Storage is
     * supported. So output_url_prefix should be of the form:
     * `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the name of
     * the Cloud Storage bucket and `NAMESPACE_PATH` is an optional Cloud
     * Storage namespace path (this is not a Cloud Datastore namespace). For
     * more information about Cloud Storage namespace paths, see [Object name
     * considerations](https://cloud.google.com/storage/docs/naming#object-considerations).
     * The resulting files will be nested deeper than the specified URL prefix.
     * The final output URL will be provided in the
     * google.datastore.admin.v1.ExportEntitiesResponse.output_url field. That
     * value should be used for subsequent ImportEntities operations.  By
     * nesting the data files deeper, the same Cloud Storage bucket can be used
     * in multiple ExportEntities operations without conflict.
     */
    outputUrlPrefix?: string;
  }
  /**
   * The response for google.datastore.admin.v1.DatastoreAdmin.ExportEntities.
   */
  export interface Schema$GoogleDatastoreAdminV1ExportEntitiesResponse {
    /**
     * Location of the output metadata file. This can be used to begin an import
     * into Cloud Datastore (this project or another project). See
     * google.datastore.admin.v1.ImportEntitiesRequest.input_url. Only present
     * if the operation completed successfully.
     */
    outputUrl?: string;
  }
  /**
   * Metadata for ImportEntities operations.
   */
  export interface Schema$GoogleDatastoreAdminV1ImportEntitiesMetadata {
    /**
     * Metadata common to all Datastore Admin operations.
     */
    common?: Schema$GoogleDatastoreAdminV1CommonMetadata;
    /**
     * Description of which entities are being imported.
     */
    entityFilter?: Schema$GoogleDatastoreAdminV1EntityFilter;
    /**
     * The location of the import metadata file. This will be the same value as
     * the google.datastore.admin.v1.ExportEntitiesResponse.output_url field.
     */
    inputUrl?: string;
    /**
     * An estimate of the number of bytes processed.
     */
    progressBytes?: Schema$GoogleDatastoreAdminV1Progress;
    /**
     * An estimate of the number of entities processed.
     */
    progressEntities?: Schema$GoogleDatastoreAdminV1Progress;
  }
  /**
   * The request for google.datastore.admin.v1.DatastoreAdmin.ImportEntities.
   */
  export interface Schema$GoogleDatastoreAdminV1ImportEntitiesRequest {
    /**
     * Optionally specify which kinds/namespaces are to be imported. If
     * provided, the list must be a subset of the EntityFilter used in creating
     * the export, otherwise a FAILED_PRECONDITION error will be returned. If no
     * filter is specified then all entities from the export are imported.
     */
    entityFilter?: Schema$GoogleDatastoreAdminV1EntityFilter;
    /**
     * The full resource URL of the external storage location. Currently, only
     * Google Cloud Storage is supported. So input_url should be of the form:
     * `gs://BUCKET_NAME[/NAMESPACE_PATH]/OVERALL_EXPORT_METADATA_FILE`, where
     * `BUCKET_NAME` is the name of the Cloud Storage bucket, `NAMESPACE_PATH`
     * is an optional Cloud Storage namespace path (this is not a Cloud
     * Datastore namespace), and `OVERALL_EXPORT_METADATA_FILE` is the metadata
     * file written by the ExportEntities operation. For more information about
     * Cloud Storage namespace paths, see [Object name
     * considerations](https://cloud.google.com/storage/docs/naming#object-considerations).
     * For more information, see
     * google.datastore.admin.v1.ExportEntitiesResponse.output_url.
     */
    inputUrl?: string;
    /**
     * Client-assigned labels.
     */
    labels?: any;
  }
  /**
   * Measures the progress of a particular metric.
   */
  export interface Schema$GoogleDatastoreAdminV1Progress {
    /**
     * The amount of work that has been completed. Note that this may be greater
     * than work_estimated.
     */
    workCompleted?: string;
    /**
     * An estimate of how much work needs to be performed. May be zero if the
     * work estimate is unavailable.
     */
    workEstimated?: string;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$GoogleLongrunningListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$GoogleLongrunningOperation[];
  }
  /**
   * This resource represents a long-running operation that is the result of a
   * network API call.
   */
  export interface Schema$GoogleLongrunningOperation {
    /**
     * If the value is `false`, it means the operation is still in progress. If
     * `true`, the operation is completed, and either `error` or `response` is
     * available.
     */
    done?: boolean;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Service-specific metadata associated with the operation.  It typically
     * contains progress information and common metadata such as create time.
     * Some services might not provide such metadata.  Any method that returns a
     * long-running operation should document the metadata type, if any.
     */
    metadata?: any;
    /**
     * The server-assigned name, which is only unique within the same service
     * that originally returns it. If you use the default HTTP mapping, the
     * `name` should have the format of `operations/some/unique/name`.
     */
    name?: string;
    /**
     * The normal response of the operation in case of success.  If the original
     * method returns no data on success, such as `Delete`, the response is
     * `google.protobuf.Empty`.  If the original method is standard
     * `Get`/`Create`/`Update`, the response should be the resource.  For other
     * methods, the response should have the type `XxxResponse`, where `Xxx` is
     * the original method name.  For example, if the original method name is
     * `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: any;
  }
  /**
   * A [GQL
   * query](https://cloud.google.com/datastore/docs/apis/gql/gql_reference).
   */
  export interface Schema$GqlQuery {
    /**
     * When false, the query string must not contain any literals and instead
     * must bind all values. For example, `SELECT * FROM Kind WHERE a =
     * &#39;string literal&#39;` is not allowed, while `SELECT * FROM Kind WHERE
     * a = @value` is.
     */
    allowLiterals?: boolean;
    /**
     * For each non-reserved named binding site in the query string, there must
     * be a named parameter with that name, but not necessarily the inverse. Key
     * must match regex `A-Za-z_$*`, must not match regex `__.*__`, and must not
     * be `&quot;&quot;`.
     */
    namedBindings?: any;
    /**
     * Numbered binding site @1 references the first numbered parameter,
     * effectively using 1-based indexing, rather than the usual 0.  For each
     * binding site numbered i in `query_string`, there must be an i-th numbered
     * parameter. The inverse must also be true.
     */
    positionalBindings?: Schema$GqlQueryParameter[];
    /**
     * A string of the format described
     * [here](https://cloud.google.com/datastore/docs/apis/gql/gql_reference).
     */
    queryString?: string;
  }
  /**
   * A binding parameter for a GQL query.
   */
  export interface Schema$GqlQueryParameter {
    /**
     * A query cursor. Query cursors are returned in query result batches.
     */
    cursor?: string;
    /**
     * A value parameter.
     */
    value?: Schema$Value;
  }
  /**
   * A unique identifier for an entity. If a key&#39;s partition ID or any of
   * its path kinds or names are reserved/read-only, the key is
   * reserved/read-only. A reserved/read-only key is forbidden in certain
   * documented contexts.
   */
  export interface Schema$Key {
    /**
     * Entities are partitioned into subsets, currently identified by a project
     * ID and namespace ID. Queries are scoped to a single partition.
     */
    partitionId?: Schema$PartitionId;
    /**
     * The entity path. An entity path consists of one or more elements composed
     * of a kind and a string or numerical identifier, which identify entities.
     * The first element identifies a _root entity_, the second element
     * identifies a _child_ of the root entity, the third element identifies a
     * child of the second entity, and so forth. The entities identified by all
     * prefixes of the path are called the element&#39;s _ancestors_.  An entity
     * path is always fully complete: *all* of the entity&#39;s ancestors are
     * required to be in the path along with the entity identifier itself. The
     * only exception is that in some documented cases, the identifier in the
     * last path element (for the entity) itself may be omitted. For example,
     * the last path element of the key of `Mutation.insert` may have no
     * identifier.  A path can never be empty, and a path can have at most 100
     * elements.
     */
    path?: Schema$PathElement[];
  }
  /**
   * A representation of a kind.
   */
  export interface Schema$KindExpression {
    /**
     * The name of the kind.
     */
    name?: string;
  }
  /**
   * An object representing a latitude/longitude pair. This is expressed as a
   * pair of doubles representing degrees latitude and degrees longitude. Unless
   * specified otherwise, this must conform to the &lt;a
   * href=&quot;http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf&quot;&gt;WGS84
   * standard&lt;/a&gt;. Values must be within normalized ranges.
   */
  export interface Schema$LatLng {
    /**
     * The latitude in degrees. It must be in the range [-90.0, +90.0].
     */
    latitude?: number;
    /**
     * The longitude in degrees. It must be in the range [-180.0, +180.0].
     */
    longitude?: number;
  }
  /**
   * The request for Datastore.Lookup.
   */
  export interface Schema$LookupRequest {
    /**
     * Keys of entities to look up.
     */
    keys?: Schema$Key[];
    /**
     * The options for this lookup request.
     */
    readOptions?: Schema$ReadOptions;
  }
  /**
   * The response for Datastore.Lookup.
   */
  export interface Schema$LookupResponse {
    /**
     * A list of keys that were not looked up due to resource constraints. The
     * order of results in this field is undefined and has no relation to the
     * order of the keys in the input.
     */
    deferred?: Schema$Key[];
    /**
     * Entities found as `ResultType.FULL` entities. The order of results in
     * this field is undefined and has no relation to the order of the keys in
     * the input.
     */
    found?: Schema$EntityResult[];
    /**
     * Entities not found as `ResultType.KEY_ONLY` entities. The order of
     * results in this field is undefined and has no relation to the order of
     * the keys in the input.
     */
    missing?: Schema$EntityResult[];
  }
  /**
   * A mutation to apply to an entity.
   */
  export interface Schema$Mutation {
    /**
     * The version of the entity that this mutation is being applied to. If this
     * does not match the current version on the server, the mutation conflicts.
     */
    baseVersion?: string;
    /**
     * The key of the entity to delete. The entity may or may not already exist.
     * Must have a complete key path and must not be reserved/read-only.
     */
    delete?: Schema$Key;
    /**
     * The entity to insert. The entity must not already exist. The entity
     * key&#39;s final path element may be incomplete.
     */
    insert?: Schema$Entity;
    /**
     * The entity to update. The entity must already exist. Must have a complete
     * key path.
     */
    update?: Schema$Entity;
    /**
     * The entity to upsert. The entity may or may not already exist. The entity
     * key&#39;s final path element may be incomplete.
     */
    upsert?: Schema$Entity;
  }
  /**
   * The result of applying a mutation.
   */
  export interface Schema$MutationResult {
    /**
     * Whether a conflict was detected for this mutation. Always false when a
     * conflict detection strategy field is not set in the mutation.
     */
    conflictDetected?: boolean;
    /**
     * The automatically allocated key. Set only when the mutation allocated a
     * key.
     */
    key?: Schema$Key;
    /**
     * The version of the entity on the server after processing the mutation. If
     * the mutation doesn&#39;t change anything on the server, then the version
     * will be the version of the current entity or, if no entity is present, a
     * version that is strictly greater than the version of any previous entity
     * and less than the version of any possible future entity.
     */
    version?: string;
  }
  /**
   * A partition ID identifies a grouping of entities. The grouping is always by
   * project and namespace, however the namespace ID may be empty.  A partition
   * ID contains several dimensions: project ID and namespace ID.  Partition
   * dimensions:  - May be `&quot;&quot;`. - Must be valid UTF-8 bytes. - Must
   * have values that match regex `[A-Za-z\d\.\-_]{1,100}` If the value of any
   * dimension matches regex `__.*__`, the partition is reserved/read-only. A
   * reserved/read-only partition ID is forbidden in certain documented
   * contexts.  Foreign partition IDs (in which the project ID does not match
   * the context project ID ) are discouraged. Reads and writes of foreign
   * partition IDs may fail if the project is not in an active state.
   */
  export interface Schema$PartitionId {
    /**
     * If not empty, the ID of the namespace to which the entities belong.
     */
    namespaceId?: string;
    /**
     * The ID of the project to which the entities belong.
     */
    projectId?: string;
  }
  /**
   * A (kind, ID/name) pair used to construct a key path.  If either name or ID
   * is set, the element is complete. If neither is set, the element is
   * incomplete.
   */
  export interface Schema$PathElement {
    /**
     * The auto-allocated ID of the entity. Never equal to zero. Values less
     * than zero are discouraged and may not be supported in the future.
     */
    id?: string;
    /**
     * The kind of the entity. A kind matching regex `__.*__` is
     * reserved/read-only. A kind must not contain more than 1500 bytes when
     * UTF-8 encoded. Cannot be `&quot;&quot;`.
     */
    kind?: string;
    /**
     * The name of the entity. A name matching regex `__.*__` is
     * reserved/read-only. A name must not be more than 1500 bytes when UTF-8
     * encoded. Cannot be `&quot;&quot;`.
     */
    name?: string;
  }
  /**
   * A representation of a property in a projection.
   */
  export interface Schema$Projection {
    /**
     * The property to project.
     */
    property?: Schema$PropertyReference;
  }
  /**
   * A filter on a specific property.
   */
  export interface Schema$PropertyFilter {
    /**
     * The operator to filter by.
     */
    op?: string;
    /**
     * The property to filter by.
     */
    property?: Schema$PropertyReference;
    /**
     * The value to compare the property to.
     */
    value?: Schema$Value;
  }
  /**
   * The desired order for a specific property.
   */
  export interface Schema$PropertyOrder {
    /**
     * The direction to order by. Defaults to `ASCENDING`.
     */
    direction?: string;
    /**
     * The property to order by.
     */
    property?: Schema$PropertyReference;
  }
  /**
   * A reference to a property relative to the kind expressions.
   */
  export interface Schema$PropertyReference {
    /**
     * The name of the property. If name includes &quot;.&quot;s, it may be
     * interpreted as a property name path.
     */
    name?: string;
  }
  /**
   * A query for entities.
   */
  export interface Schema$Query {
    /**
     * The properties to make distinct. The query results will contain the first
     * result for each distinct combination of values for the given properties
     * (if empty, all results are returned).
     */
    distinctOn?: Schema$PropertyReference[];
    /**
     * An ending point for the query results. Query cursors are returned in
     * query result batches and [can only be used to limit the same
     * query](https://cloud.google.com/datastore/docs/concepts/queries#cursors_limits_and_offsets).
     */
    endCursor?: string;
    /**
     * The filter to apply.
     */
    filter?: Schema$Filter;
    /**
     * The kinds to query (if empty, returns entities of all kinds). Currently
     * at most 1 kind may be specified.
     */
    kind?: Schema$KindExpression[];
    /**
     * The maximum number of results to return. Applies after all other
     * constraints. Optional. Unspecified is interpreted as no limit. Must be
     * &gt;= 0 if specified.
     */
    limit?: number;
    /**
     * The number of results to skip. Applies before limit, but after all other
     * constraints. Optional. Must be &gt;= 0 if specified.
     */
    offset?: number;
    /**
     * The order to apply to the query results (if empty, order is unspecified).
     */
    order?: Schema$PropertyOrder[];
    /**
     * The projection to return. Defaults to returning all properties.
     */
    projection?: Schema$Projection[];
    /**
     * A starting point for the query results. Query cursors are returned in
     * query result batches and [can only be used to continue the same
     * query](https://cloud.google.com/datastore/docs/concepts/queries#cursors_limits_and_offsets).
     */
    startCursor?: string;
  }
  /**
   * A batch of results produced by a query.
   */
  export interface Schema$QueryResultBatch {
    /**
     * A cursor that points to the position after the last result in the batch.
     */
    endCursor?: string;
    /**
     * The results for this batch.
     */
    entityResults?: Schema$EntityResult[];
    /**
     * The result type for every entity in `entity_results`.
     */
    entityResultType?: string;
    /**
     * The state of the query after the current batch.
     */
    moreResults?: string;
    /**
     * A cursor that points to the position after the last skipped result. Will
     * be set when `skipped_results` != 0.
     */
    skippedCursor?: string;
    /**
     * The number of results skipped, typically because of an offset.
     */
    skippedResults?: number;
    /**
     * The version number of the snapshot this batch was returned from. This
     * applies to the range of results from the query&#39;s `start_cursor` (or
     * the beginning of the query if no cursor was given) to this batch&#39;s
     * `end_cursor` (not the query&#39;s `end_cursor`).  In a single
     * transaction, subsequent query result batches for the same query can have
     * a greater snapshot version number. Each batch&#39;s snapshot version is
     * valid for all preceding batches. The value will be zero for eventually
     * consistent queries.
     */
    snapshotVersion?: string;
  }
  /**
   * Options specific to read-only transactions.
   */
  export interface Schema$ReadOnly {}
  /**
   * The options shared by read requests.
   */
  export interface Schema$ReadOptions {
    /**
     * The non-transactional read consistency to use. Cannot be set to `STRONG`
     * for global queries.
     */
    readConsistency?: string;
    /**
     * The identifier of the transaction in which to read. A transaction
     * identifier is returned by a call to Datastore.BeginTransaction.
     */
    transaction?: string;
  }
  /**
   * Options specific to read / write transactions.
   */
  export interface Schema$ReadWrite {
    /**
     * The transaction identifier of the transaction being retried.
     */
    previousTransaction?: string;
  }
  /**
   * The request for Datastore.ReserveIds.
   */
  export interface Schema$ReserveIdsRequest {
    /**
     * If not empty, the ID of the database against which to make the request.
     */
    databaseId?: string;
    /**
     * A list of keys with complete key paths whose numeric IDs should not be
     * auto-allocated.
     */
    keys?: Schema$Key[];
  }
  /**
   * The response for Datastore.ReserveIds.
   */
  export interface Schema$ReserveIdsResponse {}
  /**
   * The request for Datastore.Rollback.
   */
  export interface Schema$RollbackRequest {
    /**
     * The transaction identifier, returned by a call to
     * Datastore.BeginTransaction.
     */
    transaction?: string;
  }
  /**
   * The response for Datastore.Rollback. (an empty message).
   */
  export interface Schema$RollbackResponse {}
  /**
   * The request for Datastore.RunQuery.
   */
  export interface Schema$RunQueryRequest {
    /**
     * The GQL query to run.
     */
    gqlQuery?: Schema$GqlQuery;
    /**
     * Entities are partitioned into subsets, identified by a partition ID.
     * Queries are scoped to a single partition. This partition ID is normalized
     * with the standard default context partition ID.
     */
    partitionId?: Schema$PartitionId;
    /**
     * The query to run.
     */
    query?: Schema$Query;
    /**
     * The options for this query.
     */
    readOptions?: Schema$ReadOptions;
  }
  /**
   * The response for Datastore.RunQuery.
   */
  export interface Schema$RunQueryResponse {
    /**
     * A batch of query results (always present).
     */
    batch?: Schema$QueryResultBatch;
    /**
     * The parsed form of the `GqlQuery` from the request, if it was set.
     */
    query?: Schema$Query;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for
   * different programming environments, including REST APIs and RPC APIs. It is
   * used by [gRPC](https://github.com/grpc). The error model is designed to be:
   * - Simple to use and understand for most users - Flexible enough to meet
   * unexpected needs  # Overview  The `Status` message contains three pieces of
   * data: error code, error message, and error details. The error code should
   * be an enum value of google.rpc.Code, but it may accept additional error
   * codes if needed.  The error message should be a developer-facing English
   * message that helps developers *understand* and *resolve* the error. If a
   * localized user-facing error message is needed, put the localized message in
   * the error details or localize it in the client. The optional error details
   * may contain arbitrary information about the error. There is a predefined
   * set of error detail types in the package `google.rpc` that can be used for
   * common error conditions.  # Language mapping  The `Status` message is the
   * logical representation of the error model, but it is not necessarily the
   * actual wire format. When the `Status` message is exposed in different
   * client libraries and different wire protocols, it can be mapped
   * differently. For example, it will likely be mapped to some exceptions in
   * Java, but more likely mapped to some error codes in C.  # Other uses  The
   * error model and the `Status` message can be used in a variety of
   * environments, either with or without APIs, to provide a consistent
   * developer experience across different environments.  Example uses of this
   * error model include:  - Partial errors. If a service needs to return
   * partial errors to the client,     it may embed the `Status` in the normal
   * response to indicate the partial     errors.  - Workflow errors. A typical
   * workflow has multiple steps. Each step may     have a `Status` message for
   * error reporting.  - Batch operations. If a client uses batch request and
   * batch response, the     `Status` message should be used directly inside
   * batch response, one for     each error sub-response.  - Asynchronous
   * operations. If an API call embeds asynchronous operation     results in its
   * response, the status of those operations should be     represented directly
   * using the `Status` message.  - Logging. If some API errors are stored in
   * logs, the message `Status` could     be used directly after any stripping
   * needed for security/privacy reasons.
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;
    /**
     * A list of messages that carry the error details.  There is a common set
     * of message types for APIs to use.
     */
    details?: any[];
    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }
  /**
   * Options for beginning a new transaction.  Transactions can be created
   * explicitly with calls to Datastore.BeginTransaction or implicitly by
   * setting ReadOptions.new_transaction in read requests.
   */
  export interface Schema$TransactionOptions {
    /**
     * The transaction should only allow reads.
     */
    readOnly?: Schema$ReadOnly;
    /**
     * The transaction should allow both reads and writes.
     */
    readWrite?: Schema$ReadWrite;
  }
  /**
   * A message that can hold any of the supported value types and associated
   * metadata.
   */
  export interface Schema$Value {
    /**
     * An array value. Cannot contain another array value. A `Value` instance
     * that sets field `array_value` must not set fields `meaning` or
     * `exclude_from_indexes`.
     */
    arrayValue?: Schema$ArrayValue;
    /**
     * A blob value. May have at most 1,000,000 bytes. When
     * `exclude_from_indexes` is false, may have at most 1500 bytes. In JSON
     * requests, must be base64-encoded.
     */
    blobValue?: string;
    /**
     * A boolean value.
     */
    booleanValue?: boolean;
    /**
     * A double value.
     */
    doubleValue?: number;
    /**
     * An entity value.  - May have no key. - May have a key with an incomplete
     * key path. - May have a reserved/read-only key.
     */
    entityValue?: Schema$Entity;
    /**
     * If the value should be excluded from all indexes including those defined
     * explicitly.
     */
    excludeFromIndexes?: boolean;
    /**
     * A geo point value representing a point on the surface of Earth.
     */
    geoPointValue?: Schema$LatLng;
    /**
     * An integer value.
     */
    integerValue?: string;
    /**
     * A key value.
     */
    keyValue?: Schema$Key;
    /**
     * The `meaning` field should only be populated for backwards compatibility.
     */
    meaning?: number;
    /**
     * A null value.
     */
    nullValue?: string;
    /**
     * A UTF-8 encoded string value. When `exclude_from_indexes` is false (it is
     * indexed) , may have at most 1500 bytes. Otherwise, may be set to at least
     * 1,000,000 bytes.
     */
    stringValue?: string;
    /**
     * A timestamp value. When stored in the Datastore, precise only to
     * microseconds; any additional precision is rounded down.
     */
    timestampValue?: string;
  }


  export class Resource$Projects {
    root: Datastore;
    operations: Resource$Projects$Operations;
    constructor(root: Datastore) {
      this.root = root;
      this.getRoot.bind(this);
      this.operations = new Resource$Projects$Operations(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * datastore.projects.allocateIds
     * @desc Allocates IDs for the given keys, which is useful for referencing
     * an entity before it is inserted.
     * @alias datastore.projects.allocateIds
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The ID of the project against which to make the request.
     * @param {().AllocateIdsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    allocateIds(
        params?: Params$Resource$Projects$Allocateids,
        options?: MethodOptions): AxiosPromise<Schema$AllocateIdsResponse>;
    allocateIds(
        params: Params$Resource$Projects$Allocateids,
        options: MethodOptions|BodyResponseCallback<Schema$AllocateIdsResponse>,
        callback: BodyResponseCallback<Schema$AllocateIdsResponse>): void;
    allocateIds(
        params: Params$Resource$Projects$Allocateids,
        callback: BodyResponseCallback<Schema$AllocateIdsResponse>): void;
    allocateIds(callback: BodyResponseCallback<Schema$AllocateIdsResponse>):
        void;
    allocateIds(
        paramsOrCallback?: Params$Resource$Projects$Allocateids|
        BodyResponseCallback<Schema$AllocateIdsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AllocateIdsResponse>,
        callback?: BodyResponseCallback<Schema$AllocateIdsResponse>):
        void|AxiosPromise<Schema$AllocateIdsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Allocateids;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Allocateids;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/projects/{projectId}:allocateIds')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$AllocateIdsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AllocateIdsResponse>(parameters);
      }
    }


    /**
     * datastore.projects.beginTransaction
     * @desc Begins a new transaction.
     * @alias datastore.projects.beginTransaction
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The ID of the project against which to make the request.
     * @param {().BeginTransactionRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    beginTransaction(
        params?: Params$Resource$Projects$Begintransaction,
        options?: MethodOptions): AxiosPromise<Schema$BeginTransactionResponse>;
    beginTransaction(
        params: Params$Resource$Projects$Begintransaction,
        options: MethodOptions|
        BodyResponseCallback<Schema$BeginTransactionResponse>,
        callback: BodyResponseCallback<Schema$BeginTransactionResponse>): void;
    beginTransaction(
        params: Params$Resource$Projects$Begintransaction,
        callback: BodyResponseCallback<Schema$BeginTransactionResponse>): void;
    beginTransaction(
        callback: BodyResponseCallback<Schema$BeginTransactionResponse>): void;
    beginTransaction(
        paramsOrCallback?: Params$Resource$Projects$Begintransaction|
        BodyResponseCallback<Schema$BeginTransactionResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$BeginTransactionResponse>,
        callback?: BodyResponseCallback<Schema$BeginTransactionResponse>):
        void|AxiosPromise<Schema$BeginTransactionResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Begintransaction;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Begintransaction;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/projects/{projectId}:beginTransaction')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$BeginTransactionResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$BeginTransactionResponse>(parameters);
      }
    }


    /**
     * datastore.projects.commit
     * @desc Commits a transaction, optionally creating, deleting or modifying
     * some entities.
     * @alias datastore.projects.commit
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The ID of the project against which to make the request.
     * @param {().CommitRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    commit(params?: Params$Resource$Projects$Commit, options?: MethodOptions):
        AxiosPromise<Schema$CommitResponse>;
    commit(
        params: Params$Resource$Projects$Commit,
        options: MethodOptions|BodyResponseCallback<Schema$CommitResponse>,
        callback: BodyResponseCallback<Schema$CommitResponse>): void;
    commit(
        params: Params$Resource$Projects$Commit,
        callback: BodyResponseCallback<Schema$CommitResponse>): void;
    commit(callback: BodyResponseCallback<Schema$CommitResponse>): void;
    commit(
        paramsOrCallback?: Params$Resource$Projects$Commit|
        BodyResponseCallback<Schema$CommitResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$CommitResponse>,
        callback?: BodyResponseCallback<Schema$CommitResponse>):
        void|AxiosPromise<Schema$CommitResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$Commit;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Commit;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/projects/{projectId}:commit')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$CommitResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CommitResponse>(parameters);
      }
    }


    /**
     * datastore.projects.export
     * @desc Exports a copy of all or a subset of entities from Google Cloud
     * Datastore to another storage system, such as Google Cloud Storage. Recent
     * updates to entities may not be reflected in the export. The export occurs
     * in the background and its progress can be monitored and managed via the
     * Operation resource that is created. The output of an export may only be
     * used once the associated operation is done. If an export operation is
     * cancelled before completion it may leave partial data behind in Google
     * Cloud Storage.
     * @alias datastore.projects.export
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId Project ID against which to make the request.
     * @param {().GoogleDatastoreAdminV1ExportEntitiesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    export(params?: Params$Resource$Projects$Export, options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunningOperation>;
    export(
        params: Params$Resource$Projects$Export,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    export(
        params: Params$Resource$Projects$Export,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    export(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    export(
        paramsOrCallback?: Params$Resource$Projects$Export|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void|AxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$Export;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Export;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/projects/{projectId}:export')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }


    /**
     * datastore.projects.import
     * @desc Imports entities into Google Cloud Datastore. Existing entities
     * with the same key are overwritten. The import occurs in the background
     * and its progress can be monitored and managed via the Operation resource
     * that is created. If an ImportEntities operation is cancelled, it is
     * possible that a subset of the data has already been imported to Cloud
     * Datastore.
     * @alias datastore.projects.import
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId Project ID against which to make the request.
     * @param {().GoogleDatastoreAdminV1ImportEntitiesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
import(params?: Params$Resource$Projects$Import, options?: MethodOptions): AxiosPromise<Schema$GoogleLongrunningOperation>;
import(params: Params$Resource$Projects$Import, options: MethodOptions|BodyResponseCallback<Schema$GoogleLongrunningOperation>, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
import(params: Params$Resource$Projects$Import, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
import(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
import(paramsOrCallback?: Params$Resource$Projects$Import|BodyResponseCallback<Schema$GoogleLongrunningOperation>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$GoogleLongrunningOperation>, callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void|AxiosPromise<Schema$GoogleLongrunningOperation> {let params = (paramsOrCallback || {}) as Params$Resource$Projects$Import; let options = (optionsOrCallback || {}) as MethodOptions;

                                                                                                                                                                                                                                                                                                                                             if(typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Projects$Import;
    options = {};
                                                                                                                                                                                                                                                                                                                                             }

                                                                                                                                                                                                                                                                                                                                             if(typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
                                                                                                                                                                                                                                                                                                                                             }

                                                                                                                                                                                                                                                                                                                                             const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/'; const parameters = {options: Object.assign({url: (rootUrl + '/v1/projects/{projectId}:import').replace(/([^:]\/)\/+/g, '$1'), method: 'POST'}, options), params, requiredParams: ['projectId'], pathParams: ['projectId'], context: this.getRoot()}; if(callback) {
    createAPIRequest<Schema$GoogleLongrunningOperation>(parameters, callback);
                                                                                                                                                                                                                                                                                                                                             } else {
    return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
                                                                                                                                                                                                                                                                                                                                             }}


    /**
 * datastore.projects.lookup
 * @desc Looks up entities by key.
 * @alias datastore.projects.lookup
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.projectId The ID of the project against which to make the request.
      * @param {().LookupRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
    lookup(params?: Params$Resource$Projects$Lookup, options?: MethodOptions): AxiosPromise<Schema$LookupResponse>;
    lookup(
        params: Params$Resource$Projects$Lookup,
        options: MethodOptions|BodyResponseCallback<Schema$LookupResponse>,
        callback: BodyResponseCallback<Schema$LookupResponse>): void;
    lookup(
        params: Params$Resource$Projects$Lookup,
        callback: BodyResponseCallback<Schema$LookupResponse>): void;
    lookup(callback: BodyResponseCallback<Schema$LookupResponse>): void;
    lookup(
        paramsOrCallback?: Params$Resource$Projects$Lookup|
        BodyResponseCallback<Schema$LookupResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$LookupResponse>,
        callback?: BodyResponseCallback<Schema$LookupResponse>):
        void|AxiosPromise<Schema$LookupResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$Lookup;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Lookup;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/projects/{projectId}:lookup')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$LookupResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LookupResponse>(parameters);
      }
    }


    /**
     * datastore.projects.reserveIds
     * @desc Prevents the supplied keys' IDs from being auto-allocated by Cloud
     * Datastore.
     * @alias datastore.projects.reserveIds
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The ID of the project against which to make the request.
     * @param {().ReserveIdsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    reserveIds(
        params?: Params$Resource$Projects$Reserveids,
        options?: MethodOptions): AxiosPromise<Schema$ReserveIdsResponse>;
    reserveIds(
        params: Params$Resource$Projects$Reserveids,
        options: MethodOptions|BodyResponseCallback<Schema$ReserveIdsResponse>,
        callback: BodyResponseCallback<Schema$ReserveIdsResponse>): void;
    reserveIds(
        params: Params$Resource$Projects$Reserveids,
        callback: BodyResponseCallback<Schema$ReserveIdsResponse>): void;
    reserveIds(callback: BodyResponseCallback<Schema$ReserveIdsResponse>): void;
    reserveIds(
        paramsOrCallback?: Params$Resource$Projects$Reserveids|
        BodyResponseCallback<Schema$ReserveIdsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ReserveIdsResponse>,
        callback?: BodyResponseCallback<Schema$ReserveIdsResponse>):
        void|AxiosPromise<Schema$ReserveIdsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Reserveids;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Reserveids;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/projects/{projectId}:reserveIds')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ReserveIdsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ReserveIdsResponse>(parameters);
      }
    }


    /**
     * datastore.projects.rollback
     * @desc Rolls back a transaction.
     * @alias datastore.projects.rollback
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The ID of the project against which to make the request.
     * @param {().RollbackRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    rollback(
        params?: Params$Resource$Projects$Rollback,
        options?: MethodOptions): AxiosPromise<Schema$RollbackResponse>;
    rollback(
        params: Params$Resource$Projects$Rollback,
        options: MethodOptions|BodyResponseCallback<Schema$RollbackResponse>,
        callback: BodyResponseCallback<Schema$RollbackResponse>): void;
    rollback(
        params: Params$Resource$Projects$Rollback,
        callback: BodyResponseCallback<Schema$RollbackResponse>): void;
    rollback(callback: BodyResponseCallback<Schema$RollbackResponse>): void;
    rollback(
        paramsOrCallback?: Params$Resource$Projects$Rollback|
        BodyResponseCallback<Schema$RollbackResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$RollbackResponse>,
        callback?: BodyResponseCallback<Schema$RollbackResponse>):
        void|AxiosPromise<Schema$RollbackResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Rollback;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Rollback;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/projects/{projectId}:rollback')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$RollbackResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RollbackResponse>(parameters);
      }
    }


    /**
     * datastore.projects.runQuery
     * @desc Queries for entities.
     * @alias datastore.projects.runQuery
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The ID of the project against which to make the request.
     * @param {().RunQueryRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    runQuery(
        params?: Params$Resource$Projects$Runquery,
        options?: MethodOptions): AxiosPromise<Schema$RunQueryResponse>;
    runQuery(
        params: Params$Resource$Projects$Runquery,
        options: MethodOptions|BodyResponseCallback<Schema$RunQueryResponse>,
        callback: BodyResponseCallback<Schema$RunQueryResponse>): void;
    runQuery(
        params: Params$Resource$Projects$Runquery,
        callback: BodyResponseCallback<Schema$RunQueryResponse>): void;
    runQuery(callback: BodyResponseCallback<Schema$RunQueryResponse>): void;
    runQuery(
        paramsOrCallback?: Params$Resource$Projects$Runquery|
        BodyResponseCallback<Schema$RunQueryResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$RunQueryResponse>,
        callback?: BodyResponseCallback<Schema$RunQueryResponse>):
        void|AxiosPromise<Schema$RunQueryResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Runquery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Runquery;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/projects/{projectId}:runQuery')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$RunQueryResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RunQueryResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Allocateids {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the project against which to make the request.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AllocateIdsRequest;
  }
  export interface Params$Resource$Projects$Begintransaction {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the project against which to make the request.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BeginTransactionRequest;
  }
  export interface Params$Resource$Projects$Commit {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the project against which to make the request.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CommitRequest;
  }
  export interface Params$Resource$Projects$Export {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Project ID against which to make the request.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleDatastoreAdminV1ExportEntitiesRequest;
  }
  export interface Params$Resource$Projects$Import {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Project ID against which to make the request.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleDatastoreAdminV1ImportEntitiesRequest;
  }
  export interface Params$Resource$Projects$Lookup {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the project against which to make the request.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LookupRequest;
  }
  export interface Params$Resource$Projects$Reserveids {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the project against which to make the request.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReserveIdsRequest;
  }
  export interface Params$Resource$Projects$Rollback {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the project against which to make the request.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RollbackRequest;
  }
  export interface Params$Resource$Projects$Runquery {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the project against which to make the request.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunQueryRequest;
  }

  export class Resource$Projects$Operations {
    root: Datastore;
    constructor(root: Datastore) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * datastore.projects.operations.cancel
     * @desc Starts asynchronous cancellation on a long-running operation.  The
     * server makes a best effort to cancel the operation, but success is not
     * guaranteed.  If the server doesn't support this method, it returns
     * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation
     * or other methods to check whether the cancellation succeeded or whether
     * the operation completed despite cancellation. On successful cancellation,
     * the operation is not deleted; instead, it becomes an operation with an
     * Operation.error value with a google.rpc.Status.code of 1, corresponding
     * to `Code.CANCELLED`.
     * @alias datastore.projects.operations.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be cancelled.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
        params?: Params$Resource$Projects$Operations$Cancel,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    cancel(
        params: Params$Resource$Projects$Operations$Cancel,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
        params: Params$Resource$Projects$Operations$Cancel,
        callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
        paramsOrCallback?: Params$Resource$Projects$Operations$Cancel|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}:cancel')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * datastore.projects.operations.delete
     * @desc Deletes a long-running operation. This method indicates that the
     * client is no longer interested in the operation result. It does not
     * cancel the operation. If the server doesn't support this method, it
     * returns `google.rpc.Code.UNIMPLEMENTED`.
     * @alias datastore.projects.operations.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Operations$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Projects$Operations$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Projects$Operations$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Projects$Operations$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * datastore.projects.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use
     * this method to poll the operation result at intervals as recommended by
     * the API service.
     * @alias datastore.projects.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Operations$Get,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunningOperation>;
    get(params: Params$Resource$Projects$Operations$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    get(params: Params$Resource$Projects$Operations$Get,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    get(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    get(paramsOrCallback?: Params$Resource$Projects$Operations$Get|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void|AxiosPromise<Schema$GoogleLongrunningOperation> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }


    /**
     * datastore.projects.operations.list
     * @desc Lists operations that match the specified filter in the request. If
     * the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE:
     * the `name` binding allows API services to override the binding to use
     * different resource name schemes, such as `users/x/operations`. To
     * override the binding, API services can add a binding such as
     * `"/v1/{name=users/x}/operations"` to their service configuration. For
     * backwards compatibility, the default name includes the operations
     * collection id, however overriding users must ensure the name binding is
     * the parent resource, without the operations collection id.
     * @alias datastore.projects.operations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string} params.name The name of the operation's parent resource.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Operations$List,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
        params: Params$Resource$Projects$Operations$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleLongrunningListOperationsResponse>): void;
    list(
        params: Params$Resource$Projects$Operations$List,
        callback: BodyResponseCallback<
            Schema$GoogleLongrunningListOperationsResponse>): void;
    list(callback: BodyResponseCallback<
         Schema$GoogleLongrunningListOperationsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Operations$List|
        BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleLongrunningListOperationsResponse>):
        void|AxiosPromise<Schema$GoogleLongrunningListOperationsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}/operations')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Operations$Cancel {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Operations$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Operations$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Operations$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }
}
