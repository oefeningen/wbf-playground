<template>
  <div>
    <div w-200 h-20 bg-pink>
      <slot name="header"></slot>
    </div>
    <div w-200 h-20 bg-yellow>
      <slot name="content"></slot>
    </div>
    <div w-200 h-20 bg-green>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped></style>
