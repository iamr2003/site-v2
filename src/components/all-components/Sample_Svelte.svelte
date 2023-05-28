<script>
    let val = 0;
    const inc = () => (val += 1);
    const dec = () => (val -= 1);
</script>

<div>
    Hi, I'm a svelte component:
    <button on:click={dec}>-</button>
    {val}
    <button on:click={inc}>+</button>
    My code is:
    <img src="./sample_svelte.png" />
</div>
