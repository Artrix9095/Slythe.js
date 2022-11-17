# Planning

## The plans

- Gateway & Rest _(We are going to call it GR)_
- REST
- Gateway

So, before you can make your bot, you need to pick out of one of the plans listed above

Before you can pick a plan, you need to consider the following factors:

1. Does my bot need real time data _(e.g: messages, reaction events etc)_
2. Does my bot need application commands

Lets say you're making a message logger bot that solely logs messages and stores them in a database somewhere. Then, for that use case, The **Gateway** Plan will best suite you.

:::note
It is possible to run slash commands through gateways but it isn't recommended
:::

Now lets say you're making a utility bot that doesn't need live analytics like message data and reaction events, the **REST** plan is the best option for your use case.

But what if both of these apply to my bot? I'm glad you asked, then you may want to consider the **GR** plan, since it provides the functionality of _both_ options.
