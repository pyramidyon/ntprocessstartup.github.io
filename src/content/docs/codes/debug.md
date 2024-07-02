---
title: Debugging
description: Debug Methods for Native Applications
---

Debugging native applications presents unique challenges compared to standard user-mode applications. When running your native application in Visual Studio, you might encounter the following error message:

:::danger
Operation not supported. Unknown Error 0x800700d8
:::

Despite this, several methods can make debugging native applications more manageable. These methods allow you to gather information about your application's behavior and identify issues without relying on typical debugging tools.

### Methods for Debugging Native Applications

#### Logging with NtWriteFile

Logging is an effective way to capture detailed information about your application's execution. By using the `NtWriteFile` function, you can write log entries to a file, allowing you to review the sequence of operations and pinpoint where issues occur. This method is particularly useful for tracking the flow of execution and diagnosing problems that arise during runtime.

Learn more about logging with `NtWriteFile` [here](/codes/debug/file/).

#### Printing Output to the Screen

Another straightforward method for debugging native applications is printing output directly to the screen. This can be done using simple print statements that display variable values and execution points. While less sophisticated than logging, this approach provides immediate feedback and can be invaluable during the initial stages of debugging.

Find out how to implement screen printing for debugging with `NtDisplayString` and `NtDrawText` [here](/codes/debug/print/).

### Kernel Debugger

You can also use a kernel debugger. Although I haven't used it yet, I may explore it in the future. For now, debugging native applications requires different techniques compared to standard user-mode applications. By leveraging methods such as logging with `NtWriteFile` and printing output to the screen, you can effectively troubleshoot and resolve issues in your native applications. These techniques help bridge the gap caused by the lack of support from typical debugging tools, making the debugging process less frustrating and more productive.
