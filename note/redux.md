### Redux
安装:
```cmd
npm install --save redux
npm install --save react-redux
```
#### Action
** State 是只读的 **
唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。
一般通过`store.dispatch()` 将 action 传到 store。

### Reducer
Reducers 指定了应用状态的变化如何响应 actions 并发送到 store 的，记住 actions 只是描述了有事情发生了这一事实，并没有描述应用如何更新 state。
