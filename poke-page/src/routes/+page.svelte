<!--localhost:5173/coopercodes3@gmail.com-->
<script import lang = "ts">
    import {page} from "$page/stores";
    $: email = $page.params.email;

</script>

<div class="hero min-h-screen bg-base-300">
    <div class = "hero-content">
        <div class = "max-w-md text-center">
            <h1 class = "text-white font-bold text-4xl">{email}</h1>
           
        </div>
    </div>
</div>