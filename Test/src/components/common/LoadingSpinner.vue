<template>
  <p>
    <span class="lds-dual-ring"></span>
    Loading... Please wait...
  </p>
</template>

<style scoped>
p {
  font-weight: 700;
}
.lds-dual-ring,
.lds-dual-ring:after {
  box-sizing: border-box;
}
.lds-dual-ring {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 12px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 20px;
  height: 20px;
  margin: 6px;
  border-radius: 50%;
  border: 2px solid var(--primary);
  border-color: var(--primary) transparent var(--primary) transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
