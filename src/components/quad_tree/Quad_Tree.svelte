<script lang="ts">
    // classes act oddly with respect to their memebers it appears
    class test {
        data = [1, 2, 3];
        append(num: number) {
            this.data = this.data.concat(num);
        }

        add(inc: number) {
            this.data = this.data.map((val: number) => {
                return val + inc;
            });
        }
    }
    let arg = new test();
    arg.append(1);
    arg.add(1);
    let count = 0;
    function add1() {
        arg.add(1);
    }
    function append1() {
        arg.append(1);
    }
    let arr: number[] = [];

    let left_segment = 1;
    let right_segment = 1;
</script>

<!-- this might not be a real quad tree, but it's at least something interesting -->
<div class="top">
    Quad
    <div class="black">Black Box</div>
    <div class="white">
        White Box

        <button
            on:click={() => {
                arr = arr.concat(1);
            }}>App</button
        >
        <button
            on:click={() => {
                arr = arr.map((val) => val + 1);
            }}>Inc</button
        >
        {arr}

        <button on:click={() => count++}>{count}</button>
    </div>
    More Content Even more even more
    <div class="split">
        <div class="white" style="flex:{left_segment}">
            a
            <button on:click={()=>left_segment++}>
                Left
            </button>
        </div>
        <div class="black"
        style="flex:{right_segment};">
            b
            <button on:click={()=>right_segment++}>
                Right
            </button>
        </div>
    </div>
</div>

<style>
    div {
        background-color: gray;
    }
    .split{
        display: flex;
        flex-direction: row;
        width:500px;
    }
    .black {
        background-color: black;
        color: white;
        width:100%;
    }
    .white {
        background-color: beige; 
        width:100%;
    }
</style>
