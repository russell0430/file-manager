## question

在使用`transition`时,对`width`好用而`height`无效

```css
.audio {
  width: 67%;
  margin: 0 auto;
  .audio-card {
    // overflow: hidden;
  }
  .audio-list {
    transition: all ease-in 3s;
    max-height;
    &.hidden {
      // not work
      height: 0;

      // work
      width:0;
    }
  }
}
```

应该是由于此处的`height`值不固定,是由内部内容撑开的,`width`有明确的标记(67%),所以可以生效.

## solution

## z-index 不生效

可能是由于设置`z-index`的元素未设置`position`导致的
