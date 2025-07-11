
// eslint-disable-next-line @typescript-eslint/no-explicit-any
console.log('xxx LazyComp is in microapp: ', (window as any).__MICRO_APP_ENVIRONMENT__)

// if lazy comp chunk is loaded after micro-app is unmounted, 
// this will assign to the host's window.onclick
window.onclick = (e) => {
  console.log('xxx LazyComp onclick: ', e)
}

function LazyComp() {
  return <div style={{ color: "red", fontSize: "20px", fontWeight: "500" }}>I'm a LazyComp!</div>;
}

export default LazyComp;