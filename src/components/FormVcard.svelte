<script>
  import { qrData } from "@/lib/stores";
  import { VCARD_TYPES } from "@/lib/constants";

  import Input from "@/components/Input.svelte";
</script>

<form class="w-full flex flex-col gap-2">
  {#each VCARD_TYPES as type}
    <Input bind:data={$qrData[type]} placeholder={type} />
  {/each}
</form>
