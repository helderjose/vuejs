<template>
  <keep-alive>
    <component :is="selectedComponent">
      <p>Default Content</p>
    </component>
  </keep-alive>
</template>
