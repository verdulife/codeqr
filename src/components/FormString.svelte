<script>
  import { qrData, qrType } from "@/lib/stores";
  import { TYPES } from "@/lib/constants";

  import Input from "./Input.svelte";
</script>

<form class="w-full flex flex-col">
  <Input bind:data={$qrData} placeholder={$qrType}></Input>
</form>
