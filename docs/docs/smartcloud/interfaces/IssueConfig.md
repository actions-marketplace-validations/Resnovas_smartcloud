---
id: "IssueConfig"
title: "Interface: IssueConfig"
sidebar_label: "IssueConfig"
sidebar_position: 0
custom_edit_url: null
---

The issue configuration

## Hierarchy

- [`SharedConfig`](SharedConfig.md)

  ↳ **`IssueConfig`**

## Properties

### assignProject

• `Optional` **assignProject**: [`AssignProject`](internal.AssignProject.md)[]

Assign project configuration.

#### Defined in

[src/contexts/issues.ts:21](https://github.com/Resnovas/smartcloud/blob/b91f5b4/src/contexts/issues.ts#L21)

___

### createBranch

• `Optional` **createBranch**: `Object`

Open branch configuration

#### Index signature

▪ [label: `string`]: [`CreateBranch`](../modules/internal.md#createbranch)

#### Defined in

[src/contexts/issues.ts:25](https://github.com/Resnovas/smartcloud/blob/b91f5b4/src/contexts/issues.ts#L25)

___

### enforceConventions

• `Optional` **enforceConventions**: [`EnforceConventions`](internal.EnforceConventions.md)

The enforceConventions configuration

#### Inherited from

[SharedConfig](SharedConfig.md).[enforceConventions](SharedConfig.md#enforceconventions)

#### Defined in

[src/action.ts:121](https://github.com/Resnovas/smartcloud/blob/b91f5b4/src/action.ts#L121)

___

### labels

• `Optional` **labels**: `Object`

The labels to be applied

#### Index signature

▪ [key: `string`]: [`IssueConditionConfig`](IssueConditionConfig.md) \| [`ProjectConditionConfig`](ProjectConditionConfig.md) \| [`PRConditionConfig`](PRConditionConfig.md) \| [`ScheduleConditionConfig`](ScheduleConditionConfig.md) \| [`SharedConditions`](SharedConditions.md)

#### Inherited from

[SharedConfig](SharedConfig.md).[labels](SharedConfig.md#labels)

#### Defined in

[src/action.ts:129](https://github.com/Resnovas/smartcloud/blob/b91f5b4/src/action.ts#L129)

___

### ref

• `Optional` **ref**: `string`

The reference used internally

#### Inherited from

[SharedConfig](SharedConfig.md).[ref](SharedConfig.md#ref)

#### Defined in

[src/action.ts:117](https://github.com/Resnovas/smartcloud/blob/b91f5b4/src/action.ts#L117)

___

### stale

• `Optional` **stale**: [`Stale`](internal.Stale.md)

The stale configuration

#### Inherited from

[SharedConfig](SharedConfig.md).[stale](SharedConfig.md#stale)

#### Defined in

[src/action.ts:125](https://github.com/Resnovas/smartcloud/blob/b91f5b4/src/action.ts#L125)