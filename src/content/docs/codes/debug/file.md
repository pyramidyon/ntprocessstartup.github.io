---
title: Debugging with File Operations
description: NtWriteFile Native Application Debugging Method
---

:::note
When executing native applications from the registry `BootExecute`, you can perform file operations anywhere on the system.
:::

## Objectives

- Once our application is free from `NtWaitForSingleObject` initialized by Session Manager, the Windows boot sequence continues, making screen printing impossible. We need an alternative method to debug data after the Windows boot.
- Significant events occur after the Windows boot sequence continues; for instance, the registry hives become accessible almost immediately.
- We aim to debug data from the third user-mode process until the Windows logon screen appears.

## Native File I/O APIs

The file debugging functions I created use the following Native File APIs:

```js
NTSTATUS NtSetInformationFile(...);
NTSTATUS NtCreateFile(...);
NTSTATUS NtWriteFile(...);
NTSTATUS NtClose(...);
```

These methods are part of my Native Template, which you can find here: [Native Application Template](https://github.com/pyramidyon/nativetemplate)

I mention this because our initial execution halts the Windows boot sequence. To continue and persist, we need a method to bypass the halt caused by Windows.